"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4195],{43542:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(99518),a=n(59496),o=n(51626),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(13973).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=c({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=c({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?c({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=r[l]++)<a[l];){var c=void 0,d=t[l],y=n[l][o];if("string"==typeof y?(d=l>0?d:["plain"],c=y):(d=m(d,y.type),y.alias&&(d=m(d,y.alias)),c=y.content),"string"==typeof c){var f=c.split(u),h=f.length;s.push({types:d,content:f[0]});for(var g=1;g<h;g++)p(s),i.push(s=[]),s.push({types:d,content:f[g]})}else l++,t.push(d),n.push(c),r.push(0),a.push(c.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return p(s),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),h=f;var g=n(94451),v=n(51866),b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(62443),k=function(){var e=(0,v.LU)().prism,t=(0,E.Z)().isDarkTheme,n=e.theme||b,r=e.darkTheme||n;return t?r:n},N="codeBlockContainer_vyZf",S="codeBlockContent_8RFN",w="codeBlockTitle_bDNs",C="codeBlock_Afbc",Z="copyButton_74Ur",_="codeBlockLines_jCgQ";function T(e){var t,n=e.children,l=e.className,i=e.metastring,c=e.title,u=(0,v.LU)().prism,p=(0,a.useState)(!1),m=p[0],d=p[1],y=(0,a.useState)(!1),f=y[0],b=y[1];(0,a.useEffect)((function(){b(!0)}),[]);var E=(0,v.bc)(i)||c,T=k(),x=Array.isArray(n)?n.join(""):n,B=null!=(t=(0,v.Vo)(l))?t:u.defaultLanguage,O=(0,v.nZ)(x,i,B),P=O.highlightLines,D=O.code,I=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(c){}a.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(h,(0,r.Z)({},s,{key:String(f),theme:T,code:D,language:B}),(function(e){var t=e.className,n=e.style,s=e.tokens,i=e.getLineProps,c=e.getTokenProps;return a.createElement("div",{className:(0,o.Z)(N,l,v.kM.common.codeBlock)},E&&a.createElement("div",{style:n,className:w},E),a.createElement("div",{className:(0,o.Z)(S,B)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,C,"thin-scrollbar"),style:n},a.createElement("code",{className:_},s.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return P.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(Z,"clean-btn"),onClick:I},m?a.createElement(g.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(g.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},79586:function(e,t,n){var r=n(58883),a=n(59496),o="carbon_ads_wrapper",l=function(e){function t(t){return e.call(this,t)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.querySelector("."+o),t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",t.async=true,t.id="_carbonads_js",e.appendChild(t)},n.render=function(){return a.createElement("div",{className:o+" "+(this.props.customClass||"")})},t}(a.Component);t.Z=l},37310:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(99518),a=n(59496),o=n(91406),l=n(43542);var s=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},i=n(6759),c=n(48427);var u=function(){var e=(0,a.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(51866),m=n(51626),d="tabItem_ECOG";function y(e){var t,n,o,l=e.lazy,s=e.block,i=e.defaultValue,c=e.values,y=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,p.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===i?i:null!=(t=null!=i?i:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=u(),k=E.tabGroupChoices,N=E.setTabGroupChoices,S=(0,a.useState)(b),w=S[0],C=S[1],Z=[],_=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var T=k[y];null!=T&&T!==w&&g.some((function(e){return e.value===T}))&&C(T)}var x=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=g[n].value;r!==w&&(_(t),C(r),null!=y&&N(y,r))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=Z.indexOf(e.currentTarget)+1;n=Z[r]||Z[0];break;case"ArrowLeft":var a=Z.indexOf(e.currentTarget)-1;n=Z[a]||Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":s},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:B,onFocus:x,onClick:x},o,{className:(0,m.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,i.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}var h=n(89093),g=n(97772),v=n(79586),b=n(7375),E=[{title:"PostCSS Based",imageUrl:"img/postcss.svg",description:a.createElement(a.Fragment,null,"CSSNANO is built upon postcss plugins and environments")},{title:"30+ Plugins",imageUrl:"img/undraw_settings.svg",description:a.createElement(a.Fragment,null,"CSSNANO has more than 30 plugins for optimizing your css")},{title:"Configurable",imageUrl:"img/undraw_config.svg",description:a.createElement(a.Fragment,null,"CSSNANO supports custom configs using presets which controls the level of optimization")}],k=[{property:"Original (gzip)",value:"325 B"},{property:"Minified (gzip)",value:"177 B"},{property:"Difference",value:"148 B"},{property:"Percent",value:"54.46%"}];function N(e){var t=e.imageUrl,n=e.title,r=e.description,o=(0,g.Z)(t);return a.createElement("div",{className:"col col--4 "+b.Z.feature},o&&a.createElement("div",{className:"text--center"},a.createElement("img",{src:o,alt:n,width:"200",height:"200"})),a.createElement("h2",null,n),a.createElement("p",null,r))}var S=function(){return a.createElement(o.Z,{title:"CSSNANO",description:"CSSNANO - postcss based css optimizer"},a.createElement("header",{className:"hero "+b.Z.heroBanner},a.createElement(v.Z,null),a.createElement("div",{className:"container"},a.createElement("img",{className:b.Z.logoImg,src:(0,g.Z)("img/logo.svg"),width:"400",height:"280",alt:"CSSNano"}),a.createElement("p",{className:"hero__subtitle"},"Deliver your website's styles, faster."),a.createElement("p",null,"Plug in cssnano into your build step for modern CSS compression."),a.createElement("div",{className:b.Z.buttons},a.createElement(h.Z,{className:"button button--lg "+b.Z.getStartedBtn,to:(0,g.Z)("docs/introduction")},"Get Started")))),a.createElement("main",{className:"container"},a.createElement("section",null,a.createElement("div",{className:"row"},a.createElement("h1",{className:b.Z.h1},"What it does ?"),a.createElement("p",null,"cssnano takes your nicely formatted CSS and runs it through many focused optimisations, to ensure that the final result is as small as possible for a production environment.")),a.createElement("div",{className:"row"},a.createElement("div",{className:b.Z.centerSnippet},a.createElement(f,{className:"mini",defaultValue:"Input",values:[{label:a.createElement(a.Fragment,null,"Input"),value:"Input"},{label:a.createElement(a.Fragment,null,"Output"),value:"Output"}]},a.createElement(s,{value:"Input"},a.createElement(l.Z,{className:"language-css"},'/* normalize selectors */\nh1::before, h1:before {\n    /* reduce shorthand even further */\n    margin: 10px 20px 10px 20px;\n    /* reduce color values */\n    color: #ff0000;\n    /* remove duplicated properties */\n    font-weight: 400;\n    font-weight: 400;\n    /* reduce position values */\n    background-position: bottom right;\n    /* normalize wrapping quotes */\n    quotes: \'\xab\' "\xbb";\n    /* reduce gradient parameters */\n    background: linear-gradient(to bottom, #ffe500 0%, #ffe500 50%, #121 50%, #121 100%);\n    /* replace initial values */\n    min-width: initial;\n}\n/* correct invalid placement */\n@charset "utf-8";')),a.createElement(s,{value:"Output"},a.createElement(l.Z,{className:"language-css"},'@charset "utf-8";h1:before{margin:10px 20px;color:red;font-weight:400;background-position:100% 100%;quotes:"\xab" "\xbb";background:linear-gradient(180deg,#ffe500,#ffe500 50%,#121 0,#121);min-width:0}'))))),a.createElement("div",{className:"row"},a.createElement("p",null,"The semantics of this CSS have been kept the same, but the extraneous whitespace has been removed, the identifiers compressed, and unnecessary definitions purged from the stylesheet.",a.createElement("br",null)),a.createElement("p",null,"This gives you a much smaller CSS for production use. But don\u2019t just take our word for it; why not try out css-size, a module especially created to measure CSS size before & after minification."),a.createElement("p",null,"By default, cssnano performs safe optimisations on your CSS file, but we also offer an advanced preset with techniques that you can use to maximise compression. For more details, see our"," ",a.createElement(h.Z,{to:(0,g.Z)("docs/optimisations")},"optimisations")," ","guide."),a.createElement("table",{style:{margin:"auto"}},a.createElement("tbody",null,k.map((function(e,t){var n=e.property,r=e.value;return a.createElement("tr",{key:t,style:{width:"100%",maxWidth:"100%"}},a.createElement("td",null,n),a.createElement("td",null,r))})))))),E&&E.length&&a.createElement("section",null,a.createElement("div",{className:"row"},a.createElement("h1",{className:b.Z.h1},"Features"),E.map((function(e,t){return a.createElement(N,(0,r.Z)({key:t},e))})))),a.createElement("section",null,a.createElement("div",{className:"row"},a.createElement("h1",{className:b.Z.h1},"Technology"),a.createElement("p",{className:b.Z.flex1},"cssnano is powered by PostCSS, a tool for transforming styles with JavaScript. Specifically, its plugin architecture allows us to compose cssnano out of small modules with limited responsibilities. It also allows you to easily insert cssnano into your build step, along with other processors that can lint your CSS for errors, or transpile future syntax."),a.createElement("img",{src:(0,g.Z)("img/postcss.svg"),alt:""})))))}},7375:function(e,t){t.Z={heroBanner:"heroBanner_4JBe",getStartedBtn:"getStartedBtn_Ra7n",playgroundInnerNav:"playgroundInnerNav_ZI0K",headbtn:"headbtn_ketk",editorCol:"editorCol_DjAT",buttons:"buttons_TK4-",h1:"h1_KVy9",h2:"h2_ne3m",flex1:"flex1_+IBN",centerSnippet:"centerSnippet_yp3B",carbon_ads_custom:"carbon_ads_custom_ykqY",panelLoaderPlaceholder:"panelLoaderPlaceholder_mti6",panelLoaderHolder:"panelLoaderHolder_ngaZ",inputError:"inputError_xQPr"}}}]);