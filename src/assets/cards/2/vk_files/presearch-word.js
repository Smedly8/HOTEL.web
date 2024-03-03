!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.onPageLoad=function(){this.newEvent(e.EVENT__ON_PAGE_LOAD,{})},e.prototype.onSelectPresearchWord=function(t){var n={};n.query=t,this.newEvent(e.EVENT__ON_SELECT_PRESEARCH_WORD,n)},e.prototype.onGetPresearchWordsJSON=function(t,n){var r={};r.query=t,r.words=n,this.newEvent(e.EVENT__ON_GET_PRESEARCH_JSON,r)},e.prototype.newEvent=function(e,t){var n=new CustomEvent(e,{detail:t});window.dispatchEvent(n)},e.EVENT__ON_PAGE_LOAD="presearch-word-event:on-page-load",e.EVENT__ON_SELECT_PRESEARCH_WORD="presearch-word-event:on-select-presearch-word",e.EVENT__ON_GET_PRESEARCH_JSON="presearch-word-event:on-get-presearch-json",e}();t.default=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(new(r(n(3)).default)).register()},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(4)),i=r(n(5)),c=r(n(6)),a=r(n(7)),s=r(n(10)),u=r(n(11)),d=r(n(0)),l=function(){function e(){this.crypter=new i.default,this.URL_PREFIX="/presearch-word/",this.WINDOW_KEY="11601b10-0355-4c9d-b248-72e960a02988"}return e.prototype.register=function(){var e=this;if(!0!==window[this.WINDOW_KEY]&&(window[this.WINDOW_KEY]=!0,window.PresearchWordLogProxy=new d.default,void 0!==window.fetch&&!1!="Promise"in window)){this.ajax=new u.default(this),this.ajax.catch();var t=document.querySelectorAll('script[src*="//analytics.dns"]');Array.prototype.slice.call(t).forEach(function(t){-1!==t.src.indexOf(e.URL_PREFIX)&&(e.serverKey=t.dataset.key,e.serverData=t.dataset.value,e.apiURL=t.src.replace(/^(.*\/\/[^\/]+)\/.*$/,"$1"))});var n=20,r=function(){if("complete"===document.readyState||null!==document.getElementById("bodyLoader"))try{new a.default(e).init()}catch(t){e.onException(t)}else 0!==--n&&setTimeout(r,500)};r(),window.addEventListener(d.default.EVENT__ON_PAGE_LOAD,function(){try{new a.default(e).init()}catch(t){e.onException(t)}})}},e.prototype.onException=function(e){if(e)throw e;var t=document.createElement("link");t.rel="stylesheet",t.href=this.apiURL+this.URL_PREFIX+"?t="+Date.now()+"."+(new Date).getMilliseconds()+"&e="+encodeURIComponent(JSON.stringify(e.stack)).substring(0,2e3),document.head.appendChild(t)},e.prototype.log=function(e){var t=new c.default;t.deviceBrowserWidth=s.default.getBrowserWidth(),t.deviceBrowserHeight=s.default.getBrowserHeight(),t.deviceScreenWidth=s.default.getScreenWidth(),t.deviceScreenHeight=s.default.getScreenHeight();var n=new o.default;n.serverKey=this.serverKey,n.serverData=this.serverData,n.browserData=this.crypter.encode(this.serverKey,JSON.stringify(t)),n.loggerData=this.crypter.encode(this.serverKey,JSON.stringify(e)),fetch(this.apiURL+this.URL_PREFIX,{body:JSON.stringify(n),cache:"no-cache",method:"POST",mode:"cors",redirect:"follow"})},e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.encode=function(e,t){return t=encodeURIComponent(t),t=btoa(t),t=this.rc4(e,t),t=btoa(t)},e.prototype.rc4=function(e,t){var n,r,o,i,c;for(n=[],i=0;i<256;i++)n[i]=i;for(r=0,i=0;i<256;i++)r=(r+n[i]+e.charCodeAt(i%e.length))%256,o=n[i],n[i]=n[r],n[r]=o;i=0,r=0,c="";for(var a=0;a<t.length;a++)r=(r+n[i=(i+1)%256])%256,o=n[i],n[i]=n[r],n[r]=o,c+=String.fromCharCode(t.charCodeAt(a)^n[(n[i]+n[r])%256]);return c},e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.default=r},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(8)),i=r(n(9)),c=r(n(0)),a=function(){function e(e){this.ajaxTerm=null,this.ajaxResponse=null,this.service=e}return e.prototype.init=function(){this.reset();try{this.bindEvents()}catch(e){this.service.onException(e)}},e.prototype.bindEvents=function(){var e=this;void 0!==window.fetch&&(window.addEventListener(c.default.EVENT__ON_SELECT_PRESEARCH_WORD,function(t){var n=t.detail;e.onSelectWord(n.query)}),window.addEventListener(c.default.EVENT__ON_GET_PRESEARCH_JSON,function(t){var n=t.detail,r=new i.default;r.words=n.words,e.ajaxTerm=n.query,e.ajaxResponse=r}),Array.prototype.slice.call(document.querySelectorAll(".presearch")).forEach(function(t){t.addEventListener("click",function(t){if(!1!==t.target.classList.contains("presearch__word-li")){var n=t.target.innerText;e.onSelectWord(n)}})}),this.service.ajax.onFetch(function(t,n,r){-1!==t.indexOf("/catalog/search/presearch/?term=")&&r.json().then(function(n){var r=e.trimSpaces(decodeURI(t.replace(/^.*\?term=(.+)$/,"$1"))),o=!1;Array.prototype.slice.call(document.querySelectorAll(".presearch")).forEach(function(t){var n=t.querySelector('[name="q"]');null!==n&&e.trimSpaces(n.value).toLowerCase()===r.toLowerCase()&&(o=!0)}),o&&(e.ajaxTerm=r,e.ajaxResponse=n)})}))},e.prototype.onSelectWord=function(e){var t=e,n=this.trimSpaces(this.ajaxTerm||""),r=n.split(" "),o=r.pop();this.data.beforePhrase=n.trim(),this.data.beforePhraseLength=n.trim().length,r.push(t);var i=r.join(" ");this.data.basisWord=o,this.data.basisWordIndex=r.length,this.data.suggestWordsCount=(this.ajaxResponse.words||[]).length,this.data.suggestSelectedWord=t,this.data.suggestSelectedIndex=(this.ajaxResponse.words||[]).indexOf(t)+1,this.data.addedWordPercent=Math.round(100*(1-o.length/t.length)),this.data.afterPhrase=i,this.service.log(this.data),this.reset()},e.prototype.reset=function(){this.data=new o.default,this.data.url=document.location.href,this.ajaxTerm=null,this.ajaxResponse=null},e.prototype.trimSpaces=function(e){return e.replace(/\s{2,}/gm," ").replace(/^\s+/gm,"")},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){this.version="1"}}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.getBrowserWidth=function(){try{return window.innerWidth||document.documentElement.clientWidth||document.documentElement.getElementsByTagName("body")[0].clientWidth||0}catch(e){}return 0},e.getBrowserHeight=function(){try{return window.innerHeight||document.documentElement.clientHeight||document.documentElement.getElementsByTagName("body")[0].clientHeight||0}catch(e){}return 0},e.getScreenWidth=function(){return screen.width||0},e.getScreenHeight=function(){return screen.height||0},e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.onFetchCallbacks=[],this.service=e}return e.prototype.catch=function(){var e=this,t=3,n=function(){if(t>0){t--;var r=e.overrideFetch();r,!1===r&&setTimeout(n,300)}};n()},e.prototype.onFetch=function(e){this.onFetchCallbacks.push(e)},e.prototype.overrideFetch=function(){var e=this,t=window.fetch;return void 0!==t&&(!1!="Promise"in window&&(window.fetch=function(n,r){return t(n,r).then(function(t){try{e.onFetchCallbacks.forEach(function(e){e(n,r,t.clone())})}catch(t){e.service.onException(t)}return t})},!0))},e}();t.default=r}]);