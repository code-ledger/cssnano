import valueParser, { unit, walk } from 'postcss-value-parser';
import convert from './lib/convert';

const LENGTH_UNITS = new Set([
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  'cm',
  'mm',
  'q',
  'in',
  'pt',
  'pc',
  'px',
]);

// These properties only accept percentages, so no point in trying to transform
const notALength = new Set([
  'descent-override',
  'ascent-override',
  'font-stretch',
  'size-adjust',
  'line-gap-override',
]);

// Can't change the unit on these properties when they're 0
const keepWhenZero = new Set([
  'stroke-dashoffset',
  'stroke-width',
  'line-height',
]);

/**
 * Numbers without digits after the dot are technically invalid,
 * but in that case css-value-parser returns the dot as part of the unit,
 * so we use this to remove the dot.
 *
 * @param {string} item
 */
function stripLeadingDot(item) {
  if (item.charCodeAt(0) === '.'.charCodeAt(0)) {
    return item.slice(1);
  } else {
    return item;
  }
}
/**
 * @param {valueParser.Node} node
 * @param {PostcssConvertValueOptions} opts
 * @param {boolean} keepZeroUnit
 */
function parseWord(node, opts, keepZeroUnit) {
  const pair = unit(node.value);
  if (pair) {
    const num = Number(pair.number);
    const u = stripLeadingDot(pair.unit);
    if (num === 0) {
      node.value =
        0 +
        (keepZeroUnit || (!LENGTH_UNITS.has(u.toLowerCase()) && u !== '%')
          ? u
          : '');
    } else {
      node.value = convert(num, u, opts);

      if (
        typeof opts.precision === 'number' &&
        u.toLowerCase() === 'px' &&
        pair.number.includes('.')
      ) {
        const precision = Math.pow(10, opts.precision);
        node.value =
          Math.round(parseFloat(node.value) * precision) / precision + u;
      }
    }
  }
}
/** @param {valueParser.WordNode} node */
function clampOpacity(node) {
  const pair = unit(node.value);
  if (!pair) {
    return;
  }
  let num = Number(pair.number);
  if (num > 1) {
    node.value = pair.unit === '%' ? num + pair.unit : 1 + pair.unit;
  } else if (num < 0) {
    node.value = 0 + pair.unit;
  }
}
/** @param {import('postcss').Declaration} decl */
function shouldKeepZeroUnit(decl) {
  const { parent } = decl;
  const lowerCasedProp = decl.prop.toLowerCase();
  return (
    (decl.value.includes('%') &&
      (lowerCasedProp === 'max-height' || lowerCasedProp === 'height')) ||
    (parent &&
      parent.parent &&
      parent.parent.type === 'atrule' &&
      /** @type {import('postcss').AtRule} */ (
        parent.parent
      ).name.toLowerCase() === 'keyframes' &&
      lowerCasedProp === 'stroke-dasharray') ||
    keepWhenZero.has(lowerCasedProp)
  );
}

/**
 * @param {PostcssConvertValueOptions} opts
 * @param {import('postcss').Declaration} decl
 */
function transform(opts, decl) {
  const lowerCasedProp = decl.prop.toLowerCase();
  if (
    lowerCasedProp.includes('flex') ||
    lowerCasedProp.indexOf('--') === 0 ||
    notALength.has(lowerCasedProp)
  ) {
    return;
  }

  decl.value = valueParser(decl.value)
    .walk((node) => {
      const lowerCasedValue = node.value.toLowerCase();

      if (node.type === 'word') {
        parseWord(node, opts, shouldKeepZeroUnit(decl));
        if (
          lowerCasedProp === 'opacity' ||
          lowerCasedProp === 'shape-image-threshold'
        ) {
          clampOpacity(node);
        }
      } else if (node.type === 'function') {
        if (
          lowerCasedValue === 'calc' ||
          lowerCasedValue === 'min' ||
          lowerCasedValue === 'max' ||
          lowerCasedValue === 'clamp' ||
          lowerCasedValue === 'hsl' ||
          lowerCasedValue === 'hsla'
        ) {
          walk(node.nodes, (n) => {
            if (n.type === 'word') {
              parseWord(n, opts, true);
            }
          });
          return false;
        }
        if (lowerCasedValue === 'url') {
          return false;
        }
      }
    })
    .toString();
}

const plugin = 'postcss-convert-values';
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean}} PostcssConvertValueOptions */
/** @type {import('postcss').PluginCreator<PostcssConvertValueOptions>} opts */
function pluginCreator(opts = { precision: false }) {
  return {
    postcssPlugin: plugin,
    /** @param {import('postcss').Root} css */
    OnceExit(css) {
      css.walkDecls(transform.bind(null, opts));
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
