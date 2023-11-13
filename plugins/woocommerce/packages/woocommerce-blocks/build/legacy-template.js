this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["legacy-template"]=function(e){function t(t){for(var c,l,a=t[0],i=t[1],s=t[2],m=0,d=[];m<a.length;m++)l=a[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);d.length;)d.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var c={},r={18:0,3:0},n=[];function l(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=c,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(o,c,function(t){return e[t]}.bind(null,c));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return n.push([518,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},123:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(1),l=o(360),a=o(78);const i="core/post-template",s="woocommerce/product-query/product-template";Object(a.a)(i,{blockDescription:Object(n.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woocommerce"),blockIcon:Object(c.createElement)(r.Icon,{icon:l.a}),blockTitle:Object(n.__)("Product template","woocommerce"),variationName:s,scope:["block","inserter"]})},17:function(e,t,o){"use strict";o.d(t,"p",(function(){return n})),o.d(t,"n",(function(){return l})),o.d(t,"m",(function(){return a})),o.d(t,"o",(function(){return i})),o.d(t,"k",(function(){return s})),o.d(t,"e",(function(){return u})),o.d(t,"h",(function(){return m})),o.d(t,"l",(function(){return d})),o.d(t,"c",(function(){return b})),o.d(t,"d",(function(){return p})),o.d(t,"g",(function(){return g})),o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return w})),o.d(t,"i",(function(){return j})),o.d(t,"j",(function(){return _})),o.d(t,"f",(function(){return h}));var c,r=o(3);const n=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=n.pluginUrl+"images/",a=n.pluginUrl+"build/",i=n.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,m=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),d=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),b=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),p=r.STORE_PAGES.cart.permalink,g=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("localPickupEnabled",!1)),k=Object(r.getSetting)("countries",{}),O=Object(r.getSetting)("countryData",{}),f=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,k[e]||""]))),w=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),j=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,k[e]||""]))),_=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),h=Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]])))},178:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(73),l=o(189),a=o(78);const i="core/post-excerpt",s="woocommerce/product-query/product-summary";Object(a.a)(i,{blockDescription:n.a,blockIcon:Object(c.createElement)(r.Icon,{icon:l.a}),blockTitle:n.c,variationName:s,scope:["block"]})},2:function(e,t){e.exports=window.wp.components},216:function(e,t,o){"use strict";function c(e,t){const{[t]:o,...c}=e;return c}o.d(t,"a",(function(){return c}))},298:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));const c=(e,t,o)=>{let c,r=null;const n=(...n)=>{r=n,c&&clearTimeout(c),c=setTimeout((()=>{c=null,!o&&r&&e(...r)}),t),o&&!c&&e(...n)};return n.flush=()=>{c&&r&&(e(...r),clearTimeout(c),c=null)},n}},3:function(e,t){e.exports=window.wc.wcSettings},4:function(e,t){e.exports=window.wp.blockEditor},404:function(e,t){e.exports=window.wp.notices},423:function(e,t,o){"use strict";var c=o(0),r=o(9),n=o(5),l=o.n(n);const a=Object(c.createElement)((({className:e,height:t,width:o,...n})=>Object(c.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 145",className:l()("woo-icon",e),width:o,height:t,...n},Object(c.createElement)("path",{fill:"#7f54b3",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(c.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))),null);t.a=a},44:function(e,t,o){"use strict";o.d(t,"e",(function(){return s})),o.d(t,"c",(function(){return u})),o.d(t,"g",(function(){return m})),o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b})),o.d(t,"h",(function(){return p})),o.d(t,"f",(function(){return k})),o.d(t,"d",(function(){return f}));var c=o(3),r=o(216),n=o(82),l=o(90),a=o(123),i=o(60);const s="woocommerce/product-query",u="/wp-admin/edit.php?post_type=product&page=product_attributes",m="core/query",d=["attributes","presets","productSelector","onSale","stockStatus","wooInherit"],b=["taxQuery","search",...d],p=Object(c.getSetting)("stockStatusOptions",[]),g=Object(c.getSetting)("hideOutOfStockItems",!1),k={allowedControls:b,displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:g?Object.keys(Object(r.a)(p,"outofstock")):Object.keys(p)}},O=Object(c.getSettingWithCoercion)("postTemplateHasSupportForGridView",!1,n.a),f=[["core/post-template",{__woocommerceNamespace:a.b,className:"products-block-post-template",...O&&{layout:{type:"grid",columnCount:3}}},[["woocommerce/product-image",{imageSizing:i.a.THUMBNAIL}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:l.b}],["woocommerce/product-price",{textAlign:"center",fontSize:"small"}],["woocommerce/product-button",{textAlign:"center",fontSize:"small"}]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}}],["core/query-no-results"]]},518:function(e,t,o){e.exports=o(588)},519:function(e,t){},520:function(e,t){},588:function(e,t,o){"use strict";o.r(t);var c={};o.r(c),o.d(c,"isConversionPossible",(function(){return H})),o.d(c,"getDescription",(function(){return Y})),o.d(c,"blockifyConfig",(function(){return V}));var r={};o.r(r),o.d(r,"isConversionPossible",(function(){return J})),o.d(r,"getDescription",(function(){return Q})),o.d(r,"blockifyConfig",(function(){return K}));var n={};o.r(n),o.d(n,"isConversionPossible",(function(){return X})),o.d(n,"getDescription",(function(){return Z})),o.d(n,"getSkeleton",(function(){return ee}));var l=o(0),a=o(7),i=o(17),s=o(4),u=o(2),m=o(1),d=o(68),b=o(640),p=o(6),g=o(404),k=o(81),O=o(298),f=o(423),w=o(72);o(519),o(520);const j="woocommerce/legacy-template",_="single-product",h="product-catalog",y="product-taxonomy",v="product-search-results",E="order-confirmation",B="archive-product",S={"single-product":{type:_,title:Object(m.__)("WooCommerce Single Product Block","woocommerce"),placeholder:"single-product"},"archive-product":{type:h,title:Object(m.__)("WooCommerce Product Grid Block","woocommerce"),placeholder:B},"taxonomy-product_cat":{type:y,title:Object(m.__)("WooCommerce Product Taxonomy Block","woocommerce"),placeholder:B},"taxonomy-product_tag":{type:y,title:Object(m.__)("WooCommerce Product Tag Block","woocommerce"),placeholder:B},"taxonomy-product_attribute":{type:y,title:Object(m.__)("WooCommerce Product Attribute Block","woocommerce"),placeholder:B},"taxonomy-product":{type:y,title:Object(m.__)("WooCommerce Product's Custom Taxonomy Block","woocommerce"),placeholder:B},"product-search-results":{type:v,title:Object(m.__)("WooCommerce Product Search Results Block","woocommerce"),placeholder:B},cart:{type:"cart",title:Object(m.__)("WooCommerce Cart Block","woocommerce"),placeholder:"cart"},checkout:{type:"checkout",title:Object(m.__)("Checkout Block","woocommerce"),placeholder:"checkout"},"checkout-header":{type:"checkout-header",title:Object(m.__)("Checkout Header","woocommerce"),placeholder:"checkout-header"},"order-confirmation":{type:E,title:Object(m.__)("Order Confirmation Block","woocommerce"),placeholder:"fallback"}};function T(e,t){const o=Object.keys(t);let c=null;for(let r=0;o.length>r;r++){const n=t[e.substr(0,o[r].length)];if(n){c=n;break}}return c}function C(e,t){return!!T(e,t)}const N=(e,t)=>{var o;const c="core/query-title",r=((null===(o=Object(a.getBlockType)(c))||void 0===o?void 0:o.variations)||[]).find((({name:t})=>t===e));if(!r)return null;const{attributes:n}=r,l={...n,...t,showPrefix:!1};return Object(a.createBlock)(c,l)},P=(e,t)=>{var o;const c="core/group",r=((null===(o=Object(a.getBlockType)(c))||void 0===o?void 0:o.variations)||[]).find((({name:e})=>"group-row"===e));if(!r)return null;const{attributes:n}=r,l={...n,...t,layout:{...n.layout,justifyContent:"space-between"}};return Object(a.createBlock)(c,l,e)};var x=o(3),I=o(44);const A=e=>Object(a.createBlock)("core/query",{...I.f,...e,namespace:I.e,query:{...I.f.query,inherit:!0}},Object(a.createBlocksFromInnerBlocksTemplate)(I.d)),W=(e,t=!1)=>[Object(a.createBlock)("woocommerce/breadcrumbs",e),N("archive-title",e),t?Object(a.createBlock)("core/term-description",e):null,Object(a.createBlock)("woocommerce/store-notices",e),P([Object(a.createBlock)("woocommerce/product-results-count"),Object(a.createBlock)("woocommerce/catalog-sorting")],e),A(e)].filter(Boolean),z=()=>Object(x.isWpVersion)("6.1",">="),q=(e,t)=>t?(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),D=()=>Object(m.__)("Transform into blocks","woocommerce"),M={isConversionPossible:z,getDescription:q,blockifyConfig:{getButtonLabel:D,onClickCallback:({clientId:e,attributes:t,getBlocks:o,replaceBlock:c,selectBlock:r})=>{c(e,W(t));const n=o().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));n&&r(n.clientId)},getBlockifiedTemplate:W}},R={isConversionPossible:z,getDescription:q,blockifyConfig:{getButtonLabel:D,onClickCallback:({clientId:e,attributes:t,getBlocks:o,replaceBlock:c,selectBlock:r})=>{c(e,W(t,!0));const n=o().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));n&&r(n.clientId)},getBlockifiedTemplate:e=>W(e,!0)}};var G=o(90),L=o(178);const U=()=>[Object(a.createBlock)("woocommerce/breadcrumbs"),Object(a.createBlock)("woocommerce/store-notices"),Object(a.createBlock)("core/columns",{align:"wide"},[Object(a.createBlock)("core/column",{type:"constrained",justifyContent:"right",width:"512px"},[Object(a.createBlock)("woocommerce/product-image-gallery")]),Object(a.createBlock)("core/column",{},[Object(a.createBlock)("core/post-title",{__woocommerceNamespace:G.b,level:1}),Object(a.createBlock)("woocommerce/product-rating"),Object(a.createBlock)("woocommerce/product-price",{fontSize:"large"}),Object(a.createBlock)("core/post-excerpt",{__woocommerceNamespace:L.b}),Object(a.createBlock)("woocommerce/add-to-cart-form"),Object(a.createBlock)("woocommerce/product-meta")])]),Object(a.createBlock)("woocommerce/product-details",{align:"wide"}),Object(a.createBlock)("woocommerce/related-products",{align:"wide"})].filter(Boolean),H=()=>Object(x.isWpVersion)("6.1",">="),Y=(e,t)=>t?(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),V={getButtonLabel:()=>Object(m.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,getBlocks:t,replaceBlock:o,selectBlock:c})=>{o(e,U());const r=t().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/breadcrumbs"===e.name))));r&&c(r.clientId)},getBlockifiedTemplate:U},F=e=>{const t=((e,t)=>{const o=[Object(a.createBlock)("core/paragraph",{content:Object(m.__)("No products were found matching your selection.","woocommerce")}),Object(a.createBlock)("core/search",{buttonPosition:"button-outside",buttonText:Object(m.__)("Search","woocommerce"),buttonUseIcon:!1,showLabel:!1,placeholder:Object(m.__)("Search products…","woocommerce"),query:{post_type:"product"}})],c="core/query-no-results",r=e.findIndex((e=>e[0]===c)),n={...e[r][1]||{},...t},l=[c,n,o];return[...I.d.slice(0,r),l,...I.d.slice(r+1)]})(I.d,e);return Object(a.createBlock)("core/query",{...I.f,...e,namespace:I.e,query:{...I.f.query,inherit:!0}},Object(a.createBlocksFromInnerBlocksTemplate)(t))},$=e=>[N("search-title",e),Object(a.createBlock)("woocommerce/store-notices",e),P([Object(a.createBlock)("woocommerce/product-results-count"),Object(a.createBlock)("woocommerce/catalog-sorting")],e),F(e)].filter(Boolean),J=()=>Object(x.isWpVersion)("6.1",">="),Q=(e,t)=>t?(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.","woocommerce"),e))(e):(e=>Object(m.sprintf)(/* translators: %s is the template title */
Object(m.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woocommerce"),e))(e),K={getButtonLabel:()=>Object(m.__)("Transform into blocks","woocommerce"),onClickCallback:({clientId:e,attributes:t,getBlocks:o,replaceBlock:c,selectBlock:r})=>{c(e,$(t));const n=o().find((e=>"core/group"===e.name&&e.innerBlocks.some((e=>"woocommerce/store-notices"===e.name))));n&&r(n.clientId)},getBlockifiedTemplate:$},X=()=>!1,Z=()=>Object(m.__)("This block represents the classic template used to display the order confirmation. The actual rendered template may appear different from this placeholder.","woocommerce"),ee=()=>Object(l.createElement)("div",{className:"woocommerce-page"},Object(l.createElement)("div",{className:"woocommerce-order"},Object(l.createElement)("h1",null,Object(m.__)("Order received","woocommerce")),Object(l.createElement)("p",{className:"woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-confirmation"},Object(m.__)("Thank you. Your order has been received.","woocommerce")),Object(l.createElement)("ul",{className:"woocommerce-order-overview woocommerce-thankyou-order-details order_details"},Object(l.createElement)("li",{className:"woocommerce-order-overview__order order"},Object(m.__)("Order number","woocommerce"),": ",Object(l.createElement)("strong",null,"123")),Object(l.createElement)("li",{className:"woocommerce-order-overview__date date"},Object(m.__)("Date","woocommerce"),":"," ",Object(l.createElement)("strong",null,"May 25, 2023")),Object(l.createElement)("li",{className:"woocommerce-order-overview__email email"},Object(m.__)("Email","woocommerce"),":"," ",Object(l.createElement)("strong",null,"shopper@woo.com")),Object(l.createElement)("li",{className:"woocommerce-order-overview__total total"},Object(m.__)("Total","woocommerce"),":"," ",Object(l.createElement)("strong",null,"$20.00"))),Object(l.createElement)("section",{className:"woocommerce-order-details"},Object(l.createElement)("h2",{className:"woocommerce-order-details__title"},Object(m.__)("Order details","woocommerce")),Object(l.createElement)("table",{className:"woocommerce-table woocommerce-table--order-details shop_table order_details"},Object(l.createElement)("thead",null,Object(l.createElement)("tr",null,Object(l.createElement)("th",{className:"woocommerce-table__product-name product-name"},Object(m.__)("Product","woocommerce")),Object(l.createElement)("th",{className:"woocommerce-table__product-table product-total"},Object(m.__)("Total","woocommerce")))),Object(l.createElement)("tbody",null,Object(l.createElement)("tr",{className:"woocommerce-table__line-item order_item"},Object(l.createElement)("td",{className:"woocommerce-table__product-name product-name"},"Sample Product"," ",Object(l.createElement)("strong",{className:"product-quantity"},"× 2")," "),Object(l.createElement)("td",{className:"woocommerce-table__product-total product-total"},"$20.00"))),Object(l.createElement)("tfoot",null,Object(l.createElement)("tr",null,Object(l.createElement)("th",{scope:"row"},Object(m.__)("Subtotal","woocommerce"),":"),Object(l.createElement)("td",null,"$20.00")),Object(l.createElement)("tr",null,Object(l.createElement)("th",{scope:"row"},Object(m.__)("Total","woocommerce"),":"),Object(l.createElement)("td",null,"$20.00"))))),Object(l.createElement)("section",{className:"woocommerce-customer-details"},Object(l.createElement)("section",{className:"woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses"},Object(l.createElement)("div",{className:"woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1"},Object(l.createElement)("h2",{className:"woocommerce-column__title"},Object(m.__)("Billing address","woocommerce")),Object(l.createElement)("address",null,"123 Main St",Object(l.createElement)("br",null),"New York, NY 10001",Object(l.createElement)("br",null),"United States (US)")),Object(l.createElement)("div",{className:"woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2"},Object(l.createElement)("h2",{className:"woocommerce-column__title"},Object(m.__)("Shipping address","woocommerce")),Object(l.createElement)("address",null,"123 Main St",Object(l.createElement)("br",null),"New York, NY 10001",Object(l.createElement)("br",null),"United States (US)")))))),te={[h]:M,[y]:R,[_]:c,[v]:r,[E]:n,fallback:{isConversionPossible:()=>!1,getBlockifiedTemplate:()=>[],getDescription:()=>"",onClickCallback:()=>{}}},oe=({blockifyConfig:e,clientId:t,attributes:o})=>{const{getButtonLabel:c,onClickCallback:r,getBlockifiedTemplate:n}=e,[i,d]=Object(l.useState)(!1),{replaceBlock:b,selectBlock:k,replaceBlocks:O}=Object(p.useDispatch)(s.store),{getBlocks:f}=Object(p.useSelect)((e=>({getBlocks:e(s.store).getBlocks})),[]),{createInfoNotice:w}=Object(p.useDispatch)(g.store);return Object(l.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},Object(l.createElement)(u.Button,{isPrimary:!0,onClick:()=>{r({clientId:t,getBlocks:f,attributes:o,replaceBlock:b,selectBlock:k}),w(Object(m.__)("Template transformed into blocks!","woocommerce"),{actions:[{label:Object(m.__)("Undo","woocommerce"),onClick:()=>{const e=f().reduce(((e,t)=>"core/template-part"===t.name?e:[...e,t.clientId]),[]);O(e,Object(a.createBlock)("core/group",{layout:{inherit:!0,type:"constrained"}},[Object(a.createBlock)("woocommerce/legacy-template",{template:o.template})]))}}],type:"snackbar"})},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),text:c?c():""},i&&Object(l.createElement)(u.Popover,{resize:!1,placement:"right-end"},Object(l.createElement)("div",{style:{minWidth:"250px",width:"250px",maxWidth:"250px",minHeight:"300px",height:"300px",maxHeight:"300px",cursor:"pointer"}},Object(l.createElement)(s.BlockPreview,{blocks:n(o),viewportWidth:1200,additionalStyles:[{css:"body { padding: 20px !important; height: fit-content !important; overflow:hidden}"}]})))))},ce=({clientId:e,attributes:t,setAttributes:o})=>{var c,r,n,a,b;const g=Object(s.useBlockProps)(),{editedPostId:O}=Object(p.useSelect)((e=>({editedPostId:e("core/edit-site").getEditedPostId()})),[]),w=Object(k.useEntityRecord)("postType","wp_template",O),j=T(t.template,S),_=null!==(c=null===(r=w.record)||void 0===r||null===(n=r.title.rendered)||void 0===n?void 0:n.toLowerCase())&&void 0!==c?c:t.template,h=null!==(a=null==j?void 0:j.placeholder)&&void 0!==a?a:"fallback",y=null!==(b=null==j?void 0:j.type)&&void 0!==b?b:"fallback";Object(l.useEffect)((()=>{var e;return o({template:t.template,align:null!==(e=t.align)&&void 0!==e?e:"wide"})}),[t.align,t.template,o]);const{isConversionPossible:v,getDescription:E,getSkeleton:B,blockifyConfig:C}=te[y],N=B?B():Object(l.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${i.n}template-placeholders/${h}.svg`,alt:_}),P=v(),x=E(_,P);return Object(l.createElement)("div",{...g},Object(l.createElement)(u.Placeholder,{className:"wp-block-woocommerce-classic-template__placeholder"},Object(l.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},N),Object(l.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},Object(l.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy__icon-container"},Object(l.createElement)("span",{className:"woo-icon"},Object(l.createElement)(d.a,{icon:f.a})," ",Object(m.__)("WooCommerce","woocommerce")),Object(l.createElement)("span",null,Object(m.__)("Classic Template Placeholder","woocommerce"))),Object(l.createElement)("p",{dangerouslySetInnerHTML:{__html:x}}),Object(l.createElement)("p",null,Object(m.__)("You cannot edit the content of this block. However, you can move it and place other blocks around it.","woocommerce")),P&&C&&Object(l.createElement)(oe,{clientId:e,blockifyConfig:C,attributes:t}))))},re=Object(O.a)((()=>{const e=Object(p.select)("core/block-editor").getBlocks().flatMap((e=>[e,...e.innerBlocks])).find((e=>"core/missing"===e.name&&e.attributes.originalName===j));if(e){const t=Object(a.parse)(e.attributes.originalContent);t&&Object(p.dispatch)("core/block-editor").replaceBlock(e.clientId,t)}}),100);let ne;Object(p.subscribe)((()=>{var e;const t=ne,o=Object(p.select)("core/edit-site"),c=null==o?void 0:o.getEditedPostId();ne=Object(w.a)(c)?void 0:c;const r=null===(e=ne)||void 0===e?void 0:e.split("//")[1];if(null==r)return;const n=Object(a.getBlockType)(j),i=Boolean(n);return i&&C(r,S)&&re(),t!==ne?!i||C(r,S)&&!function(e,t){const o=T(t,S);return(null==e?void 0:e.title)!==(null==o?void 0:o.title)}(n,r)?void(!i&&C(r,S)&&(({template:e,inserter:t})=>{Object(a.registerBlockType)(j,{title:e&&S[e]?S[e].title:Object(m.__)("WooCommerce Classic Template","woocommerce"),icon:Object(l.createElement)(d.a,{icon:b.a,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[Object(m.__)("WooCommerce","woocommerce")],description:Object(m.__)("Renders classic WooCommerce PHP templates.","woocommerce"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:t},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:({attributes:t,clientId:o,setAttributes:c})=>{const r=null!=e?e:t.template;return Object(l.createElement)(ce,{attributes:{...t,template:r},setAttributes:c,clientId:o})},save:()=>null})})({template:r,inserter:!0})):(Object(a.unregisterBlockType)(j),void(ne=void 0)):void 0}),"core/blocks-editor")},6:function(e,t){e.exports=window.wp.data},60:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));let c=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({})},65:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return s}));var c=o(0),r=o(1),n=o(68),l=o(170);const a=Object(r.__)("Product Title","woocommerce"),i=Object(c.createElement)(n.a,{icon:l.a,className:"wc-block-editor-components-block-icon"}),s=Object(r.__)("Display the title of a product.","woocommerce")},7:function(e,t){e.exports=window.wp.blocks},72:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));const c=e=>"number"==typeof e},73:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return s}));var c=o(0),r=o(1),n=o(68),l=o(189);const a=Object(r.__)("Product Summary","woocommerce"),i=Object(c.createElement)(n.a,{icon:l.a,className:"wc-block-editor-components-block-icon"}),s=Object(r.__)("Display a short description about a product.","woocommerce")},78:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var c=o(7);function r(e,{blockDescription:t,blockIcon:o,blockTitle:r,variationName:n,scope:l}){Object(c.registerBlockVariation)(e,{description:t,name:n,title:r,isActive:e=>e.__woocommerceNamespace===n,icon:{src:o},attributes:{__woocommerceNamespace:n},scope:l})}},81:function(e,t){e.exports=window.wp.coreData},82:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},9:function(e,t){e.exports=window.wp.primitives},90:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(2),n=o(65),l=o(170),a=o(78);const i="core/post-title",s="woocommerce/product-query/product-title";Object(a.a)(i,{blockDescription:n.a,blockIcon:Object(c.createElement)(r.Icon,{icon:l.a}),blockTitle:n.c,variationName:s,scope:["block"]})}});