(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=h;var b=function(t){return t instanceof E},$=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},w=_;w.l=$,w.i=b,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var m=h.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,c=!!w.u(e)||e,f=w.p(t),p=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},v=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return c?p(1,0):p(31,11);case l:return c?p(1,m):p(0,m+1);case a:var g=this.$locale().weekStart||0,b=(h<g?h+7:h)-g;return p(c?_-b:_+(6-b),m);case o:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,c=w.p(t),f="set"+(this.$u?"UTC":""),p=(a={},a[o]=f+"Date",a[d]=f+"Date",a[l]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[s]=f+"Minutes",a[i]=f+"Seconds",a[n]=f+"Milliseconds",a)[c],v=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[p](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[w.p(t)]()},m.add=function(n,c){var d,f=this;n=Number(n);var p=w.p(c),v=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return v(1);if(p===a)return v(7);var h=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[p]||1,m=this.$d.getTime()+n*h;return w.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||h[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,f){var p,v=w.p(d),h=M(n),m=(h.utcOffset()-this.utcOffset())*t,_=this-h,y=w.m(this,h);return y=(p={},p[u]=y/12,p[l]=y,p[c]=y/3,p[a]=(_-m)/6048e5,p[o]=(_-m)/864e5,p[r]=_/e,p[s]=_/t,p[i]=_/1e3,p)[v]||_,f?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=$(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),S=E.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,E,M),t.$i=!0),M},M.locale=$,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=g[y],M.Ls=g,M.p={},M}()},181:function(t){t.exports=function(){"use strict";return function(t,e,n){var i=function(t,e){if(!e||!e.length||!e[0]||1===e.length&&!e[0].length)return null;var n;1===e.length&&e[0].length>0&&(e=e[0]),n=e[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n};n.max=function(){var t=[].slice.call(arguments,0);return i("isAfter",t)},n.min=function(){var t=[].slice.call(arguments,0);return i("isBefore",t)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var v=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:v,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),f=n.n(d),p=n(10),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=o().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),e()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;const h="shake";class m{#t=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(h),setTimeout((()=>{this.element.classList.remove(h),t?.()}),600)}}function _(t,e,n="beforeend"){if(!(t instanceof m))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function y(t,e){if(!(t instanceof m&&e instanceof m))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}const g="HH:mm",b=100,$=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],M=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui."],w=["Istanbul","London","Berlin","Madrid","Rome","Paris","Barcelona","Prague","Moscow"],E=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"];var S=n(484),A=n.n(S),C=n(181),D=n.n(C);function x(t){return t?A()(t).format(g):""}function k(t){return t[Math.floor(Math.random()*t.length)]}function P(t){return Math.ceil(Math.random()*t)}function O(t,e){return Math.floor(Math.random()*(e-t))+t}function L(){return Math.random()>=.5}function T(t){return`\n      <option value="${t.name}">${t.name}</option>\n  `}A().extend(D());class H extends m{#e=null;#n=null;#i=null;#s=null;#r=null;#o=null;constructor({destinations:t,destination:e,eventPoint:n,offers:i,onCloseClick:s,onSaveEdit:r}){super(),this.#e=t,this.#r=e,this.#o=n,this.#n=i,this.#i=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#i),this.#s=r,this.element.querySelector(".event__save-btn").addEventListener("click",this.#s)}get template(){return function(t,e,n,i){const{name:s,description:r}=e,{basePrice:o,dateFrom:a,dateTo:l,type:c,id:u}=n,d=new Date(a).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short",hour12:!1}),f=new Date(l).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short",hour12:!1});return`<li class="trip-events__item">\n        <form class="event event--edit" action="#" method="post">\n          <header class="event__header">\n            <div class="event__type-wrapper">\n              <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                <span class="visually-hidden">Choose event type</span>\n                <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n              </label>\n              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${u}" type="checkbox">\n\n              <div class="event__type-list">\n                <fieldset class="event__type-group">\n                  <legend class="visually-hidden">Event type</legend>\n                    ${p=$,p.map((t=>{const e=t.toLowerCase();return`<div class="event__type-item">\n              <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n              <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t}</label>\n            </div>`})).join("")}\n                </fieldset>\n              </div>\n            </div>\n\n            <div class="event__field-group  event__field-group--destination">\n              <label class="event__label  event__type-output" for="event-destination-${u}">\n\n                ${c}\n\n              </label>\n              <input class="event__input  event__input--destination" id="event-destination-${u}" type="text" name="event-destination" value=${s} list="destination-list-${u}">\n              <datalist id="destination-list-1">\n\n                ${t.map(T).join("")}\n\n              </datalist>\n            </div>\n\n            <div class="event__field-group  event__field-group--time">\n              <label class="visually-hidden" for="event-start-time-1">From</label>\n              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${d}">\n              &mdash;\n              <label class="visually-hidden" for="event-end-time-1">To</label>\n              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${f}">\n            </div>\n\n            <div class="event__field-group  event__field-group--price">\n              <label class="event__label" for="event-price-1">\n                <span class="visually-hidden">Price</span>\n                &euro;\n              </label>\n              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n            </div>\n\n            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n            <button class="event__reset-btn" type="reset">Delete</button>\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </header>\n          <section class="event__details">\n\n            ${function({offers:t}){if(0!==t.length)return`<section class="event__section  event__section--offers">\n              <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n              <div class="event__available-offers">\n\n                 ${t.map((t=>function(t){const{id:e,title:n,price:i}=t;return`<div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${L()?"checked":""}>\n                  <label class="event__offer-label" for="event-offer-${e}-1">\n                    <span class="event__offer-title">${n}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${i}</span>\n                  </label>\n                </div>`}(t))).join("")}\n\n              </div>\n            </section>`}(i)}\n\n            <section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${r}</p>\n            </section>\n          </section>\n        </form>\n      </li>`;var p}(this.#e,this.#r,this.#o,this.#n)}}class I extends m{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n        <div class="trip-sort__item  trip-sort__item--day">\n          <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n          <label class="trip-sort__btn" for="sort-day">Day</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--event">\n          <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n          <label class="trip-sort__btn" for="sort-event">Event</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--time">\n          <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n          <label class="trip-sort__btn" for="sort-time">Time</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--price">\n          <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n          <label class="trip-sort__btn" for="sort-price">Price</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--offer">\n          <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n          <label class="trip-sort__btn" for="sort-offer">Offers</label>\n        </div>\n      </form>'}}class B extends m{get template(){return'<ul class="trip-events__list"></ul>'}}class F extends m{#r=null;#o=null;#n=null;#a=null;constructor({destination:t,eventPoint:e,offers:n,onEditClick:i}){super(),this.#o=e,this.#r=t,this.#n=n,this.#a=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(t,e,n){const{name:i}=t,{type:s,basePrice:r,isFavorite:o,dateFrom:a,dateTo:l}=e,c=o?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${a}>${u=a,u?A()(u).format("MMM D"):""}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${s} ${i}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${a}>${x(a)}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${l}>${x(l)}</time>\n          </p>\n          <p class="event__duration">${function(t,e){const n=A()(e).diff(t)/b;return n<b?A()(n).format("mm[M]"):n>b&&n<2400?A()(n).format("HH[H] mm[M]"):A()(n).format("DD[D] HH[H] mm[M]")}(a,l)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${r}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n            ${function({offers:t}){return t.map((({title:t,price:e})=>`<li class="event__offer">\n        <span class="event__offer-title">${t}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e}</span>\n      </li>`)).join("")}(n)}\n        </ul>\n        <button class="event__favorite-btn ${c}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var u}(this.#r,this.#o,this.#n)}}class U extends m{get template(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}}class j extends m{get template(){return'<form class="trip-filters" action="#" method="get">\n        <div class="trip-filters__filter">\n          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n          <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n          <label class="trip-filters__filter-label" for="filter-future">Future</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n          <label class="trip-filters__filter-label" for="filter-present">Present</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n          <label class="trip-filters__filter-label" for="filter-past">Past</label>\n        </div>\n\n        <button class="visually-hidden" type="submit">Accept filter</button>\n      </form>'}}const q=()=>({id:crypto.randomUUID(),title:k(E),price:P(69)}),Y=()=>{const t=k(w);return{id:crypto.randomUUID(),name:t,description:k(M),pictures:Array.from({length:P(5)},(()=>({src:`https://loremflickr.com/666/666?${crypto.randomUUID()}`,description:`It is ${t} description`})))}};let N=A()().subtract(O(1,15),"day").toDate();const W=({next:t})=>{const e=O(1,15),n=O(1,6),i=O(0,24);return t&&(N=A()(N).add(i,"minute").add(n,"hour").add(e,"day").toDate()),N},Z=document.querySelector(".trip-main"),z=document.querySelector(".trip-events"),J=document.querySelector(".trip-controls__filters"),R=new class{destinations=[];offers=[];eventPoints=[];constructor(){this.destinations=this.generateDestinations(),this.offers=this.generateOffers(),this.eventPoints=this.generateEventPoints()}getDestinations(){return this.destinations}getOffers(){return this.offers}getEventPoints(){return this.eventPoints}generateDestinations(){return Array.from({length:w.length},Y)}generateOffers(){return $.map((t=>({type:t,offers:Array.from({length:O(1,5)},q)})))}generateEventPoints(){return Array.from({length:$.length},(()=>{const t=k($),e=k(this.destinations),n=this.offers.find((e=>e.type===t)),i=new Set;Array.from({length:O(1,n.offers.length)},(()=>{i.add(k(n.offers))}));const s=i.size>0&&[...i][0]?[...i].map((t=>t.id)):[];return((t,e,n)=>({id:crypto.randomUUID(),basePrice:P(1500),dateFrom:W({next:!1}),dateTo:W({next:!0}),destination:e,isFavorite:L(),offers:n,type:t}))(t,e.id,s)}))}},X=new class{#e=[];constructor(t){this.service=t,this.#e=this.service.getDestinations()}get(){return this.#e}getById(t){return this.#e.find((e=>e.id===t))}}(R),V=new class{#l=[];constructor(t){this.#l=t.getEventPoints()}get(){return this.#l}}(R),G=new class{#n=[];constructor(t){this.service=t,this.#n=this.service.getOffers()}get(){return this.#n}getByType(t){return this.#n.find((e=>e.type===t.toString()))||null}}(R),K=new class{constructor({tripHeaderInfo:t,tripHeaderFilter:e}){this.tripHeaderInfo=t,this.tripHeaderFilter=e}init(){_(new U,this.tripHeaderInfo,"afterbegin"),_(new j,this.tripHeaderFilter)}}({tripHeaderInfo:Z,tripHeaderFilter:J}),Q=new class{#c=null;#u=null;#d=null;#f=null;#p=new I;#v=new B;#l=[];#e=[];constructor({tripContainer:t,destinationModel:e,eventPointsModel:n,offersModel:i}){this.#c=t,this.#u=e,this.#d=n,this.#f=i,this.#l=this.#d.get(),this.#e=this.#u.get(),this.offers=this.#f.get()}init(){_(this.#p,this.#c),_(this.#v,this.#c),this.#l.forEach((t=>{const e=this.#u.getById(t.destination);this.#h(this.#e,e,t,this.#f.getByType(t.type))}))}#h(t,e,n,i){const s=t=>{"Escape"===t.key&&(t.preventDefault(),a(),document.removeEventListener("keydown",s))},r=new F({destination:e,eventPoint:n,offers:i,onEditClick:()=>{y(o,r),document.addEventListener("keydown",s)}}),o=new H({destinations:t,destination:e,eventPoint:n,offers:i,onCloseClick:()=>{a(),document.removeEventListener("keydown",s)},onSaveEdit:()=>{a(),document.removeEventListener("keydown",s)}});function a(){y(r,o)}_(r,this.#v.element)}}({tripContainer:z,destinationModel:X,eventPointsModel:V,offersModel:G});K.init(),Q.init()})()})();
//# sourceMappingURL=bundle.c574df784062ade72277.js.map