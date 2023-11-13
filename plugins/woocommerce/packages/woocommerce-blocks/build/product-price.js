(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{159:function(e,c){},191:function(e,c){},242:function(e,c,r){"use strict";r.r(c),r.d(c,"Block",(function(){return m}));var t=r(0),a=r(5),n=r.n(a),l=r(94),o=r(22),i=r(24),s=r(88),u=r(48);const m=e=>{var c,r;const{className:a,textAlign:u,isDescendentOfSingleProductTemplate:m}=e,p=Object(s.a)(e),{parentName:d,parentClassName:b}=Object(i.useInnerBlockLayoutContext)(),{product:y}=Object(i.useProductDataContext)(),g="woocommerce/all-products"===d,v=n()("wc-block-components-product-price",a,p.className,{[`${b}__product-price`]:b});if(!y.id&&!m){const e=Object(t.createElement)(l.a,{align:u,className:v});return g?Object(t.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const O=y.prices,_=m?Object(o.getCurrencyFromPriceResponse)():Object(o.getCurrencyFromPriceResponse)(O),j="5000",N=O.price!==O.regular_price,P=n()({[`${b}__product-price__value`]:b,[`${b}__product-price__value--on-sale`]:N}),f=Object(t.createElement)(l.a,{align:u,className:v,style:p.style,regularPriceStyle:p.style,priceStyle:p.style,priceClassName:P,currency:_,price:m?j:O.price,minPrice:null==O||null===(c=O.price_range)||void 0===c?void 0:c.min_amount,maxPrice:null==O||null===(r=O.price_range)||void 0===r?void 0:r.max_amount,regularPrice:m?j:O.regular_price,regularPriceClassName:n()({[`${b}__product-price__regular`]:b})});return g?Object(t.createElement)("div",{className:"wp-block-woocommerce-product-price"},f):f};c.default=e=>e.isDescendentOfSingleProductTemplate?Object(t.createElement)(m,{...e}):Object(u.withProductDataContext)(m)(e)},40:function(e,c,r){"use strict";var t=r(0),a=r(151),n=r(5),l=r.n(n);r(159);const o=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});c.a=({className:e,value:c,currency:r,onValueChange:n,displayType:i="text",...s})=>{var u;const m="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(m))return null;const p=m/10**r.minorUnit;if(!Number.isFinite(p))return null;const d=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),b=null!==(u=s.decimalScale)&&void 0!==u?u:null==r?void 0:r.minorUnit,y={...s,...o(r),decimalScale:b,value:void 0,currency:void 0,onValueChange:void 0},g=n?e=>{const c=+e.value*10**r.minorUnit;n(c)}:()=>{};return Object(t.createElement)(a.a,{className:d,displayType:i,...y,value:p,onValueChange:g})}},94:function(e,c,r){"use strict";var t=r(0),a=r(1),n=r(40),l=r(5),o=r.n(l),i=r(22);r(191);const s=({currency:e,maxPrice:c,minPrice:r,priceClassName:l,priceStyle:s={}})=>Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.sprintf)(/* translators: %1$s min price, %2$s max price */
Object(a.__)("Price between %1$s and %2$s","woocommerce"),Object(i.formatPrice)(r),Object(i.formatPrice)(c))),Object(t.createElement)("span",{"aria-hidden":!0},Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",l),currency:e,value:r,style:s})," — ",Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",l),currency:e,value:c,style:s}))),u=({currency:e,regularPriceClassName:c,regularPriceStyle:r,regularPrice:l,priceClassName:i,priceStyle:s,price:u})=>Object(t.createElement)(t.Fragment,null,Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Previous price:","woocommerce")),Object(t.createElement)(n.a,{currency:e,renderText:e=>Object(t.createElement)("del",{className:o()("wc-block-components-product-price__regular",c),style:r},e),value:l}),Object(t.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Discounted price:","woocommerce")),Object(t.createElement)(n.a,{currency:e,renderText:e=>Object(t.createElement)("ins",{className:o()("wc-block-components-product-price__value","is-discounted",i),style:s},e),value:u}));c.a=({align:e,className:c,currency:r,format:a="<price/>",maxPrice:l,minPrice:i,price:m,priceClassName:p,priceStyle:d,regularPrice:b,regularPriceClassName:y,regularPriceStyle:g,style:v})=>{const O=o()(c,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});a.includes("<price/>")||(a="<price/>",console.error("Price formats need to include the `<price/>` tag."));const _=b&&m!==b;let j=Object(t.createElement)("span",{className:o()("wc-block-components-product-price__value",p)});return _?j=Object(t.createElement)(u,{currency:r,price:m,priceClassName:p,priceStyle:d,regularPrice:b,regularPriceClassName:y,regularPriceStyle:g}):void 0!==i&&void 0!==l?j=Object(t.createElement)(s,{currency:r,maxPrice:l,minPrice:i,priceClassName:p,priceStyle:d}):m&&(j=Object(t.createElement)(n.a,{className:o()("wc-block-components-product-price__value",p),currency:r,value:m,style:d})),Object(t.createElement)("span",{className:O,style:v},Object(t.createInterpolateElement)(a,{price:j}))}}}]);