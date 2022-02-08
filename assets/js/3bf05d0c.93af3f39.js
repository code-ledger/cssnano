"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4494],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3880:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},ExampleChart:function(){return d},default:function(){return g}});var r=t(89445),a=t(40909),i=t(59496),o=t(49613),s=["components"],l={id:"config-file",title:"Configuration",layout:"Guide",order:3},p=void 0,c={unversionedId:"config-file",id:"config-file",title:"Configuration",description:"export const ExampleChart = () => {",source:"@site/docs/config-file.mdx",sourceDirName:".",slug:"/config-file",permalink:"/docs/config-file",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/config-file.mdx",tags:[],version:"current",lastUpdatedBy:"Ludovico Fischer",lastUpdatedAt:1640377418,formattedLastUpdatedAt:"12/24/2021",frontMatter:{id:"config-file",title:"Configuration",layout:"Guide",order:3},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Optimisations",permalink:"/docs/what-are-optimisations"}},u=[{value:"Configuration files",id:"configuration-files",children:[{value:"Configure through the PostCSS configuration",id:"configure-through-the-postcss-configuration",children:[],level:3},{value:"Configure through a dedicated cssnano configuration",id:"configure-through-a-dedicated-cssnano-configuration",children:[],level:3}],level:2},{value:"Configuration options",id:"configuration-options",children:[{value:"Choose a preset",id:"choose-a-preset",children:[],level:3},{value:"Disable a plugin included in a preset",id:"disable-a-plugin-included-in-a-preset",children:[],level:3},{value:"Use individual plugins",id:"use-individual-plugins",children:[],level:3}],level:2}],d=function(){return(0,i.useEffect)((function(){var e=document.querySelector(".carbon_ads_mdx_wrapper"),n=document.createElement("script");n.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",n.async=!0,n.id="_carbonads_js",e.appendChild(n)})),(0,o.kt)("div",{className:"carbon_ads_mdx_wrapper"})},f={toc:u,ExampleChart:d};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"ExampleChart"}),(0,o.kt)("p",null,"You can configure cssnano either in the PostCSS configuration or in a dedicated cssnano configuration. The PostCSS configuration takes precedence over the dedicated cssnano configuration.\nWithout configuration, cssnano runs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," preset."),(0,o.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,o.kt)("h3",{id:"configure-through-the-postcss-configuration"},"Configure through the PostCSS configuration"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss#usage"},"PostCSS configuration"),", you can pass both the ",(0,o.kt)("inlineCode",{parentName:"p"},"preset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," options when you add ",(0,o.kt)("inlineCode",{parentName:"p"},"cssnano")," to the PostCSS plugins. For example, if you use PostCSS programmatically, the following uses cssnano with the ",(0,o.kt)("inlineCode",{parentName:"p"},"lite")," preset and adds the autoprefixer plugin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import postcss from 'postcss';\nimport cssnano from 'cssnano';\nimport litePreset from 'cssnano-preset-lite';\nimport autoprefixer from 'autoprefixer';\nconst preset = litePreset({ discardComments: false });\n\npostcss([cssnano({ preset, plugins: [autoprefixer] })]).process(\"/* Your CSS here */\")\n")),(0,o.kt)("h3",{id:"configure-through-a-dedicated-cssnano-configuration"},"Configure through a dedicated cssnano configuration"),(0,o.kt)("p",null,"You can configure cssnano with a dedicated configuration, for example if you cannot access the PostCSS configuration file. The cssnano configuration can be in different formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"cssnano")," option in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ul"},"a JSON file named ",(0,o.kt)("inlineCode",{parentName:"li"},".cssnanorc.config.json")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".cssnanorc")),(0,o.kt)("li",{parentName:"ul"},"a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"cssnano.config.js")," that exports the configuration as a JavaScript object")),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("h3",{id:"choose-a-preset"},"Choose a preset"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"option:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"preset")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"[string, Objects<preset options here>]")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"[function(preset options here)]"))),(0,o.kt)("p",null,"Pass a preset to choose a pre-configured set of optimizations. You can specify a preset with the preset name as a string or by passing the result of importing the preset package."),(0,o.kt)("p",null,"With the preset as import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cssnano({ preset: require('cssnano-preset-default') })\n")),(0,o.kt)("p",null,"Using a string is useful if you use a configuration file in the JSON format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cssnano({ preset: 'cssnano-preset-default' })\n")),(0,o.kt)("p",null,"When you use a string, if the preset is called ",(0,o.kt)("inlineCode",{parentName:"p"},"cssnano-preset-<name>"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," alone:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cssnano({ preset: 'default' })\n")),(0,o.kt)("h3",{id:"disable-a-plugin-included-in-a-preset"},"Disable a plugin included in a preset"),(0,o.kt)("p",null,"You can disable one or more of the plugins used in a preset.\nPass an array where the first element is the preset and the second is an object with the preset options. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// cssnano.config.js\nmodule.exports = {\n  preset: [ require('cssnano-preset-default'), { discardComments: false } ]\n};\n")),(0,o.kt)("p",null,"You can also pass preset options when you use the preset name as a string:\nFor example, here's how to deactivate the ",(0,o.kt)("inlineCode",{parentName:"p"},"discardComments")," plugin when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"advanced")," preset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cssnano({ preset: ['cssnano-preset-advanced', { discardComments: false }] })\n")),(0,o.kt)("h3",{id:"use-individual-plugins"},"Use individual plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"option:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Array<'string' | 'function' | ['string' | 'function', Object<Options for the plugin here>]>"))),(0,o.kt)("p",null,"You can also pass a list of plugins to cssnano.\nTo configure the individual plugins, use an array of arrays:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"cssnano({ plugins: [['autoprefixer', {}]] })\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// cssnano.config.js\nmodule.exports = {\n  plugins: [require('autoprefixer')]\n  \n  // or\n  plugins: ['autoprefixer', 'postcss-preset-env']\n  \n  // or\n  plugins: [ \n    ['autoprefixer', { remove: false }],\n  ]\n\n  // or\n  plugins: [\n    [ require('autoprefixer'), {remove: false} ],\n    [ 'postcss-preset-env']\n  ]\n}\n")))))}g.isMDXComponent=!0}}]);