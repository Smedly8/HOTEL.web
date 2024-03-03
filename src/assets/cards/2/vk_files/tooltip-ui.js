(()=>{"use strict";var t={96614:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dom_addClasses=void 0,e.Dom_addClasses=function(t,e){e.forEach((function(e){t.classList.add(e)}))}},73200:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=i(o(73649));window.tooltip=new n.default},87424:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TooltipPositionEnum=void 0,function(t){t.BOTTOM="_bottom",t.BOTTOM_LEFT="_bottom-left",t.BOTTOM_RIGHT="_bottom-right",t.LEFT="_left",t.RIGHT="_right",t.TOP="_top",t.TOP_LEFT="_top-left",t.TOP_RIGHT="_top-right"}(e.TooltipPositionEnum||(e.TooltipPositionEnum={}))},73649:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=i(o(74856)),s=o(87424),r=function(){function t(){}return t.prototype.drawByIdTop=function(t,e,o){return this.drawTop(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdTopLeft=function(t,e,o){return this.drawTopLeft(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdTopRight=function(t,e,o){return this.drawTopRight(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdRight=function(t,e,o){return this.drawRight(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdBottom=function(t,e,o){return void 0===o&&(o={}),this.drawBottom(document.getElementById(t),document.getElementById(e),void 0,o)},t.prototype.drawByIdBottomLeft=function(t,e,o){return this.drawBottomLeft(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdBottomRight=function(t,e,o){return this.drawBottomRight(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawByIdLeft=function(t,e,o){return this.drawLeft(document.getElementById(t),document.getElementById(e),o)},t.prototype.drawTop=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.TOP,o,i)},t.prototype.drawTopLeft=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.TOP_LEFT,o,i)},t.prototype.drawTopRight=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.TOP_RIGHT,o,i)},t.prototype.drawRight=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.RIGHT,o,i)},t.prototype.drawBottom=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.BOTTOM,o,i)},t.prototype.drawBottomLeft=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.BOTTOM_LEFT,o,i)},t.prototype.drawBottomRight=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.BOTTOM_RIGHT,o,i)},t.prototype.drawLeft=function(t,e,o,i){return this.draw(t,e,s.TooltipPositionEnum.LEFT,o,i)},t.prototype.draw=function(t,e,o,i,s){return null===t?null:new n.default(t,e,o,i,s).init()},t}();e.default=r},74856:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=i(o(80138)),s=o(96614),r=o(87424),E=function(){function t(t,e,o,i,n){this._element=t,this._content=e,this._position=o,this._offset=i,this._options=n,this.BLOCK_CLASS="tooltip-ui",this.MODIFIER_TOOLTIP_HIDDEN="_hidden",this._tooltip=null,this._hideTimeout=0}return t.prototype.init=function(){var t=this;if("string"==typeof this._content){var e=document.createElement("div");e.innerHTML=this._content,this._content=e}else this._content.removeAttribute("hidden"),this._content.remove();return(new n.default).isDesktop?(this._mouseEnterHandler=this.show.bind(this),this._element.addEventListener("mouseenter",this._mouseEnterHandler),this._mouseLeaveHandler=this.hide.bind(this),this._element.addEventListener("mouseleave",this._mouseLeaveHandler)):"1"!==this._element.dataset.hideMobileTooltip&&this._element.addEventListener("click",(function(){t.show(),setTimeout((function(){t.hide()}),3e3)})),this},t.prototype.initTooltipElement=function(){var t=this;if(this._tooltip)return this._tooltip;this._tooltip=document.createElement("span");var e=[this.BLOCK_CLASS,this.BLOCK_CLASS+this.MODIFIER_TOOLTIP_HIDDEN,this.BLOCK_CLASS+this._position];return-1!==[r.TooltipPositionEnum.BOTTOM_LEFT,r.TooltipPositionEnum.BOTTOM_RIGHT].indexOf(this._position)&&e.push(this.BLOCK_CLASS+r.TooltipPositionEnum.BOTTOM),-1!==[r.TooltipPositionEnum.TOP_LEFT,r.TooltipPositionEnum.TOP_RIGHT].indexOf(this._position)&&e.push(this.BLOCK_CLASS+r.TooltipPositionEnum.TOP),this._options&&this._options.hasOwnProperty("class")&&this._options.class.split(" ").forEach((function(t){e.push(t)})),(0,s.Dom_addClasses)(this._tooltip,e),this._tooltip.appendChild(this._content),this._content.removeAttribute("hidden"),document.body.appendChild(this._tooltip),this.calcPosition(),this._tooltip.addEventListener("mouseleave",(function(){t.hide()})),this._tooltip.addEventListener("mouseenter",(function(){t.show()})),this._tooltip},t.prototype.show=function(){clearTimeout(this._hideTimeout),this.initTooltipElement(),this._tooltip.classList.remove(this.BLOCK_CLASS+this.MODIFIER_TOOLTIP_HIDDEN),window.addEventListener("scroll",this.recalcPositionOnScroll.bind(this))},t.prototype.destroy=function(){this._element.removeEventListener("mouseenter",this._mouseEnterHandler),this._element.removeEventListener("mouseleave",this._mouseLeaveHandler),this._tooltip&&this._tooltip.remove()},t.prototype.recalcPositionOnScroll=function(){this._tooltip&&this.calcPosition()},t.prototype.hide=function(){var t=this;clearTimeout(this._hideTimeout),this._tooltip&&(this._hideTimeout=setTimeout((function(){document.body.removeChild(t._tooltip),t._tooltip=null,window.removeEventListener("scroll",t.recalcPositionOnScroll.bind(t))}),10))},t.prototype.calcPosition=function(){var t=0,e=0,o=this._tooltip.offsetHeight,i=this._tooltip.offsetWidth,n=this._element.getBoundingClientRect(),s=this._element.offsetHeight,E=this._element.offsetWidth,u=window.pageYOffset+n.top,T=window.pageXOffset+n.left;switch(this._position){case r.TooltipPositionEnum.TOP:case r.TooltipPositionEnum.TOP_LEFT:case r.TooltipPositionEnum.TOP_RIGHT:t=u-o-0;break;case r.TooltipPositionEnum.LEFT:case r.TooltipPositionEnum.RIGHT:t=u+s/2-o/2;break;case r.TooltipPositionEnum.BOTTOM:case r.TooltipPositionEnum.BOTTOM_LEFT:case r.TooltipPositionEnum.BOTTOM_RIGHT:t=u+s+0}switch(this._position){case r.TooltipPositionEnum.TOP:case r.TooltipPositionEnum.TOP_LEFT:case r.TooltipPositionEnum.BOTTOM:case r.TooltipPositionEnum.BOTTOM_LEFT:e=T+E/2-i/2;break;case r.TooltipPositionEnum.BOTTOM_RIGHT:case r.TooltipPositionEnum.TOP_RIGHT:e=T-i/2+E-i;break;case r.TooltipPositionEnum.LEFT:e=T-i-0;break;case r.TooltipPositionEnum.RIGHT:e=T+E+0}switch(this._position){case r.TooltipPositionEnum.TOP_LEFT:case r.TooltipPositionEnum.BOTTOM_LEFT:e-=i/2-0-0;break;case r.TooltipPositionEnum.TOP_RIGHT:case r.TooltipPositionEnum.BOTTOM_RIGHT:e+=i/2-0-0}this._offset&&(e+=this._offset.left||0,t+=this._offset.top||0),this._tooltip.style.top=t+"px",this._tooltip.style.left=e+"px"},t}();e.default=E},42601:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ScreenTypes=void 0,function(t){t[t.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",t[t.SCREEN_WIDE=1]="SCREEN_WIDE",t[t.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",t[t.SCREEN_TABLET=3]="SCREEN_TABLET",t[t.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(e.ScreenTypes||(e.ScreenTypes={}))},80138:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=o(42601),n=function(){function t(){var t=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(e){e=e||window;var o=!1;e.addEventListener(t.EVENT_RESIZE,(function(){o||(o=!0,requestAnimationFrame((function(){e.dispatchEvent(new CustomEvent(t.EVENT_OPTIMIZED_RESIZE));var i=t.calcCurrent();t._currentScreenType!==i&&(t._currentScreenType=i,e.dispatchEvent(new CustomEvent(t.EVENT_SCREEN_TYPE_CHANGED))),o=!1})))}))}}return Object.defineProperty(t.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!1,configurable:!0}),t.prototype.calcCurrent=function(){var t=document.querySelector('meta[name="screen-type-helper"]');if(null!==t)return parseInt(t.content,10);var e=window.matchMedia;if(e){if(e("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_WIDE;if(e("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_DESKTOP;if(e("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_TABLET;if(e("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return i.ScreenTypes.SCREEN_MOBILE}else{var o=window.innerWidth;if(o>this.SCREEN_DESKTOP_MAX_WIDTH)return i.ScreenTypes.SCREEN_WIDE;if(o>this.SCREEN_TABLET_MAX_WIDTH)return i.ScreenTypes.SCREEN_DESKTOP;if(o>this.SCREEN_MOBILE_MAX_WIDTH)return i.ScreenTypes.SCREEN_TABLET;if(o>=this.SCREEN_MOBILE_MIN_WIDTH)return i.ScreenTypes.SCREEN_MOBILE}return i.ScreenTypes.SCREEN_NOT_SUPPORTED},t.prototype.check=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var o=0,i=t;o<i.length;o++){var n=i[o];if(n===this.current)return!0}return!1},Object.defineProperty(t.prototype,"isDesktop",{get:function(){return this.check(i.ScreenTypes.SCREEN_DESKTOP,i.ScreenTypes.SCREEN_WIDE)},enumerable:!1,configurable:!0}),t.prototype.addResizeListener=function(t){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,t)},t.prototype.removeResizeListener=function(t){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,t)},t.prototype.addChangeScreenTypeListener=function(t){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,t)},t.prototype.removeChangeScreenTypeListener=function(t){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,t)},t}();e.default=n}},e={};(function o(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,o),s.exports})(73200)})();