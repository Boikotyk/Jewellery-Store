(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[42],{112:function(e,t,c){"use strict";var a=c(0),n=c(146),o=c(4),r=c.n(o);c(218);const l=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=({className:e,value:t,currency:c,onValueChange:o,displayType:s="text",...i})=>{var u;const m="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(m))return null;const b=m/10**c.minorUnit;if(!Number.isFinite(b))return null;const p=r()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),d=null!==(u=i.decimalScale)&&void 0!==u?u:null==c?void 0:c.minorUnit,v={...i,...l(c),decimalScale:d,value:void 0,currency:void 0,onValueChange:void 0},f=o?e=>{const t=+e.value*10**c.minorUnit;o(t)}:()=>{};return Object(a.createElement)(n.a,{className:p,displayType:s,...v,value:b,onValueChange:f})}},218:function(e,t){},386:function(e,t){},450:function(e,t,c){"use strict";var a=c(0),n=c(1),o=c(4),r=c.n(o),l=c(112),s=c(11),i=c(72),u=c(2),m=c(38);c(386),t.a=({currency:e,values:t,className:c})=>{const o=Object(u.getSetting)("taxesEnabled",!0)&&Object(u.getSetting)("displayCartPricesIncludingTax",!1),{total_price:b,total_tax:p,tax_lines:d}=t,{receiveCart:v,...f}=Object(i.a)(),j=Object(s.applyCheckoutFilter)({filterName:"totalLabel",defaultValue:Object(n.__)("Total","woocommerce"),extensions:f.extensions,arg:{cart:f}}),O=parseInt(p,10),g=d&&d.length>0?Object(n.sprintf)(/* translators: %s is a list of tax rates */
Object(n.__)("Including %s","woocommerce"),d.map((({name:t,price:c})=>`${Object(m.formatPrice)(c,e)} ${t}`)).join(", ")):Object(n.__)("Including <TaxAmount/> in taxes","woocommerce");return Object(a.createElement)(s.TotalsItem,{className:r()("wc-block-components-totals-footer-item",c),currency:e,label:j,value:parseInt(b,10),description:o&&0!==O&&Object(a.createElement)("p",{className:"wc-block-components-totals-footer-item-tax"},Object(a.createInterpolateElement)(g,{TaxAmount:Object(a.createElement)(l.a,{className:"wc-block-components-totals-footer-item-tax-value",currency:e,value:O})}))})}},531:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(450),o=c(38),r=c(72),l=c(11);const s=()=>{const{extensions:e,receiveCart:t,...c}=Object(r.a)(),n={extensions:e,cart:c,context:"woocommerce/checkout"};return Object(a.createElement)(l.ExperimentalOrderMeta.Slot,{...n})};t.default=({children:e,className:t=""})=>{const{cartTotals:c}=Object(r.a)(),l=Object(o.getCurrencyFromPriceResponse)(c);return Object(a.createElement)("div",{className:t},e,Object(a.createElement)("div",{className:"wc-block-components-totals-wrapper"},Object(a.createElement)(n.a,{currency:l,values:c})),Object(a.createElement)(s,null))}}}]);