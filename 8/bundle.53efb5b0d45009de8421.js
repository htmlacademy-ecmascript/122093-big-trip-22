(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",g={};g[_]=v;var $=function(t){return t instanceof E},C=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},b=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},M=y;M.l=C,M.i=$,M.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function v(t){this.$L=C(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return b(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<b(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,c=!!M.u(e)||e,h=M.p(t),f=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case d:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case a:var g=this.$locale().weekStart||0,$=(v<g?v+7:v)-g;return f(c?y-$:y+(6-$),m);case o:case u:return p(_+"Hours",0);case r:return p(_+"Minutes",1);case s:return p(_+"Seconds",2);case i:return p(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,c=M.p(t),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[u]=h+"Date",a[l]=h+"Month",a[d]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(e-this.$W):e;if(c===l||c===d){var v=this.clone().set(u,1);v.$d[f](p),v.init(),this.$d=v.set(u,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(n,c){var u,h=this;n=Number(n);var f=M.p(c),p=function(t){var e=b(h);return M.w(e.date(e.date()+Math.round(t*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var v=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[f]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return M.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:u(1),hh:u(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,u,h){var f,p=M.p(u),v=b(n),m=(v.utcOffset()-this.utcOffset())*t,y=this-v,_=M.m(this,v);return _=(f={},f[d]=_/12,f[l]=_,f[c]=_/3,f[a]=(y-m)/6048e5,f[o]=(y-m)/864e5,f[r]=y/e,f[s]=y/t,f[i]=y/1e3,f)[p]||y,h?_:M.a(_)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=C(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),P=E.prototype;return b.prototype=P,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(t){P[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,E,b),t.$i=!0),b},b.locale=C,b.isDayjs=$,b.unix=function(t){return b(1e3*t)},b.en=g[_],b.Ls=g,b.p={},b}()},181:function(t){t.exports=function(){"use strict";return function(t,e,n){var i=function(t,e){if(!e||!e.length||!e[0]||1===e.length&&!e[0].length)return null;var n;1===e.length&&e[0].length>0&&(e=e[0]),n=e[0];for(var i=1;i<e.length;i+=1)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n};n.max=function(){var t=[].slice.call(arguments,0);return i("isAfter",t)},n.min=function(){var t=[].slice.call(arguments,0);return i("isBefore",t)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var h=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var p=s(f,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),d=n.n(c),u=n(589),h=n.n(u),f=n(10),p={};p.styleTagTransform=h(),p.setAttributes=l(),p.insert=o().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=d(),e()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;const v="shake";class m{#t=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),t?.()}),600)}}function y(t,e,n="beforeend"){if(!(t instanceof m))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof m&&e instanceof m))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function g(t){if(null!==t){if(!(t instanceof m))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}class $ extends m{get template(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}}class C extends m{#e=null;constructor({filters:t}){super(),this.#e=t}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,count:i}=t;return`<div class="trip-filters__filter">\n            <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}"  ${e?"checked":""} ${0===i?"disabled":""}>\n            <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n          </div>`}(t,0===e))).join("");return`<form class="trip-filters" action="#" method="get">\n            ${e}\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>`}(this.#e)}}const b="HH:mm",M=100,E=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],P=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui."],w=["Istanbul","London","Berlin","Madrid","Rome","Paris","Barcelona","Prague","Moscow"],S=["Add luggage","Switch to comfort class","Add meal","Choose seats","Travel by train"],D={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFER:"offer"},A={[D.DAY]:!0,[D.EVENT]:!1,[D.TIME]:!0,[D.PRICE]:!0,[D.OFFER]:!1},T="DEFAULT",k="EDITING";var x=n(484),H=n.n(x),F=n(181),I=n.n(F);function L(t){return t[Math.floor(Math.random()*t.length)]}function O(t){return Math.ceil(Math.random()*t)}function B(t,e){return Math.floor(Math.random()*(e-t))+t}function N(){return Math.random()>=.5}H().extend(I());let U=H()().subtract(B(1,15),"day").toDate();const j=({next:t})=>{const e=B(1,15),n=B(1,6),i=B(0,24);return t&&(U=H()(U).add(i,"minute").add(n,"hour").add(e,"day").toDate()),U};function Y(t){return t?H()(t).format(b):""}function q(t){return H()().isBefore(t,"day")}function R(t){return H()().isAfter(t,"day")}const V={everything:t=>t.filter((t=>t)),future:t=>t.filter((t=>q(t.dateFrom))),present:t=>t.filter((t=>{return e=t.dateFrom,n=t.dateTo,!q(e)&&!R(n);var e,n})),past:t=>t.filter((t=>R(t.dateTo)))},W=()=>({id:crypto.randomUUID(),title:L(S),price:O(69)}),Z=()=>{const t=L(w);return{id:crypto.randomUUID(),name:t,description:L(P),pictures:Array.from({length:O(5)},(()=>({src:`https://loremflickr.com/666/666?${crypto.randomUUID()}`,description:`It is ${t} description`})))}};class z extends m{get template(){return'<ul class="trip-events__list"></ul>'}}class J extends m{#n=null;constructor({massage:t}){super(),this.#n=t}get template(){return`<p class="trip-events__msg">\n      ${this.#n}\n    </p>`}}class K extends m{#i=null;#s=null;#r=null;#o=null;#a=null;constructor({destination:t,eventPoint:e,offers:n,onEditClick:i,onFavoriteClick:s}){super(),this.#s=e,this.#i=t,this.#r=n,this.#o=i,this.#a=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#c)}get template(){return function(t,e,n){const{name:i}=t,{type:s,basePrice:r,isFavorite:o,dateFrom:a,dateTo:l}=e,c=o?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${a}>${d=a,d?H()(d).format("MMM D"):""}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${s} ${i}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${a}>${Y(a)}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${l}>${Y(l)}</time>\n          </p>\n          <p class="event__duration">${function(t,e){const n=H()(e).diff(t)/M;return n<M?H()(n).format("mm[M]"):n>M&&n<2400?H()(n).format("HH[H] mm[M]"):H()(n).format("DD[D] HH[H] mm[M]")}(a,l)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${r}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n            ${function(t){return t.map((({title:t,price:e})=>`<li class="event__offer">\n        <span class="event__offer-title">${t}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e}</span>\n      </li>`)).join("")}(n)}\n        </ul>\n        <button class="event__favorite-btn ${c}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var d}(this.#i,this.#s,this.#r)}#l=t=>{t.preventDefault(),this.#o()};#c=t=>{t.preventDefault(),this.#a()}}class X extends m{#d=[];#r=[];#u=null;#h=null;#i=null;#s=null;constructor({destinations:t,destination:e,eventPoint:n,offers:i,onCloseClick:s,onSaveEdit:r}){super(),this.#d=t,this.#i=e,this.#s=n,this.#r=i,this.#u=s,this.#h=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#u),this.element.querySelector(".event__save-btn").addEventListener("click",this.#f)}get template(){return function(t,e,n,i){const{name:s,description:r}=e,{basePrice:o,dateFrom:a,dateTo:l,type:c,id:d}=n,u=new Date(a).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short",hour12:!1}),h=new Date(l).toLocaleString("en-US",{dateStyle:"short",timeStyle:"short",hour12:!1});return`<li class="trip-events__item">\n        <form class="event event--edit" action="#" method="post">\n          <header class="event__header">\n            <div class="event__type-wrapper">\n              <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                <span class="visually-hidden">Choose event type</span>\n                <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n              </label>\n              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${d}" type="checkbox">\n\n              <div class="event__type-list">\n                <fieldset class="event__type-group">\n                  <legend class="visually-hidden">Event type</legend>\n                    ${f=E,f.map((t=>{const e=t.toLowerCase();return`<div class="event__type-item">\n              <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n              <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t}</label>\n            </div>`})).join("")}\n                </fieldset>\n              </div>\n            </div>\n\n            <div class="event__field-group  event__field-group--destination">\n              <label class="event__label  event__type-output" for="event-destination-${d}">\n\n                ${c}\n\n              </label>\n              <input class="event__input  event__input--destination" id="event-destination-${d}" type="text" name="event-destination" value=${s} list="destination-list-${d}">\n              <datalist id="destination-list-1">\n\n                ${function(t){return t.map((t=>`\n      <option value="${t.name}">${t.name}</option>\n    `)).join("")}(t)}\n\n              </datalist>\n            </div>\n\n            <div class="event__field-group  event__field-group--time">\n              <label class="visually-hidden" for="event-start-time-1">From</label>\n              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${u}">\n              &mdash;\n              <label class="visually-hidden" for="event-end-time-1">To</label>\n              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h}">\n            </div>\n\n            <div class="event__field-group  event__field-group--price">\n              <label class="event__label" for="event-price-1">\n                <span class="visually-hidden">Price</span>\n                &euro;\n              </label>\n              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n            </div>\n\n            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n            <button class="event__reset-btn" type="reset">Delete</button>\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </header>\n          <section class="event__details">\n\n            ${function(t){if(0!==t.length)return`<section class="event__section  event__section--offers">\n              <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n              <div class="event__available-offers">\n\n                 ${t.map((t=>function(t){const{id:e,title:n,price:i}=t;return`<div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${N()?"checked":""}>\n                  <label class="event__offer-label" for="event-offer-${e}-1">\n                    <span class="event__offer-title">${n}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${i}</span>\n                  </label>\n                </div>`}(t))).join("")}\n\n              </div>\n            </section>`}(i)}\n\n            <section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${r}</p>\n            </section>\n          </section>\n        </form>\n      </li>`;var f}(this.#d,this.#i,this.#s,this.#r)}#f=t=>{t.preventDefault(),this.#h(this.#s)}}class G{#p=null;#v=null;#m=null;#y=null;#_=null;#g=null;#$=null;#C=T;#b=null;constructor({pointListContainer:t,destinationModel:e,offersModel:n,onPointChange:i,onModeChange:s}){this.#$=t,this.#y=e,this.#_=n,this.#g=i,this.#b=s}init(t){this.#p=t;const e=this.#v,n=this.#m;this.#v=new K({destination:this.#y.getById(t.destination),eventPoint:this.#p,offers:this.#_.getByType(t.type),onEditClick:this.#M,onFavoriteClick:this.#a}),this.#m=new X({destinations:this.#y.get(),destination:this.#y.getById(t.destination),eventPoint:this.#p,offers:this.#_.getByType(t.type),onCloseClick:this.#E,onSaveEdit:this.#P}),e&&n?(this.#C===T&&_(this.#v,e),this.#C===k&&_(this.#m,n),g(e),g(n)):y(this.#v,this.#$)}destroy(){g(this.#v),g(this.#m)}resetView(){this.#C!==T&&this.#w()}#S=t=>{"Escape"===t.key&&(t.preventDefault(),this.#w(),document.removeEventListener("keydown",this.#S))};#w=()=>{_(this.#v,this.#m),this.#C=T};#D=()=>{_(this.#m,this.#v),this.#b(),this.#C=k};#M=()=>{this.#D(),document.addEventListener("keydown",this.#S)};#E=()=>{this.#w(),document.removeEventListener("keydown",this.#S)};#P=t=>{this.#w(),this.#g(t),document.removeEventListener("keydown",this.#S)};#a=()=>{this.#g({...this.#p,isFavorite:!this.#p.isFavorite})}}class Q extends m{_items=[];_handleItemChange=null;constructor({items:t,onItemChange:e}){super(),this._items=t,this._handleItemChange=e,this.element.addEventListener("change",this.#A)}#A=t=>{t.preventDefault(),this._handleItemChange?.(t.target.dataset.item)}}class tt extends Q{get template(){return(t=>`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${function(t){return t.reduce(((t,{type:e,isDisabled:n,isChecked:i})=>`${t}\n    <div class="trip-sort__item  trip-sort__item--${e}">\n          <input id="sort-${e}"\n          class="trip-sort__input  visually-hidden"\n          type="radio"\n          name="trip-sort"\n          value="sort-${e}"\n          data-item="${e}"\n          ${n?"disabled":""}\n          ${i?"checked":""}>\n          <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n        </div>`),"")}(this._items)}\n  </form>`)()}}class et{#T=null;#k=[];#x=D.DAY;#H=null;constructor({container:t,sortTypeHandler:e}){this.#T=t,this.#k=Object.values(D).map((t=>({type:t,isChecked:t===this.#x,isDisabled:!A[t]}))),this.#H=e}init(){y(new tt({items:this.#k,onItemChange:this.#H}),this.#T)}}const nt=(t,e)=>H()(e.dateFrom).diff(H()(t.dateFrom)),it=(t,e)=>{const n=H()(t.dateTo).diff(H()(t.dateFrom));return H()(e.dateTo).diff(H()(e.dateFrom))-n},st={[D.DAY]:t=>t.toSorted(nt),[D.EVENT]:()=>{throw new Error(`Sort by ${D.EVENT} is disabled`)},[D.TIME]:t=>t.toSorted(it),[D.PRICE]:t=>t.toSorted(undefined.basePrice-undefined.basePrice),[D.OFFER]:()=>{throw new Error(`Sort by ${D.OFFER} is disabled`)}},rt=document.querySelector(".trip-main"),ot=document.querySelector(".trip-events"),at=document.querySelector(".trip-controls__filters"),lt=new class{destinations=[];offers=[];eventPoints=[];constructor(){this.destinations=this.generateDestinations(),this.offers=this.generateOffers(),this.eventPoints=this.generateEventPoints()}getDestinations(){return this.destinations}getOffers(){return this.offers}getEventPoints(){return this.eventPoints}generateDestinations(){return Array.from({length:w.length},Z)}generateOffers(){return E.map((t=>({type:t,offers:Array.from({length:B(1,5)},W)})))}generateEventPoints(){return Array.from({length:E.length},(()=>{const t=L(E),e=L(this.destinations),n=this.offers.find((e=>e.type===t)),i=new Set;Array.from({length:B(1,n.offers.length)},(()=>{i.add(L(n.offers))}));const s=i.size>0&&[...i][0]?[...i].map((t=>t.id)):[];return((t,e,n)=>({id:crypto.randomUUID(),basePrice:O(1500),dateFrom:j({next:!1}),dateTo:j({next:!0}),destination:e,isFavorite:N(),offers:n,type:t}))(t,e.id,s)}))}},ct=new class{#d=[];constructor(t){this.service=t,this.#d=this.service.getDestinations()}get(){return this.#d}getById(t){return this.#d.find((e=>e.id===t))}}(lt),dt=new class{#F=[];constructor(t){this.#F=t.getEventPoints()}get(){return this.#F}}(lt),ut=new class{#r=[];constructor(t){this.service=t,this.#r=this.service.getOffers()}get(){return this.#r}getByType(t){return this.#r.find((e=>e.type===t)).offers}}(lt),ht=new class{#I=null;#L=null;#O=null;#F=null;constructor({tripHeaderInfo:t,tripHeaderFilter:e,eventPointsModel:n}){this.#L=t,this.#I=n,this.#F=this.#I.get(),this.#O=e}init(){const t=(e=this.#F,Object.entries(V).map((([t,n])=>({type:t,count:n(e).length,points:n(e)}))));var e;y(new $,this.#L,"afterbegin"),y(new C({filters:t}),this.#O)}}({tripHeaderInfo:rt,tripHeaderFilter:at,eventPointsModel:dt}),ft=new class{#B=null;#y=null;#I=null;#_=null;#x=null;#N=D.DAY;#U=new z;#F=[];#j=new Map;constructor({tripContainer:t,destinationModel:e,eventPointsModel:n,offersModel:i}){this.#B=t,this.#y=e,this.#I=n,this.#_=i}init(){this.#F=[...this.#I.get()],this.#F.length||this.#Y(),this.#q(),this.#R()}#q(){new et({container:this.#B,sortTypeHandler:this.#H}).init()}#V=t=>{this.#x=t,this.#F=st[this.#x](this.#F)};#W=()=>{this.#j.forEach((t=>t.destroy())),this.#j.clear()};#R(){y(this.#U,this.#B),this.#H(this.#N)}#H=t=>{this.#V(t),this.#W(),this.#Z()};#g=t=>{var e,n;this.#F=(e=this.#F,n=t,e.map((t=>t.id===n.id?n:t))),this.#j.get(t.id).init(t)};#b=()=>{this.#j.forEach((t=>t.resetView()))};#Y(){y(new J({massage:"Click New Event to create your first point"}),this.#B)}#Z(){this.#F.forEach((t=>{this.#z(t)}))}#z(t){const e=new G({pointListContainer:this.#U.element,destinationModel:this.#y,offersModel:this.#_,onPointChange:this.#g,onModeChange:this.#b});e.init(t),this.#j.set(t.id,e)}}({tripContainer:ot,destinationModel:ct,eventPointsModel:dt,offersModel:ut});(new class{init(){ht.init(),ft.init()}}).init()})()})();
//# sourceMappingURL=bundle.53efb5b0d45009de8421.js.map