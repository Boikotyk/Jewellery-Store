this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["rating-filter"]=function(e){function t(t){for(var o,a,l=t[0],s=t[1],i=t[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={53:0,1:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;return r.push([563,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0);function c(e,t){const n=Object(o.useRef)();return Object(o.useEffect)((()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},11:function(e,t){e.exports=window.wp.compose},113:function(e,t){e.exports=window.wp.warning},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=e=>"string"==typeof e},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const c=Object(o.createContext)({}),r=()=>{const{wrapper:e}=Object(o.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(8),c=n(6),r=n(0),a=n(47);const l=e=>{const{namespace:t,resourceName:n,resourceValues:l=[],query:s={},shouldSelect:i=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(r.useRef)({results:[],isLoading:!0}),b=Object(a.a)(s),d=Object(a.a)(l),p=(()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)((t=>{e((()=>{throw t}))}),[])})(),g=Object(c.useSelect)((e=>{if(!i)return null;const c=e(o.COLLECTIONS_STORE_KEY),r=[t,n,b,d],a=c.getCollectionError(...r);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(a)}return{results:c.getCollection(...r),isLoading:!c.hasFinishedResolution("getCollection",r)}}),[t,n,d,b,i]);return null!==g&&(u.current=g),u.current}},13:function(e,t){e.exports=window.wc.blocksCheckout},145:function(e,t,n){"use strict";var o=n(0),c=n(1),r=n(5),a=n.n(r),l=n(30);n(198),t.a=({className:e,
/* translators: Reset button text for filters. */
label:t=Object(c.__)("Reset","woocommerce"),onClick:n,screenReaderLabel:r=Object(c.__)("Reset filter","woocommerce")})=>Object(o.createElement)("button",{className:a()("wc-block-components-filter-reset-button",e),onClick:n},Object(o.createElement)(l.a,{label:t,screenReaderLabel:r}))},146:function(e,t,n){"use strict";var o=n(0),c=n(1),r=n(5),a=n.n(r),l=n(30);n(199),t.a=({className:e,isLoading:t,disabled:n,
/* translators: Submit button text for filters. */
label:r=Object(c.__)("Apply","woocommerce"),onClick:s,screenReaderLabel:i=Object(c.__)("Apply filter","woocommerce")})=>Object(o.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:n,onClick:s},Object(o.createElement)(l.a,{label:r,screenReaderLabel:i}))},15:function(e,t){e.exports=window.wp.url},174:function(e,t,n){"use strict";var o=n(0),c=n(361),r=n(5),a=n.n(r);n(232),t.a=({className:e,style:t,suggestions:n,multiple:r=!0,saveTransform:l=(e=>e.trim().replace(/\s/g,"-")),messages:s={},validateInput:i=(e=>n.includes(e)),label:u="",...b})=>Object(o.createElement)("div",{className:a()("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!r}),style:t},Object(o.createElement)(c.a,{label:u,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:i,saveTransform:l,maxLength:r?void 0:1,suggestions:n,messages:s,...b}))},175:function(e,t,n){"use strict";var o=n(0),c=n(1),r=n(5),a=n.n(r),l=n(13);n(233),t.a=({className:e,onChange:t,options:n=[],checked:r=[],isLoading:s=!1,isDisabled:i=!1,limit:u=10})=>{const[b,d]=Object(o.useState)(!1),p=Object(o.useMemo)((()=>[...Array(5)].map(((e,t)=>Object(o.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})))),[]),g=Object(o.useMemo)((()=>{const e=n.length-u;return!b&&Object(o.createElement)("li",{key:"show-more",className:"show-more"},Object(o.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woocommerce"),e)},Object(c.sprintf)(/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woocommerce"),e)))}),[n,u,b]),f=Object(o.useMemo)((()=>b&&Object(o.createElement)("li",{key:"show-less",className:"show-less"},Object(o.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woocommerce")},Object(c.__)("Show less","woocommerce")))),[b]),O=Object(o.useMemo)((()=>{const e=n.length>u+5;return Object(o.createElement)(o.Fragment,null,n.map(((n,c)=>Object(o.createElement)(o.Fragment,{key:n.value},Object(o.createElement)("li",{...e&&!b&&c>=u&&{hidden:!0}},Object(o.createElement)(l.CheckboxControl,{id:n.value,className:"wc-block-checkbox-list__checkbox",label:n.label,checked:r.includes(n.value),onChange:()=>{t(n.value)},disabled:i})),e&&c===u-1&&g))),e&&f)}),[n,t,r,b,u,f,g,i]),j=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":s},e);return Object(o.createElement)("ul",{className:j},s?p:O)}},186:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},198:function(e,t){},199:function(e,t){},2:function(e,t){e.exports=window.wp.components},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n(42);const c=e=>!Object(o.a)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}const a=e=>0===Object.keys(e).length},232:function(e,t){},233:function(e,t){},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.React},267:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b}));var o=n(15),c=n(3),r=n(82);const a=Object(c.getSettingWithCoercion)("isRenderingPhpTemplate",!1,r.a),l="query_type_",s="filter_";function i(e){return window?Object(o.getQueryArg)(window.location.href,e):null}function u(e){a?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const b=e=>{const t=Object(o.getQueryArgs)(e);return Object(o.addQueryArgs)(e,t)}},27:function(e,t){e.exports=window.lodash},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t,n){"use strict";var o=n(0),c=n(5),r=n.n(c);t.a=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:c={}})=>{let a;const l=null!=e,s=null!=t;return!l&&s?(a=n||"span",c={...c,className:r()(c.className,"screen-reader-text")},Object(o.createElement)(a,{...c},t)):(a=n||o.Fragment,l&&s&&e!==t?Object(o.createElement)(a,{...c},Object(o.createElement)("span",{"aria-hidden":"true"},e),Object(o.createElement)("span",{className:"screen-reader-text"},t)):Object(o.createElement)(a,{...c},e))}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(0),c=n(41),r=n(21),a=n(110),l=n(47),s=n(61),i=n(126),u=n(50);const b=({queryAttribute:e,queryPrices:t,queryStock:n,queryRating:b,queryState:d,isEditor:p=!1})=>{let g=Object(u.a)();g=`${g}-collection-data`;const[f]=Object(s.a)(g),[O,j]=Object(s.b)("calculate_attribute_counts",[],g),[m,w]=Object(s.b)("calculate_price_range",null,g),[_,h]=Object(s.b)("calculate_stock_status_counts",null,g),[y,k]=Object(s.b)("calculate_rating_counts",null,g),v=Object(l.a)(e||{}),E=Object(l.a)(t),C=Object(l.a)(n),x=Object(l.a)(b);Object(o.useEffect)((()=>{"object"==typeof v&&Object.keys(v).length&&(O.find((e=>Object(r.c)(v,"taxonomy")&&e.taxonomy===v.taxonomy))||j([...O,v]))}),[v,O,j]),Object(o.useEffect)((()=>{m!==E&&void 0!==E&&w(E)}),[E,w,m]),Object(o.useEffect)((()=>{_!==C&&void 0!==C&&h(C)}),[C,h,_]),Object(o.useEffect)((()=>{y!==x&&void 0!==x&&k(x)}),[x,k,y]);const[S,N]=Object(o.useState)(p),[T]=Object(c.a)(S,200);S||N(!0);const R=Object(o.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(a.a)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(f)),[f]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...R},shouldSelect:T})}},38:function(e,t){e.exports=window.wp.deprecated},4:function(e,t){e.exports=window.wp.blockEditor},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=e=>null===e},46:function(e,t){e.exports=window.wp.a11y},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),c=n(25),r=n.n(c);function a(e){const t=Object(o.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);const c=Object(o.createContext)("page"),r=()=>Object(o.useContext)(c);c.Provider},563:function(e,t,n){e.exports=n(589)},564:function(e,t){},565:function(e,t){},566:function(e,t){},58:function(e,t){e.exports=window.wp.keycodes},589:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(7),r=n(68),a=n(635),l=n(5),s=n.n(l),i=n(4),u=n(1),b=n(2),d=n(46),p=n(648);n(566);var g=({className:e,rating:t,ratedProductsCount:n})=>{const c=s()("wc-block-components-product-rating",e),r={width:t/5*100+"%"},a=Object(u.sprintf)(/* translators: %f is referring to the average rating value */
Object(u.__)("Rated %f out of 5","woocommerce"),t),l={__html:Object(u.sprintf)(/* translators: %s is the rating value wrapped in HTML strong tags. */
Object(u.__)("Rated %s out of 5","woocommerce"),Object(u.sprintf)('<strong class="rating">%f</strong>',t))};return Object(o.createElement)("div",{className:c},Object(o.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":a},Object(o.createElement)("span",{style:r,dangerouslySetInnerHTML:l})),null!==n?Object(o.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",n,")"):null)},f=n(47),O=n(108),j=n(61),m=n(300),w=n(3),_=n(82),h=n(21),y=n(25),k=n.n(y),v=n(175),E=n(146),C=n(145),x=n(174),S=n(15),N=n(267);const T=[{label:Object(o.createElement)(g,{key:5,rating:5,ratedProductsCount:null}),value:"5"},{label:Object(o.createElement)(g,{key:4,rating:4,ratedProductsCount:null}),value:"4"},{label:Object(o.createElement)(g,{key:3,rating:3,ratedProductsCount:null}),value:"3"},{label:Object(o.createElement)(g,{key:2,rating:2,ratedProductsCount:null}),value:"2"},{label:Object(o.createElement)(g,{key:1,rating:1,ratedProductsCount:null}),value:"1"}];n(565);var R=n(119),P=n(186);function A(){return Math.floor(Math.random()*Date.now())}const L=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");var F=n(120);const M="rating_filter",q=e=>Object(u.sprintf)(/* translators: %s is referring to the average rating value */
Object(u.__)("Rated %s out of 5 filter added.","woocommerce"),e),B=e=>Object(u.sprintf)(/* translators: %s is referring to the average rating value */
Object(u.__)("Rated %s out of 5 filter added.","woocommerce"),e);var Q=({attributes:e,isEditor:t,noRatingsNotice:n=null})=>{const c=Object(F.a)(),a=Object(w.getSettingWithCoercion)("isRenderingPhpTemplate",!1,_.a),[l,i]=Object(o.useState)(!1),[b]=Object(j.a)(),{results:y,isLoading:P}=Object(m.a)({queryRating:!0,queryState:b,isEditor:t}),[Q,D]=Object(o.useState)(e.isPreview?T:[]),Y=!e.isPreview&&P&&0===Q.length,I=!e.isPreview&&P,V=Object(o.useMemo)((()=>((e="filter_rating")=>{const t=Object(N.d)(e);return t?Object(R.a)(t)?t.split(","):t:[]})("rating_filter")),[]),[W,G]=Object(o.useState)(V),[K,U]=Object(j.b)("rating",V),[J,$]=Object(o.useState)(A()),[z,H]=Object(o.useState)(!1),Z="single"!==e.selectType,X=Z?!Y&&W.length<Q.length:!Y&&0===W.length,ee=Object(o.useCallback)((e=>{t||(e&&!a&&U(e),(e=>{if(!window)return;if(0===e.length){const e=Object(S.removeQueryArgs)(window.location.href,M);return void(e!==Object(N.e)(window.location.href)&&Object(N.c)(e))}const t=Object(S.addQueryArgs)(window.location.href,{[M]:e.join(",")});t!==Object(N.e)(window.location.href)&&Object(N.c)(t)})(e))}),[t,U,a]);Object(o.useEffect)((()=>{e.showFilterButton||ee(W)}),[e.showFilterButton,W,ee]);const te=Object(o.useMemo)((()=>K),[K]),ne=Object(f.a)(te),oe=Object(O.a)(ne);Object(o.useEffect)((()=>{k()(oe,ne)||k()(W,ne)||G(ne)}),[W,ne,oe]),Object(o.useEffect)((()=>{l||(U(V),i(!0))}),[U,l,i,V]),Object(o.useEffect)((()=>{if(P||e.isPreview)return;const n=!P&&Object(h.c)(y,"rating_counts")&&Array.isArray(y.rating_counts)?[...y.rating_counts].reverse():[];if(t&&0===n.length)return D(T),void H(!0);const c=n.filter((e=>Object(h.b)(e)&&Object.keys(e).length>0)).map((t=>{var n;return{label:Object(o.createElement)(g,{key:null==t?void 0:t.rating,rating:null==t?void 0:t.rating,ratedProductsCount:e.showCounts?null==t?void 0:t.count:null}),value:null==t||null===(n=t.rating)||void 0===n?void 0:n.toString()}}));D(c),$(A())}),[e.showCounts,e.isPreview,y,P,K,t]);const ce=Object(o.useCallback)((e=>{const t=W.includes(e);if(!Z){const n=t?[]:[e];return Object(d.speak)(t?B(e):q(e)),void G(n)}if(t){const t=W.filter((t=>t!==e));return Object(d.speak)(B(e)),void G(t)}const n=[...W,e].sort(((e,t)=>Number(t)-Number(e)));Object(d.speak)(q(e)),G(n)}),[W,Z]);return(P||0!==Q.length)&&Object(w.getSettingWithCoercion)("hasFilterableProducts",!1,_.a)?(c(!0),Object(o.createElement)(o.Fragment,null,z&&n,Object(o.createElement)("div",{className:s()("wc-block-rating-filter",`style-${e.displayStyle}`,{"is-loading":Y})},"dropdown"===e.displayStyle?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(x.a,{key:J,className:s()({"single-selection":!Z,"is-loading":Y}),style:{borderStyle:"none"},suggestions:Q.filter((e=>!W.includes(e.value))).map((e=>e.value)),disabled:Y,placeholder:Object(u.__)("Select Rating","woocommerce"),onChange:e=>{!Z&&e.length>1&&(e=[e[e.length-1]]);const t=[e=e.map((e=>{const t=Q.find((t=>t.value===e));return t?t.value:e})),W].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return ce(t[0]);const n=[W,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===n.length&&ce(n[0])},value:W,displayTransform:e=>{const t={value:e,label:Object(o.createElement)(g,{key:Number(e),rating:Number(e),ratedProductsCount:0})},n=Q.find((t=>t.value===e))||t,{label:c,value:r}=n;return Object.assign({},c,{toLocaleLowerCase:()=>r,substring:(e,t)=>0===e&&1===t?c:""})},saveTransform:L,messages:{added:Object(u.__)("Rating filter added.","woocommerce"),removed:Object(u.__)("Rating filter removed.","woocommerce"),remove:Object(u.__)("Remove rating filter.","woocommerce"),__experimentalInvalid:Object(u.__)("Invalid rating filter.","woocommerce")}}),X&&Object(o.createElement)(r.a,{icon:p.a,size:30})):Object(o.createElement)(v.a,{className:"wc-block-rating-filter-list",options:Q,checked:W,onChange:e=>{ce(e.toString())},isLoading:Y,isDisabled:I})),Object(o.createElement)("div",{className:"wc-block-rating-filter__actions"},(W.length>0||t)&&!Y&&Object(o.createElement)(C.a,{onClick:()=>{G([]),U([]),ee([])},screenReaderLabel:Object(u.__)("Reset rating filter","woocommerce")}),e.showFilterButton&&Object(o.createElement)(E.a,{className:"wc-block-rating-filter__button",isLoading:Y,disabled:Y||I,onClick:()=>ee(W)})))):(c(!1),null)};n(564);const D=Object(o.createElement)(b.Notice,{status:"warning",isDismissible:!1},Object(o.createElement)("p",null,Object(u.__)("Your store doesn't have any products with ratings yet. This filter option will display when a product receives a review.","woocommerce")));var Y=Object(b.withSpokenMessages)((({attributes:e,setAttributes:t})=>{const{className:n,displayStyle:c,showCounts:r,showFilterButton:a,selectType:l}=e,d=Object(i.useBlockProps)({className:s()("wc-block-rating-filter",n)});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.InspectorControls,{key:"inspector"},Object(o.createElement)(b.PanelBody,{title:Object(u.__)("Display Settings","woocommerce")},Object(o.createElement)(b.ToggleControl,{label:Object(u.__)("Display product count","woocommerce"),checked:r,onChange:()=>t({showCounts:!r})}),Object(o.createElement)(b.__experimentalToggleGroupControl,{label:Object(u.__)("Allow selecting multiple options?","woocommerce"),value:l||"multiple",onChange:e=>t({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},Object(o.createElement)(b.__experimentalToggleGroupControlOption,{value:"multiple",label:Object(u.__)("Multiple","woocommerce")}),Object(o.createElement)(b.__experimentalToggleGroupControlOption,{value:"single",label:Object(u.__)("Single","woocommerce")})),Object(o.createElement)(b.__experimentalToggleGroupControl,{label:Object(u.__)("Display Style","woocommerce"),value:c,onChange:e=>t({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},Object(o.createElement)(b.__experimentalToggleGroupControlOption,{value:"list",label:Object(u.__)("List","woocommerce")}),Object(o.createElement)(b.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(u.__)("Dropdown","woocommerce")})),Object(o.createElement)(b.ToggleControl,{label:Object(u.__)("Show 'Apply filters' button","woocommerce"),help:Object(u.__)("Products will update when the button is clicked.","woocommerce"),checked:a,onChange:e=>t({showFilterButton:e})}))),Object(o.createElement)("div",{...d},Object(o.createElement)(b.Disabled,null,Object(o.createElement)(Q,{attributes:e,isEditor:!0,noRatingsNotice:D}))))})),I=[{attributes:{...P.attributes,showCounts:{type:"boolean",default:!0}},save:({attributes:e})=>{const{className:t,showCounts:n}=e,c={"data-show-counts":n};return Object(o.createElement)("div",{...i.useBlockProps.save({className:s()("is-loading",t)}),...c},Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-rating-filter__placeholder"}))}}];Object(c.registerBlockType)(P,{icon:{src:Object(o.createElement)(r.a,{icon:a.a,className:"wc-block-editor-components-block-icon"})},attributes:{...P.attributes},edit:Y,save({attributes:e}){const{className:t}=e;return Object(o.createElement)("div",{...i.useBlockProps.save({className:s()("is-loading",t)})})},deprecated:I})},6:function(e,t){e.exports=window.wp.data},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var o=n(8),c=n(6),r=n(0),a=n(25),l=n.n(a),s=n(47),i=n(108),u=n(50);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)((t=>t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:a}=Object(c.useDispatch)(o.QUERY_STATE_STORE_KEY);return[n,Object(r.useCallback)((t=>{a(e,t)}),[e,a])]},d=(e,t,n)=>{const a=Object(u.a)();n=n||a;const l=Object(c.useSelect)((c=>c(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)),[n,e]),{setQueryValue:s}=Object(c.useDispatch)(o.QUERY_STATE_STORE_KEY);return[l,Object(r.useCallback)((t=>{s(n,e,t)}),[n,e,s])]},p=(e,t)=>{const n=Object(u.a)();t=t||n;const[o,c]=b(t),a=Object(s.a)(o),d=Object(s.a)(e),p=Object(i.a)(d),g=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{l()(p,d)||(c(Object.assign({},a,d)),g.current=!0)}),[a,d,p,c]),g.current?[o,c]:[e,c]}},7:function(e,t){e.exports=window.wp.blocks},8:function(e,t){e.exports=window.wc.wcBlocksData},80:function(e,t){e.exports=window.wp.dom},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=e=>"boolean"==typeof e},9:function(e,t){e.exports=window.wp.primitives}});