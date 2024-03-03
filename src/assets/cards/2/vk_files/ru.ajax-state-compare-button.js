(()=>{"use strict";var e={96614:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_addClasses=void 0,t.Dom_addClasses=function(e,t){t.forEach((function(t){e.classList.add(t)}))}},90804:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxStateProcessorAbstract=void 0;var n=o(96614),r=function(){function e(){var e=this;this._waitingElements=[],this.addWaitingState=function(t){(0,n.Dom_addClasses)(t,["ajs-placeholder","ajs-placeholder_waiting"]),e._waitingElements.push(t)}}return Object.defineProperty(e.prototype,"service",{set:function(e){this._service=e},enumerable:!1,configurable:!0}),e.prototype.needGetStateAfterBuild=function(e){return!0},e.prototype.refreshOnlyAfterUserActivity=function(e){return!1},e.prototype.afterRefresh=function(e){this._waitingElements.forEach((function(e){setTimeout((function(){e.classList.remove("ajs-placeholder_waiting")})),setTimeout((function(){e.classList.remove("ajs-placeholder")}),1e3)})),this._waitingElements=[]},e}();t.AjaxStateProcessorAbstract=r},66993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompareButtonEventsEnum=void 0,function(e){e.ADD="compare-button:add"}(t.CompareButtonEventsEnum||(t.CompareButtonEventsEnum={}))},73594:function(e,t,o){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CompareButtonProcessor=void 0;var c=o(81825),u=o(64294),_=o(6543),p=a(o(80138)),d=o(91757),l=o(78296),E=o(90804),h=o(66993),v=o(1975),f=o(42157),m=function(e){function t(){var t=e.call(this)||this;return t._products=new Map,t._checkboxes=new Map,t._popovers=new Map,t._productsList=new Map,t._screen=new p.default,t._storage=window.compareStorage,window.addEventListener(c.CompareStorageEventsEnum.CLEAR,(function(){t.destroyPopovers(),t._checkboxes.forEach((function(e){e.toggle(!1,!1)}))})),t}return r(t,e),t.prototype.build=function(e){var t=this,o=e.data;this.render(e),this._products.set(e.id,o.product),this.loadProducts(o.product).then((function(o){o&&t._service.updateState(e.id)}))},t.prototype.needGetStateAfterBuild=function(e){return!1},t.prototype.refresh=function(e,t){},t.prototype.afterRefresh=function(t){var o=this;e.prototype.afterRefresh.call(this,t);var n=t.data;this._productsList.clear(),n.products.forEach((function(e){o._productsList.set(e.id,e)})),this.initDesktopPopovers()},t.prototype.initDesktopPopovers=function(){return i(this,void 0,void 0,(function(){var e,t=this;return s(this,(function(o){switch(o.label){case 0:return e=!1,[4,this.loadProducts()];case 1:return e===o.sent()?(this.destroyPopovers(),[2]):(this._products.forEach((function(e,o){return i(t,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._isActive(e)];case 1:return t.sent()||this._popovers.has(o)&&this._popovers.get(o).isShowed?this.initDesktopPopover(o,o===this._lastUpdateInitiator):this.destroyPopovers(o),[2]}}))}))})),[2])}}))}))},t.prototype._isActive=function(e){return i(this,void 0,Promise,(function(){return s(this,(function(t){return[2,this._storage.has(e)]}))}))},t.prototype.render=function(e){var t=this,o=e.data,n=document.getElementById(e.id);if(null!==n){var r={};r.label=f.__Сравнить;var a=document.createElement("span");a.classList.add("compare-checkbox");var u=window.controlCheckbox.draw(a,r);this._checkboxes.set(e.id,u),n.parentElement.insertBefore(a,n),u.input.addEventListener("change",(function(){return i(t,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return this.hideAllPopovers(),[4,this._toggleState(o.product,e.id)];case 1:return t.sent(),[4,this._isActive(o.product)];case 2:return t.sent()&&(0,_.domDispatchEvent)(h.CompareButtonEventsEnum.ADD,u.input),[2]}}))}))}));var p=function(){return i(t,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return t=(e=u).toggle,[4,this._isActive(o.product)];case 1:return t.apply(e,[n.sent(),!1]),[2]}}))}))};p(),window.addEventListener(c.CompareStorageEventsEnum.UPDATE,p),n.remove()}},t.prototype.hideAllPopovers=function(){this._popovers.forEach((function(e){e.toggle(!1)}))},t.prototype.showMobileMessage=function(){return i(this,void 0,void 0,(function(){var e,t,o,n,r;return s(this,(function(i){switch(i.label){case 0:return this._lastUpdateInitiator?this._screen.isDesktop||window.IS_TERMINAL_MODE?[2]:[4,this._storage.isEmpty()]:[2];case 1:return i.sent()?[2]:(o=(t=f.__В_сравнении_товаров).replace,n=["{count-form}"],r=u.stringCountPostfix,[4,this._storage.count()]);case 2:return e=[o.apply(t,n.concat([r.apply(void 0,[i.sent(),f.__В_сравнении_товаров_count_form.split("|")])])),'<a href="/compare/" class="compare-popup__link">'.concat(f.__Смотреть,"</a>")].join(" "),window.popup.show(e,"compare-popup"),[2]}}))}))},t.prototype.initDesktopPopover=function(e,t){var o=this;if(this._popovers.has(e))this._popovers.get(e).content=this.initPopoverContent(e);else{var n=this._checkboxes.get(e).element,r=window.popoverBlock.draw(n,"",{class:"compare-popover"},{placement:l.PopoverPlacementsEnum.AUTO_Y,inBody:!0,trigger:"hover"});r.beforeShowCallback=function(){r.content=o.initPopoverContent(e)},t&&this._lastUpdateInitiator===e&&r.toggle(!0,2e3),this._popovers.set(e,r)}},t.prototype.initPopoverContent=function(e){var t=this;if(0===this._productsList.size)return null;var o=document.createElement("div");o.classList.add("compare-popover__container");var n=window.button.create(f.__Сравнить,d.ButtonColorModifiers.BRAND,{href:"/compare/",class:"compare-popover__btn"}),r=document.createElement("div");r.classList.add("compare-popover__products-list");var i=function(){4<t._productsList.size&&r.classList.add("compare-popover__products-list_scrollable")};i(),this._productsList.forEach((function(e,o){var n=window.links.createLinkBase("",e.url);n.classList.add("compare-popover__product");var s=document.createElement("div");s.classList.add("compare-popover__wrap-image"),n.appendChild(s);var a=document.createElement("img");a.src=e.image,a.classList.add("compare-popover__product-image"),s.appendChild(a);var c=document.createElement("span");c.innerText=e.title,c.classList.add("compare-popover__product-title"),n.appendChild(c);var u=document.createElement("span");u.classList.add("compare-popover__product-remove-link"),u.addEventListener("click",(function(r){r.preventDefault(),t._storage.remove([e.id]),t._productsList.delete(o),n.remove(),i()})),n.appendChild(u),r.appendChild(n)})),o.appendChild(r);var s=document.createElement("div");s.classList.add("compare-popover__buttons");var a=window.button.create(f.__Очистить_список,d.ButtonColorModifiers.GREY,{class:"compare-popover__btn"});return a.element.addEventListener("click",(function(e){e.preventDefault(),t._storage.clear(),t.destroyPopovers(),t._productsList.clear()})),s.appendChild(a.element),s.appendChild(n.element),o.appendChild(s),o},t.prototype.destroyPopovers=function(e){e?this._popovers.has(e)&&(this._popovers.get(e).destroy(),this._popovers.delete(e)):(this._popovers.forEach((function(e){e.destroy()})),this._popovers.clear())},t.prototype.loadProducts=function(e){return i(this,void 0,Promise,(function(){var t;return s(this,(function(o){switch(o.label){case 0:return!1===this._screen.isDesktop?[2,!1]:e?[2,this._storage.has(e)]:(t=!1,[4,this._storage.isEmpty()]);case 1:return[2,t===o.sent()]}}))}))},t.prototype._toggleState=function(e,t){return i(this,void 0,Promise,(function(){var o,n,r,i,a,c,u,_=this;return s(this,(function(s){switch(s.label){case 0:return[4,this._storage.count()];case 1:return o=s.sent(),n=!1,[4,this._isActive(e)];case 2:return n!==s.sent()?[3,4]:[4,this._storage.add([e])];case 3:return s.sent(),[3,6];case 4:return[4,this._storage.remove([e])];case 5:s.sent(),this.destroyPopovers(t),this._productsList.delete(e),s.label=6;case 6:return(r=this._lastUpdateInitiator!==t)?[3,8]:(i=!1,[4,this._storage.has(e)]);case 7:r=i===s.sent(),s.label=8;case 8:return r&&(this._lastUpdateInitiator=t,this.destroyPopovers()),a=window.compareListExpire,(c=a&&0===o)?(u=0,[4,this._storage.count()]):[3,10];case 9:c=u!==s.sent(),s.label=10;case 10:return c?(new v.CompareLoginModal(a,(function(){window.compareListExpire=void 0,_._showAdded(t)})).show(),[3,13]):[3,11];case 11:return[4,this._showAdded(t)];case 12:s.sent(),s.label=13;case 13:return[2]}}))}))},t.prototype._showAdded=function(e){return i(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.loadProducts()];case 1:return t.sent()&&this._service.updateState(e),[4,this.showMobileMessage()];case 2:return t.sent(),[2]}}))}))},t}(E.AjaxStateProcessorAbstract);t.CompareButtonProcessor=m},1975:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompareLoginModal=void 0;var n=o(40891),r=o(6543),i=o(91757),s=o(42157),a=function(){function e(e,t){this._removeDate=e,this._onClose=t}return e.prototype.show=function(){var e=window.modalProvider.getInstance({id:"compare-login-modal",modalClass:"compare-login-modal",headerHtml:s.__Список_сравнения,bottomSheet:!0,contentHtml:"\n\t\t\t\t<div>".concat(s.__Список_удалится_ДАТА.replace("{date}",this._removeDate),"</div>\n\t\t\t\t<div>").concat(s.__Войдите_в_профиль,"</div>\n\t\t\t"),removeOnHidden:!0,contentPadded:!0});e.onHidden(this._onClose),this.initializeButtons(e),e.show()},e.prototype.initializeButtons=function(e){var t=window.button.create(s.__Войти_в_профиль,i.ButtonColorModifiers.BRAND,{class:"compare-login-modal__login-btn"});t.element.addEventListener("click",(function(){e.remove(),(0,r.domDispatchEvent)(n.EVENT_CREATE_AUTH_MODAL)})),e.getContent().appendChild(t.element)},e}();t.CompareLoginModal=a},42157:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["__Список_сравнения"]=t["__Войти_в_профиль"]=t["__Войдите_в_профиль"]=t["__Список_удалится_ДАТА"]=t["__Очистить_список"]=t["__В_сравнении_товаров_count_form"]=t["__В_сравнении_товаров"]=t["__Смотреть"]=t["__Сравнить"]=void 0,t["__Сравнить"]="Сравнить",t["__Смотреть"]="Смотреть",t["__В_сравнении_товаров"]="В сравнении {count-form}",t["__В_сравнении_товаров_count_form"]="товар|товара|товаров",t["__Очистить_список"]="Очистить список",t["__Список_удалится_ДАТА"]="Список удалится: {date}",t["__Войдите_в_профиль"]="Войдите в профиль, чтобы сохранить",t["__Войти_в_профиль"]="Войти в профиль",t["__Список_сравнения"]="Список сравнения"},91757:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonColorModifiers=void 0,function(e){e.WHITE="_white",e.BRAND="_brand",e.BLUE="_blue",e.GREY="_grey"}(t.ButtonColorModifiers||(t.ButtonColorModifiers={}))},78296:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopoverPlacementsEnum=void 0,function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right",e.AUTO="auto",e.AUTO_X="auto-x",e.AUTO_Y="auto-y"}(t.PopoverPlacementsEnum||(t.PopoverPlacementsEnum={}))},40891:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT_ON_LOGIN=t.SELECTOR_AUTH_MODAL_RENDER_CONTAINER=t.EVENT_CREATE_AUTH_MODAL=t.EVENT_DESTROY_AUTH_MODAL=t.EVENT_CLOSE_AUTH_MODAL=t.EVENT_RENDER_AUTH_MODAL=void 0,t.EVENT_RENDER_AUTH_MODAL="event-render-auth-modal",t.EVENT_CLOSE_AUTH_MODAL="event-close-auth-modal",t.EVENT_DESTROY_AUTH_MODAL="event-destroy-auth-modal",t.EVENT_CREATE_AUTH_MODAL="event-create-auth-modal",t.SELECTOR_AUTH_MODAL_RENDER_CONTAINER="auth-modal-render-container",t.EVENT_ON_LOGIN="onlogin"},81825:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompareStorageEventsEnum=void 0,function(e){e.UPDATE="compareStorage:UPDATE",e.CLEAR="compareStorage:CLEAR"}(t.CompareStorageEventsEnum||(t.CompareStorageEventsEnum={}))},64294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stringCountPostfix=void 0,t.stringCountPostfix=function(e,t,o,n){if(void 0===o&&(o=!1),0===e&&void 0!==n)return n;var r=0,i=e%10,s=e%100;2<=i&&i<=4&&(r=1),(0===i||i>=5&&i<=9||s>=11&&s<=19)&&(r=2);var a=t[Math.min(r,t.length)]||"";return o?a:e+" "+a}},6543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.domDispatchEvent=void 0,t.domDispatchEvent=function(e,t,o){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,o),void 0===t?window.dispatchEvent(n):t.dispatchEvent(n)}},42601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenTypes=void 0,function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},80138:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=o(42601),r=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){t=t||window;var o=!1;t.addEventListener(e.EVENT_RESIZE,(function(){o||(o=!0,requestAnimationFrame((function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var n=e.calcCurrent();e._currentScreenType!==n&&(e._currentScreenType=n,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),o=!1})))}))}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!1,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return n.ScreenTypes.SCREEN_MOBILE}else{var o=window.innerWidth;if(o>this.SCREEN_DESKTOP_MAX_WIDTH)return n.ScreenTypes.SCREEN_WIDE;if(o>this.SCREEN_TABLET_MAX_WIDTH)return n.ScreenTypes.SCREEN_DESKTOP;if(o>this.SCREEN_MOBILE_MAX_WIDTH)return n.ScreenTypes.SCREEN_TABLET;if(o>=this.SCREEN_MOBILE_MIN_WIDTH)return n.ScreenTypes.SCREEN_MOBILE}return n.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=0,n=e;o<n.length;o++){var r=n[o];if(r===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(n.ScreenTypes.SCREEN_DESKTOP,n.ScreenTypes.SCREEN_WIDE)},enumerable:!1,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.default=r}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}var n;n=o(73594),window.AjaxState.processors.register("compare-button",new n.CompareButtonProcessor)})();