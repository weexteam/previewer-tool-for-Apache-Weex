console.log('START WEEX VUE RENDER: 0.11.2, Build 2017-03-28 15:22.');


(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.WeexVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n",undefined);

__$styleInject(".weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-a {\n  text-decoration: none;\n}\n\nbody > .weex-div {\n  min-height: 100%;\n}\n\n.weex-input, .weex-textarea {\n  font-size: 0.426667rem;\n}\n.weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n\n.weex-image, .weex-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.amfe-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\nbody > .weex-list,\nbody > .weex-scroller {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper {\n  overflow-y: scroll !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner {\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n}\n\n.weex-scroller-inner::-webkit-scrollbar {\n    width: 0;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.iossticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1.0rem;\n  height: 1.0rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1.0rem, 0, 0);\n          transform: translate3d(1.0rem, 0, 0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n\n.weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",undefined);

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$1            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process            = global$4.process;
var $Promise           = global$4[PROMISE];
var process            = global$4.process;
var isNode             = classof$1(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var event$1 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event, meta);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var geolocation$1 = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$1);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var pageInfo$1 = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var storage$1 = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$1 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$3 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$1;
var objectAssign = index$3;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body || null);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var stream$1 = {
  init: function (Weex) {
    utils = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$4);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var clipboard$1 = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$5);
  }
};

/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Mix specified properties into target object.
 */
function extendKeys (to, from, keys) {
  if (!from) { return to }
  (keys || []).forEach(function (key) {
    to[key] = from[key];
  });
  return to
}

/**
 * Extract specified properties from src to target object.
 */
function extractKeys (to, from, keys) {
  if (!from) { return to }
  (keys || []).forEach(function (key) {
    to[key] = from[key];
    delete from[key];
  });
  return to
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress (func, wait) {
  var timerId;
  function later () {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle (func, wait, callLastTime, tag) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25);  // plus half wait time.
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  }
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent (context, type, props) {
  var event = new Event(type, { bubbles: false });
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent (context, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  // TODO: event.target is readonly
  Object.defineProperty(event, 'target', {
    enumerable: true,
    value: context || null
  });

  return event
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent (dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

function getParentScroller (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller(vnode.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

/**
 * [isElementVisible description]
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible (el, container) {
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = (container === document.body)
    ? bodyRect : container
    ? container.getBoundingClientRect() : bodyRect;
  return hasIntersection(
    el.getBoundingClientRect(),
    ctRect)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      return hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      )
    }
    else {
      return isElementVisible(component.$el)
    }
  }
  return false
}

// TODO: improve the efficiency
function watchAppear (context) {
  if (!context) { return null }

  context.$nextTick(function () {
    if ((context.$options && context.$options._parentListeners)
      || (context.$vnode && context.$vnode.data && context.$vnode.data.on)) {
      var on = extend({}, context.$options._parentListeners, context.$vnode.data.on);
      if (on.appear || on.disappear) {
        var scroller = getParentScroller(context);
        var isWindow = false;
        var container = window;
        if (scroller && scroller.$el) {
          container = scroller.$el;
        }
        else {
          isWindow = true;
        }
        var lastScrollTop = container.scrollTop || window.pageYOffset;

        context._visible = isElementVisible(context.$el, isWindow ? document.body : container);
        if (context._visible && on.appear) {
          if (on.appear.fn) {
            on.appear = on.appear.fn;
          }
          on.appear(createEvent(context.$el, 'appear', { direction: null }));
        }
        var handler = throttle(function (event) {
          var visible = isElementVisible(context.$el, isWindow ? document.body : container);
          var listener = null;
          var type = null;
          if (visible !== context._visible) {
            context._visible = visible;
            if (visible) {
              listener = on.appear;
              type = 'appear';
            }
            else {
              listener = on.disappear;
              type = 'disappear';
            }
            if (listener && listener.fn) {
              listener = listener.fn;
            }
            var scrollTop = container.scrollTop || window.pageYOffset;
            listener && listener(createEvent(context.$el, type, {
              direction: scrollTop < lastScrollTop ? 'down'
                : scrollTop > lastScrollTop ? 'up' : null
            }));
            lastScrollTop = scrollTop;
          }
        }, 25, true);

        container.addEventListener('scroll', handler, false);
      }
    }
  });
}

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

var ARRAY_STRING = '[object Array]';
function isArray (arr) {
  return toString$2.call(arr) === ARRAY_STRING
}

/**
 * @fileOverview: perf data recorder.
 */

// performance tracker for weex.
var perf = window._weex_perf = {
  earliestBeforeCreates: [],
  latestMounts: [],
  earliestBeforeUpdates: [],
  latestUpdates: [],
  latestRenderFinishes: [],
  // createTime: earliest beforeCreate -> latest mounted.
  createTime: [],
  // updateTime: earliest beforeUpdate -> latest updated.
  updateTime: [],
  // renderTime: earliest beforeCreate/beforeUpdate -> latest img loaded.
  renderTime: [],
  entries: [],
  time: {}
};

var tmp = {};

var IMG_REC_INDENT = 500;  // record loading events after 500ms towards last recording.

var earliestBeforeUpdateTime = 0;
var earliestBeforeCreateTime = 0;

function getNow () {
  return performance.now ? performance.now() : new Date().getTime()
}

function getEntries () {
  return performance.getEntries
    ? performance.getEntries()
    : [{ responseEnd: getNow() - IMG_REC_INDENT }]
}

/**
 * get first screen time.
 */
var debouncedTagImg = debounce(function () {
  var entries = getEntries();
  var len = entries.length;
  var i = 0;
  var end = 0;
  while (i < len) {
    var responseEnd = entries[i].responseEnd;
    end = end < responseEnd ? responseEnd : end;
    perf.entries.push({
      requestStart: entries[i].requestStart,
      responseEnd: responseEnd
    });
    i++;
  }
  perf.latestRenderFinishes.push(end);
  var start = Math.max(earliestBeforeCreateTime, earliestBeforeUpdateTime);
  perf.renderTime.push({
    start: start,
    end: end,
    duration: end - start
  });

  var num = perf.renderTime.length;
  perf[("screenTime" + num)] = end;
  weex.emit('renderfinish', end);
  {
    console.log(("screenTime[" + num + "]: " + end + " ms."));
    console.log('_weex_perf:', window._weex_perf);
  }
}, IMG_REC_INDENT);

function tagImg () {
  debouncedTagImg();
}

/**
 * recording the earliest 'beforeCreate' time.
 */
var depressedTagBeforeCreate = depress(function () {
  var now = getNow();
  earliestBeforeCreateTime = now;
  perf.earliestBeforeCreates.push(now);
}, 25);

function tagBeforeCreate () {
  depressedTagBeforeCreate();
}

/**
 * recording the latest 'mounted' time.
 */
var debouncedTagMounted = debounce(function () {
  var now = getNow();
  perf.latestMounts.push(now);
  perf.createTime.push({
    start: earliestBeforeCreateTime,
    end: now,
    duration: now - earliestBeforeCreateTime
  });

  if (!perf.firstAllMountedTime) {
    perf.firstAllMountedTime = now;
    {
      console.log(("first all mounted time: " + now + " ms."));
    }
  }
}, 25);

function tagMounted () {
  debouncedTagMounted();
}

/**
 * recording the earliest 'beforeUpdate' time.
 */
var depressedTagBeforeUpdate = depress(function () {
  var now = getNow();
  earliestBeforeUpdateTime = now;
  perf.earliestBeforeUpdates.push(now);
}, 25);

function tagBeforeUpdate () {
  depressedTagBeforeUpdate();
}

/**
 * recording the latest 'updated' time.
 */
var debouncedTagUpdated = debounce(function () {
  var now = getNow();
  perf.latestUpdates.push(now);
  perf.updateTime.push({
    start: earliestBeforeUpdateTime,
    end: now,
    duration: now - earliestBeforeUpdateTime
  });
}, 25);

function tagUpdated () {
  debouncedTagUpdated();
}

function tagBegin (name) {
  tmp[name] = getNow();
}

function tagEnd (name) {
  var pre = perf.time[name];
  if (!pre) {
    pre = 0;
  }
  perf.time[name] = pre + getNow() - tmp[name];
}

var SCREEN_REC_LIMIT = 3;  // just record the first 3 times for screen-render finishing.
var doRecord = true;

function preLoadImg (src, loadCallback, errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc (item, src, placeholderSrc) {
  if (!src) { return }
  function finallCb () {
    item.removeAttribute('img-src');
    if (doRecord) {
      if (window._weex_perf.renderTime.length < SCREEN_REC_LIMIT) {
        tagImg(); // tag lastest img onload time.
      }
      else {
        doRecord = false;
      }
    }
  }
  preLoadImg(src, function () {
    item.style.backgroundImage = "url(" + src + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    dispatchEvent(item, createEvent(item, 'load', { naturalWidth: naturalWidth, naturalHeight: naturalHeight }));
    finallCb();
  }, function () {
    dispatchEvent(item, createEvent(item, 'error'));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + placeholderSrc + ")";
      });
    }
    finallCb();
  });
}

function fireLazyload (el, ignoreVisibility) {
  if (isArray(el)) {
    return el.forEach(function (ct) { return fireLazyload(ct); })
  }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else if (isElementVisible(img, el)) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    // In somecases there are images out of the screen in x-axis. There
    // should not be a break point in these cases.
    // else {
    //   // alreay out of view, no need to compare any more.
    //   break
    // }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 0;
function getThrottleLazyload (wait, el) {
  if ( wait === void 0 ) wait = 16;
  if ( el === void 0 ) el = document.body;

  var id = el.dataset.throttleId;
  if (!id) {
    id = _uid$2++;
    el.setAttribute('data-throttle-id', id);
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] ||
    (cache[id][wait] = throttle(
      fireLazyload.bind(this, el),
      parseFloat(wait),
      // true for callLastTime.
      // to trigger once more time after the last throttled function called with a little more delay.
      true)
    );
  return throttled
}

/**
 * remove comments from a cssText.
 */
function trimComment (cssText) {
  return cssText.replace(/(?:\/\*)[^*]*\*\//g, '')
}

var support = null;

function supportSticky () {
  if (support !== null) {
    return support
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support = elementStyle.position.indexOf('sticky') !== -1;
  return support
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

function camelizeKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[camelize(key)] = obj[key];
  }
  return res
}

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function hyphenateKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[hyphenate(key)] = obj[key];
  }
  return res
}

// const vendorsReg = /webkit-|moz-|o-|ms-/
// export function hyphenateStyleKeys (obj) {
//   const res = {}
//   for (const key in obj) {
//     const hk = hyphenate(key).replace(vendorsReg, function ($0) {
//       return '-' + $0
//     })
//     res[hk] = obj[key]
//   }
//   return res
// }

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

function appendStyle (css, styleId, replace) {
  var style = document.getElementById(styleId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    styleId && (style.id = styleId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  var cssText = '';
  if (object) {
    for (var key in object) {
      cssText += (hyphenate(key)) + ":" + (object[key]) + ";";
    }
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	camelizeKeys: camelizeKeys,
	capitalize: capitalize,
	hyphenate: hyphenate,
	hyphenateKeys: hyphenateKeys,
	camelToKebab: camelToKebab,
	appendStyle: appendStyle,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	extend: extend,
	extendKeys: extendKeys,
	extractKeys: extractKeys,
	bind: bind,
	debounce: debounce,
	depress: depress,
	throttle: throttle,
	createEvent: createEvent,
	createCustomEvent: createCustomEvent,
	dispatchEvent: dispatchEvent,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isElementVisible: isElementVisible,
	isComponentVisible: isComponentVisible,
	watchAppear: watchAppear,
	applySrc: applySrc,
	fireLazyload: fireLazyload,
	getThrottleLazyload: getThrottleLazyload,
	trimComment: trimComment,
	supportSticky: supportSticky,
	isPlainObject: isPlainObject,
	isArray: isArray
});

function transitionOnce (vnode, config, callback) {
  var duration = config.duration || 1000; // ms
  var timing = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText += toCSSText(config.styles || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    // TODO: Make sure the transition is only run once
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller$1(vnode.$parent)
}

function now () {
  var now = window.performance && window.performance.now
      ? window.performance.now.bind(window.performance) : Date.now;
  return now()
}

function scrollElement (dSuffix, position) {
  this[("scroll" + dSuffix)] = position;
}

/**
 * self invoked function that, given a context, steps through scrolling
 * @method step
 * @param {Object} context
 */
function step$1 (context) {
  // call method again on next available frame
  context.frame = window.requestAnimationFrame(step$1.bind(window, context));

  var time = now();
  var elapsed = (time - context.startTime) / 468;

  // avoid elapsed times higher than one
  elapsed = elapsed > 1 ? 1 : elapsed;

  // apply easing to elapsed time
  var value = ease(elapsed);

  var currentPosition = context.startPosition + (context.position - context.startPosition) * value;

  context.method.call(context.scrollable, context.dSuffix, currentPosition);

  // return when end points have been reached
  if (currentPosition === context.position) {
    window.cancelAnimationFrame(context.frame);
    return
  }
}

/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease (k) {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}

var dom = {
  /**
   * scrollToElement
   * @param  {String} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    var scroller = getParentScroller$1(vnode);
    var scrollDirection = scroller.scrollDirection || 'vertical';

    if (scroller && scroller.$el && vnode.$el) {
      // if it's a list, then the listVnode.scrollDirection is undefined. just
      // assum it is the default value 'vertical'.
      var dSuffix = ({
        horizontal: 'Left',
        vertical: 'Top'
      })[scrollDirection];
      var offset = vnode.$el[("offset" + dSuffix)];

      if (options) {
        offset += Number(options.offset) || 0;
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      step$1({
        scrollable: scroller.$el,
        startTime: now(),
        frame: null,
        startPosition: scroller.$el[("scroll" + dSuffix)],
        position: offset,
        method: scrollElement,
        dSuffix: dSuffix
      });
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    var info = { result: false };

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = vnode.$el.getBoundingClientRect();
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendStyle(styleText, 'dom-added-rules');
  }
};

var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$1 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/**
 * Webview module
 */

var webview = {
  goBack: function goBack (vnode) {
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

// modules from render/browesr
// custom modules
var legacyModules = {
  event: event$1,
  geolocation: geolocation$1,
  pageInfo: pageInfo$1,
  storage: storage$1,
  stream: stream$1,
  clipboard: clipboard$1
};

var modules = {
  animation: animation,
  dom: dom,
  modal: modal,
  navigator: navigator$1,
  webview: webview
};

var modules$1 = {
  init: function init (weex) {
    for (var k in legacyModules) {
      weex.install(legacyModules[k]);
    }
    for (var k$1 in modules) {
      weex.registerModule(k$1, modules[k$1]);
    }
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp;}(window,window.lib||(window.lib={}));

/**
 * viewport priority:
 *
 * 1. meta weex-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var viewportWidth = 750;

var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) { viewportWidth = metaWidth; }

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont (doc, width) {
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = width / 10 + 'px';
  }
}

function setViewport (config) {
  if ( config === void 0 ) config = {};

  var doc = window.document;

  if (doc) {
    // set root font for rem.
    setRootFont(doc, viewportWidth);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     */
    var deRect = document.documentElement.getBoundingClientRect();
    var screenWidth = deRect.width;
    var screenHeight = deRect.height;
    var scale = screenWidth / viewportWidth;

    /**
     * if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     */
    var contents = [
      ("width=" + viewportWidth),
      // `initial-scale=${scale}`,
      // `maximum-scale=${scale}`,
      // `minimum-scale=${scale}`,
      "user-scalable=no"
    ];

    var meta = doc.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = doc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.querySelector('head').appendChild(meta);
    }
    meta.setAttribute('content', contents.join(','));

    var dpr = window.devicePixelRatio;

    return {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    }
  }
}

var scaleInfo = setViewport();

var lib$1 = window.lib;
var env = {
  platform: 'Web',
  // weexVersion: '0.10.0', // TODO: get version from package.json (not sure)
  weexVersion: '0.11.2',
  userAgent: navigator.userAgent,
  appName: lib$1.env.aliapp ? lib$1.env.aliapp.appname : navigator.appName,
  appVersion: lib$1.env.aliapp ? lib$1.env.aliapp.version.val : null,
  osName: lib$1.env.browser ? lib$1.env.browser.name : null,
  osVersion: lib$1.env.browser ? lib$1.env.browser.version.val : null,
  deviceModel: lib$1.env.os.name || null
};

/**
 * scaleInfo: scale, deviceWidth, deviceHeight.
 */
extend(env, scaleInfo);

// 750 by default currently
var scale = env.scale;

var units = {
  REM: 12 * scale,
  VW: env.deviceWidth / 100,
  VH: env.deviceHeight / 100,
  VMIN: Math.min(env.deviceWidth, env.deviceHeight) / 100,
  VMAX: Math.max(env.deviceWidth, env.deviceHeight) / 100,
  CM: 96 / 2.54 * scale,
  MM: 96 / 25.4 * scale,
  Q: 96 / 25.4 / 4 * scale,
  IN: 96 * scale,
  PT: 96 / 72 * scale,
  PC: 96 / 6 * scale,
  PX: scale
};

Object.freeze(units);
// Object.freeze(env)

window.CSS_UNIT = units;
window.WXEnvironment = env;

/* global Vue */

var weexModules = {};

var weex$3 = {
  __vue__: null,
  utils: utils$1,
  units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  requireModule: function requireModule (moduleName) {
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  registerComponent: function registerComponent (name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
}; ['on', 'once', 'off', 'emit'].forEach(function (method) {
  weex$3[method] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!this._vue) {
      this._vue = new Vue();
    }
    return (ref = this._vue)[("$" + method)].apply(ref, args)
    var ref;
  };
});

// import 'lazyimg'
// register built-in modules.
weex$3.install(modules$1);

function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  weex$3.__vue__ = vue;
  console.log(("[Vue Render] install Vue " + (vue.version) + "."));
}

window.weex = weex$3;
window.global = window;

// import { validateStyles } from '../validator'

var _switch = {
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      staticClass: this.wrapperClass,
      on: {
        click: function (event) {
          this$1.$emit('click', event);
          this$1.toggle();
        }
      }
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  }
};

// import { validateStyles } from '../validator'

var a = {
  props: {
    href: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:a', {
      attrs: {
        'weex-type': 'a',
        href: this.href
      },
      on: this._createEventMap(),
      staticClass: 'weex-a weex-ct'
    }, this.$slots.default)
  }
};

// import { validateStyles } from '../validator'

function trimTextNode (children) {
  if (Array.isArray(children)) {
    return children.filter(function (vnode) { return !!vnode.tag; })
  }
  return children
}

var div = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:div', {
      attrs: { 'weex-type': 'div' },
      on: this._createEventMap(),
      staticClass: 'weex-div weex-ct'
    }, trimTextNode(this.$slots.default))
  }
};

/**
 * get resize (stetch|cover|contain) related styles.
 */
function getResizeStyle (context) {
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  // compatibility: http://caniuse.com/#search=background-size
  return { 'background-size': bgSize }
}

function preProcessSrc (context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url
}

var image = {
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean]
  },

  updated: function updated () {
    this._fireLazyload();
  },

  mounted: function mounted () {
    this._fireLazyload();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    // const style = this._normalizeInlineStyles(this.$vnode.data)
    var wh = this._getSize(this.$vnode.data);
    return createElement('figure', {
      attrs: {
        'weex-type': 'image',
        'img-src': preProcessSrc(this, this.src, wh),
        'img-placeholder': preProcessSrc(this, this.placeholder, wh)
      },
      on: this._createEventMap(['load', 'error']),
      staticClass: 'weex-image weex-el',
      staticStyle: getResizeStyle(this)
    })
  }
};

var supportedEvents = [
  'click', 'longpress', 'appear', 'disappear' ];

var scrollableTypes = ['scroller', 'list'];

var lazyloadWatched = false;
function watchLazyload () {
  lazyloadWatched = true
  ; [
    'scroll' ].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
}

var warned = false;
var notePage = 'https://github.com/MrRaindrop/weex/issues/14';
function warnProcessStyle () {
  if (!warned) {
    warned = true;
    console.warn("[vue-render] warn: should add loader config using $processStyle to enable"
      + " inline styles's auto-prefixing. see " + notePage + ". If already did it, please ignore this.");
  }
}

var base = {
  beforeCreate: function beforeCreate () {
    if (!lazyloadWatched) {
      watchLazyload();
    }
    {
      tagBeforeCreate();
    }
  },

  mounted: function mounted () {
    if (!weex._root) {
      weex._root = this.$root.$el;
      weex._root.classList.add('weex-root');
    }
    if (!warned && !window._style_processing_added) {
      warnProcessStyle();
    }
    watchAppear(this);
    {
      tagMounted();
    }
  },

  beforeUpdate: function beforeUpdate () {
    {
      tagBeforeUpdate();
    }
  },

  updated: function updated () {
    {
      tagUpdated();
    }
  },

  methods: {
    _getTopContext: function _getTopContext () {
      var ctx = this;
      var vnode = ctx.$options._parentVnode;
      while (vnode) {
        ctx = vnode.context;
        vnode = ctx.$options._parentVnode;
      }
      return ctx
    },

    _getScopeIds: function _getScopeIds () {
      var arr = [];
      var ctx = this;
      var scopeId;
      while (ctx) {
        scopeId = ctx.$options._scopeId;
        scopeId && arr.push(scopeId);
        ctx = ctx.$options.parent;
      }
      return arr
    },

    _getParentScroller: function _getParentScroller () {
      var parent = this;
      while (parent && scrollableTypes.indexOf(parent.$options._componentTag) <= -1) {
        parent = parent.$options.parent;
      }
      return parent
    },

    _createEventMap: function _createEventMap (extras) {
      var this$1 = this;
      if ( extras === void 0 ) extras = [];

      var eventMap = {};
      supportedEvents.concat(extras).forEach(function (name) {
        eventMap[name] = function (event) { return this$1.$emit(name, event); };
      });
      return eventMap
    },

    _fireLazyload: function _fireLazyload (el) {
      {
        tagBegin('base._fireLazyload');
      }
      getThrottleLazyload(16)();
      {
        tagEnd('base._fireLazyload');
      }
    }
  }
};

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
});

var prefixProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];
});

var prefixValue_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];
});

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];
});

var isObject_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];
});

var createPrefixer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = prefixProperty_1;

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = prefixValue_1;

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = addNewValuesOnly_1;

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = isObject_1;

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];
});

var staticData = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit"], "textDecorationSkip": ["Webkit"], "textDecorationLine": ["Webkit"], "textDecorationColor": ["Webkit"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transform": ["Webkit"], "transformOrigin": ["Webkit"], "transformOriginX": ["Webkit"], "transformOriginY": ["Webkit"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "fontKerning": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"] }
};
module.exports = exports["default"];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

var crossFade_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];
});

var filter_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: true,
  'inline-flex': true
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value];
  }
}
module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];
});

var gradient_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var imageSet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$1 = {};

function hyphenateStyleName(string) {
    return string in cache$1
    ? cache$1[string]
    : cache$1[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

var index$6 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = index$6;

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = hyphenateProperty_1;

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];
});

var index$5 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = createPrefixer_1;

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = staticData;

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = cursor_1;

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = crossFade_1;

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = filter_1;

var _filter2 = _interopRequireDefault(_filter);

var _flex = flex_1;

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = flexboxOld_1;

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = gradient_1;

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = imageSet_1;

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = position_1;

var _position2 = _interopRequireDefault(_position);

var _sizing = sizing_1;

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = transition_1;

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];
});

var addPrefix = unwrapExports(index$5);

function getHeadStyleMap () {
  {
    tagBegin('getHeadStyleMap');
  }
  var res = Array.from(document.styleSheets || [])
    .reduce(function (pre, styleSheet) {
      // why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
      // because weex's components defined non-standard style attributes, which is
      // auto ignored when access rule.cssText.
      var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/}/);
      var len = strArr.length;
      var rules = [];
      for (var i = 0; i < len; i++) {
        var str = strArr[i];
        if (!str || str.match(/^\s*$/)) {
          continue
        }

        var match = str.match(/((?:,?\s*\.[[\]\w-]+\s*)+)({[^}]+)/);
        if (!match) {
          // not the vue static class styles map. so acquire no rules for this styleSheet.
          // just jump through this styleSheet and go to analyzing next.
          return pre
        }
        var clsNms = match[1].split(',').map(function (n) { return n.trim(); });
        var cssText = match[2].replace(/[{}]/g, '').trim();
        var clsNmsIdx = 0;
        var clsNmsLen = clsNms.length;
        while (clsNmsIdx < clsNmsLen) {
          rules.push({
            selectorText: clsNms[clsNmsIdx],
            cssText: cssText
          });
          clsNmsIdx++;
        }
      }
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        pre[selector] = trimComment(rule.cssText).split(';')
          .reduce(function (styleObj, statement) {
            statement = statement.trim();
            if (statement && statement.indexOf('/*') <= -1) {
              var resArr = statement.split(':').map(function (part) { return part.trim(); });
              styleObj[resArr[0]] = resArr[1];
            }
            return styleObj
          }, {});
      });
      return pre
    }, {});
  {
    tagEnd('getHeadStyleMap');
  }
  return res
}

var style = {
  beforeCreate: function beforeCreate () {
    // get static class style map from document's styleSheets.
    if (!weex.styleMap) {
      weex.styleMap = getHeadStyleMap();
    }
  },

  methods: {
    $processStyle: function $processStyle (style) {
      var this$1 = this;

      window._style_processing_added = true;
      if (!style) {
        return
      }
      if (window._process_style) {
        return window._process_style(style)
      }
      if (style.display === 'flex') {
        this.$nextTick(function () {
          if (this$1.$el) {
            this$1.$el.classList.add('weex-flex-ct');
          }
        });
      }
      return hyphenateKeys(addPrefix(camelizeKeys(style)))
    },

    _getScopeStyle: function _getScopeStyle (classNames) {
      var scopeIds = this._getScopeIds();
      var style = {};
      var styleMap = weex.styleMap;
      var map;
      var cls;
      var clsNmsIdx;
      var scpIdsIdx;
      var clsNmsLen = classNames.length;
      var scpIdsLen = scopeIds.length;
      if (clsNmsLen <= 0) {
        return {}
      }
      clsNmsIdx = 0;
      while (clsNmsIdx < clsNmsLen) {
        scpIdsIdx = 0;
        while (scpIdsIdx < scpIdsLen) {
          cls = "." + (classNames[clsNmsIdx]) + "[" + (scopeIds[scpIdsIdx]) + "]";
          map = styleMap[cls];
          if (!map) {
            scpIdsIdx++;
            continue
          }
          for (var k in map) {
            style[k] = map[k];
          }
          scpIdsIdx++;
        }
        clsNmsIdx++;
      }
      return style
    },

    _getSize: function _getSize (data) {
      var wh = {};
      var style = data.style;
      var staticStyle = data.staticStyle;
      var classes = typeof data.class === 'string' ? data.class.split(' ') : (data.class || []);
      var staticClass = typeof data.staticClass === 'string' ? data.staticClass.split(' ') : (data.class || []);
      var clsNms = staticClass.concat(classes);
      function extendWHFrom (to, from) {
        if (!from) { return }
        from.width && (to.width = from.width);
        from.height && (to.height = from.height);
      }
      extendWHFrom(wh, this._getScopeStyle(clsNms));
      extendWHFrom(wh, staticStyle);
      extendWHFrom(wh, style);
      return wh
    },

    /**
     * get style from class, staticClass, style and staticStyle.
     * merge styles priority: high -> low
     *  1. data.style (bound style).
     *  2. data.staticStyle (inline styles).
     *  3. data.class style (bound class names).
     *  4. data.staticClass style (scoped styles or static classes).
     */
    _getComponentStyle: function _getComponentStyle (data) {
      var staticClassNames = (typeof data.staticClass === 'string') ? data.staticClass.split(' ') : (data.staticClass || []);
      var classNames = (typeof data.class === 'string') ? data.class.split(' ') : (data.class || []);
      var clsNms = staticClassNames.concat(classNames);
      var style = this._getScopeStyle(clsNms);
      var res = extend(style, data.staticStyle, data.style);
      return res
    },

    _getParentRect: function _getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    }
  }
};

var throttleScroll;
function getThrottledScroll (context) {
  if (!throttleScroll) {
    var wrapper = context.$refs.wrapper;
    var inner = context.$refs.inner;
    var preOffset = (context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop)
      || 0;
    throttleScroll = throttle(function (evt) {
      var offset = context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop;
      var indent = parseInt(context.offsetAccuracy);
      function triggerScroll () {
        var rect = inner.getBoundingClientRect();
        evt.contentSize = { width: rect.width, height: rect.height };
        evt.contentOffset = {
          x: wrapper.scrollLeft,
          /**
           * positive direciton for y-axis is down.
           * so should use negative operation on scrollTop.
           *
           *  (0,0)---------------> x
           *       |
           *       |
           *       |
           *       |
           *       v y
           *
           */
          y: -wrapper.scrollTop
        };
        context.$emit('scroll', evt);
      }
      if (indent
        && !isNaN(indent)
        && indent > 0
        && Math.abs(offset - preOffset) >= indent) {
        triggerScroll();
        preOffset = offset;
      }
      else if (!indent || isNaN(indent) || indent <= 0) {
        triggerScroll();
      }
    }, 16, true);
  }
  return throttleScroll
}

var scrollable = {
  props: {
    offsetAccuracy: [Number, String]
  },
  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    handleScroll: function handleScroll (event) {
      getThrottleLazyload(25, this.$el, 'scroll')();
      getThrottledScroll(this)(event);
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (reachTop && this._refresh) {
            this._refresh.pullingDown(offsetY);
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingUp(-offsetY);
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          if (reachTop && this._refresh) {
            this._refresh.pullingEnd();
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingEnd();
          }
        }
      }
      delete this._touchParams;
    }
  }
};

// input and textare has some common api and event
var findEnterKeyType = function (key) {
  var keys = ['default', 'go', 'next', 'search', 'send'];
  if (keys.indexOf(key) > -1) {
    return key
  }
  return 'done'
};

var inputCommon = {
  methods: {
    focus: function focus () {
      this.$el && this.$el.focus();
    },
    blur: function blur () {
      this.$el && this.$el.blur();
    },
    // support enter key envent
    createKeyboardEvent: function createKeyboardEvent (events) {
      var customKeyType = this.returnKeyType;
      var self = this;
      if (this._events['return']) {
        var keyboardEvents = {
          'keyup': function (ev) {
            var code = ev.keyCode;
            var key = ev.key;
            if (code === 13) {
              if (key.toLowerCase() === 'tab') {
                key = 'next';
              }
              var rightKeyType = findEnterKeyType(customKeyType);
              ev.returnKeyType = rightKeyType;
              ev.value = ev.target.value;
              self.$emit('return', ev);
            }
          }
        };
        events = extend(events, keyboardEvents);
      }
      return events
    }
  }
};

/**
 * @fileOverview Input component.
 * Support v-model only if vue version is large than 2.2.0
 */
// import { validateStyles } from '../validator'

var input = {
  mixins: [inputCommon],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number],
    returnKeyType: String
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var events = extend(this._createEventMap(), mapFormEvents(this));
    return createElement('html:input', {
      attrs: {
        'weex-type': 'input',
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength,
        'returnKeyType': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'weex-input weex-el'
    })
  }
};

// import { validateStyles } from '../../validator'
var header = {
  data: function data () {
    return {
      sticky: false,
      initTop: 0,
      placeholder: null,
      supportSticky: supportSticky()
    }
  },

  mounted: function mounted () {
    this.initTop = this.$el.offsetTop;
    this.placeholder = window.document.createElement('div');
  },

  updated: function updated () {
    if (!this.sticky) {
      this.initTop = this.$el.offsetTop;
    }
  },

  methods: {
    addSticky: function addSticky () {
      this.sticky = true;
      this.placeholder.style.display = 'block';
      this.placeholder.style.width = this.$el.offsetWidth + 'px';
      this.placeholder.style.height = this.$el.offsetHeight + 'px';
      this.$el.parentNode.insertBefore(this.placeholder, this.$el);
    },

    removeSticky: function removeSticky () {
      this.sticky = false;
      try {
        this.$el.parentNode.removeChild(this.placeholder);
      }
      catch (e) {
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('html:header', {
      attrs: { 'weex-type': 'header' },
      on: this._createEventMap(),
      ref: 'header',
      staticClass: 'weex-header weex-ct',
      class: { sticky: this.sticky, iossticky: this.supportSticky }
    }, this.$slots.default)
  }
};

var listMixin = {
  methods: {
    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);

      if (supportSticky()) {
        return
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) { return vm.$refs.header; });

      if (h.length <= 0) {
        return
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        }
        else {
          h[i].removeSticky();
        }
      }
    }
  }
};

// import { validateStyles } from '../../../validator'
var index$8 = {
  name: 'list',
  mixins: [scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    resetLoadmore: function resetLoadmore () {
      this._availableToFireLoadmore = true;
    },
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-list-inner weex-ct'
        }, this._cells)
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'list';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: this.wrapperClass,
      on: extend(this._createEventMap(), {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

// import { validateStyles } from '../../../validator'

var cell = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      on: this._createEventMap(),
      staticClass: 'weex-cell weex-ct'
    }, this.$slots.default)
  }
};

// import { validateStyles } from '../../validator'
var scroller = {
  mixins: [scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('weex-scroller-horizontal');
      }
      else {
        classArray.push('weex-scroller-vertical');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner weex-ct'
        }, this._cells)
      ]
    },
    scrollTo: function scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop;
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'scroller';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      staticClass: this.wrapperClass,
      on: extend(this._createEventMap(), {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

function getIndicatorItemStyle (spec, isActive) {
  var style = {};
  style['background-color'] = spec[isActive ? 'item-selected-color' : 'item-color'];
  style['width'] = style['height'] = spec['item-size'];
  return style
}

function _render (context, h) {
  var children = [];
  var mergedStyle = context._getComponentStyle(context.$vnode.data);
  context.$vnode.data.cached = {};
  extendKeys(context.$vnode.data.cached, mergedStyle, ['width', 'height']);
  var indicatorSpecStyle = extendKeys(
      {},
      mergedStyle,
      ['item-color', 'item-selected-color', 'item-size']
    );
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['weex-indicator-item weex-el'];
    var isActive = false;
    if (i === Number(context.active)) {
      classNames.push('weex-indicator-item-active');
      isActive = true;
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }));
  }
  if (!context.$vnode.context._isMounted) {
    context.$nextTick(function () {
      _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
    });
  }
  return h('nav', {
    attrs: { 'weex-type': 'indicator' },
    staticClass: 'weex-indicator weex-ct',
    staticStyle: mergedStyle
  }, children)
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect (context, mergedStyle) {
  var ct = context._getParentRect();
  var rect = ['width', 'height'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    pre[key] = msv ? parseFloat(msv) : ct[key];
    return pre
  }, {});
  return rect
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr (context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    // undefined, null, or '0px' -> o
    pre[key] = msv && parseFloat(msv) || 0;
    return pre
  }, {})
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect (el) {
  var width, height;
  if (el.children.length === 1) {
    width = height = window.getComputedStyle(el.children[0]);
  }
  else {
    var itemComputedStyle = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle.marginLeft);
    height = parseFloat(itemComputedStyle.height);
    width = el.children.length * (height + padding) - padding;
  }
  return { width: width, height: height }
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout (context, virtualRect, ltbr) {
  var el = context.$el;
  var rect = _getIndicatorRect(el);
  var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
    pre[key] = rect[key] + 'px';
    return pre
  }, {});
  extend(el.style, rectWithPx);
  var axisMap = [
    { dir: ltbr.left ? 'left' : ltbr.right ? 'right' : 'left', scale: 'width' },
    { dir: ltbr.top ? 'top' : ltbr.bottom ? 'bottom' : 'top', scale: 'height' }
  ];
  Object.keys(axisMap).forEach(function (key) {
    var ref = axisMap[key];
    var dir = ref.dir;
    var scale = ref.scale;
    el.style[dir] = ltbr[dir] + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
  });
}

var indicator = {
  name: 'indicator',
  methods: {
    show: function () {
      this.$el.style.visibility = 'visible';
    }
  },
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  updated: function updated () {
    var mergedStyle = this._getComponentStyle(this.$vnode.data);
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
  },
  render: function render (createElement) {
    return _render(this, createElement)
  }
};

var TRANSITION_TIME = 200;

// trigger scroll event frequency.
// const scrollDam = 16

var slideMixin = {
  methods: {
    // get standard index
    normalizeIndex: function normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    slideTo: function slideTo (index) {
      var this$1 = this;

      var newIndex = this.normalizeIndex(index);
      var inner = this.$refs.inner;
      var step = this._cells.length <= 1 ? 0 : this.currentIndex - index;
      this.innerOffset += Math.sign(step) * this.wrapperWidth;
      if (inner) {
        // const match = (inner.style.transform || inner.style.webkitTransform).match(/(\d+)px/)
        // const currentOffset = parseFloat(match[1])
        // TODO: will-change | set styles together
        inner.style.webkitTransition = "-webkit-transform .2s ease-in-out";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        setTimeout(function () {
          inner.style.webkitTransition = '';
          inner.style.transition = '';
        }, TRANSITION_TIME);
      }
      // TODO: emit scroll event.
      // nextFrame()

      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        // replace $el with { attr, style } is a legacy usage. Is it necessary to
        // do this ? Or just tell devers to use inline functions to access attrs ?
        this.$emit('change', createEvent(this.$el, 'change', {
          index: this.currentIndex
        }));
        setTimeout(function () { this$1.reorder(); }, TRANSITION_TIME);
      }
    },

    reorder: function reorder () {
      var this$1 = this;

      var removeClone = function (clone, prevElm) {
        // switch current page.
        var curTransform = "translate3d(" + (-this$1.innerOffset) + "px, 0, 0)";
        prevElm.style.transform = curTransform;
        prevElm.style.webkitTransform = curTransform;
        // remove clone node.
        clone && clone.parentElement.removeChild(clone);
      };

      this.$nextTick(function () {
        if (this$1._cells.length <= 1) {
          return
        }

        var lastPrev = this$1._prevElm;
        var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
        var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
        var prevElm = this$1._prevElm = this$1._cells[prevIndex].elm;
        var nextElm = this$1._cells[nextIndex].elm;
        var currentElm = this$1._cells[this$1.currentIndex].elm;

        // put current slide on the top.
        currentElm.style.zIndex = 1;

        // clone prevCell if there are only tow slides.
        if (this$1._cells.length === 2) {
          this$1._clonePrev && removeClone(this$1._clonePrev, lastPrev);
          this$1._clonePrev = prevElm.cloneNode(true);
          this$1._clonePrev.classList.add('weex-slide-clone-prev');
          prevElm.parentElement.insertBefore(this$1._clonePrev, currentElm);
          if (!this$1._prevFired) {
            fireLazyload(this$1._clonePrev, true);
            this$1._prevFired = true;
          }
          prevElm = this$1._clonePrev;
        }

        var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
        prevElm.style.webkitTransform = "translate3d(" + prevOffset + "px, 0, 0)";
        prevElm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
        var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
        nextElm.style.webkitTransform = "translate3d(" + nextOffset + "px, 0, 0)";
        nextElm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
      });
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.stopPropagation();
      var touch = event.changedTouches[0];
      this._touchParams = {
        originalTransform: this.$refs.inner.style.webkitTransform || this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var ref = this._touchParams;
      var startX = ref.startX;
      var startY = ref.startY;
      var touch = event.changedTouches[0];
      var offsetX = touch.pageX - startX;
      var offsetY = touch.pageY - startY;
      tp.offsetX = offsetX;
      tp.offsetY = offsetY;
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
        if (!isV) {
          this.$emit('scrollstart', createEvent(this.$el, 'scrollstart', {}));
        }
      }
      // vertical scroll. just ignore it.
      if (isV) {
        return
      }
      // horizontal scroll. trigger scroll event.
      event.preventDefault();
      var inner = this.$refs.inner;
      if (inner && offsetX) {
        // TODO: add throttle.
        this.$emit('scroll', createEvent(this.$el, 'scroll', {
          offsetXRatio: offsetX / this.wrapperWidth
        }));
        inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.stopPropagation();
      var tp = this._touchParams;
      if (!tp) { return }
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        return
      }
      var inner = this.$refs.inner;
      var offsetX = tp.offsetX;
      if (inner) {
        this.$emit('scrollend', createEvent(this.$el, 'scrollend'));
        // TODO: test the velocity if it's less than 0.2.
        var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
        var direction = offsetX > 0 ? 1 : -1;
        var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
        this.slideTo(newIndex);
      }
      delete this._touchParams;
    }
  }
};

// import { validateStyles } from '../../validator'
var index$9 = {
  mixins: [slideMixin],
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: 'weex-slider-cell'
        }, [vnode])
      });
      if (indicatorVnode) {
        indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
        indicatorVnode.data.attrs.count = cells.length;
        indicatorVnode.data.attrs.active = this.currentIndex;
        this._indicator = createElement(indicator, indicatorVnode.data);
      }
      return cells
    }
  },

  created: function created () {
    var this$1 = this;

    this.weexType = 'slider';
    this.currentIndex = 0;
    this.innerOffset = 0;
    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  beforeUpdate: function beforeUpdate () {
    this.updateLayout();
    this.reorder();
  },

  updated: function updated () {
    fireLazyload(this.$el, true);
  },

  mounted: function mounted () {
    if (this.autoPlay && this.autoPlay !== 'false') {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }

    this.reorder();
    fireLazyload(this.$el, true);
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._cells = this.formatChildren(createElement);
    this.frameCount = this._cells.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'weex-type': 'slider' },
        staticClass: 'weex-slider weex-slider-wrapper weex-ct',
        on: extend(this._createEventMap(['scroll', 'scrollstart', 'scrollend']), {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        })
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner weex-ct'
        }, this._cells),
        this._indicator
      ]
    )
  }
};

var LoadingIndicator = {
  render: function render (createElement) {
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator weex-ct'
    })
  }
};

var refresh = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      lastDy: 0,
      viewHeight: 0,
      height: -1
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
      this.$emit('pullingdown', createEvent(this, 'pullingdown', {
        dy: offsetY - this.lastDy,
        pullingDistance: offsetY,
        viewHeight: this.viewHeight
      }));
      this.lastDy = offsetY;
    },
    pullingDown: function pullingDown (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('refresh');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._refresh = this;
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      staticClass: 'weex-refresh weex-ct'
    }, this.getChildren())
  }
};

var loading = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: -1,
      viewHeight: 0
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  updated: function updated () {
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + 'px';
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
    },
    pullingUp: function pullingUp (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('loading');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._loading = this;
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'weex-type': 'loading' },
      staticClass: 'weex-loading weex-ct'
    }, this.getChildren())
  }
};

/**
 * @fileOverview Impl of text component.
 *
 * Notes about the style 'height' and 'lines':
 * if the computed value of 'height' is bigger than 'lines', than the text will
 * be clipped according to the 'lines'. Otherwise, it'll be the 'height'.
 */

/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle (context, ms) {
  if ( context === void 0 ) context = {};
  if ( ms === void 0 ) ms = {};

  var lines = parseInt(ms.lines) || 0;
  var overflow = ms['text-overflow'] || 'ellipsis';
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    }
  }
}

var text = {
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var ms = this._getComponentStyle(this.$vnode.data);
    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      on: this._createEventMap(),
      staticClass: 'weex-text weex-el',
      staticStyle: getTextSpecStyle(this, ms)
    }, this.$slots.default || [this.value])
  }
};

// import { validateStyles } from '../validator'

var textarea = {
  mixins: [inputCommon],
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    },
    returnKeyType: String
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var events = extend(this._createEventMap(), mapFormEvents(this));
    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows,
        'return-key-type': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'weex-textarea weex-el'
    })
  }
};

// import { validateStyles } from '../validator'

var video = {
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },

    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },

    playsinline: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    // TODO: support playStatus
    return createElement('html:video', {
      attrs: {
        'weex-type': 'video',
        autoplay: (this.autoplay !== 'false' && this.autoplay !== false),
        autoPlay: (this.autoplay !== 'false' && this.autoplay !== false),
        controls: this.controls,
        src: this.src
      },
      on: this._createEventMap(['start', 'pause', 'finish', 'fail']),
      staticClass: 'weex-video weex-el'
    })
  }
};

// import { validateStyles } from '../validator'

var web = {
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event) {
        this$1.$emit('pagefinish', createEvent(this$1.$el, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      on: this._createEventMap(['error']),
      staticClass: 'weex-web weex-el'
    })
  }
};

// import indicator from './warning'
// import refresh from './warning'
// import loading from './warning'



var components$1 = Object.freeze({
	switch: _switch,
	a: a,
	div: div,
	container: div,
	image: image,
	img: image,
	input: input,
	header: header,
	list: index$8,
	cell: cell,
	scroller: scroller,
	slider: index$9,
	indicator: indicator,
	refresh: refresh,
	loading: loading,
	LoadingIndicator: LoadingIndicator,
	text: text,
	textarea: textarea,
	video: video,
	web: web
});

// import semver from 'semver'
// import styleMixin from './mixins/style'

/**
 * init weex.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend weex plugins.
 *         - components.
 *         - modules.
 */
function init$1 (Vue/*, options = {}*/) {
  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return weex$3.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  // register sdk components.
  for (var name in components$1) {
    Vue.component(name, components$1[name]);
  }

  // // get user extended plugins.
  // const { components: comps, modules } = options
  // // register user extended components.
  // for (const name in comps) {
  //   Vue.components(name, comps[name])
  // }
  // // register user extended modules.
  // for (const mod in modules) {
  //   this.registerModule(mod, modules[mod])
  // }

  /* istanbul ignore next */
  // if ("development" === 'development') {
  //   if (semver.lt(Vue.version, '2.1.5')) {
  //     console.warn(`[Vue Render] The version of Vue should be ` +
  //       `greater than 2.1.5, current is ${Vue.version}.`)
  //   }
  //   console.info(`[Vue Render] Registered components: `
  //     + `[${Object.keys(components).join(', ')}].`)
  Vue.mixin(base);
  Vue.mixin(style);
  // }
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

return weex$3;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL3JlbmRlci9nZXN0dXJlLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL2FycmF5RnJvbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vLi4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9ldmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvZ2VvbG9jYXRpb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL3BhZ2VJbmZvLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0dHB1cmwvYnVpbGQvaHR0cHVybC5jb21tb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZnVuYy5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZXZlbnQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvdHlwZS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvcGVyZi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvbGF6eWxvYWQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL3N0eWxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9hbmltYXRpb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvZG9tLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL3RvYXN0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL21vZGFsLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2FsZXJ0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2NvbmZpcm0uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvbW9kYWwvcHJvbXB0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL25hdmlnYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy93ZWJ2aWV3LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2VudmQvYnVpbGQvZW52ZC5jb21tb24uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi92aWV3cG9ydC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3d4LWVudi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi9pbmRleC5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zd2l0Y2guanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvYS5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9kaXYuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9iYXNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9wcmVmaXhQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4VmFsdWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2FkZE5ld1ZhbHVlc09ubHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2lzT2JqZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvY3JlYXRlUHJlZml4ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9zdGF0aWNEYXRhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2Nyb3NzRmFkZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3Bvc2l0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvc3R5bGUuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9zY3JvbGxhYmxlLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvaW5wdXQtY29tbW9uLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2lucHV0LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvaGVhZGVyLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbGlzdC9saXN0TWl4aW4uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvbGlzdC9jZWxsLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvc2Nyb2xsZXIuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2xpZGVyL2luZGljYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVNaXhpbi5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvaW5kZXguanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9sb2FkaW5nLWluZGljYXRvci5qcyIsIi4uLy4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL3JlZnJlc2guanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9sb2FkaW5nLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3RleHQuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdmlkZW8uanMiLCIuLi8uLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvd2ViLmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2luZGV4LmpzIiwiLi4vLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4vLyBtYWpvciBldmVudHMgc3VwcG9ydGVkOlxuLy8gICBwYW5zdGFydFxuLy8gICBwYW5tb3ZlXG4vLyAgIHBhbmVuZFxuLy8gICBzd2lwZVxuLy8gICBsb25ncHJlc3Ncbi8vIGV4dHJhIGV2ZW50cyBzdXBwb3J0ZWQ6XG4vLyAgIGR1YWx0b3VjaHN0YXJ0XG4vLyAgIGR1YWx0b3VjaFxuLy8gICBkdWFsdG91Y2hlbmRcbi8vICAgdGFwXG4vLyAgIGRvdWJsZXRhcFxuLy8gICBwcmVzc2VuZFxuXG52YXIgZG9jID0gd2luZG93LmRvY3VtZW50XG52YXIgZG9jRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBnZXN0dXJlcyA9IHt9XG52YXIgbGFzdFRhcCA9IG51bGxcblxuLyoqXG4gKiBmaW5kIHRoZSBjbG9zZXN0IGNvbW1vbiBhbmNlc3RvclxuICogaWYgdGhlcmUncyBubyBvbmUsIHJldHVybiBudWxsXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWwxIGZpcnN0IGVsZW1lbnRcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsMiBzZWNvbmQgZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudH0gICAgIGNvbW1vbiBhbmNlc3RvclxuICovXG5mdW5jdGlvbiBnZXRDb21tb25BbmNlc3RvcihlbDEsIGVsMikge1xuICB2YXIgZWwgPSBlbDFcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKGVsLmNvbnRhaW5zKGVsMikgfHwgZWwgPT0gZWwyKSB7XG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBmaXJlIGEgSFRNTEV2ZW50XG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCB3aGljaCBlbGVtZW50IHRvIGZpcmUgYSBldmVudCBvblxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZSAgICB0eXBlIG9mIGV2ZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBleHRyYSAgIGV4dHJhIGRhdGEgZm9yIHRoZSBldmVudCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZmlyZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGV4dHJhKSB7XG4gIHZhciBldmVudCA9IGRvYy5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKVxuXG4gIGlmICh0eXBlb2YgZXh0cmEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBleHRyYSkge1xuICAgICAgZXZlbnRbcF0gPSBleHRyYVtwXVxuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuLyoqXG4gKiBjYWxjIHRoZSB0cmFuc2Zvcm1cbiAqIGFzc3VtZSA0IHBvaW50cyBBQkNEIG9uIHRoZSBjb29yZGluYXRlIHN5c3RlbVxuICogPiByb3RhdGXvvJphbmdsZSByb3RhdGluZyBmcm9tIEFCIHRvIENEXG4gKiA+IHNjYWxl77yac2NhbGUgcmF0aW8gZnJvbSBBQiB0byBDRFxuICogPiB0cmFuc2xhdGXvvJp0cmFuc2xhdGUgc2hpZnQgZnJvbSBBIHRvIENcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgxIGFic2Npc3NhIG9mIEFcbiAqIEBwYXJhbSAge251bWJlcn0geTEgb3JkaW5hdGUgb2YgQVxuICogQHBhcmFtICB7bnVtYmVyfSB4MiBhYnNjaXNzYSBvZiBCXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkyIG9yZGluYXRlIG9mIEJcbiAqIEBwYXJhbSAge251bWJlcn0geDMgYWJzY2lzc2Egb2YgQ1xuICogQHBhcmFtICB7bnVtYmVyfSB5MyBvcmRpbmF0ZSBvZiBDXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHg0IGFic2Npc3NhIG9mIERcbiAqIEBwYXJhbSAge251bWJlcn0geTQgb3JkaW5hdGUgb2YgRFxuICogQHJldHVybiB7b2JqZWN0fSAgICB0cmFuc2Zvcm0gb2JqZWN0IGxpa2VcbiAqICAge3JvdGF0ZSwgc2NhbGUsIHRyYW5zbGF0ZVsyXSwgbWF0cml4WzNdWzNdfVxuICovXG5mdW5jdGlvbiBjYWxjKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCkge1xuICB2YXIgcm90YXRlID0gTWF0aC5hdGFuMih5NCAtIHkzLCB4NCAtIHgzKSAtIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSlcbiAgdmFyIHNjYWxlID0gTWF0aC5zcXJ0KChNYXRoLnBvdyh5NCAtIHkzLCAyKVxuICAgICsgTWF0aC5wb3coeDQgLSB4MywgMikpIC8gKE1hdGgucG93KHkyIC0geTEsIDIpXG4gICAgKyBNYXRoLnBvdyh4MiAtIHgxLCAyKSkpXG4gIHZhciB0cmFuc2xhdGUgPSBbXG4gICAgeDNcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLmNvcyhyb3RhdGUpXG4gICAgKyBzY2FsZSAqIHkxICogTWF0aC5zaW4ocm90YXRlKSxcbiAgICB5M1xuICAgIC0gc2NhbGUgKiB5MSAqIE1hdGguY29zKHJvdGF0ZSlcbiAgICAtIHNjYWxlICogeDEgKiBNYXRoLnNpbihyb3RhdGUpXVxuXG4gIHJldHVybiB7XG4gICAgcm90YXRlOiByb3RhdGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIG1hdHJpeDogW1xuICAgICAgW3NjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgLXNjYWxlICogTWF0aC5zaW4ocm90YXRlKSwgdHJhbnNsYXRlWzBdXSxcbiAgICAgIFtzY2FsZSAqIE1hdGguc2luKHJvdGF0ZSksIHNjYWxlICogTWF0aC5jb3Mocm90YXRlKSwgdHJhbnNsYXRlWzFdXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfVxufVxuXG4vKipcbiAqIHRha2Ugb3ZlciB0aGUgdG91Y2hzdGFydCBldmVudHMuIEFkZCBuZXcgdG91Y2hlcyB0byB0aGUgZ2VzdHVyZXMuXG4gKiBJZiB0aGVyZSBpcyBubyBwcmV2aW91cyByZWNvcmRzLCB0aGVuIGJpbmQgdG91Y2htb3ZlLCB0b2NoZW5kXG4gKiBhbmQgdG91Y2hjYW5jZWwgZXZlbnRzLlxuICogbmV3IHRvdWNoZXMgaW5pdGlhbGl6ZWQgd2l0aCBzdGF0ZSAndGFwcGluZycsIGFuZCB3aXRoaW4gNTAwIG1pbGxpc2Vjb25kc1xuICogaWYgdGhlIHN0YXRlIGlzIHN0aWxsIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciBnZXN0dXJlICdwcmVzcycuXG4gKiBJZiB0aGVyZSBhcmUgdHdvIHRvdWNoZSBwb2ludHMsIHRoZW4gdGhlICdkdWFsdG91Y2hzdGFydCcgaXMgdHJpZ2dlcmQuIFRoZVxuICogbm9kZSBvZiB0aGUgdG91Y2ggZ2VzdHVyZSBpcyB0aGVpciBjbG9lc3QgY29tbW9uIGFuY2VzdG9yLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoc3RhcnRIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG5cbiAgLy8gcmVjb3JkIGV2ZXJ5IHRvdWNoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciB0b3VjaFJlY29yZCA9IHt9XG5cbiAgICBmb3IgKHZhciBwIGluIHRvdWNoKSB7XG4gICAgICB0b3VjaFJlY29yZFtwXSA9IHRvdWNoW3BdXG4gICAgfVxuXG4gICAgdmFyIGdlc3R1cmUgPSB7XG4gICAgICBzdGFydFRvdWNoOiB0b3VjaFJlY29yZCxcbiAgICAgIHN0YXJ0VGltZTogRGF0ZS5ub3coKSxcbiAgICAgIHN0YXR1czogJ3RhcHBpbmcnLFxuICAgICAgZWxlbWVudDogZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50YXJnZXQsXG4gICAgICBwcmVzc2luZ0hhbmRsZXI6IHNldFRpbWVvdXQoZnVuY3Rpb24gKGVsZW1lbnQsIHRvdWNoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycpIHtcbiAgICAgICAgICAgIGdlc3R1cmUuc3RhdHVzID0gJ3ByZXNzaW5nJ1xuXG4gICAgICAgICAgICBmaXJlRXZlbnQoZWxlbWVudCwgJ2xvbmdwcmVzcycsIHtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvdWNoIGRhdGEgZm9yIHdlZXhcbiAgICAgICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfShldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRhcmdldCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0pLCA1MDApXG4gICAgfVxuICAgIGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdID0gZ2VzdHVyZVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG5cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hzdGFydCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiB0YWtlIG92ZXIgdG91Y2htb3ZlIGV2ZW50cywgYW5kIGhhbmRsZSBwYW4gYW5kIGR1YWwgcmVsYXRlZCBnZXN0dXJlcy5cbiAqXG4gKiAxLiB0cmF2ZXJzZSBldmVyeSB0b3VjaCBwb2ludO+8mlxuICogPiBpZiAndGFwcGluZycgYW5kIHRoZSBzaGlmdCBpcyBvdmVyIDEwIHBpeGxlcywgdGhlbiBpdCdzIGEgJ3Bhbm5pbmcnLlxuICogMi4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gY2FsYyB0aGUgdHJhbmZvcm0gYW5kIHRyaWdnZXJcbiAqICAgJ2R1YWx0b3VjaCcuXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2htb3ZlSGFuZGxlcihldmVudCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS5sYXN0VG91Y2gpIHtcbiAgICAgIGdlc3R1cmUubGFzdFRvdWNoID0gZ2VzdHVyZS5zdGFydFRvdWNoXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS5sYXN0VGltZSkge1xuICAgICAgZ2VzdHVyZS5sYXN0VGltZSA9IGdlc3R1cmUuc3RhcnRUaW1lXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS52ZWxvY2l0eVgpIHtcbiAgICAgIGdlc3R1cmUudmVsb2NpdHlYID0gMFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUudmVsb2NpdHlZKSB7XG4gICAgICBnZXN0dXJlLnZlbG9jaXR5WSA9IDBcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLmR1cmF0aW9uKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gMFxuICAgIH1cblxuICAgIHZhciB0aW1lID0gIERhdGUubm93KCkgLSBnZXN0dXJlLmxhc3RUaW1lXG4gICAgdmFyIHZ4ID0gKHRvdWNoLmNsaWVudFggLSBnZXN0dXJlLmxhc3RUb3VjaC5jbGllbnRYKSAvIHRpbWVcbiAgICB2YXIgdnkgPSAodG91Y2guY2xpZW50WSAtIGdlc3R1cmUubGFzdFRvdWNoLmNsaWVudFkpIC8gdGltZVxuXG4gICAgdmFyIFJFQ09SRF9EVVJBVElPTiA9IDcwXG4gICAgaWYgKHRpbWUgPiBSRUNPUkRfRFVSQVRJT04pIHtcbiAgICAgIHRpbWUgPSBSRUNPUkRfRFVSQVRJT05cbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lID4gUkVDT1JEX0RVUkFUSU9OKSB7XG4gICAgICBnZXN0dXJlLmR1cmF0aW9uID0gUkVDT1JEX0RVUkFUSU9OIC0gdGltZVxuICAgIH1cblxuICAgIGdlc3R1cmUudmVsb2NpdHlYID0gKGdlc3R1cmUudmVsb2NpdHlYICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ4ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUudmVsb2NpdHlZID0gKGdlc3R1cmUudmVsb2NpdHlZICogZ2VzdHVyZS5kdXJhdGlvbiArIHZ5ICogdGltZSlcbiAgICAgIC8gKGdlc3R1cmUuZHVyYXRpb24gKyB0aW1lKVxuICAgIGdlc3R1cmUuZHVyYXRpb24gKz0gdGltZVxuXG4gICAgZ2VzdHVyZS5sYXN0VG91Y2ggPSB7fVxuXG4gICAgZm9yICh2YXIgcCBpbiB0b3VjaCkge1xuICAgICAgZ2VzdHVyZS5sYXN0VG91Y2hbcF0gPSB0b3VjaFtwXVxuICAgIH1cbiAgICBnZXN0dXJlLmxhc3RUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICB2YXIgZGlzcGxhY2VtZW50WSA9IHRvdWNoLmNsaWVudFkgLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhkaXNwbGFjZW1lbnRYLCAyKVxuICAgICAgKyBNYXRoLnBvdyhkaXNwbGFjZW1lbnRZLCAyKSlcbiAgICB2YXIgaXNWZXJ0aWNhbCA9ICEoTWF0aC5hYnMoZGlzcGxhY2VtZW50WCkgPiBNYXRoLmFicyhkaXNwbGFjZW1lbnRZKSlcbiAgICB2YXIgZGlyZWN0aW9uID0gaXNWZXJ0aWNhbFxuICAgICAgPyBkaXNwbGFjZW1lbnRZID49IDAgPyAnZG93bicgOiAndXAnXG4gICAgICA6IGRpc3BsYWNlbWVudFggPj0gMCA/ICdyaWdodCcgOiAnbGVmdCdcblxuICAgIC8vIG1hZ2ljIG51bWJlciAxMDogbW92aW5nIDEwcHggbWVhbnMgcGFuLCBub3QgdGFwXG4gICAgaWYgKChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnIHx8IGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKVxuICAgICAgICAmJiBkaXN0YW5jZSA+IDEwKSB7XG4gICAgICBnZXN0dXJlLnN0YXR1cyA9ICdwYW5uaW5nJ1xuICAgICAgZ2VzdHVyZS5pc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbFxuICAgICAgZ2VzdHVyZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbnN0YXJ0Jywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnQsXG4gICAgICAgIGlzVmVydGljYWw6IGdlc3R1cmUuaXNWZXJ0aWNhbCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGdlc3R1cmUucGFuVGltZSA9IERhdGUubm93KClcblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3Bhbm1vdmUnLCB7XG4gICAgICAgIGRpc3BsYWNlbWVudFg6IGRpc3BsYWNlbWVudFgsXG4gICAgICAgIGRpc3BsYWNlbWVudFk6IGRpc3BsYWNlbWVudFksXG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gW11cbiAgICB2YXIgY3VycmVudCA9IFtdXG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICB2YXIgdHJhbnNmb3JtXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV1cbiAgICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2guaWRlbnRpZmllcl1cbiAgICAgIHBvc2l0aW9uLnB1c2goW2dlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRYLCBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WV0pXG4gICAgICBjdXJyZW50LnB1c2goW3RvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFldKVxuICAgIH1cblxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0gPSBjYWxjKFxuICAgICAgcG9zaXRpb25bMF1bMF0sXG4gICAgICBwb3NpdGlvblswXVsxXSxcbiAgICAgIHBvc2l0aW9uWzFdWzBdLFxuICAgICAgcG9zaXRpb25bMV1bMV0sXG4gICAgICBjdXJyZW50WzBdWzBdLFxuICAgICAgY3VycmVudFswXVsxXSxcbiAgICAgIGN1cnJlbnRbMV1bMF0sXG4gICAgICBjdXJyZW50WzFdWzFdXG4gICAgKVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoJywge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoZW5kIGV2ZW50XG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHRvdyB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ+WmglxuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ5IHRvdWNoIHBpb25077yaXG4gKiA+IGlmIHRhcHBpbmcsIHRoZW4gdHJpZ2dlciAndGFwJy5cbiAqIElmIHRoZXJlIGlzIGEgdGFwIDMwMCBtaWxsaXNlY29uZHMgYmVmb3JlLCB0aGVuIGl0J3MgYSAnZG91YmxldGFwJy5cbiAqID4gaWYgcGFkZGluZywgdGhlbiBkZWNpZGUgdG8gdHJpZ2dlciAncGFuZW5kJyBvciAnc3dpcGUnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJy5cbiAqXG4gKiAzLiByZW1vdmUgbGlzdGVuZXJzLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNoZW5kSGFuZGxlcihldmVudCkge1xuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuICAgIGZvciAodmFyIHAgaW4gZ2VzdHVyZXMpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZ2VzdHVyZXNbcF0uZWxlbWVudClcbiAgICB9XG4gICAgZmlyZUV2ZW50KGdldENvbW1vbkFuY2VzdG9yKGVsZW1lbnRzWzBdLCBlbGVtZW50c1sxXSksICdkdWFsdG91Y2hlbmQnLCB7XG4gICAgICB0b3VjaGVzOiBzbGljZS5jYWxsKGV2ZW50LnRvdWNoZXMpLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIGlkID0gdG91Y2guaWRlbnRpZmllclxuICAgIHZhciBnZXN0dXJlID0gZ2VzdHVyZXNbaWRdXG5cbiAgICBpZiAoIWdlc3R1cmUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpXG4gICAgICBnZXN0dXJlLnByZXNzaW5nSGFuZGxlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJykge1xuICAgICAgZ2VzdHVyZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAndGFwJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuXG4gICAgICBpZiAobGFzdFRhcCAmJiBnZXN0dXJlLnRpbWVzdGFtcCAtIGxhc3RUYXAudGltZXN0YW1wIDwgMzAwKSB7XG4gICAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdkb3VibGV0YXAnLCB7XG4gICAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGxhc3RUYXAgPSBnZXN0dXJlXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpXG4gICAgICB2YXIgZHVyYXRpb24gPSBub3cgLSBnZXN0dXJlLnN0YXJ0VGltZVxuICAgICAgdmFyIGRpc3BsYWNlbWVudFggPSB0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFhcbiAgICAgIHZhciBkaXNwbGFjZW1lbnRZID0gdG91Y2guY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRZXG5cbiAgICAgIHZhciB2ZWxvY2l0eSA9IE1hdGguc3FydChnZXN0dXJlLnZlbG9jaXR5WSAqIGdlc3R1cmUudmVsb2NpdHlZXG4gICAgICAgICsgZ2VzdHVyZS52ZWxvY2l0eVggKiBnZXN0dXJlLnZlbG9jaXR5WClcbiAgICAgIHZhciBpc1N3aXBlID0gdmVsb2NpdHkgPiAwLjUgJiYgKG5vdyAtIGdlc3R1cmUubGFzdFRpbWUpIDwgMTAwXG4gICAgICB2YXIgZXh0cmEgPSB7XG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgaXNTd2lwZTogaXNTd2lwZSxcbiAgICAgICAgdmVsb2NpdHlYOiBnZXN0dXJlLnZlbG9jaXR5WCxcbiAgICAgICAgdmVsb2NpdHlZOiBnZXN0dXJlLnZlbG9jaXR5WSxcbiAgICAgICAgZGlzcGxhY2VtZW50WDogZGlzcGxhY2VtZW50WCxcbiAgICAgICAgZGlzcGxhY2VtZW50WTogZGlzcGxhY2VtZW50WSxcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZ2VzdHVyZS5kaXJlY3Rpb25cbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3BhbmVuZCcsIGV4dHJhKVxuICAgICAgaWYgKGlzU3dpcGUpIHtcbiAgICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3N3aXBlJywgZXh0cmEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlIGdlc3R1cmVzW2lkXVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmVIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaGNhbmNlbEhhbmRsZXIsIGZhbHNlKVxuICB9XG59XG5cbi8qKlxuICogaGFuZGxlIHRvdWNoY2FuY2VsXG4gKlxuICogMS4gaWYgdGhlcmUgYXJlIHR3byB0b3VjaCBwb2ludHMsIHRoZW4gdHJpZ2dlciAnZHVhbHRvdWNoZW5kJ1xuICpcbiAqIDIuIHRyYXZlcnNlIGV2ZXJ0eSB0b3VjaCBwb2ludDpcbiAqID4gaWYgcGFubm5pZywgdGhlbiB0cmlnZ2VyICdwYW5lbmQnXG4gKiA+IGlmIHByZXNzaW5nLCB0aGVuIHRyaWdnZXIgJ3ByZXNzZW5kJ1xuICpcbiAqIDMuIHJlbW92ZSBsaXN0ZW5lcnNcbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaGNhbmNlbEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoZW5kJywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXJcbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW2lkXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncGFubmluZycpIHtcbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5lbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAncHJlc3NpbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncHJlc3NlbmQnLCB7XG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuICAgIGRlbGV0ZSBnZXN0dXJlc1tpZF1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxufVxuXG5pZiAoIWlzSW5pdGlhbGl6ZWQpIHtcbiAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoc3RhcnRIYW5kbGVyLCBmYWxzZSlcbiAgaXNJbml0aWFsaXplZCA9IHRydWVcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgdmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9O1xuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIH07XG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgICAgLy8gMS4gTGV0IEMgYmUgdGhlIHRoaXMgdmFsdWUuXG4gICAgICB2YXIgQyA9IHRoaXM7XG5cbiAgICAgIC8vIDIuIExldCBpdGVtcyBiZSBUb09iamVjdChhcnJheUxpa2UpLlxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XG5cbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIElmIG1hcGZuIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgbWFwcGluZyBiZSBmYWxzZS5cbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XG4gICAgICB2YXIgVDtcbiAgICAgIGlmICh0eXBlb2YgbWFwRm4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDUuIGVsc2VcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbTogd2hlbiBwcm92aWRlZCwgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIGIuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAxMC4gTGV0IGxlblZhbHVlIGJlIEdldChpdGVtcywgXCJsZW5ndGhcIikuXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcblxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxuICAgICAgLy8gMTMuIGEuIExldCBBIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxuICAgICAgLy8gMTQuIGEuIEVsc2UsIExldCBBIGJlIEFycmF5Q3JlYXRlKGxlbikuXG4gICAgICB2YXIgQSA9IGlzQ2FsbGFibGUoQykgPyBPYmplY3QobmV3IEMobGVuKSkgOiBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgLy8gMTYuIExldCBrIGJlIDAuXG4gICAgICB2YXIgayA9IDA7XG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxuICAgICAgdmFyIGtWYWx1ZTtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xuICAgICAgICBpZiAobWFwRm4pIHtcbiAgICAgICAgICBBW2tdID0gdHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oa1ZhbHVlLCBrKSA6IG1hcEZuLmNhbGwoVCwga1ZhbHVlLCBrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIDE4LiBMZXQgcHV0U3RhdHVzIGJlIFB1dChBLCBcImxlbmd0aFwiLCBsZW4sIHRydWUpLlxuICAgICAgQS5sZW5ndGggPSBsZW47XG4gICAgICAvLyAyMC4gUmV0dXJuIEEuXG4gICAgICByZXR1cm4gQTtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIU9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YgPSAoZnVuY3Rpb24oT2JqZWN0LCBtYWdpYykge1xuICAgIHZhciBzZXQ7XG4gICAgZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgIHNldC5jYWxsKE8sIHByb3RvKTtcbiAgICAgIHJldHVybiBPO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gdGhpcyB3b3JrcyBhbHJlYWR5IGluIEZpcmVmb3ggYW5kIFNhZmFyaVxuICAgICAgc2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCBtYWdpYykuc2V0O1xuICAgICAgc2V0LmNhbGwoe30sIG51bGwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gSUUgPCAxMSBjYW5ub3QgYmUgc2hpbW1lZFxuICAgICAgICBPYmplY3QucHJvdG90eXBlICE9PSB7fVttYWdpY10gfHxcbiAgICAgICAgLy8gbmVpdGhlciBjYW4gYW55IGJyb3dzZXIgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBpbXBsZW1lbnRlZCBfX3Byb3RvX18gY29ycmVjdGx5XG4gICAgICAgIC8vIChhbGwgYnV0IG9sZCBWOCB3aWxsIHJldHVybiBoZXJlKVxuICAgICAgICB7X19wcm90b19fOiBudWxsfS5fX3Byb3RvX18gPT09IHZvaWQgMFxuICAgICAgICAvLyB0aGlzIGNhc2UgbWVhbnMgbnVsbCBvYmplY3RzIGNhbm5vdCBiZSBwYXNzZWRcbiAgICAgICAgLy8gdGhyb3VnaCBzZXRQcm90b3R5cGVPZiBpbiBhIHJlbGlhYmxlIHdheVxuICAgICAgICAvLyB3aGljaCBtZWFucyBoZXJlIGEgKipTaGFtKiogaXMgbmVlZGVkIGluc3RlYWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBub2RlanMgMC44IGFuZCAwLjEwIGFyZSAoYnVnZ3kgYW5kLi4pIGZpbmUgaGVyZVxuICAgICAgLy8gcHJvYmFibHkgQ2hyb21lIG9yIHNvbWUgb2xkIE1vYmlsZSBzdG9jayBicm93c2VyXG4gICAgICBzZXQgPSBmdW5jdGlvbihwcm90bykge1xuICAgICAgICB0aGlzW21hZ2ljXSA9IHByb3RvO1xuICAgICAgfTtcbiAgICAgIC8vIHBsZWFzZSBub3RlIHRoYXQgdGhpcyB3aWxsICoqbm90Kiogd29ya1xuICAgICAgLy8gaW4gdGhvc2UgYnJvd3NlcnMgdGhhdCBkbyBub3QgaW5oZXJpdFxuICAgICAgLy8gX19wcm90b19fIGJ5IG1pc3Rha2UgZnJvbSBPYmplY3QucHJvdG90eXBlXG4gICAgICAvLyBpbiB0aGVzZSBjYXNlcyB3ZSBzaG91bGQgcHJvYmFibHkgdGhyb3cgYW4gZXJyb3JcbiAgICAgIC8vIG9yIGF0IGxlYXN0IGJlIGluZm9ybWVkIGFib3V0IHRoZSBpc3N1ZVxuICAgICAgc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPSBzZXRQcm90b3R5cGVPZihcbiAgICAgICAgc2V0UHJvdG90eXBlT2Yoe30sIG51bGwpLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlXG4gICAgICApIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IHRydWUgbWVhbnMgaXQgd29ya3MgYXMgbWVhbnRcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSBmYWxzZSBtZWFucyBpdCdzIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdW5kZWZpbmVkXG4gICAgICAvLyBvclxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT0gIG51bGwgbWVhbnMgaXQncyBub3QgYSBwb2x5ZmlsbFxuICAgICAgLy8gd2hpY2ggbWVhbnMgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICAgIC8vIHdlIGNhbiBldmVuIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLl9fcHJvdG9fXztcbiAgICB9XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mO1xuICB9KE9iamVjdCwgJ19fcHJvdG9fXycpKTtcbn1cbiIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBldmVudCA9IHtcbiAgLyoqXG4gICAqIG9wZW5VcmxcbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAgICovXG4gIG9wZW5VUkw6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsXG4gIH1cblxufVxuXG5jb25zdCBtZXRhID0ge1xuICBldmVudDogW3tcbiAgICBuYW1lOiAnb3BlblVSTCcsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnZXZlbnQnLCBldmVudCwgbWV0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN1cHBvcnRHZW9sb2NhdGlvbiA9ICdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yXG5jb25zdCBlcnJvck1zZyA9IGBbaDUtcmVuZGVyXTogYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgZ2VvbG9jYXRpb24uYFxuXG5jb25zdCBnZW9sb2NhdGlvbiA9IHtcbiAgLy8gb3B0aW9uczpcbiAgLy8gICAtIGVuYWJsZUhpZ2hBY2N1cmFjeSBvcHRpb25hbCwgdmFsdWUgaXMgdHJ1ZSBvciBmYWxzZSwgZmFsc2UgYnkgZGVmYXVsdC5cbiAgLy8gICAtIHRpbWVvdXQgW25vbmUtbmF0aXZlXSBvcHRpb25hbCwgdmFsdWUgaXMgYSBudW1iZXIgKG1pbGxpc2Vjb25kcyksIGRlZmF1bHQgdmF1bGUgaXMgRklORklOSVRZLlxuICAvLyAgIC0gbWF4aW11bUFnZSBbbm9uZS1uYXRpdmVdIG9wdGlvbmFsLCB2YWx1ZSBpcyBhIG51bWJlciAobWlsbGlzZWNvbmRzKSwgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICBnZXRDdXJyZW50UG9zaXRpb24gKHN1Y2Nlc3NDYklkLCBlcnJvckNiSWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdWNjZXNzQ2IgPSBwb3MgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKHN1Y2Nlc3NDYklkLCBwb3MpXG4gICAgY29uc3QgZXJyb3JDYiA9IGVyciA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soZXJyb3JDYklkLCBlcnIpXG4gICAgaWYgKHN1cHBvcnRHZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2IsIGVycm9yQ2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yTXNnKVxuICAgICAgZXJyb3JDYihuZXcgRXJyb3IoZXJyb3JNc2cpKVxuICAgIH1cbiAgfSxcblxuICAvLyBvcHRpb25zOiB0aGUgc2FtZSB3aXRoIGBnZXRDdXJyZW50UG9zaXRpb25gLlxuICB3YXRjaFBvc2l0aW9uIChzdWNjZXNzQ2JJZCwgZXJyb3JDYklkLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3VjY2Vzc0NiID0gcG9zID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhzdWNjZXNzQ2JJZCwgcG9zLCB0cnVlKVxuICAgIGNvbnN0IGVycm9yQ2IgPSBlcnIgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGVycm9yQ2JJZCwgZXJyKVxuICAgIGlmIChzdXBwb3J0R2VvbG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGlkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24ocG9zID0+IHtcbiAgICAgICAgcG9zLndhdGNoSWQgPSBpZFxuICAgICAgICBzdWNjZXNzQ2IocG9zKVxuICAgICAgfSwgZXJyb3JDYiwgb3B0aW9ucylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3JNc2cpXG4gICAgICBlcnJvckNiKG5ldyBFcnJvcihlcnJvck1zZykpXG4gICAgfVxuICB9LFxuXG4gIGNsZWFyV2F0Y2ggKHdhdGNoSWQpIHtcbiAgICBpZiAoc3VwcG9ydEdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvck1zZylcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgZ2VvbG9jYXRpb246IFt7XG4gICAgbmFtZTogJ2dldEN1cnJlbnRQb3NpdGlvbicsXG4gICAgYXJnczogWydmdW5jdGlvbicsICdmdW5jdGlvbicsICdvYmplY3QnXVxuICB9LCB7XG4gICAgbmFtZTogJ3dhdGNoUG9zaXRpb24nLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nLCAnZnVuY3Rpb24nLCAnb2JqZWN0J11cbiAgfSwge1xuICAgIG5hbWU6ICdjbGVhcldhdGNoJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2dlb2xvY2F0aW9uJywgZ2VvbG9jYXRpb24sIG1ldGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYWdlSW5mbyA9IHtcblxuICBzZXRUaXRsZTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZSB8fCAnV2VleCBIVE1MNSdcbiAgICB0cnkge1xuICAgICAgdGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQodGl0bGUpXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBwYWdlSW5mbzogW3tcbiAgICBuYW1lOiAnc2V0VGl0bGUnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3BhZ2VJbmZvJywgcGFnZUluZm8sIG1ldGEpXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBzdXBwb3J0TG9jYWxTdG9yYWdlID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IFNVQ0NFU1MgPSAnc3VjY2VzcydcbmNvbnN0IEZBSUxFRCA9ICdmYWlsZWQnXG5jb25zdCBJTlZBTElEX1BBUkFNID0gJ2ludmFsaWRfcGFyYW0nXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJ1xuXG5jb25zdCBzdG9yYWdlID0ge1xuXG4gIC8qKlxuICAgKiBXaGVuIHBhc3NlZCBhIGtleSBuYW1lIGFuZCB2YWx1ZSwgd2lsbCBhZGQgdGhhdCBrZXkgdG8gdGhlIHN0b3JhZ2UsXG4gICAqIG9yIHVwZGF0ZSB0aGF0IGtleSdzIHZhbHVlIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICAgIGRhdGE6IElOVkFMSURfUEFSQU1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgICBkYXRhOiBVTkRFRklORURcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAvLyBhY2NlcHQgYW55IGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nIGEgc3RvcmFnZSBhdHRlbXB0IGFzIGEgcXVvdGEgZXJyb3JcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogVU5ERUZJTkVEXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBwYXNzZWQgYSBrZXkgbmFtZSwgd2lsbCByZXR1cm4gdGhhdCBrZXkncyB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogSU5WQUxJRF9QQVJBTVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IHZhbCA/IFNVQ0NFU1MgOiBGQUlMRUQsXG4gICAgICBkYXRhOiB2YWwgfHwgVU5ERUZJTkVEXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICpXaGVuIHBhc3NlZCBhIGtleSBuYW1lLCB3aWxsIHJlbW92ZSB0aGF0IGtleSBmcm9tIHRoZSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBpZiAoIWtleSkge1xuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogRkFJTEVELFxuICAgICAgICBkYXRhOiBJTlZBTElEX1BBUkFNXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgIGRhdGE6IFVOREVGSU5FRFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmFnZSBvYmplY3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrSWRcbiAgICovXG4gIGxlbmd0aDogZnVuY3Rpb24gKGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBsZW5cbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIGtleXMgc3RvcmVkIGluIFN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBnZXRBbGxLZXlzOiBmdW5jdGlvbiAoY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGNvbnN0IF9hcnIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfYXJyLnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSlcbiAgICB9XG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBfYXJyXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICBzdG9yYWdlOiBbe1xuICAgIG5hbWU6ICdzZXRJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2dldEl0ZW0nLFxuICAgIGFyZ3M6IFsnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdyZW1vdmVJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdnZXRBbGxLZXlzJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ3N0b3JhZ2UnLCBzdG9yYWdlLCBtZXRhKVxuICB9XG59XG4iLCIodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpICYmICh3aW5kb3cgPSB7Y3RybDoge30sIGxpYjoge319KTshd2luZG93LmN0cmwgJiYgKHdpbmRvdy5jdHJsID0ge30pOyF3aW5kb3cubGliICYmICh3aW5kb3cubGliID0ge30pOyFmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXJhbXNcIix7c2V0OmZ1bmN0aW9uKGEpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IodmFyIGMgaW4gYilkZWxldGUgYltjXTtmb3IodmFyIGMgaW4gYSliW2NdPWFbY119fSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYn0sZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2VhcmNoXCIse3NldDpmdW5jdGlvbihhKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7MD09PWEuaW5kZXhPZihcIj9cIikmJihhPWEuc3Vic3RyKDEpKTt2YXIgYz1hLnNwbGl0KFwiJlwiKTtmb3IodmFyIGQgaW4gYilkZWxldGUgYltkXTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyl7dmFyIGY9Y1tlXS5zcGxpdChcIj1cIik7aWYodm9pZCAwIT09ZlsxXSYmKGZbMV09ZlsxXS50b1N0cmluZygpKSxmWzBdKXRyeXtiW2RlY29kZVVSSUNvbXBvbmVudChmWzBdKV09ZGVjb2RlVVJJQ29tcG9uZW50KGZbMV0pfWNhdGNoKGcpe2JbZlswXV09ZlsxXX19fX0sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9W107Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YltjXSlpZihcIlwiIT09YltjXSl0cnl7YS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChjKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYltjXSkpfWNhdGNoKGQpe2EucHVzaChjK1wiPVwiK2JbY10pfWVsc2UgdHJ5e2EucHVzaChlbmNvZGVVUklDb21wb25lbnQoYykpfWNhdGNoKGQpe2EucHVzaChjKX1yZXR1cm4gYS5sZW5ndGg/XCI/XCIrYS5qb2luKFwiJlwiKTpcIlwifSxlbnVtZXJhYmxlOiEwfSk7dmFyIGM7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJoYXNoXCIse3NldDpmdW5jdGlvbihhKXtcInN0cmluZ1wiPT10eXBlb2YgYSYmKGEmJmEuaW5kZXhPZihcIiNcIik8MCYmKGE9XCIjXCIrYSksYz1hfHxcIlwiKX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGVudW1lcmFibGU6ITB9KSx0aGlzLnNldD1mdW5jdGlvbihhKXthPWF8fFwiXCI7dmFyIGI7aWYoIShiPWEubWF0Y2gobmV3IFJlZ0V4cChcIl4oW2EtejAtOS1dKzopP1svXXsyfSg/OihbXkAvOj9dKykoPzo6KFteQC86XSspKT9AKT8oW146Lz8jXSspKD86WzpdKFswLTldKykpPyhbL11bXj8jO10qKT8oPzpbP10oW14jXSopKT8oWyNdW14/XSopPyRcIixcImlcIikpKSl0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyB1cmkgc2NoZW1lLlwiKTt0aGlzLnByb3RvY29sPWJbMV18fChcIm9iamVjdFwiPT10eXBlb2YgbG9jYXRpb24/bG9jYXRpb24ucHJvdG9jb2w6XCJcIiksdGhpcy51c2VybmFtZT1iWzJdfHxcIlwiLHRoaXMucGFzc3dvcmQ9YlszXXx8XCJcIix0aGlzLmhvc3RuYW1lPXRoaXMuaG9zdD1iWzRdLHRoaXMucG9ydD1iWzVdfHxcIlwiLHRoaXMucGF0aG5hbWU9Yls2XXx8XCIvXCIsdGhpcy5zZWFyY2g9Yls3XXx8XCJcIix0aGlzLmhhc2g9Yls4XXx8XCJcIix0aGlzLm9yaWdpbj10aGlzLnByb3RvY29sK1wiLy9cIit0aGlzLmhvc3RuYW1lfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5wcm90b2NvbCtcIi8vXCI7cmV0dXJuIHRoaXMudXNlcm5hbWUmJihhKz10aGlzLnVzZXJuYW1lLHRoaXMucGFzc3dvcmQmJihhKz1cIjpcIit0aGlzLnBhc3N3b3JkKSxhKz1cIkBcIiksYSs9dGhpcy5ob3N0LHRoaXMucG9ydCYmXCI4MFwiIT09dGhpcy5wb3J0JiYoYSs9XCI6XCIrdGhpcy5wb3J0KSx0aGlzLnBhdGhuYW1lJiYoYSs9dGhpcy5wYXRobmFtZSksdGhpcy5zZWFyY2gmJihhKz10aGlzLnNlYXJjaCksdGhpcy5oYXNoJiYoYSs9dGhpcy5oYXNoKSxhfSxhJiZ0aGlzLnNldChhLnRvU3RyaW5nKCkpfWIuaHR0cHVybD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IGMoYSl9fSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKTs7bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubGliWydodHRwdXJsJ107IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdHMpIHtcblx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdHMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpO1xuXHRcdH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXRba2V5XTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuXHRvcHRzID0gb2JqZWN0QXNzaWduKHthcnJheUZvcm1hdDogJ25vbmUnfSwgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvaXNzdWVzLzQ3XG5cdHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVVUklDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnXG5cdH07XG5cblx0b3B0cyA9IG9iamVjdEFzc2lnbihkZWZhdWx0cywgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcbiIsIi8qIGdsb2JhbCBsaWIsIFhNTEh0dHBSZXF1ZXN0ICovXG4vKiBkZXBzOiBodHRwdXJsICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgdXRpbHNcblxuaW1wb3J0ICdodHRwdXJsJ1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZydcblxubGV0IGpzb25wQ250ID0gMFxuY29uc3QgRVJST1JfU1RBVEUgPSAtMVxuXG5mdW5jdGlvbiBfanNvbnAgKGNvbmZpZywgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgY29uc3QgY2JOYW1lID0gJ2pzb25wXycgKyAoKytqc29ucENudClcbiAgbGV0IHVybFxuXG4gIGlmICghY29uZmlnLnVybCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGNvbmZpZy51cmwgc2hvdWxkIGJlIHNldCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSS4nKVxuICB9XG5cbiAgZ2xvYmFsW2NiTmFtZV0gPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgb2s6IHRydWUsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcblxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICB0cnkge1xuICAgIHVybCA9IGxpYi5odHRwdXJsKGNvbmZpZy51cmwpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIGludmFsaWQgY29uZmlnLnVybCBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSTogJ1xuICAgICAgKyBjb25maWcudXJsKVxuICB9XG4gIHVybC5wYXJhbXMuY2FsbGJhY2sgPSBjYk5hbWVcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuc3JjID0gdXJsLnRvU3RyaW5nKClcbiAgLy8gc2NyaXB0Lm9uZXJyb3IgaXMgbm90IHdvcmtpbmcgb24gSUUgb3Igc2FmYXJpLlxuICAvLyBidXQgdGhleSBhcmUgbm90IGNvbnNpZGVyZWQgaGVyZS5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gX2pzb25wIGZvciBcXCdmZXRjaFxcJyBBUEknLCBlcnIpXG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogRVJST1JfU1RBVEUsXG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICAgIGRhdGE6ICcnXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGdsb2JhbFtjYl1cbiAgICB9XG4gIH0pKGNiTmFtZSlcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBudWxsKVxufVxuXG5mdW5jdGlvbiBfeGhyIChjb25maWcsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhoci5yZXNwb25zZVR5cGUgPSBjb25maWcudHlwZVxuICB4aHIub3Blbihjb25maWcubWV0aG9kLCBjb25maWcudXJsLCB0cnVlKVxuXG4gIC8vIGNvcnMgY29va2llIHN1cHBvcnRcbiAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgPT09IHRydWUpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gIGZvciAoY29uc3QgayBpbiBoZWFkZXJzKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSlcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgb2s6IHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDAsXG4gICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIGhlYWRlcnM6IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5zcGxpdCgnXFxuJylcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAob2JqLCBoZWFkZXJTdHIpIHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgIGlmIChoZWFkZXJBcnIpIHtcbiAgICAgICAgICAgIG9ialtoZWFkZXJBcnJbMV1dID0gaGVhZGVyQXJyWzJdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcHJvZ3Jlc3NDYWxsYmFjayh7XG4gICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIGxlbmd0aDogZS5sb2FkZWQsXG4gICAgICAgIHRvdGFsOiBlLnRvdGFsLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXG4nKVxuICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaGVhZGVyU3RyKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJBcnIgPSBoZWFkZXJTdHIubWF0Y2goLyguKyk6ICguKykvKVxuICAgICAgICAgICAgaWYgKGhlYWRlckFycikge1xuICAgICAgICAgICAgICBvYmpbaGVhZGVyQXJyWzFdXSA9IGhlYWRlckFyclsyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH0sIHt9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSB1bmV4cGVjdGVkIGVycm9yIGluIF94aHIgZm9yIFxcJ2ZldGNoXFwnIEFQSScsIGVycilcbiAgICBjYWxsYmFjayh7XG4gICAgICBzdGF0dXM6IEVSUk9SX1NUQVRFLFxuICAgICAgb2s6IGZhbHNlLFxuICAgICAgc3RhdHVzVGV4dDogJycsXG4gICAgICBkYXRhOiAnJ1xuICAgIH0pXG4gIH1cblxuICB4aHIuc2VuZChjb25maWcuYm9keSB8fCBudWxsKVxufVxuXG5jb25zdCBzdHJlYW0gPSB7XG5cbiAgLyoqXG4gICAqIHNlbmRIdHRwXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIE5vdGU6IFRoaXMgQVBJIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc3RyZWFtLmZldGNoIGluc3RlYWQuXG4gICAqIHNlbmQgYSBodHRwIHJlcXVlc3QgdGhyb3VnaCBYSFIuXG4gICAqIEBwYXJhbSAge29ian0gcGFyYW1zXG4gICAqICAtIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BBVENIJyxcbiAgICogIC0gdXJsOiB1cmwgcmVxdWVzdGVkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKi9cbiAgc2VuZEh0dHA6IGZ1bmN0aW9uIChwYXJhbSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJhbSA9IEpTT04ucGFyc2UocGFyYW0pXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ29iamVjdCcgfHwgIXBhcmFtLnVybCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbaDUtcmVuZGVyXSBpbnZhbGlkIGNvbmZpZyBvciBpbnZhbGlkIGNvbmZpZy51cmwgZm9yIHNlbmRIdHRwIEFQSScpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBtZXRob2QgPSBwYXJhbS5tZXRob2QgfHwgJ0dFVCdcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vcGVuKG1ldGhvZCwgcGFyYW0udXJsLCB0cnVlKVxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHRoaXMucmVzcG9uc2VUZXh0KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJywgZXJyb3IpXG4gICAgICAvLyBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKFxuICAgICAgLy8gICBjYWxsYmFja0lkLFxuICAgICAgLy8gICBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJylcbiAgICAgIC8vIClcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiBmZXRjaFxuICAgKiB1c2Ugc3RyZWFtLmZldGNoIHRvIHJlcXVlc3QgZm9yIGEganNvbiBmaWxlLCBhIHBsYWluIHRleHQgZmlsZSBvclxuICAgKiBhIGFycmF5YnVmZmVyIGZvciBhIGZpbGUgc3RyZWFtLiAoWW91IGNhbiB1c2UgQmxvYiBhbmQgRmlsZVJlYWRlclxuICAgKiBBUEkgaW1wbGVtZW50ZWQgYnkgbW9zdCBtb2Rlcm4gYnJvd3NlcnMgdG8gcmVhZCBhIGFycmF5YnVmZmVyLilcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIGNvbmZpZyBvcHRpb25zXG4gICAqICAgLSBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJyB8ICdIRUFEJyB8ICdQQVRDSCdcbiAgICogICAtIGhlYWRlcnMge29ian1cbiAgICogICAtIHVybCB7c3RyaW5nfVxuICAgKiAgIC0gbW9kZSB7c3RyaW5nfSAnY29ycycgfCAnbm8tY29ycycgfCAnc2FtZS1vcmlnaW4nIHwgJ25hdmlnYXRlJ1xuICAgKiAgIC0gd2l0aENyZWRlbnRpYWxzIHtib29sZWFufVxuICAgKiAgIC0gYm9keVxuICAgKiAgIC0gdHlwZSB7c3RyaW5nfSAnanNvbicgfCAnanNvbnAnIHwgJ3RleHQnXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb2dyZXNzQ2FsbGJhY2tJZFxuICAgKi9cbiAgZmV0Y2g6IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFja0lkLCBwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICBjb25zdCBERUZBVUxUX01FVEhPRCA9ICdHRVQnXG4gICAgY29uc3QgREVGQVVMVF9NT0RFID0gJ2NvcnMnXG4gICAgY29uc3QgREVGQVVMVF9UWVBFID0gJ3RleHQnXG5cbiAgICBjb25zdCBtZXRob2RPcHRpb25zID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJywgJ0hFQUQnLCAnUEFUQ0gnXVxuICAgIGNvbnN0IG1vZGVPcHRpb25zID0gWydjb3JzJywgJ25vLWNvcnMnLCAnc2FtZS1vcmlnaW4nLCAnbmF2aWdhdGUnXVxuICAgIGNvbnN0IHR5cGVPcHRpb25zID0gWyd0ZXh0JywgJ2pzb24nLCAnanNvbnAnLCAnYXJyYXlidWZmZXInXVxuXG4gICAgLy8gY29uc3QgZmFsbGJhY2sgPSBmYWxzZSAgLy8gZmFsbGJhY2sgZnJvbSAnZmV0Y2gnIEFQSSB0byBYSFIuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcblxuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucylcblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubWV0aG9kXG4gICAgaWYgKHR5cGVvZiBjb25maWcubWV0aG9kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1ldGhvZCA9IERFRkFVTFRfTUVUSE9EXG4gICAgICBjb25zb2xlLndhcm4oJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIGZvciBcXCdmZXRjaFxcJyBBUEkgaGFzIGJlZW4gc2V0IHRvICdcbiAgICAgICAgKyAnZGVmYXVsdCB2YWx1ZSBcXCcnICsgY29uZmlnLm1ldGhvZCArICdcXCcnKVxuICAgIH1cbiAgICBlbHNlIGlmIChtZXRob2RPcHRpb25zLmluZGV4T2YoKGNvbmZpZy5tZXRob2QgKyAnJylcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIFxcJydcbiAgICAgICAgKyBjb25maWcubWV0aG9kXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1ldGhvZE9wdGlvbnMgKyAnLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy51cmxcbiAgICBpZiAoIWNvbmZpZy51cmwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLnVybCBzaG91bGQgYmUgc2V0IGZvciBcXCdmZXRjaFxcJyBBUEkuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBib2R5IGNvbnRlbnQgZm9yIG1ldGhvZCAnR0VUJy5cbiAgICBpZiAoY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJykge1xuICAgICAgbGV0IGJvZHkgPSBjb25maWcuYm9keVxuICAgICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoYm9keSkpIHtcbiAgICAgICAgYm9keSA9IHFzLnN0cmluZ2lmeShib2R5KVxuICAgICAgfVxuICAgICAgbGV0IHVybCA9IGNvbmZpZy51cmxcbiAgICAgIGxldCBoYXNoSWR4ID0gdXJsLmluZGV4T2YoJyMnKVxuICAgICAgaGFzaElkeCA8PSAtMSAmJiAoaGFzaElkeCA9IHVybC5sZW5ndGgpXG4gICAgICBsZXQgaGFzaCA9IHVybC5zdWJzdHIoaGFzaElkeClcbiAgICAgIGhhc2ggJiYgKGhhc2ggPSAnIycgKyBoYXNoKVxuICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCBoYXNoSWR4KVxuICAgICAgdXJsICs9IChjb25maWcudXJsLmluZGV4T2YoJz8nKSA8PSAtMSA/ICc/JyA6ICcmJykgKyBib2R5ICsgaGFzaFxuICAgICAgY29uZmlnLnVybCA9IHVybFxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubW9kZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW9kZSA9IERFRkFVTFRfTU9ERVxuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlT3B0aW9ucy5pbmRleE9mKChjb25maWcubW9kZSArICcnKS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLm1vZGUgXFwnJ1xuICAgICAgICArIGNvbmZpZy5tb2RlXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1vZGVPcHRpb25zICsgJy4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudHlwZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcudHlwZSA9IERFRkFVTFRfVFlQRVxuICAgICAgY29uc29sZS53YXJuKCdbaDUtcmVuZGVyXSBvcHRpb25zLnR5cGUgZm9yIFxcJ2ZldGNoXFwnIEFQSSBoYXMgYmVlbiBzZXQgdG8gJ1xuICAgICAgICArICdkZWZhdWx0IHZhbHVlIFxcJycgKyBjb25maWcudHlwZSArICdcXCcuJylcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZU9wdGlvbnMuaW5kZXhPZigoY29uZmlnLnR5cGUgKyAnJykudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy50eXBlIFxcJydcbiAgICAgICAgICArIGNvbmZpZy50eXBlXG4gICAgICAgICAgKyAnXFwnIGZvciBcXCdmZXRjaFxcJyBBUEkgc2hvdWxkIGJlIG9uZSBvZiAnXG4gICAgICAgICAgKyB0eXBlT3B0aW9ucyArICcuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLmhlYWRlcnNcbiAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMuaGVhZGVycyBzaG91bGQgYmUgYSBwbGFpbiBvYmplY3QnKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudGltZW91dFxuICAgIGNvbmZpZy50aW1lb3V0ID0gcGFyc2VJbnQoY29uZmlnLnRpbWVvdXQsIDEwKSB8fCAyNTAwXG5cbiAgICBjb25zdCBfY2FsbEFyZ3MgPSBbY29uZmlnLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHJlcylcbiAgICB9XVxuICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICAgIF9jYWxsQXJncy5wdXNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8gU2V0ICdrZWVwQWxpdmUnIHRvIHRydWUgZm9yIHNlbmRpbmcgY29udGludW91cyBjYWxsYmFja3NcbiAgICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhwcm9ncmVzc0NhbGxiYWNrSWQsIHJlcywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnanNvbnAnKSB7XG4gICAgICBfanNvbnAuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIF94aHIuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHN0cmVhbTogW3tcbiAgICBuYW1lOiAnc2VuZEh0dHAnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdmZXRjaCcsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nLCAnZnVuY3Rpb24nXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgdXRpbHMgPSBXZWV4LnV0aWxzXG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnc3RyZWFtJywgc3RyZWFtLCBtZXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG5cbkFVQ1RJT046XG50YXNrUXVldWVcbkNsaXBib2FyZC5zZXRTdHJpbmcoKSAgTk9XIG5vdCB3b3JrcywgZmFjaW5nIHRvIHVzZXItYWN0IGxvc2Ugb2YgdGFza1F1ZXVlLlxuXG53b3JrcyBpbiBDaHJvbWUgRmlyZWZveCBPcGVyYS4gYnV0IG5vdCBpbiBTYWZhcmkuXG5Ac2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9leGVjQ29tbWFuZCNCcm93c2VyX2NvbXBhdGliaWxpdHlcblxuQ2xpcGJvYXJkLmdldFN0cmluZygpIHVuaW1wbGVtZW50ZWQuIFRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGRvIHBhc3RlIGZyb20gY2xpcGJvYXJkIHRvIGpzIHZhcmlhYmxlLlxuXG5TbyBsb29rIG91dCB5b3VyIGFwcCBiZWhhdmlvciwgd2hlbiBkb3duZ3JhZGUgdG8gaHRtbDUgcmVuZGVyLlxuQW55IGlkZWEgaXMgd2VsY29tZS5cbioqL1xuXG5jb25zdCBXRUVYX0NMSVBCT0FSRF9JRCA9ICdfX3dlZXhfY2xpcGJvYXJkX2lkX18nXG5cbmNvbnN0IGNsaXBib2FyZCA9IHtcblxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uIChjYWxsYmFja0lkKSB7XG4gICAgLy8gbm90IHN1cHBvcnRlZCBpbiBodG1sNVxuICAgIGNvbnNvbGUubG9nKCdjbGlwYm9hcmQuZ2V0U3RyaW5nKCkgaXMgbm90IHN1cHBvcnRlZCBub3cuJylcbiAgfSxcblxuICBzZXRTdHJpbmc6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgLy8gbm90IHN1cHBvcnQgc2FmYXJpXG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyAmJiB0ZXh0ICE9PSAnJyAmJiBkb2N1bWVudC5leGVjQ29tbWFuZCkge1xuICAgICAgY29uc3QgdGVtcElucHV0ID0gZWxlbWVudCgpXG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSB0ZXh0XG5cbiAgICAgIHRlbXBJbnB1dC5zZWxlY3QoKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgICAgLy8gdmFyIG91dCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV4ZWNDb21tYW5kIG91dCBpcyBcIiArIG91dCk7XG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgdGVtcElucHV0LmJsdXIoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbmx5IHN1cHBvcnQgc3RyaW5nIGlucHV0IG5vdycpXG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZWxlbWVudCAoKSB7XG4gIGxldCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChXRUVYX0NMSVBCT0FSRF9JRClcbiAgaWYgKCF0ZW1wSW5wdXQpIHtcbiAgICB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBXRUVYX0NMSVBCT0FSRF9JRClcbiAgICB0ZW1wSW5wdXQuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6MXB4O3dpZHRoOjFweDtib3JkZXI6bm9uZTsnXG4gICAgLy8gdGVtcElucHV0LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDo0MHB4O3dpZHRoOjMwMHB4O2JvcmRlcjpzb2xpZDtcIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KVxuICB9XG4gIHJldHVybiB0ZW1wSW5wdXRcbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgY2xpcGJvYXJkOiBbe1xuICAgIG5hbWU6ICdnZXRTdHJpbmcnLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3NldFN0cmluZycsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnY2xpcGJvYXJkJywgY2xpcGJvYXJkLCBtZXRhKVxuICB9XG59XG4iLCIvKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqIHRoZSByaWdodGVzdCBvYmplY3QncyB2YWx1ZSBoYXMgdGhlIGhpZ2hlc3QgcHJpb3JpdHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRvLCAuLi5hcmdzKSB7XG4gIGlmICghYXJncyB8fCBhcmdzLmxlbmd0aCA8PSAwKSB7IHJldHVybiB0byB9XG4gIGFyZ3MuZm9yRWFjaChmcm9tID0+IHtcbiAgICBpZiAodHlwZW9mIGZyb20gIT09ICdvYmplY3QnKSB7IHJldHVybiB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogTWl4IHNwZWNpZmllZCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZEtleXMgKHRvLCBmcm9tLCBrZXlzKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICAoa2V5cyB8fCBbXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRvW2tleV0gPSBmcm9tW2tleV1cbiAgfSlcbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRXh0cmFjdCBzcGVjaWZpZWQgcHJvcGVydGllcyBmcm9tIHNyYyB0byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEtleXMgKHRvLCBmcm9tLCBrZXlzKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICAoa2V5cyB8fCBbXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRvW2tleV0gPSBmcm9tW2tleV1cbiAgICBkZWxldGUgZnJvbVtrZXldXG4gIH0pXG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBPbmx5IGNhbGwgdGhlIGZ1bmMgdGhlIGxhc3QgdGltZSBiZWZvcmUgaXQncyBub3QgdGhhdCBmcmVxdWVudGx5IGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlIChmdW5jLCB3YWl0KSB7XG4gIGxldCB0aW1lcklkXG4gIGZ1bmN0aW9uIGxhdGVyICgpIHtcbiAgICB0aW1lcklkID0gbnVsbFxuICAgIGZ1bmMuYXBwbHkobnVsbClcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICB9XG59XG5cbi8qKlxuICogT25seSBjYWxsIHRoZSBmdW5jIHRoZSBmaXJzdCB0aW1lIGJlZm9yZSBhIHNlcmllcyBmcmVxdWVudGx5IGZ1bmN0aW9uIGNhbGxzIGhhcHBlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlc3MgKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVySWRcbiAgZnVuY3Rpb24gbGF0ZXIgKCkge1xuICAgIHRpbWVySWQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRpbWVySWQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoKVxuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZXJJZClcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgfVxufVxuXG4vKipcbiAqIE9ubHkgY2FsbCB0aGUgZnVuYyBldmVyeSB0aW1lIGFmdGVyIGEgd2FpdCBtaWxsaXNlY29uZHMgaWYgaXQncyB0b28gZnJlcXVlbnRseSBjYWxsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZSAoZnVuYywgd2FpdCwgY2FsbExhc3RUaW1lLCB0YWcpIHtcbiAgbGV0IGxhc3QgPSAwXG4gIGxldCBsYXN0VGltZXIgPSBudWxsXG4gIGNvbnN0IGxhc3RUaW1lRHVyYXRpb24gPSB3YWl0ICsgKHdhaXQgPiAyNSA/IHdhaXQgOiAyNSkgIC8vIHBsdXMgaGFsZiB3YWl0IHRpbWUuXG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgaWYgKHRpbWUgLSBsYXN0ID4gd2FpdCkge1xuICAgICAgaWYgKGNhbGxMYXN0VGltZSkge1xuICAgICAgICBsYXN0VGltZXIgJiYgY2xlYXJUaW1lb3V0KGxhc3RUaW1lcilcbiAgICAgICAgbGFzdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGFzdFRpbWVyID0gbnVsbFxuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgICAgfSwgbGFzdFRpbWVEdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3QgPSB0aW1lXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2Z1bmMnXG5cbi8qKlxuICogQ3JlYXRlIEV2ZW50LlxuICogQHBhcmFtIHtET01TdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnQgKGNvbnRleHQsIHR5cGUsIHByb3BzKSB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHsgYnViYmxlczogZmFsc2UgfSlcbiAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIGV4dGVuZChldmVudCwgcHJvcHMpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuICB9KVxuXG4gIHJldHVybiBldmVudFxufVxuXG4vKipcbiAqIENyZWF0ZSBDdXN0b20gRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbiAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3VzdG9tZXZlbnRcbiAgLy8gY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSlcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIHRydWUsIHt9KVxuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgZXh0ZW5kKGV2ZW50LCBwcm9wcylcblxuICAvLyBUT0RPOiBldmVudC50YXJnZXQgaXMgcmVhZG9ubHlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuICB9KVxuXG4gIHJldHVybiBldmVudFxufVxuXG4vKipcbiAqIGRpc3BhdGNoIGEgZXZlbnQgb24gYSBkb20gZWxlbWVudC5cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBkb21cbiAqIEBwYXJhbSAge0V2ZW50fSBldmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCAoZG9tLCBldmVudCkge1xuICBkb20uZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEZvcm1FdmVudHMgKGNvbnRleHQpIHtcbiAgY29uc3QgZXZlbnRNYXAgPSB7fVxuICA7WydpbnB1dCcsICdjaGFuZ2UnLCAnZm9jdXMnLCAnYmx1ciddLmZvckVhY2godHlwZSA9PiB7XG4gICAgZXZlbnRNYXBbdHlwZV0gPSBldmVudCA9PiB7XG4gICAgICBpZiAoY29udGV4dC4kZWwpIHtcbiAgICAgICAgZXZlbnQudmFsdWUgPSBjb250ZXh0LiRlbC52YWx1ZVxuICAgICAgfVxuICAgICAgY29udGV4dC4kZW1pdCh0eXBlLCBldmVudClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBldmVudE1hcFxufVxuIiwiaW1wb3J0IHsgdGhyb3R0bGUsIGV4dGVuZCB9IGZyb20gJy4vZnVuYydcbmltcG9ydCB7IGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9ldmVudCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFNjcm9sbGVyICh2bm9kZSkge1xuICBpZiAoIXZub2RlKSByZXR1cm4gbnVsbFxuICBpZiAodm5vZGUud2VleFR5cGUgPT09ICdzY3JvbGxlcicgfHwgdm5vZGUud2VleFR5cGUgPT09ICdsaXN0Jykge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG4gIHJldHVybiBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZS4kcGFyZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW50ZXJzZWN0aW9uIChyZWN0LCBjdFJlY3QpIHtcbiAgcmV0dXJuIChyZWN0LmxlZnQgPCBjdFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+IGN0UmVjdC5sZWZ0KVxuICAgICYmIChyZWN0LnRvcCA8IGN0UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPiBjdFJlY3QudG9wKVxufVxuXG4vKipcbiAqIFtpc0VsZW1lbnRWaXNpYmxlIGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICBhIGRvbSBlbGVtZW50LlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBjb250YWluZXIgIG9wdGlvbmFsLCB0aGUgY29udGFpbmVyIG9mIHRoaXMgZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlIChlbCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGJvZHlSZWN0ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aFxuICB9XG4gIGNvbnN0IGN0UmVjdCA9IChjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkpXG4gICAgPyBib2R5UmVjdCA6IGNvbnRhaW5lclxuICAgID8gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogYm9keVJlY3RcbiAgcmV0dXJuIGhhc0ludGVyc2VjdGlvbihcbiAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBjdFJlY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudFZpc2libGUgKGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50LiRlbCkge1xuICAgIGNvbnN0IHNjcm9sbGVyID0gZ2V0UGFyZW50U2Nyb2xsZXIoY29tcG9uZW50KVxuICAgIGlmIChzY3JvbGxlciAmJiBzY3JvbGxlci4kZWwpIHtcbiAgICAgIHJldHVybiBoYXNJbnRlcnNlY3Rpb24oXG4gICAgICAgIGNvbXBvbmVudC4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNjcm9sbGVyLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBpc0VsZW1lbnRWaXNpYmxlKGNvbXBvbmVudC4kZWwpXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBUT0RPOiBpbXByb3ZlIHRoZSBlZmZpY2llbmN5XG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hBcHBlYXIgKGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gbnVsbFxuXG4gIGNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoKGNvbnRleHQuJG9wdGlvbnMgJiYgY29udGV4dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzKVxuICAgICAgfHwgKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLmRhdGEgJiYgY29udGV4dC4kdm5vZGUuZGF0YS5vbikpIHtcbiAgICAgIGNvbnN0IG9uID0gZXh0ZW5kKHt9LCBjb250ZXh0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMsIGNvbnRleHQuJHZub2RlLmRhdGEub24pXG4gICAgICBpZiAob24uYXBwZWFyIHx8IG9uLmRpc2FwcGVhcikge1xuICAgICAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbnRleHQpXG4gICAgICAgIGxldCBpc1dpbmRvdyA9IGZhbHNlXG4gICAgICAgIGxldCBjb250YWluZXIgPSB3aW5kb3dcbiAgICAgICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCkge1xuICAgICAgICAgIGNvbnRhaW5lciA9IHNjcm9sbGVyLiRlbFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlzV2luZG93ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgICAgICBjb250ZXh0Ll92aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZShjb250ZXh0LiRlbCwgaXNXaW5kb3cgPyBkb2N1bWVudC5ib2R5IDogY29udGFpbmVyKVxuICAgICAgICBpZiAoY29udGV4dC5fdmlzaWJsZSAmJiBvbi5hcHBlYXIpIHtcbiAgICAgICAgICBpZiAob24uYXBwZWFyLmZuKSB7XG4gICAgICAgICAgICBvbi5hcHBlYXIgPSBvbi5hcHBlYXIuZm5cbiAgICAgICAgICB9XG4gICAgICAgICAgb24uYXBwZWFyKGNyZWF0ZUV2ZW50KGNvbnRleHQuJGVsLCAnYXBwZWFyJywgeyBkaXJlY3Rpb246IG51bGwgfSkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRocm90dGxlKGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCB2aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZShjb250ZXh0LiRlbCwgaXNXaW5kb3cgPyBkb2N1bWVudC5ib2R5IDogY29udGFpbmVyKVxuICAgICAgICAgIGxldCBsaXN0ZW5lciA9IG51bGxcbiAgICAgICAgICBsZXQgdHlwZSA9IG51bGxcbiAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gY29udGV4dC5fdmlzaWJsZSkge1xuICAgICAgICAgICAgY29udGV4dC5fdmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gb24uYXBwZWFyXG4gICAgICAgICAgICAgIHR5cGUgPSAnYXBwZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gb24uZGlzYXBwZWFyXG4gICAgICAgICAgICAgIHR5cGUgPSAnZGlzYXBwZWFyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuZm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICBsaXN0ZW5lciAmJiBsaXN0ZW5lcihjcmVhdGVFdmVudChjb250ZXh0LiRlbCwgdHlwZSwge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHNjcm9sbFRvcCA8IGxhc3RTY3JvbGxUb3AgPyAnZG93bidcbiAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3AgPyAndXAnIDogbnVsbFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNSwgdHJ1ZSlcblxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuY29uc3QgQVJSQVlfU1RSSU5HID0gJ1tvYmplY3QgQXJyYXldJ1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09PSBBUlJBWV9TVFJJTkdcbn1cbiIsIi8qKlxuICogQGZpbGVPdmVydmlldzogcGVyZiBkYXRhIHJlY29yZGVyLlxuICovXG5cbmltcG9ydCB7IGRlYm91bmNlLCBkZXByZXNzIH0gZnJvbSAnLi9mdW5jJ1xuXG4vLyBwZXJmb3JtYW5jZSB0cmFja2VyIGZvciB3ZWV4LlxuY29uc3QgcGVyZiA9IHdpbmRvdy5fd2VleF9wZXJmID0ge1xuICBlYXJsaWVzdEJlZm9yZUNyZWF0ZXM6IFtdLFxuICBsYXRlc3RNb3VudHM6IFtdLFxuICBlYXJsaWVzdEJlZm9yZVVwZGF0ZXM6IFtdLFxuICBsYXRlc3RVcGRhdGVzOiBbXSxcbiAgbGF0ZXN0UmVuZGVyRmluaXNoZXM6IFtdLFxuICAvLyBjcmVhdGVUaW1lOiBlYXJsaWVzdCBiZWZvcmVDcmVhdGUgLT4gbGF0ZXN0IG1vdW50ZWQuXG4gIGNyZWF0ZVRpbWU6IFtdLFxuICAvLyB1cGRhdGVUaW1lOiBlYXJsaWVzdCBiZWZvcmVVcGRhdGUgLT4gbGF0ZXN0IHVwZGF0ZWQuXG4gIHVwZGF0ZVRpbWU6IFtdLFxuICAvLyByZW5kZXJUaW1lOiBlYXJsaWVzdCBiZWZvcmVDcmVhdGUvYmVmb3JlVXBkYXRlIC0+IGxhdGVzdCBpbWcgbG9hZGVkLlxuICByZW5kZXJUaW1lOiBbXSxcbiAgZW50cmllczogW10sXG4gIHRpbWU6IHt9XG59XG5cbmNvbnN0IHRtcCA9IHt9XG5cbmNvbnN0IElNR19SRUNfSU5ERU5UID0gNTAwICAvLyByZWNvcmQgbG9hZGluZyBldmVudHMgYWZ0ZXIgNTAwbXMgdG93YXJkcyBsYXN0IHJlY29yZGluZy5cblxubGV0IGVhcmxpZXN0QmVmb3JlVXBkYXRlVGltZSA9IDBcbmxldCBlYXJsaWVzdEJlZm9yZUNyZWF0ZVRpbWUgPSAwXG5cbmZ1bmN0aW9uIGdldE5vdyAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG5cbmZ1bmN0aW9uIGdldEVudHJpZXMgKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2UuZ2V0RW50cmllc1xuICAgID8gcGVyZm9ybWFuY2UuZ2V0RW50cmllcygpXG4gICAgOiBbeyByZXNwb25zZUVuZDogZ2V0Tm93KCkgLSBJTUdfUkVDX0lOREVOVCB9XVxufVxuXG4vKipcbiAqIGdldCBmaXJzdCBzY3JlZW4gdGltZS5cbiAqL1xuY29uc3QgZGVib3VuY2VkVGFnSW1nID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBjb25zdCBlbnRyaWVzID0gZ2V0RW50cmllcygpXG4gIGNvbnN0IGxlbiA9IGVudHJpZXMubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgZW5kID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGNvbnN0IHJlc3BvbnNlRW5kID0gZW50cmllc1tpXS5yZXNwb25zZUVuZFxuICAgIGVuZCA9IGVuZCA8IHJlc3BvbnNlRW5kID8gcmVzcG9uc2VFbmQgOiBlbmRcbiAgICBwZXJmLmVudHJpZXMucHVzaCh7XG4gICAgICByZXF1ZXN0U3RhcnQ6IGVudHJpZXNbaV0ucmVxdWVzdFN0YXJ0LFxuICAgICAgcmVzcG9uc2VFbmRcbiAgICB9KVxuICAgIGkrK1xuICB9XG4gIHBlcmYubGF0ZXN0UmVuZGVyRmluaXNoZXMucHVzaChlbmQpXG4gIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lLCBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUpXG4gIHBlcmYucmVuZGVyVGltZS5wdXNoKHtcbiAgICBzdGFydCxcbiAgICBlbmQsXG4gICAgZHVyYXRpb246IGVuZCAtIHN0YXJ0XG4gIH0pXG5cbiAgY29uc3QgbnVtID0gcGVyZi5yZW5kZXJUaW1lLmxlbmd0aFxuICBwZXJmW2BzY3JlZW5UaW1lJHtudW19YF0gPSBlbmRcbiAgd2VleC5lbWl0KCdyZW5kZXJmaW5pc2gnLCBlbmQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnNvbGUubG9nKGBzY3JlZW5UaW1lWyR7bnVtfV06ICR7ZW5kfSBtcy5gKVxuICAgIGNvbnNvbGUubG9nKCdfd2VleF9wZXJmOicsIHdpbmRvdy5fd2VleF9wZXJmKVxuICB9XG59LCBJTUdfUkVDX0lOREVOVClcblxuZXhwb3J0IGZ1bmN0aW9uIHRhZ0ltZyAoKSB7XG4gIGRlYm91bmNlZFRhZ0ltZygpXG59XG5cbi8qKlxuICogcmVjb3JkaW5nIHRoZSBlYXJsaWVzdCAnYmVmb3JlQ3JlYXRlJyB0aW1lLlxuICovXG5jb25zdCBkZXByZXNzZWRUYWdCZWZvcmVDcmVhdGUgPSBkZXByZXNzKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm93ID0gZ2V0Tm93KClcbiAgZWFybGllc3RCZWZvcmVDcmVhdGVUaW1lID0gbm93XG4gIHBlcmYuZWFybGllc3RCZWZvcmVDcmVhdGVzLnB1c2gobm93KVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdCZWZvcmVDcmVhdGUgKCkge1xuICBkZXByZXNzZWRUYWdCZWZvcmVDcmVhdGUoKVxufVxuXG4vKipcbiAqIHJlY29yZGluZyB0aGUgbGF0ZXN0ICdtb3VudGVkJyB0aW1lLlxuICovXG5jb25zdCBkZWJvdW5jZWRUYWdNb3VudGVkID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBjb25zdCBub3cgPSBnZXROb3coKVxuICBwZXJmLmxhdGVzdE1vdW50cy5wdXNoKG5vdylcbiAgcGVyZi5jcmVhdGVUaW1lLnB1c2goe1xuICAgIHN0YXJ0OiBlYXJsaWVzdEJlZm9yZUNyZWF0ZVRpbWUsXG4gICAgZW5kOiBub3csXG4gICAgZHVyYXRpb246IG5vdyAtIGVhcmxpZXN0QmVmb3JlQ3JlYXRlVGltZVxuICB9KVxuXG4gIGlmICghcGVyZi5maXJzdEFsbE1vdW50ZWRUaW1lKSB7XG4gICAgcGVyZi5maXJzdEFsbE1vdW50ZWRUaW1lID0gbm93XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICBjb25zb2xlLmxvZyhgZmlyc3QgYWxsIG1vdW50ZWQgdGltZTogJHtub3d9IG1zLmApXG4gICAgfVxuICB9XG59LCAyNSlcblxuZXhwb3J0IGZ1bmN0aW9uIHRhZ01vdW50ZWQgKCkge1xuICBkZWJvdW5jZWRUYWdNb3VudGVkKClcbn1cblxuLyoqXG4gKiByZWNvcmRpbmcgdGhlIGVhcmxpZXN0ICdiZWZvcmVVcGRhdGUnIHRpbWUuXG4gKi9cbmNvbnN0IGRlcHJlc3NlZFRhZ0JlZm9yZVVwZGF0ZSA9IGRlcHJlc3MoZnVuY3Rpb24gKCkge1xuICBjb25zdCBub3cgPSBnZXROb3coKVxuICBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUgPSBub3dcbiAgcGVyZi5lYXJsaWVzdEJlZm9yZVVwZGF0ZXMucHVzaChub3cpXG59LCAyNSlcblxuZXhwb3J0IGZ1bmN0aW9uIHRhZ0JlZm9yZVVwZGF0ZSAoKSB7XG4gIGRlcHJlc3NlZFRhZ0JlZm9yZVVwZGF0ZSgpXG59XG5cbi8qKlxuICogcmVjb3JkaW5nIHRoZSBsYXRlc3QgJ3VwZGF0ZWQnIHRpbWUuXG4gKi9cbmNvbnN0IGRlYm91bmNlZFRhZ1VwZGF0ZWQgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5vdyA9IGdldE5vdygpXG4gIHBlcmYubGF0ZXN0VXBkYXRlcy5wdXNoKG5vdylcbiAgcGVyZi51cGRhdGVUaW1lLnB1c2goe1xuICAgIHN0YXJ0OiBlYXJsaWVzdEJlZm9yZVVwZGF0ZVRpbWUsXG4gICAgZW5kOiBub3csXG4gICAgZHVyYXRpb246IG5vdyAtIGVhcmxpZXN0QmVmb3JlVXBkYXRlVGltZVxuICB9KVxufSwgMjUpXG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdVcGRhdGVkICgpIHtcbiAgZGVib3VuY2VkVGFnVXBkYXRlZCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWdCZWdpbiAobmFtZSkge1xuICB0bXBbbmFtZV0gPSBnZXROb3coKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnRW5kIChuYW1lKSB7XG4gIGxldCBwcmUgPSBwZXJmLnRpbWVbbmFtZV1cbiAgaWYgKCFwcmUpIHtcbiAgICBwcmUgPSAwXG4gIH1cbiAgcGVyZi50aW1lW25hbWVdID0gcHJlICsgZ2V0Tm93KCkgLSB0bXBbbmFtZV1cbn1cbiIsImltcG9ydCB7IGlzRWxlbWVudFZpc2libGUgfSBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCB7IGNyZWF0ZUV2ZW50LCBkaXNwYXRjaEV2ZW50IH0gZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnLi9mdW5jJ1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vdHlwZSdcbmltcG9ydCB7IHRhZ0ltZyB9IGZyb20gJy4vcGVyZidcblxuY29uc3QgU0NSRUVOX1JFQ19MSU1JVCA9IDMgIC8vIGp1c3QgcmVjb3JkIHRoZSBmaXJzdCAzIHRpbWVzIGZvciBzY3JlZW4tcmVuZGVyIGZpbmlzaGluZy5cbmxldCBkb1JlY29yZCA9IHRydWVcblxuZnVuY3Rpb24gcHJlTG9hZEltZyAoc3JjLCBsb2FkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgaW1nLm9ubG9hZCA9IGxvYWRDYWxsYmFjayA/IGxvYWRDYWxsYmFjay5iaW5kKGltZykgOiBudWxsXG4gIGltZy5vbmVycm9yID0gZXJyb3JDYWxsYmFjayA/IGVycm9yQ2FsbGJhY2suYmluZChpbWcpIDogbnVsbFxuICBpbWcuc3JjID0gc3JjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNyYyAoaXRlbSwgc3JjLCBwbGFjZWhvbGRlclNyYykge1xuICBpZiAoIXNyYykgeyByZXR1cm4gfVxuICBmdW5jdGlvbiBmaW5hbGxDYiAoKSB7XG4gICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2ltZy1zcmMnKVxuICAgIGlmIChkb1JlY29yZCkge1xuICAgICAgaWYgKHdpbmRvdy5fd2VleF9wZXJmLnJlbmRlclRpbWUubGVuZ3RoIDwgU0NSRUVOX1JFQ19MSU1JVCkge1xuICAgICAgICB0YWdJbWcoKSAvLyB0YWcgbGFzdGVzdCBpbWcgb25sb2FkIHRpbWUuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZG9SZWNvcmQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcmVMb2FkSW1nKHNyYywgZnVuY3Rpb24gKCkge1xuICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NyY30pYFxuICAgIGNvbnN0IHsgd2lkdGg6IG5hdHVyYWxXaWR0aCwgaGVpZ2h0OiBuYXR1cmFsSGVpZ2h0IH0gPSB0aGlzXG4gICAgZGlzcGF0Y2hFdmVudChpdGVtLCBjcmVhdGVFdmVudChpdGVtLCAnbG9hZCcsIHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0pKVxuICAgIGZpbmFsbENiKClcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoRXZlbnQoaXRlbSwgY3JlYXRlRXZlbnQoaXRlbSwgJ2Vycm9yJykpXG4gICAgaWYgKHBsYWNlaG9sZGVyU3JjKSB7XG4gICAgICBwcmVMb2FkSW1nKHBsYWNlaG9sZGVyU3JjLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BsYWNlaG9sZGVyU3JjfSlgXG4gICAgICB9KVxuICAgIH1cbiAgICBmaW5hbGxDYigpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJlTGF6eWxvYWQgKGVsLCBpZ25vcmVWaXNpYmlsaXR5KSB7XG4gIGlmIChpc0FycmF5KGVsKSkge1xuICAgIHJldHVybiBlbC5mb3JFYWNoKGN0ID0+IGZpcmVMYXp5bG9hZChjdCkpXG4gIH1cbiAgY29uc3QgaW1ncyA9IChlbCB8fCBkb2N1bWVudC5ib2R5KS5xdWVyeVNlbGVjdG9yQWxsKCdbaW1nLXNyY10nKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbWcgPSBpbWdzW2ldXG4gICAgaWYgKHR5cGVvZiBpZ25vcmVWaXNpYmlsaXR5ID09PSAnYm9vbGVhbicgJiYgaWdub3JlVmlzaWJpbGl0eSkge1xuICAgICAgYXBwbHlTcmMoaW1nLCBpbWcuZ2V0QXR0cmlidXRlKCdpbWctc3JjJyksIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1wbGFjZWhvbGRlcicpKVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0VsZW1lbnRWaXNpYmxlKGltZywgZWwpKSB7XG4gICAgICBhcHBseVNyYyhpbWcsIGltZy5nZXRBdHRyaWJ1dGUoJ2ltZy1zcmMnKSwgaW1nLmdldEF0dHJpYnV0ZSgnaW1nLXBsYWNlaG9sZGVyJykpXG4gICAgfVxuICAgIC8vIEluIHNvbWVjYXNlcyB0aGVyZSBhcmUgaW1hZ2VzIG91dCBvZiB0aGUgc2NyZWVuIGluIHgtYXhpcy4gVGhlcmVcbiAgICAvLyBzaG91bGQgbm90IGJlIGEgYnJlYWsgcG9pbnQgaW4gdGhlc2UgY2FzZXMuXG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAvLyBhbHJlYXkgb3V0IG9mIHZpZXcsIG5vIG5lZWQgdG8gY29tcGFyZSBhbnkgbW9yZS5cbiAgICAvLyAgIGJyZWFrXG4gICAgLy8gfVxuICB9XG59XG5cbi8qKlxuICogY2FjaGUgYSB0aHJvdHRsZSBsYXp5bG9hZCBmdW5jdGlvbiBmb3IgZXZlcnkgY29udGFpbmVyIGVsZW1lbnRcbiAqIG9uY2UgZm9yIGRpZmZlcmVudCB3YWl0IHRpbWVzIHNlcGFyYXRlLlxuICogICB0aGUgYXJjaGl0ZWN0dXJlIG9mIHRoaXMgY2FjaGU6XG4gKiAgICAgIGNhY2hlOiB7XG4gKiAgICAgICAgZWwuaWQ6IHtcbiAqICAgICAgICAgIHdhaXQ6IHRocm90dGxlZEZ1bmN0aW9uICgpIHsgLi4uIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqL1xuY29uc3QgY2FjaGUgPSB7fVxubGV0IF91aWQgPSAwXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhyb3R0bGVMYXp5bG9hZCAod2FpdCA9IDE2LCBlbCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgbGV0IGlkID0gZWwuZGF0YXNldC50aHJvdHRsZUlkXG4gIGlmICghaWQpIHtcbiAgICBpZCA9IF91aWQrK1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10aHJvdHRsZS1pZCcsIGlkKVxuICB9XG5cbiAgIWNhY2hlW2lkXSAmJiAoY2FjaGVbaWRdID0ge30pXG4gIGNvbnN0IHRocm90dGxlZCA9IGNhY2hlW2lkXVt3YWl0XSB8fFxuICAgIChjYWNoZVtpZF1bd2FpdF0gPSB0aHJvdHRsZShcbiAgICAgIGZpcmVMYXp5bG9hZC5iaW5kKHRoaXMsIGVsKSxcbiAgICAgIHBhcnNlRmxvYXQod2FpdCksXG4gICAgICAvLyB0cnVlIGZvciBjYWxsTGFzdFRpbWUuXG4gICAgICAvLyB0byB0cmlnZ2VyIG9uY2UgbW9yZSB0aW1lIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZCBmdW5jdGlvbiBjYWxsZWQgd2l0aCBhIGxpdHRsZSBtb3JlIGRlbGF5LlxuICAgICAgdHJ1ZSlcbiAgICApXG4gIHJldHVybiB0aHJvdHRsZWRcbn1cbiIsIi8qKlxuICogcmVtb3ZlIGNvbW1lbnRzIGZyb20gYSBjc3NUZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJpbUNvbW1lbnQgKGNzc1RleHQpIHtcbiAgcmV0dXJuIGNzc1RleHQucmVwbGFjZSgvKD86XFwvXFwqKVteKl0qXFwqXFwvL2csICcnKVxufVxuXG5sZXQgc3VwcG9ydCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRTdGlja3kgKCkge1xuICBpZiAoc3VwcG9ydCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzdXBwb3J0XG4gIH1cbiAgY29uc3QgZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBlbGVtZW50U3R5bGUgPSBlbGVtZW50LnN0eWxlXG4gIGVsZW1lbnRTdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTsnXG4gIHN1cHBvcnQgPSBlbGVtZW50U3R5bGUucG9zaXRpb24uaW5kZXhPZignc3RpY2t5JykgIT09IC0xXG4gIHJldHVybiBzdXBwb3J0XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Z1bmMnXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50J1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL2xhenlsb2FkJ1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSdcbmV4cG9ydCAqIGZyb20gJy4vdHlwZSdcblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl1cbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqL1xuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsaXplS2V5cyAob2JqKSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIHJlc1tjYW1lbGl6ZShrZXkpXSA9IG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pXG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGh5cGhlbmF0ZUtleXMgKG9iaikge1xuICBjb25zdCByZXMgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICByZXNbaHlwaGVuYXRlKGtleSldID0gb2JqW2tleV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8vIGNvbnN0IHZlbmRvcnNSZWcgPSAvd2Via2l0LXxtb3otfG8tfG1zLS9cbi8vIGV4cG9ydCBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZUtleXMgKG9iaikge1xuLy8gICBjb25zdCByZXMgPSB7fVxuLy8gICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbi8vICAgICBjb25zdCBoayA9IGh5cGhlbmF0ZShrZXkpLnJlcGxhY2UodmVuZG9yc1JlZywgZnVuY3Rpb24gKCQwKSB7XG4vLyAgICAgICByZXR1cm4gJy0nICsgJDBcbi8vICAgICB9KVxuLy8gICAgIHJlc1toa10gPSBvYmpba2V5XVxuLy8gICB9XG4vLyAgIHJldHVybiByZXNcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9LZWJhYiAobmFtZSkge1xuICBpZiAoIW5hbWUpIHsgcmV0dXJuICcnIH1cbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoZywgZzEpIHtcbiAgICByZXR1cm4gYC0ke2cxLnRvTG93ZXJDYXNlKCl9YFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU3R5bGUgKGNzcywgc3R5bGVJZCwgcmVwbGFjZSkge1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKVxuICBpZiAoc3R5bGUgJiYgcmVwbGFjZSkge1xuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpXG4gICAgc3R5bGUgPSBudWxsXG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgc3R5bGVJZCAmJiAoc3R5bGUuaWQgPSBzdHlsZUlkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIH1cbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRGcmFtZSAoY2FsbGJhY2spIHtcbiAgY29uc3QgcnVubmVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB8fCAoY2IgPT4gc2V0VGltZW91dChjYiwgMTYpKVxuICBydW5uZXIoY2FsbGJhY2spXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NTU1RleHQgKG9iamVjdCkge1xuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGlmIChvYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGNzc1RleHQgKz0gYCR7aHlwaGVuYXRlKGtleSl9OiR7b2JqZWN0W2tleV19O2BcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNzc1RleHRcbn1cbiIsImltcG9ydCB7IG5leHRGcmFtZSwgdG9DU1NUZXh0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25PbmNlICh2bm9kZSwgY29uZmlnLCBjYWxsYmFjaykge1xuICBjb25zdCBkdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbiB8fCAxMDAwIC8vIG1zXG4gIGNvbnN0IHRpbWluZyA9IGNvbmZpZy50aW1pbmdGdW5jdGlvbiB8fCAnZWFzZSdcbiAgY29uc3QgZGVsYXkgPSBjb25maWcuZGVsYXkgfHwgMCAgLy8gbXNcblxuICAvLyBUT0RPOiBwYXJzZSB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgY29uc3QgdHJhbnNpdGlvblZhbHVlID0gYGFsbCAke2R1cmF0aW9ufW1zICR7dGltaW5nfSAke2RlbGF5fW1zYFxuXG4gIGNvbnN0IGRvbSA9IHZub2RlLiRlbFxuICBjb25zdCB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuICAgIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gJydcbiAgICBkb20uc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnXG4gICAgY2FsbGJhY2soKVxuICB9XG5cbiAgZG9tLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcblxuICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgIGRvbS5zdHlsZS5jc3NUZXh0ICs9IHRvQ1NTVGV4dChjb25maWcuc3R5bGVzIHx8IHt9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjYWxsYmFja1xuICAgKi9cbiAgdHJhbnNpdGlvbiAodm5vZGUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBNYWtlIHN1cmUgdGhlIHRyYW5zaXRpb24gaXMgb25seSBydW4gb25jZVxuICAgIHJldHVybiB0cmFuc2l0aW9uT25jZSh2bm9kZSwgY29uZmlnLCAoKSA9PiB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FtZWxUb0tlYmFiLCBhcHBlbmRTdHlsZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRTY3JvbGxlciAodm5vZGUpIHtcbiAgaWYgKCF2bm9kZSkgcmV0dXJuIG51bGxcbiAgaWYgKHZub2RlLndlZXhUeXBlID09PSAnc2Nyb2xsZXInIHx8IHZub2RlLndlZXhUeXBlID09PSAnbGlzdCcpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxuICByZXR1cm4gZ2V0UGFyZW50U2Nyb2xsZXIodm5vZGUuJHBhcmVudClcbn1cblxuZnVuY3Rpb24gbm93ICgpIHtcbiAgY29uc3Qgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHdpbmRvdy5wZXJmb3JtYW5jZSkgOiBEYXRlLm5vd1xuICByZXR1cm4gbm93KClcbn1cblxuZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCAoZFN1ZmZpeCwgcG9zaXRpb24pIHtcbiAgdGhpc1tgc2Nyb2xsJHtkU3VmZml4fWBdID0gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICogQG1ldGhvZCBzdGVwXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBzdGVwIChjb250ZXh0KSB7XG4gIC8vIGNhbGwgbWV0aG9kIGFnYWluIG9uIG5leHQgYXZhaWxhYmxlIGZyYW1lXG4gIGNvbnRleHQuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3aW5kb3csIGNvbnRleHQpKVxuXG4gIGNvbnN0IHRpbWUgPSBub3coKVxuICBsZXQgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gNDY4XG5cbiAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWRcblxuICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gIGNvbnN0IHZhbHVlID0gZWFzZShlbGFwc2VkKVxuXG4gIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGNvbnRleHQuc3RhcnRQb3NpdGlvbiArIChjb250ZXh0LnBvc2l0aW9uIC0gY29udGV4dC5zdGFydFBvc2l0aW9uKSAqIHZhbHVlXG5cbiAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGNvbnRleHQuZFN1ZmZpeCwgY3VycmVudFBvc2l0aW9uKVxuXG4gIC8vIHJldHVybiB3aGVuIGVuZCBwb2ludHMgaGF2ZSBiZWVuIHJlYWNoZWRcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gY29udGV4dC5wb3NpdGlvbikge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShjb250ZXh0LmZyYW1lKVxuICAgIHJldHVyblxuICB9XG59XG5cbi8qKlxuICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gKiBAbWV0aG9kIGVhc2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBlYXNlIChrKSB7XG4gIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogc2Nyb2xsVG9FbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIHtvZmZzZXQ6TnVtYmVyfVxuICAgKiAgIHBzOiBzY3JvbGwtdG8gaGFzICdlYXNlJyBhbmQgJ2R1cmF0aW9uJyhtcykgYXMgb3B0aW9ucy5cbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKHZub2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZSlcbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb24gPSBzY3JvbGxlci5zY3JvbGxEaXJlY3Rpb24gfHwgJ3ZlcnRpY2FsJ1xuXG4gICAgaWYgKHNjcm9sbGVyICYmIHNjcm9sbGVyLiRlbCAmJiB2bm9kZS4kZWwpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSBsaXN0LCB0aGVuIHRoZSBsaXN0Vm5vZGUuc2Nyb2xsRGlyZWN0aW9uIGlzIHVuZGVmaW5lZC4ganVzdFxuICAgICAgLy8gYXNzdW0gaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWUgJ3ZlcnRpY2FsJy5cbiAgICAgIGNvbnN0IGRTdWZmaXggPSAoe1xuICAgICAgICBob3Jpem9udGFsOiAnTGVmdCcsXG4gICAgICAgIHZlcnRpY2FsOiAnVG9wJ1xuICAgICAgfSlbc2Nyb2xsRGlyZWN0aW9uXVxuICAgICAgbGV0IG9mZnNldCA9IHZub2RlLiRlbFtgb2Zmc2V0JHtkU3VmZml4fWBdXG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9mZnNldCArPSBOdW1iZXIob3B0aW9ucy5vZmZzZXQpIHx8IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Z1ZSBSZW5kZXJdIFRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIFwic2Nyb2xsVG9FbGVtZW50XCIgaXMgcmVxdWlyZWQsICdcbiAgICAgICAgICArICdvdGhlcndpc2UgaXQgbWF5IG5vdCB3b3JrcyB3ZWxsIG9uIG5hdGl2ZS4nKVxuICAgICAgfVxuXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsZXIuJGVsLFxuICAgICAgICBzdGFydFRpbWU6IG5vdygpLFxuICAgICAgICBmcmFtZTogbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogc2Nyb2xsZXIuJGVsW2BzY3JvbGwke2RTdWZmaXh9YF0sXG4gICAgICAgIHBvc2l0aW9uOiBvZmZzZXQsXG4gICAgICAgIG1ldGhvZDogc2Nyb2xsRWxlbWVudCxcbiAgICAgICAgZFN1ZmZpeDogZFN1ZmZpeFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGdldENvbXBvbmVudFJlY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBnZXRDb21wb25lbnRSZWN0OiBmdW5jdGlvbiAodm5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgcmVzdWx0OiBmYWxzZSB9XG5cbiAgICBpZiAodm5vZGUgJiYgdm5vZGUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgIGluZm8ucmVzdWx0ID0gdHJ1ZVxuICAgICAgaW5mby5zaXplID0ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgYm90dG9tOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHZub2RlICYmIHZub2RlLiRlbCkge1xuICAgICAgaW5mby5yZXN1bHQgPSB0cnVlXG4gICAgICBpbmZvLnNpemUgPSB2bm9kZS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gaW5mby5yZXN1bHQgPyBpbmZvIDoge1xuICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgIGVyck1zZzogJ0lsbGVnYWwgcGFyYW1ldGVyJ1xuICAgIH1cblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG1lc3NhZ2UpXG4gICAgcmV0dXJuIG1lc3NhZ2VcbiAgfSxcblxuICAvKipcbiAgICogZm9yIGFkZGluZyBmb250RmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGZvbnRGYWNlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXMgcnVsZXNcbiAgICovXG4gIGFkZFJ1bGU6IGZ1bmN0aW9uIChrZXksIHN0eWxlcykge1xuICAgIGtleSA9IGNhbWVsVG9LZWJhYihrZXkpXG4gICAgbGV0IHN0eWxlc1RleHQgPSAnJ1xuICAgIGZvciAoY29uc3QgayBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgc3R5bGVzVGV4dCArPSBjYW1lbFRvS2ViYWIoaykgKyAnOicgKyBzdHlsZXNba10gKyAnOydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gYEAke2tleX17JHtzdHlsZXNUZXh0fX1gXG4gICAgYXBwZW5kU3R5bGUoc3R5bGVUZXh0LCAnZG9tLWFkZGVkLXJ1bGVzJylcbiAgfVxufVxuIiwiY29uc3QgcXVldWUgPSBbXVxubGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlXG5sZXQgdG9hc3RXaW5cbmNvbnN0IFRPQVNUX1dJTl9DTEFTU19OQU1FID0gJ3dlZXgtdG9hc3QnXG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSAwLjhcblxuZnVuY3Rpb24gc2hvd1RvYXN0V2luZG93IChtc2csIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG4gIGlmICghdG9hc3RXaW4pIHtcbiAgICB0b2FzdFdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9hc3RXaW4uY2xhc3NMaXN0LmFkZChUT0FTVF9XSU5fQ0xBU1NfTkFNRSwgJ2hpZGUnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3RXaW4pXG4gIH1cbiAgdG9hc3RXaW4udGV4dENvbnRlbnQgPSBtc2dcbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gaGlkZVRvYXN0V2luZG93IChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIHRvYXN0V2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfVxuICBpZiAoIXRvYXN0V2luKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHRvYXN0V2luLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgfSwgMClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAobXNnLCBkdXJhdGlvbikge1xuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgbXNnOiBtc2csXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTlxuICAgIH0pXG4gICAgdGhpcy5zaG93KClcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcblxuICAgIC8vIEFsbCBtZXNzYWdlcyBoYWQgYmVlbiB0b2FzdGVkIGFscmVhZHksIHNvIHJlbW92ZSB0aGUgdG9hc3Qgd2luZG93LFxuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICB0b2FzdFdpbiAmJiB0b2FzdFdpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0V2luKVxuICAgICAgdG9hc3RXaW4gPSBudWxsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB0aGUgcHJldmlvdXMgdG9hc3QgaXMgbm90IGVuZGVkIHlldC5cbiAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgdG9hc3RJbmZvID0gcXVldWUuc2hpZnQoKVxuICAgIHNob3dUb2FzdFdpbmRvdyh0b2FzdEluZm8ubXNnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlkZVRvYXN0V2luZG93KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuc2hvdygpXG4gICAgICAgIH0pXG4gICAgICB9LCB0b2FzdEluZm8uZHVyYXRpb24gKiAxMDAwKVxuICAgIH0pXG4gIH1cbn1cbiIsIlxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBtb2RhbC5cbmNvbnN0IE1PREFMX1dSQVBfQ0xBU1MgPSAnd2VleC1tb2RhbC13cmFwJ1xuY29uc3QgTU9EQUxfTk9ERV9DTEFTUyA9ICd3ZWV4LW1vZGFsLW5vZGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsICgpIHtcbiAgdGhpcy53cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNT0RBTF9XUkFQX0NMQVNTKVxuICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1PREFMX05PREVfQ0xBU1MpXG4gIGlmICghdGhpcy53cmFwKSB7XG4gICAgdGhpcy5jcmVhdGVXcmFwKClcbiAgfVxuICBpZiAoIXRoaXMubm9kZSkge1xuICAgIHRoaXMuY3JlYXRlTm9kZSgpXG4gIH1cbiAgdGhpcy5jbGVhck5vZGUoKVxuICB0aGlzLmNyZWF0ZU5vZGVDb250ZW50KClcbiAgdGhpcy5iaW5kRXZlbnRzKClcbn1cblxuTW9kYWwucHJvdG90eXBlID0ge1xuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy53cmFwKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxuICAgIHRoaXMud3JhcCA9IG51bGxcbiAgICB0aGlzLm5vZGUgPSBudWxsXG4gIH0sXG5cbiAgY3JlYXRlV3JhcDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy53cmFwLmNsYXNzTmFtZSA9IE1PREFMX1dSQVBfQ0xBU1NcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcClcbiAgfSxcblxuICBjcmVhdGVOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChNT0RBTF9OT0RFX0NMQVNTLCAnaGlkZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXG4gIH0sXG5cbiAgY2xlYXJOb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmlubmVySFRNTCA9ICcnXG4gIH0sXG5cbiAgY3JlYXRlTm9kZUNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvIG5vdGhpbmcuXG4gICAgLy8gY2hpbGQgY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gIH0sXG5cbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0IChjb25maWcpIHtcbiAgdGhpcy5tc2cgPSBjb25maWcubWVzc2FnZSB8fCAnJ1xuICB0aGlzLmNhbGxiYWNrID0gY29uZmlnLmNhbGxiYWNrXG4gIHRoaXMub2tUaXRsZSA9IGNvbmZpZy5va1RpdGxlIHx8ICdPSydcbiAgTW9kYWwuY2FsbCh0aGlzKVxuICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnd2VleC1hbGVydCcpXG59XG5cbkFsZXJ0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5BbGVydC5wcm90b3R5cGUuY3JlYXRlTm9kZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ09OVEVOVF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXNnLmNsYXNzTGlzdC5hZGQoTVNHX0NMQVNTKVxuICBtc2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tc2cpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1zZylcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0dST1VQX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKEJVVFRPTl9DTEFTUywgJ2FsZXJ0LW9rJylcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuQWxlcnQucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGFsLnByb3RvdHlwZS5iaW5kRXZlbnRzLmNhbGwodGhpcylcbiAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICB9LmJpbmQodGhpcykpXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuY29uc3QgQ09OVEVOVF9DTEFTUyA9ICdjb250ZW50J1xuY29uc3QgTVNHX0NMQVNTID0gJ2NvbnRlbnQtbXNnJ1xuY29uc3QgQlVUVE9OX0dST1VQX0NMQVNTID0gJ2J0bi1ncm91cCdcbmNvbnN0IEJVVFRPTl9DTEFTUyA9ICdidG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm0gKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtY29uZmlybScpXG59XG5cbkNvbmZpcm0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb2RhbC5wcm90b3R5cGUpXG5cbkNvbmZpcm0ucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKEJVVFRPTl9HUk9VUF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxuICBjb25zdCBidG5PayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bk9rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub2tUaXRsZSkpXG4gIGJ0bk9rLmNsYXNzTGlzdC5hZGQoJ2J0bi1vaycsIEJVVFRPTl9DTEFTUylcbiAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuQ2FuY2VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY2FuY2VsVGl0bGUpKVxuICBidG5DYW5jZWwuY2xhc3NMaXN0LmFkZCgnYnRuLWNhbmNlbCcsIEJVVFRPTl9DTEFTUylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuT2spXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bkNhbmNlbClcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKVxufVxuXG5Db25maXJtLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBNb2RhbC5wcm90b3R5cGUuYmluZEV2ZW50cy5jYWxsKHRoaXMpXG4gIGNvbnN0IGJ0bk9rID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tb2snKVxuICBjb25zdCBidG5DYW5jZWwgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1jYW5jZWwnKVxuICBidG5Pay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjayh0aGlzLm9rVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHRoaXMuY2FuY2VsVGl0bGUpXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zdCBDT05URU5UX0NMQVNTID0gJ2NvbnRlbnQnXG5jb25zdCBNU0dfQ0xBU1MgPSAnY29udGVudC1tc2cnXG5jb25zdCBCVVRUT05fR1JPVVBfQ0xBU1MgPSAnYnRuLWdyb3VwJ1xuY29uc3QgQlVUVE9OX0NMQVNTID0gJ2J0bidcbmNvbnN0IElOUFVUX1dSQVBfQ0xBU1MgPSAnaW5wdXQtd3JhcCdcbmNvbnN0IElOUFVUX0NMQVNTID0gJ2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9tcHQgKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuZGVmYXVsdE1zZyA9IGNvbmZpZy5kZWZhdWx0IHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICB0aGlzLmNhbmNlbFRpdGxlID0gY29uZmlnLmNhbmNlbFRpdGxlIHx8ICdDYW5jZWwnXG4gIE1vZGFsLmNhbGwodGhpcylcbiAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ3dlZXgtcHJvbXB0Jylcbn1cblxuUHJvbXB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTW9kYWwucHJvdG90eXBlKVxuXG5Qcm9tcHQucHJvdG90eXBlLmNyZWF0ZU5vZGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKENPTlRFTlRfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1zZy5jbGFzc0xpc3QuYWRkKE1TR19DTEFTUylcbiAgbXNnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubXNnKSlcbiAgY29udGVudC5hcHBlbmRDaGlsZChtc2cpXG5cbiAgY29uc3QgaW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoSU5QVVRfV1JBUF9DTEFTUylcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXApXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKElOUFVUX0NMQVNTKVxuICBpbnB1dC50eXBlID0gJ3RleHQnXG4gIGlucHV0LmF1dG9mb2N1cyA9IHRydWVcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmRlZmF1bHRNc2dcbiAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChCVVRUT05fR1JPVVBfQ0xBU1MpXG4gIGNvbnN0IGJ0bk9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuT2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5va1RpdGxlKSlcbiAgYnRuT2suY2xhc3NMaXN0LmFkZCgnYnRuLW9rJywgQlVUVE9OX0NMQVNTKVxuICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5DYW5jZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jYW5jZWxUaXRsZSkpXG4gIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tY2FuY2VsJywgQlVUVE9OX0NMQVNTKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5PaylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG59XG5cblByb21wdC5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kYWwucHJvdG90eXBlLmJpbmRFdmVudHMuY2FsbCh0aGlzKVxuICBjb25zdCBidG5PayA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLW9rJylcbiAgY29uc3QgYnRuQ2FuY2VsID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tY2FuY2VsJylcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgYnRuT2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5va1RpdGxlLFxuICAgICAgZGF0YTogdmFsXG4gICAgfSlcbiAgfS5iaW5kKHRoaXMpKVxuICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdDogdGhhdC5jYW5jZWxUaXRsZSxcbiAgICAgIGRhdGE6IHZhbFxuICAgIH0pXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCB0b2FzdCBmcm9tICcuL3RvYXN0J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuL2NvbmZpcm0nXG5pbXBvcnQgUHJvbXB0IGZyb20gJy4vcHJvbXB0J1xuXG4vLyBUT0RPOiByZXdyaXRlIHRoZSBtb2RhbCBzdHlsZXNcbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvLyBkdXJhdGlvbjogZGVmYXVsdCBpcyAwLjggc2Vjb25kcy5cbiAgdG9hc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB0b2FzdC5wdXNoKGNvbmZpZy5tZXNzYWdlLCBjb25maWcuZHVyYXRpb24pXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGFsZXJ0OiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIGNvbmZpZy5jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG4gICAgbmV3IEFsZXJ0KGNvbmZpZykuc2hvdygpXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbmNlbFRpdGxlOiB0aXRsZSBvZiBjYW5jZWwgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIGNvbmZpcm06IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgQ29uZmlybShjb25maWcpLnNob3coKVxuICB9LFxuXG4gIC8vIGNvbmZpZzpcbiAgLy8gIC0gbWVzc2FnZTogc3RyaW5nXG4gIC8vICAtIG9rVGl0bGU6IHRpdGxlIG9mIG9rIGJ1dHRvblxuICAvLyAgLSBjYW5jZWxUaXRsZTogdGl0bGUgb2YgY2FuY2VsIGJ1dHRvblxuICAvLyAgLSBjYWxsYmFja1xuICBwcm9tcHQ6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsKVxuICAgIH1cbiAgICBuZXcgUHJvbXB0KGNvbmZpZykuc2hvdygpXG4gIH1cbn1cbiIsIi8qKlxuICogTmF2aWdhdG9yIG1vZHVsZVxuICovXG5cbi8vIFRPRE86IGNvbmZpZy5hbmltYXRlZFxuZXhwb3J0IGRlZmF1bHQge1xuICBwdXNoOiBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaykge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLnVybFxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG59XG4iLCIvKipcbiAqIFdlYnZpZXcgbW9kdWxlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnb0JhY2sgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0JhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvQmFjaygpXG4gICAgfVxuICB9LFxuICBnb0ZvcndhcmQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5nb0ZvcndhcmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLmdvRm9yd2FyZCgpXG4gICAgfVxuICB9LFxuICByZWxvYWQgKHZub2RlKSB7XG4gICAgaWYgKHZub2RlICYmIHR5cGVvZiB2bm9kZS5yZWxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZub2RlLnJlbG9hZCgpXG4gICAgfVxuICB9XG59XG4iLCIvLyBtb2R1bGVzIGZyb20gcmVuZGVyL2Jyb3dlc3JcbmltcG9ydCBldmVudCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvZXZlbnQnXG5pbXBvcnQgZ2VvbG9jYXRpb24gZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL2dlb2xvY2F0aW9uJ1xuaW1wb3J0IHBhZ2VJbmZvIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9wYWdlSW5mbydcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdG9yYWdlJ1xuaW1wb3J0IHN0cmVhbSBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvc3RyZWFtJ1xuaW1wb3J0IGNsaXBib2FyZCBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvY2xpcGJvYXJkJ1xuXG4vLyBjdXN0b20gbW9kdWxlc1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbidcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCdcbmltcG9ydCBuYXZpZ2F0b3IgZnJvbSAnLi9uYXZpZ2F0b3InXG5pbXBvcnQgd2VidmlldyBmcm9tICcuL3dlYnZpZXcnXG5cbmNvbnN0IGxlZ2FjeU1vZHVsZXMgPSB7XG4gIGV2ZW50LFxuICBnZW9sb2NhdGlvbixcbiAgcGFnZUluZm8sXG4gIHN0b3JhZ2UsXG4gIHN0cmVhbSxcbiAgY2xpcGJvYXJkXG59XG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGFuaW1hdGlvbixcbiAgZG9tLFxuICBtb2RhbCxcbiAgbmF2aWdhdG9yLFxuICB3ZWJ2aWV3XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCAod2VleCkge1xuICAgIGZvciAoY29uc3QgayBpbiBsZWdhY3lNb2R1bGVzKSB7XG4gICAgICB3ZWV4Lmluc3RhbGwobGVnYWN5TW9kdWxlc1trXSlcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIGluIG1vZHVsZXMpIHtcbiAgICAgIHdlZXgucmVnaXN0ZXJNb2R1bGUoaywgbW9kdWxlc1trXSlcbiAgICB9XG4gIH1cbn1cbiIsIih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgJiYgKHdpbmRvdyA9IHtjdHJsOiB7fSwgbGliOiB7fX0pOyF3aW5kb3cuY3RybCAmJiAod2luZG93LmN0cmwgPSB7fSk7IXdpbmRvdy5saWIgJiYgKHdpbmRvdy5saWIgPSB7fSk7IWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZhbFwiLHt2YWx1ZTphLnRvU3RyaW5nKCksZW51bWVyYWJsZTohMH0pLHRoaXMuZ3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPjB9LHRoaXMuZ3RlPWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKT49MH0sdGhpcy5sdD1mdW5jdGlvbihhKXtyZXR1cm4gYy5jb21wYXJlKHRoaXMsYSk8MH0sdGhpcy5sdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPD0wfSx0aGlzLmVxPWZ1bmN0aW9uKGEpe3JldHVybiAwPT09Yy5jb21wYXJlKHRoaXMsYSl9fWIuZW52PWIuZW52fHx7fSxjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbH0sYy5wcm90b3R5cGUudmFsdWVPZj1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnZhbC5zcGxpdChcIi5cIiksYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPXBhcnNlSW50KGFbY10sMTApO2lzTmFOKGQpJiYoZD0wKTt2YXIgZT1kLnRvU3RyaW5nKCk7ZS5sZW5ndGg8NSYmKGU9QXJyYXkoNi1lLmxlbmd0aCkuam9pbihcIjBcIikrZSksYi5wdXNoKGUpLDE9PT1iLmxlbmd0aCYmYi5wdXNoKFwiLlwiKX1yZXR1cm4gcGFyc2VGbG9hdChiLmpvaW4oXCJcIikpfSxjLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXthPWEudG9TdHJpbmcoKS5zcGxpdChcIi5cIiksYj1iLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGh8fGM8Yi5sZW5ndGg7YysrKXt2YXIgZD1wYXJzZUludChhW2NdLDEwKSxlPXBhcnNlSW50KGJbY10sMTApO2lmKHdpbmRvdy5pc05hTihkKSYmKGQ9MCksd2luZG93LmlzTmFOKGUpJiYoZT0wKSxlPmQpcmV0dXJuLTE7aWYoZD5lKXJldHVybiAxfXJldHVybiAwfSxiLnZlcnNpb249ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBjKGEpfX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGM9YS5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik7aWYoYi5lbnYucGFyYW1zPXt9LGMpZm9yKHZhciBkPWMuc3BsaXQoXCImXCIpLGU9MDtlPGQubGVuZ3RoO2UrKyl7ZFtlXT1kW2VdLnNwbGl0KFwiPVwiKTt0cnl7Yi5lbnYucGFyYW1zW2RbZV1bMF1dPWRlY29kZVVSSUNvbXBvbmVudChkW2VdWzFdKX1jYXRjaChmKXtiLmVudi5wYXJhbXNbZFtlXVswXV09ZFtlXVsxXX19fSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKSxmdW5jdGlvbihhLGIpe2IuZW52PWIuZW52fHx7fTt2YXIgYyxkPWEubmF2aWdhdG9yLnVzZXJBZ2VudDtpZihjPWQubWF0Y2goL1dpbmRvd3NcXHNQaG9uZVxccyg/Ok9TXFxzKT8oW1xcZFxcLl0rKS8pKWIuZW52Lm9zPXtuYW1lOlwiV2luZG93cyBQaG9uZVwiLGlzV2luZG93c1Bob25lOiEwLHZlcnNpb246Y1sxXX07ZWxzZSBpZihkLm1hdGNoKC9TYWZhcmkvKSYmKGM9ZC5tYXRjaCgvQW5kcm9pZFtcXHNcXC9dKFtcXGRcXC5dKykvKSkpYi5lbnYub3M9e3ZlcnNpb246Y1sxXX0sZC5tYXRjaCgvTW9iaWxlXFxzK1NhZmFyaS8pPyhiLmVudi5vcy5uYW1lPVwiQW5kcm9pZFwiLGIuZW52Lm9zLmlzQW5kcm9pZD0hMCk6KGIuZW52Lm9zLm5hbWU9XCJBbmRyb2lkUGFkXCIsYi5lbnYub3MuaXNBbmRyb2lkUGFkPSEwKTtlbHNlIGlmKGM9ZC5tYXRjaCgvKGlQaG9uZXxpUGFkfGlQb2QpLykpe3ZhciBlPWNbMV07Yz1kLm1hdGNoKC9PUyAoW1xcZF9cXC5dKykgbGlrZSBNYWMgT1MgWC8pLGIuZW52Lm9zPXtuYW1lOmUsaXNJUGhvbmU6XCJpUGhvbmVcIj09PWV8fFwiaVBvZFwiPT09ZSxpc0lQYWQ6XCJpUGFkXCI9PT1lLGlzSU9TOiEwLHZlcnNpb246Y1sxXS5zcGxpdChcIl9cIikuam9pbihcIi5cIil9fWVsc2UgYi5lbnYub3M9e25hbWU6XCJ1bmtub3duXCIsdmVyc2lvbjpcIjAuMC4wXCJ9O2IudmVyc2lvbiYmKGIuZW52Lm9zLnZlcnNpb249Yi52ZXJzaW9uKGIuZW52Lm9zLnZlcnNpb24pKX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZD1hLm5hdmlnYXRvci51c2VyQWdlbnQ7KGM9ZC5tYXRjaCgvKD86VUNXRUJ8VUNCcm93c2VyXFwvKShbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJVQ1wiLGlzVUM6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9NUVFCcm93c2VyXFwvKFtcXGRcXC5dKykvKSk/Yi5lbnYuYnJvd3Nlcj17bmFtZTpcIlFRXCIsaXNRUTohMCx2ZXJzaW9uOmNbMV19OihjPWQubWF0Y2goL0ZpcmVmb3hcXC8oW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiRmlyZWZveFwiLGlzRmlyZWZveDohMCx2ZXJzaW9uOmNbMV19OihjPWQubWF0Y2goL01TSUVcXHMoW1xcZFxcLl0rKS8pKXx8KGM9ZC5tYXRjaCgvSUVNb2JpbGVcXC8oW1xcZFxcLl0rKS8pKT8oYi5lbnYuYnJvd3Nlcj17dmVyc2lvbjpjWzFdfSxkLm1hdGNoKC9JRU1vYmlsZS8pPyhiLmVudi5icm93c2VyLm5hbWU9XCJJRU1vYmlsZVwiLGIuZW52LmJyb3dzZXIuaXNJRU1vYmlsZT0hMCk6KGIuZW52LmJyb3dzZXIubmFtZT1cIklFXCIsYi5lbnYuYnJvd3Nlci5pc0lFPSEwKSxkLm1hdGNoKC9BbmRyb2lkfGlQaG9uZS8pJiYoYi5lbnYuYnJvd3Nlci5pc0lFTGlrZVdlYmtpdD0hMCkpOihjPWQubWF0Y2goLyg/OkNocm9tZXxDcmlPUylcXC8oW1xcZFxcLl0rKS8pKT8oYi5lbnYuYnJvd3Nlcj17bmFtZTpcIkNocm9tZVwiLGlzQ2hyb21lOiEwLHZlcnNpb246Y1sxXX0sZC5tYXRjaCgvVmVyc2lvblxcL1tcXGQrXFwuXStcXHMqQ2hyb21lLykmJihiLmVudi5icm93c2VyLm5hbWU9XCJDaHJvbWUgV2Vidmlld1wiLGIuZW52LmJyb3dzZXIuaXNXZWJ2aWV3PSEwKSk6ZC5tYXRjaCgvU2FmYXJpLykmJihjPWQubWF0Y2goL0FuZHJvaWRbXFxzXFwvXShbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJBbmRyb2lkXCIsaXNBbmRyb2lkOiEwLHZlcnNpb246Y1sxXX06ZC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC8pP2QubWF0Y2goL1NhZmFyaS8pPyhjPWQubWF0Y2goL1ZlcnNpb25cXC8oW1xcZFxcLl0rKS8pLGIuZW52LmJyb3dzZXI9e25hbWU6XCJTYWZhcmlcIixpc1NhZmFyaTohMCx2ZXJzaW9uOmNbMV19KTooYz1kLm1hdGNoKC9PUyAoW1xcZF9cXC5dKykgbGlrZSBNYWMgT1MgWC8pLGIuZW52LmJyb3dzZXI9e25hbWU6XCJpT1MgV2Vidmlld1wiLGlzV2VidmlldzohMCx2ZXJzaW9uOmNbMV0ucmVwbGFjZSgvXFxfL2csXCIuXCIpfSk6Yi5lbnYuYnJvd3Nlcj17bmFtZTpcInVua25vd25cIix2ZXJzaW9uOlwiMC4wLjBcIn0sYi52ZXJzaW9uJiYoYi5lbnYuYnJvd3Nlci52ZXJzaW9uPWIudmVyc2lvbihiLmVudi5icm93c2VyLnZlcnNpb24pKX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGM9YS5uYXZpZ2F0b3IudXNlckFnZW50O2MubWF0Y2goL1dlaWJvL2kpP2IuZW52LnRoaXJkYXBwPXthcHBuYW1lOlwiV2VpYm9cIixpc1dlaWJvOiEwfTpjLm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pKT9iLmVudi50aGlyZGFwcD17YXBwbmFtZTpcIldlaXhpblwiLGlzV2VpeGluOiEwfTpiLmVudi50aGlyZGFwcD0hMX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZCxlPWEubmF2aWdhdG9yLnVzZXJBZ2VudDsoZD1lLm1hdGNoKC9XaW5kVmFuZVtcXC9cXHNdKFtcXGRcXC5cXF9dKykvKSkmJihjPWRbMV0pO3ZhciBmPSExLGc9XCJcIixoPVwiXCIsaT1cIlwiOyhkPWUubWF0Y2goL0FsaUFwcFxcKChbQS1aXFwtXSspXFwvKFtcXGRcXC5dKylcXCkvaSkpJiYoZj0hMCxnPWRbMV0saT1kWzJdLGg9Zy5pbmRleE9mKFwiLVBEXCIpPjA/Yi5lbnYub3MuaXNJT1M/XCJpUGFkXCI6Yi5lbnYub3MuaXNBbmRyb2lkP1wiQW5kcm9pZFBhZFwiOmIuZW52Lm9zLm5hbWU6Yi5lbnYub3MubmFtZSksIWcmJmUuaW5kZXhPZihcIlRCSU9TXCIpPjAmJihnPVwiVEJcIiksZj9iLmVudi5hbGlhcHA9e3dpbmR2YW5lOmIudmVyc2lvbihjfHxcIjAuMC4wXCIpLGFwcG5hbWU6Z3x8XCJ1bmtvd25cIix2ZXJzaW9uOmIudmVyc2lvbihpfHxcIjAuMC4wXCIpLHBsYXRmb3JtOmh8fGIuZW52Lm9zLm5hbWV9OmIuZW52LmFsaWFwcD0hMSxiLmVudi50YW9iYW9BcHA9Yi5lbnYuYWxpYXBwfSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKTs7bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubGliWydlbnYnXTsiLCIvKipcbiAqIHZpZXdwb3J0IHByaW9yaXR5OlxuICpcbiAqIDEuIG1ldGEgd2VleC12aWV3cG9ydCAoZGV2ZWxvcGVyIGN1c3RvbSlcbiAqIDIuIHNldFZpZXdwb3J0KGNvbmZpZykgOj0gY29uZmlnLndpZHRoIChwcml2YXRlIGNvZGUpIEBkZXByZWNhdGVkXG4gKiAzLiBwcm9jZXNzLmVudi5WSUVXUE9SVF9XSURUSCAoYnVpZCB0aW1lKVxuICpcbiAqL1xubGV0IHZpZXdwb3J0V2lkdGggPSBwcm9jZXNzLmVudi5WSUVXUE9SVF9XSURUSFxuXG5jb25zdCB3eFZpZXdwb3J0TWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cIndlZXgtdmlld3BvcnRcIl0nKVxuY29uc3QgbWV0YVdpZHRoID0gd3hWaWV3cG9ydE1ldGEgJiYgcGFyc2VJbnQod3hWaWV3cG9ydE1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpXG5pZiAobWV0YVdpZHRoICYmICFpc05hTihtZXRhV2lkdGgpICYmIG1ldGFXaWR0aCA+IDApIHsgdmlld3BvcnRXaWR0aCA9IG1ldGFXaWR0aCB9XG5cbi8qKlxuICogc2V0IHJvb3QgZm9udC1zaXplIGZvciByZW0gdW5pdHMuIElmIGFscmVhZHkgYmVlbiBzZXQsIGp1c3Qgc2tpcCB0aGlzLlxuICovXG5mdW5jdGlvbiBzZXRSb290Rm9udCAoZG9jLCB3aWR0aCkge1xuICBjb25zdCByb290Rm9udFNpemUgPSBkb2MuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplXG4gIGlmICghcm9vdEZvbnRTaXplKSB7XG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHdpZHRoIC8gMTAgKyAncHgnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpZXdwb3J0IChjb25maWcgPSB7fSkge1xuICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcblxuICBpZiAoZG9jKSB7XG4gICAgLy8gc2V0IHJvb3QgZm9udCBmb3IgcmVtLlxuICAgIHNldFJvb3RGb250KGRvYywgdmlld3BvcnRXaWR0aClcblxuICAgIC8qKlxuICAgICAqIHdoeSBub3QgdG8gdXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggdG8gZ2V0IHNjcmVlbldpZHRoID8gQmVjYXVzZSBpbiBzb21lXG4gICAgICogb2xkIHdlYmtpdCBicm93c2VyIG9uIGFuZHJvaWQgc3lzdGVtIGl0IGdldCB0aGUgZGV2aWNlIHBpeGVsIHdpZHRoLCB3aGljaFxuICAgICAqIGlzIHRoZSBzY3JlZW5XaWR0aCBtdWx0aXBseSBieSB0aGUgZGV2aWNlIHBpeGVsIHJhdGlvLlxuICAgICAqL1xuICAgIGNvbnN0IGRlUmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gZGVSZWN0LndpZHRoXG4gICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gZGVSZWN0LmhlaWdodFxuICAgIGNvbnN0IHNjYWxlID0gc2NyZWVuV2lkdGggLyB2aWV3cG9ydFdpZHRoXG5cbiAgICAvKipcbiAgICAgKiBpZiBzZXQgaW5pdGlhbC9tYXhpbXVtL21pbWltdW0tc2NhbGUgc29tZSBob3cgdGhlIHBhZ2Ugd2lsbCBoYXZlIGEgYm91bmNlXG4gICAgICogZWZmZWN0IHdoZW4gdXNlciBkcmFnIHRoZSBwYWdlIHRvd2FyZHMgaG9yaXpvbnRhbCBheGlzLlxuICAgICAqL1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW1xuICAgICAgYHdpZHRoPSR7dmlld3BvcnRXaWR0aH1gLFxuICAgICAgLy8gYGluaXRpYWwtc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgLy8gYG1heGltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgLy8gYG1pbmltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgYHVzZXItc2NhbGFibGU9bm9gXG4gICAgXVxuXG4gICAgbGV0IG1ldGEgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKVxuICAgIGlmICghbWV0YSkge1xuICAgICAgbWV0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0JylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChtZXRhKVxuICAgIH1cbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIGNvbnRlbnRzLmpvaW4oJywnKSlcblxuICAgIGNvbnN0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGUsXG4gICAgICBkZXZpY2VXaWR0aDogc2NyZWVuV2lkdGggKiBkcHIsXG4gICAgICBkZXZpY2VIZWlnaHQ6IHNjcmVlbkhlaWdodCAqIGRwclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICdlbnZkJ1xuXG5pbXBvcnQgeyBzZXRWaWV3cG9ydCB9IGZyb20gJy4vdmlld3BvcnQnXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcblxuY29uc3Qgc2NhbGVJbmZvID0gc2V0Vmlld3BvcnQoKVxuXG5jb25zdCBsaWIgPSB3aW5kb3cubGliXG5jb25zdCBlbnYgPSB7XG4gIHBsYXRmb3JtOiAnV2ViJyxcbiAgLy8gd2VleFZlcnNpb246ICcwLjEwLjAnLCAvLyBUT0RPOiBnZXQgdmVyc2lvbiBmcm9tIHBhY2thZ2UuanNvbiAobm90IHN1cmUpXG4gIHdlZXhWZXJzaW9uOiAncHJvY2Vzcy5lbnYuV0VFWF9WRVJTSU9OJyxcbiAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBhcHBOYW1lOiBsaWIuZW52LmFsaWFwcCA/IGxpYi5lbnYuYWxpYXBwLmFwcG5hbWUgOiBuYXZpZ2F0b3IuYXBwTmFtZSxcbiAgYXBwVmVyc2lvbjogbGliLmVudi5hbGlhcHAgPyBsaWIuZW52LmFsaWFwcC52ZXJzaW9uLnZhbCA6IG51bGwsXG4gIG9zTmFtZTogbGliLmVudi5icm93c2VyID8gbGliLmVudi5icm93c2VyLm5hbWUgOiBudWxsLFxuICBvc1ZlcnNpb246IGxpYi5lbnYuYnJvd3NlciA/IGxpYi5lbnYuYnJvd3Nlci52ZXJzaW9uLnZhbCA6IG51bGwsXG4gIGRldmljZU1vZGVsOiBsaWIuZW52Lm9zLm5hbWUgfHwgbnVsbFxufVxuXG4vKipcbiAqIHNjYWxlSW5mbzogc2NhbGUsIGRldmljZVdpZHRoLCBkZXZpY2VIZWlnaHQuXG4gKi9cbmV4dGVuZChlbnYsIHNjYWxlSW5mbylcblxuLy8gNzUwIGJ5IGRlZmF1bHQgY3VycmVudGx5XG5jb25zdCBzY2FsZSA9IGVudi5zY2FsZVxuXG5jb25zdCB1bml0cyA9IHtcbiAgUkVNOiAxMiAqIHNjYWxlLFxuICBWVzogZW52LmRldmljZVdpZHRoIC8gMTAwLFxuICBWSDogZW52LmRldmljZUhlaWdodCAvIDEwMCxcbiAgVk1JTjogTWF0aC5taW4oZW52LmRldmljZVdpZHRoLCBlbnYuZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbiAgVk1BWDogTWF0aC5tYXgoZW52LmRldmljZVdpZHRoLCBlbnYuZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbiAgQ006IDk2IC8gMi41NCAqIHNjYWxlLFxuICBNTTogOTYgLyAyNS40ICogc2NhbGUsXG4gIFE6IDk2IC8gMjUuNCAvIDQgKiBzY2FsZSxcbiAgSU46IDk2ICogc2NhbGUsXG4gIFBUOiA5NiAvIDcyICogc2NhbGUsXG4gIFBDOiA5NiAvIDYgKiBzY2FsZSxcbiAgUFg6IHNjYWxlXG59XG5cbk9iamVjdC5mcmVlemUodW5pdHMpXG4vLyBPYmplY3QuZnJlZXplKGVudilcblxud2luZG93LkNTU19VTklUID0gdW5pdHNcbndpbmRvdy5XWEVudmlyb25tZW50ID0gZW52XG4iLCIvKiBnbG9iYWwgVnVlICovXG5cbmltcG9ydCAnLi93eC1lbnYnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcblxuY29uc3Qgd2VleE1vZHVsZXMgPSB7fVxuXG5jb25zdCB3ZWV4ID0ge1xuICBfX3Z1ZV9fOiBudWxsLFxuICB1dGlscyxcbiAgdW5pdHM6IHdpbmRvdy5DU1NfVU5JVCxcbiAgY29uZmlnOiB7XG4gICAgZW52OiB3aW5kb3cuV1hFbnZpcm9ubWVudCxcbiAgICBidW5kbGVVcmw6IGxvY2F0aW9uLmhyZWZcbiAgfSxcblxuICByZXF1aXJlTW9kdWxlIChtb2R1bGVOYW1lKSB7XG4gICAgcmV0dXJuIHdlZXhNb2R1bGVzW21vZHVsZU5hbWVdXG4gIH0sXG5cbiAgcmVnaXN0ZXJNb2R1bGUgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlckFwaU1vZHVsZSguLi5hcmdzKVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHJlcXVpcmUgKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhgW1Z1ZSBSZW5kZXJdIFwid2VleC5yZXF1aXJlXCIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcIndlZXgucmVxdWlyZU1vZHVsZVwiIGluc3RlYWQuYClcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgLy8gVE9ETzogcmVuYW1lIHRvIHJlZ2lzdGVyTW9kdWxlXG4gIHJlZ2lzdGVyQXBpTW9kdWxlIChuYW1lLCBtb2R1bGUsIG1ldGEpIHtcbiAgICBpZiAoIXdlZXhNb2R1bGVzW25hbWVdKSB7XG4gICAgICB3ZWV4TW9kdWxlc1tuYW1lXSA9IHt9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZHVsZSkge1xuICAgICAgaWYgKG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHdlZXhNb2R1bGVzW25hbWVdW2tleV0gPSB1dGlscy5iaW5kKG1vZHVsZVtrZXldLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZWdpc3RlckNvbXBvbmVudCAobmFtZSwgY29tcG9uZW50KSB7XG4gICAgaWYgKCF0aGlzLl9fdnVlX18pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnW1Z1ZSBSZW5kZXJdIFZ1ZSBpcyBub3QgZm91bmQuIFBsZWFzZSBpbXBvcnQgVnVlLmpzIGJlZm9yZSByZWdpc3RlciBhIGNvbXBvbmVudC4nKVxuICAgIH1cbiAgICB0aGlzLl9fdnVlX18uY29tcG9uZW50KG5hbWUsIGNvbXBvbmVudClcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICBnZXRSb290ICgpIHt9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIHNlbmRlcjoge1xuICAgIHBlcmZvcm1DYWxsYmFjayAoY2FsbGJhY2ssIGRhdGEsIGtlZXBBbGl2ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGluc3RhbGwgKG1vZHVsZSkge1xuICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gIH1cbn1cblxuOyBbJ29uJywgJ29uY2UnLCAnb2ZmJywgJ2VtaXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgd2VleFttZXRob2RdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX3Z1ZSkge1xuICAgICAgdGhpcy5fdnVlID0gbmV3IFZ1ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92dWVbYCQke21ldGhvZH1gXSguLi5hcmdzKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9jb21wb25lbnRzLmNzcydcblxuLy8gaW1wb3J0ICdsYXp5aW1nJ1xuaW1wb3J0ICcuLi8uLi9icm93c2VyL3JlbmRlci9nZXN0dXJlJ1xuXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9hcnJheUZyb20nXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9vYmplY3RBc3NpZ24nXG5pbXBvcnQgJy4uLy4uLy4uL3NoYXJlZC9vYmplY3RTZXRQcm90b3R5cGVPZidcblxuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZSdcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJ1xuXG5pbXBvcnQgbW9kdWxlcyBmcm9tICcuLi9tb2R1bGVzJ1xuaW1wb3J0IHdlZXggZnJvbSAnLi93ZWV4J1xuXG4vLyByZWdpc3RlciBidWlsdC1pbiBtb2R1bGVzLlxud2VleC5pbnN0YWxsKG1vZHVsZXMpXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWdWUgKHZ1ZSkge1xuICBpZiAoIXZ1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW1Z1ZSBSZW5kZXJdIFZ1ZSBub3QgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgdnVlIDIueCBydW50aW1lIGlzIGltcG9ydGVkLicpXG4gIH1cbiAgd2VleC5fX3Z1ZV9fID0gdnVlXG4gIGNvbnNvbGUubG9nKGBbVnVlIFJlbmRlcl0gaW5zdGFsbCBWdWUgJHt2dWUudmVyc2lvbn0uYClcbn1cblxud2luZG93LndlZXggPSB3ZWV4XG53aW5kb3cuZ2xvYmFsID0gd2luZG93XG5cbmV4cG9ydCBkZWZhdWx0IHdlZXhcbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NoZWNrZWQ6ICh0aGlzLmNoZWNrZWQgIT09ICdmYWxzZScgJiYgdGhpcy5jaGVja2VkICE9PSBmYWxzZSksXG4gICAgICBpc0Rpc2FibGVkOiAodGhpcy5kaXNhYmxlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZSlcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtc3dpdGNoJ11cbiAgICAgIHRoaXMuaXNDaGVja2VkICYmIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zd2l0Y2gtY2hlY2tlZCcpXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgJiYgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXN3aXRjaC1kaXNhYmxlZCcpXG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUgKCkge1xuICAgICAgLy8gVE9ETzogaGFuZGxlIHRoZSBldmVudHNcbiAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHsgdmFsdWU6IHRoaXMuaXNDaGVja2VkIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygnc3dpdGNoJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc3dpdGNoJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KVxuICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHsgc3RhdGljQ2xhc3M6ICd3ZWV4LXN3aXRjaC1pbm5lcicgfSldKVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGhyZWY6IFN0cmluZ1xuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2EnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmEnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ2EnLFxuICAgICAgICBocmVmOiB0aGlzLmhyZWZcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1hIHdlZXgtY3QnXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmZ1bmN0aW9uIHRyaW1UZXh0Tm9kZSAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiAhIXZub2RlLnRhZylcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2RpdicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6ZGl2Jywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdkaXYnIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1kaXYgd2VleC1jdCdcbiAgICB9LCB0cmltVGV4dE5vZGUodGhpcy4kc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn1cbiIsIi8qKlxuICogZ2V0IHJlc2l6ZSAoc3RldGNofGNvdmVyfGNvbnRhaW4pIHJlbGF0ZWQgc3R5bGVzLlxuICovXG5mdW5jdGlvbiBnZXRSZXNpemVTdHlsZSAoY29udGV4dCkge1xuICBjb25zdCBzdHJldGNoID0gJzEwMCUgMTAwJSdcbiAgY29uc3QgcmVzaXplID0gY29udGV4dC5yZXNpemUgfHwgc3RyZXRjaFxuICBjb25zdCBiZ1NpemUgPSBbJ2NvdmVyJywgJ2NvbnRhaW4nLCBzdHJldGNoXS5pbmRleE9mKHJlc2l6ZSkgPiAtMSA/IHJlc2l6ZSA6IHN0cmV0Y2hcbiAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9YmFja2dyb3VuZC1zaXplXG4gIHJldHVybiB7ICdiYWNrZ3JvdW5kLXNpemUnOiBiZ1NpemUgfVxufVxuXG5mdW5jdGlvbiBwcmVQcm9jZXNzU3JjIChjb250ZXh0LCB1cmwsIG1lcmdlZFN0eWxlKSB7XG4gIC8vIHNvbWVob3cgdGhlIG1lcmdlZCBzdHlsZSBpbiBfcHJlcmVuZGVyIGhvb2sgaXMgZ29uZS5cbiAgLy8ganVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIHNyYy5cbiAgaWYgKCFtZXJnZWRTdHlsZSB8fCAhbWVyZ2VkU3R5bGUud2lkdGggfHwgIW1lcmdlZFN0eWxlLmhlaWdodCkge1xuICAgIHJldHVybiB1cmxcbiAgfVxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lcmdlZFN0eWxlXG4gIHJldHVybiBjb250ZXh0LnByb2Nlc3NJbWdTcmMgJiYgY29udGV4dC5wcm9jZXNzSW1nU3JjKHVybCwge1xuICAgIHdpZHRoOiBwYXJzZUZsb2F0KHdpZHRoKSxcbiAgICBoZWlnaHQ6IHBhcnNlRmxvYXQoaGVpZ2h0KSxcbiAgICBxdWFsaXR5OiBjb250ZXh0LnF1YWxpdHksXG4gICAgc2hhcnBlbjogY29udGV4dC5zaGFycGVuLFxuICAgIG9yaWdpbmFsOiBjb250ZXh0Lm9yaWdpbmFsXG4gIH0pIHx8IHVybFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICByZXNpemU6IFN0cmluZyxcbiAgICBxdWFsaXR5OiBTdHJpbmcsXG4gICAgc2hhcnBlbjogU3RyaW5nLFxuICAgIG9yaWdpbmFsOiBbU3RyaW5nLCBCb29sZWFuXVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIHRoaXMuX2ZpcmVMYXp5bG9hZCgpXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5fZmlyZUxhenlsb2FkKClcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2ltYWdlJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBzdHlsZSA9IHRoaXMuX25vcm1hbGl6ZUlubGluZVN0eWxlcyh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIGNvbnN0IHdoID0gdGhpcy5fZ2V0U2l6ZSh0aGlzLiR2bm9kZS5kYXRhKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmaWd1cmUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ2ltYWdlJyxcbiAgICAgICAgJ2ltZy1zcmMnOiBwcmVQcm9jZXNzU3JjKHRoaXMsIHRoaXMuc3JjLCB3aCksXG4gICAgICAgICdpbWctcGxhY2Vob2xkZXInOiBwcmVQcm9jZXNzU3JjKHRoaXMsIHRoaXMucGxhY2Vob2xkZXIsIHdoKVxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcChbJ2xvYWQnLCAnZXJyb3InXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW1hZ2Ugd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZ2V0UmVzaXplU3R5bGUodGhpcylcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUaHJvdHRsZUxhenlsb2FkLCB3YXRjaEFwcGVhciB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdGFnQmVmb3JlQ3JlYXRlLCB0YWdNb3VudGVkLCB0YWdCZWZvcmVVcGRhdGUsIHRhZ1VwZGF0ZWQsIHRhZ0JlZ2luLCB0YWdFbmQgfSBmcm9tICcuLi91dGlscy9wZXJmJ1xuXG5jb25zdCBzdXBwb3J0ZWRFdmVudHMgPSBbXG4gICdjbGljaycsICdsb25ncHJlc3MnLCAnYXBwZWFyJywgJ2Rpc2FwcGVhcidcbiAgLy8gJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJ1xuXVxuXG5jb25zdCBzY3JvbGxhYmxlVHlwZXMgPSBbJ3Njcm9sbGVyJywgJ2xpc3QnXVxuXG5sZXQgbGF6eWxvYWRXYXRjaGVkID0gZmFsc2VcbmZ1bmN0aW9uIHdhdGNoTGF6eWxvYWQgKCkge1xuICBsYXp5bG9hZFdhdGNoZWQgPSB0cnVlXG4gIDsgW1xuICAgICdzY3JvbGwnXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnLFxuICAgIC8vICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAvLyAnYW5pbWF0aW9uZW5kJyxcbiAgICAvLyAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAvLyAncmVzaXplJ1xuICBdLmZvckVhY2goZXZ0ID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGdldFRocm90dGxlTGF6eWxvYWQoMjUsIGRvY3VtZW50LmJvZHkpKVxuICB9KVxufVxuXG5sZXQgd2FybmVkID0gZmFsc2VcbmNvbnN0IG5vdGVQYWdlID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9NclJhaW5kcm9wL3dlZXgvaXNzdWVzLzE0J1xuZnVuY3Rpb24gd2FyblByb2Nlc3NTdHlsZSAoKSB7XG4gIGlmICghd2FybmVkKSB7XG4gICAgd2FybmVkID0gdHJ1ZVxuICAgIGNvbnNvbGUud2FybihgW3Z1ZS1yZW5kZXJdIHdhcm46IHNob3VsZCBhZGQgbG9hZGVyIGNvbmZpZyB1c2luZyAkcHJvY2Vzc1N0eWxlIHRvIGVuYWJsZWBcbiAgICAgICsgYCBpbmxpbmUgc3R5bGVzJ3MgYXV0by1wcmVmaXhpbmcuIHNlZSAke25vdGVQYWdlfS4gSWYgYWxyZWFkeSBkaWQgaXQsIHBsZWFzZSBpZ25vcmUgdGhpcy5gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICBpZiAoIWxhenlsb2FkV2F0Y2hlZCkge1xuICAgICAgd2F0Y2hMYXp5bG9hZCgpXG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGFnQmVmb3JlQ3JlYXRlKClcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKCF3ZWV4Ll9yb290KSB7XG4gICAgICB3ZWV4Ll9yb290ID0gdGhpcy4kcm9vdC4kZWxcbiAgICAgIHdlZXguX3Jvb3QuY2xhc3NMaXN0LmFkZCgnd2VleC1yb290JylcbiAgICB9XG4gICAgaWYgKCF3YXJuZWQgJiYgIXdpbmRvdy5fc3R5bGVfcHJvY2Vzc2luZ19hZGRlZCkge1xuICAgICAgd2FyblByb2Nlc3NTdHlsZSgpXG4gICAgfVxuICAgIHdhdGNoQXBwZWFyKHRoaXMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB0YWdNb3VudGVkKClcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHRhZ0JlZm9yZVVwZGF0ZSgpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZWQgKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGFnVXBkYXRlZCgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfZ2V0VG9wQ29udGV4dCAoKSB7XG4gICAgICBsZXQgY3R4ID0gdGhpc1xuICAgICAgbGV0IHZub2RlID0gY3R4LiRvcHRpb25zLl9wYXJlbnRWbm9kZVxuICAgICAgd2hpbGUgKHZub2RlKSB7XG4gICAgICAgIGN0eCA9IHZub2RlLmNvbnRleHRcbiAgICAgICAgdm5vZGUgPSBjdHguJG9wdGlvbnMuX3BhcmVudFZub2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gY3R4XG4gICAgfSxcblxuICAgIF9nZXRTY29wZUlkcyAoKSB7XG4gICAgICBjb25zdCBhcnIgPSBbXVxuICAgICAgbGV0IGN0eCA9IHRoaXNcbiAgICAgIGxldCBzY29wZUlkXG4gICAgICB3aGlsZSAoY3R4KSB7XG4gICAgICAgIHNjb3BlSWQgPSBjdHguJG9wdGlvbnMuX3Njb3BlSWRcbiAgICAgICAgc2NvcGVJZCAmJiBhcnIucHVzaChzY29wZUlkKVxuICAgICAgICBjdHggPSBjdHguJG9wdGlvbnMucGFyZW50XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyXG4gICAgfSxcblxuICAgIF9nZXRQYXJlbnRTY3JvbGxlciAoKSB7XG4gICAgICBsZXQgcGFyZW50ID0gdGhpc1xuICAgICAgd2hpbGUgKHBhcmVudCAmJiBzY3JvbGxhYmxlVHlwZXMuaW5kZXhPZihwYXJlbnQuJG9wdGlvbnMuX2NvbXBvbmVudFRhZykgPD0gLTEpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LiRvcHRpb25zLnBhcmVudFxuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudFxuICAgIH0sXG5cbiAgICBfY3JlYXRlRXZlbnRNYXAgKGV4dHJhcyA9IFtdKSB7XG4gICAgICBjb25zdCBldmVudE1hcCA9IHt9XG4gICAgICBzdXBwb3J0ZWRFdmVudHMuY29uY2F0KGV4dHJhcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgZXZlbnRNYXBbbmFtZV0gPSBldmVudCA9PiB0aGlzLiRlbWl0KG5hbWUsIGV2ZW50KVxuICAgICAgfSlcbiAgICAgIHJldHVybiBldmVudE1hcFxuICAgIH0sXG5cbiAgICBfZmlyZUxhenlsb2FkIChlbCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRhZ0JlZ2luKCdiYXNlLl9maXJlTGF6eWxvYWQnKVxuICAgICAgfVxuICAgICAgZ2V0VGhyb3R0bGVMYXp5bG9hZCgxNikoKVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRhZ0VuZCgnYmFzZS5fZmlyZUxhenlsb2FkJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FwaXRhbGl6ZVN0cmluZztcbmZ1bmN0aW9uIGNhcGl0YWxpemVTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFByb3BlcnR5O1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwcmVmaXhQcm9wZXJ0eShwcmVmaXhQcm9wZXJ0aWVzLCBwcm9wZXJ0eSwgc3R5bGUpIHtcbiAgaWYgKHByZWZpeFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIHJlcXVpcmVkUHJlZml4ZXMgPSBwcmVmaXhQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmVxdWlyZWRQcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc3R5bGVbcmVxdWlyZWRQcmVmaXhlc1tpXSArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4VmFsdWU7XG5mdW5jdGlvbiBwcmVmaXhWYWx1ZShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBtZXRhRGF0YSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGx1Z2lucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHBsdWdpbnNbaV0ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGEpO1xuXG4gICAgLy8gd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBpZiBhIHZhbHVlIGlzIHJldHVybmVkXG4gICAgLy8gYXMgYWxsIHBsdWdpbiBjcml0ZXJpYSBhcmUgdW5pcXVlXG4gICAgaWYgKHByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc2VkVmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTmV3VmFsdWVzT25seTtcbmZ1bmN0aW9uIGFkZElmTmV3KGxpc3QsIHZhbHVlKSB7XG4gIGlmIChsaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGxpc3QucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3VmFsdWVzT25seShsaXN0LCB2YWx1ZXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlcyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc09iamVjdDtcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByZWZpeGVyO1xuXG52YXIgX3ByZWZpeFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4UHJvcGVydHknKTtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wZXJ0eSk7XG5cbnZhciBfcHJlZml4VmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9wcmVmaXhWYWx1ZScpO1xuXG52YXIgX3ByZWZpeFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFZhbHVlKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5ID0gcmVxdWlyZSgnLi4vdXRpbHMvYWRkTmV3VmFsdWVzT25seScpO1xuXG52YXIgX2FkZE5ld1ZhbHVlc09ubHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkTmV3VmFsdWVzT25seSk7XG5cbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuLi91dGlscy9pc09iamVjdCcpO1xuXG52YXIgX2lzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlUHJlZml4ZXIoX3JlZikge1xuICB2YXIgcHJlZml4TWFwID0gX3JlZi5wcmVmaXhNYXAsXG4gICAgICBwbHVnaW5zID0gX3JlZi5wbHVnaW5zO1xuXG4gIGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgb2JqZWN0c1xuICAgICAgaWYgKCgwLCBfaXNPYmplY3QyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhBbGwodmFsdWUpO1xuICAgICAgICAvLyBoYW5kbGUgYXJyYXkgdmFsdWVzXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhciBjb21iaW5lZFZhbHVlID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gKDAsIF9wcmVmaXhWYWx1ZTIuZGVmYXVsdCkocGx1Z2lucywgcHJvcGVydHksIHZhbHVlW2ldLCBzdHlsZSwgcHJlZml4TWFwKTtcbiAgICAgICAgICAoMCwgX2FkZE5ld1ZhbHVlc09ubHkyLmRlZmF1bHQpKGNvbWJpbmVkVmFsdWUsIHByb2Nlc3NlZFZhbHVlIHx8IHZhbHVlW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCB3YXMgdG91Y2hlZFxuICAgICAgICAvLyBieSBhbnkgcGx1Z2luIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb25zXG4gICAgICAgIGlmIChjb21iaW5lZFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBjb21iaW5lZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3Byb2Nlc3NlZFZhbHVlID0gKDAsIF9wcmVmaXhWYWx1ZTIuZGVmYXVsdCkocGx1Z2lucywgcHJvcGVydHksIHZhbHVlLCBzdHlsZSwgcHJlZml4TWFwKTtcblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoX3Byb2Nlc3NlZFZhbHVlKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gX3Byb2Nlc3NlZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgKDAsIF9wcmVmaXhQcm9wZXJ0eTIuZGVmYXVsdCkocHJlZml4TWFwLCBwcm9wZXJ0eSwgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcmVmaXhBbGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcGx1Z2luczogW10sXG4gIHByZWZpeE1hcDogeyBcImFwcGVhcmFuY2VcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcInVzZXJTZWxlY3RcIjogW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogW1wiV2Via2l0XCJdLCBcInRleHRFbXBoYXNpc1wiOiBbXCJXZWJraXRcIl0sIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogW1wiV2Via2l0XCJdLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IFtcIldlYmtpdFwiXSwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogW1wiV2Via2l0XCJdLCBcImNsaXBQYXRoXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrSW1hZ2VcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tNb2RlXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrUmVwZWF0XCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrUG9zaXRpb25cIjogW1wiV2Via2l0XCJdLCBcIm1hc2tDbGlwXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrT3JpZ2luXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrU2l6ZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza0NvbXBvc2l0ZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza1wiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlclNvdXJjZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlck1vZGVcIjogW1wiV2Via2l0XCJdLCBcIm1hc2tCb3JkZXJTbGljZVwiOiBbXCJXZWJraXRcIl0sIFwibWFza0JvcmRlcldpZHRoXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrQm9yZGVyXCI6IFtcIldlYmtpdFwiXSwgXCJtYXNrVHlwZVwiOiBbXCJXZWJraXRcIl0sIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiBbXCJXZWJraXRcIl0sIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IFtcIldlYmtpdFwiXSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogW1wiV2Via2l0XCJdLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogW1wiV2Via2l0XCJdLCBcImZpbHRlclwiOiBbXCJXZWJraXRcIl0sIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiBbXCJXZWJraXRcIl0sIFwiYnJlYWtBZnRlclwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSwgXCJicmVha0JlZm9yZVwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSwgXCJicmVha0luc2lkZVwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiXSwgXCJjb2x1bW5Db3VudFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uRmlsbFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uR2FwXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5SdWxlXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogW1wiV2Via2l0XCIsIFwiTW96XCJdLCBcImNvbHVtblJ1bGVTdHlsZVwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiY29sdW1uUnVsZVdpZHRoXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5zXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5TcGFuXCI6IFtcIldlYmtpdFwiLCBcIk1velwiXSwgXCJjb2x1bW5XaWR0aFwiOiBbXCJXZWJraXRcIiwgXCJNb3pcIl0sIFwiZmxleFwiOiBbXCJXZWJraXRcIl0sIFwiZmxleEJhc2lzXCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4RGlyZWN0aW9uXCI6IFtcIldlYmtpdFwiXSwgXCJmbGV4R3Jvd1wiOiBbXCJXZWJraXRcIl0sIFwiZmxleEZsb3dcIjogW1wiV2Via2l0XCJdLCBcImZsZXhTaHJpbmtcIjogW1wiV2Via2l0XCJdLCBcImZsZXhXcmFwXCI6IFtcIldlYmtpdFwiXSwgXCJhbGlnbkNvbnRlbnRcIjogW1wiV2Via2l0XCJdLCBcImFsaWduSXRlbXNcIjogW1wiV2Via2l0XCJdLCBcImFsaWduU2VsZlwiOiBbXCJXZWJraXRcIl0sIFwianVzdGlmeUNvbnRlbnRcIjogW1wiV2Via2l0XCJdLCBcIm9yZGVyXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybU9yaWdpblwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtT3JpZ2luWFwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNmb3JtT3JpZ2luWVwiOiBbXCJXZWJraXRcIl0sIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IFtcIldlYmtpdFwiXSwgXCJwZXJzcGVjdGl2ZVwiOiBbXCJXZWJraXRcIl0sIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogW1wiV2Via2l0XCJdLCBcInRyYW5zZm9ybVN0eWxlXCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25cIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvbkRlbGF5XCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IFtcIldlYmtpdFwiXSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvbk5hbWVcIjogW1wiV2Via2l0XCJdLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiBbXCJXZWJraXRcIl0sIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogW1wiV2Via2l0XCJdLCBcImJhY2tkcm9wRmlsdGVyXCI6IFtcIldlYmtpdFwiXSwgXCJmb250S2VybmluZ1wiOiBbXCJXZWJraXRcIl0sIFwic2Nyb2xsU25hcFR5cGVcIjogW1wiV2Via2l0XCIsIFwibXNcIl0sIFwic2Nyb2xsU25hcFBvaW50c1hcIjogW1wiV2Via2l0XCIsIFwibXNcIl0sIFwic2Nyb2xsU25hcFBvaW50c1lcIjogW1wiV2Via2l0XCIsIFwibXNcIl0sIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogW1wiV2Via2l0XCJdLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogW1wiV2Via2l0XCJdLCBcInNoYXBlSW1hZ2VPdXRzaWRlXCI6IFtcIldlYmtpdFwiXSwgXCJoeXBoZW5zXCI6IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLCBcImZsb3dJbnRvXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcImZsb3dGcm9tXCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInJlZ2lvbkZyYWdtZW50XCI6IFtcIldlYmtpdFwiLCBcIm1zXCJdLCBcInRleHRBbGlnbkxhc3RcIjogW1wiTW96XCJdLCBcInRhYlNpemVcIjogW1wiTW96XCJdLCBcIndyYXBGbG93XCI6IFtcIm1zXCJdLCBcIndyYXBUaHJvdWdoXCI6IFtcIm1zXCJdLCBcIndyYXBNYXJnaW5cIjogW1wibXNcIl0sIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiBbXCJtc1wiXSwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IFtcIm1zXCJdLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IFtcIm1zXCJdLCBcImdyaWRUZW1wbGF0ZVwiOiBbXCJtc1wiXSwgXCJncmlkQXV0b0NvbHVtbnNcIjogW1wibXNcIl0sIFwiZ3JpZEF1dG9Sb3dzXCI6IFtcIm1zXCJdLCBcImdyaWRBdXRvRmxvd1wiOiBbXCJtc1wiXSwgXCJncmlkXCI6IFtcIm1zXCJdLCBcImdyaWRSb3dTdGFydFwiOiBbXCJtc1wiXSwgXCJncmlkQ29sdW1uU3RhcnRcIjogW1wibXNcIl0sIFwiZ3JpZFJvd0VuZFwiOiBbXCJtc1wiXSwgXCJncmlkUm93XCI6IFtcIm1zXCJdLCBcImdyaWRDb2x1bW5cIjogW1wibXNcIl0sIFwiZ3JpZENvbHVtbkVuZFwiOiBbXCJtc1wiXSwgXCJncmlkQ29sdW1uR2FwXCI6IFtcIm1zXCJdLCBcImdyaWRSb3dHYXBcIjogW1wibXNcIl0sIFwiZ3JpZEFyZWFcIjogW1wibXNcIl0sIFwiZ3JpZEdhcFwiOiBbXCJtc1wiXSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiBbXCJXZWJraXRcIiwgXCJtc1wiXSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogW1wiV2Via2l0XCJdLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiBbXCJXZWJraXRcIl0sIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFtcIldlYmtpdFwiXSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogW1wiV2Via2l0XCJdIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciB2YWx1ZXMgPSB7XG4gICd6b29tLWluJzogdHJ1ZSxcbiAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgZ3JhYjogdHJ1ZSxcbiAgZ3JhYmJpbmc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGN1cnNvcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUHJlZml4ZWRWYWx1ZTtcblxudmFyIHJlZ2V4ID0gLy13ZWJraXQtfC1tb3otfC1tcy0vO1xuXG5mdW5jdGlvbiBpc1ByZWZpeGVkVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVnZXgudGVzdCh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcm9zc0ZhZGU7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3Jvc3MtZmFkZVxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGNyb3NzRmFkZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignY3Jvc3MtZmFkZSgnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvY3Jvc3MtZmFkZVxcKC9nLCBwcmVmaXggKyAnY3Jvc3MtZmFkZSgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsdGVyO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtZmlsdGVyLWZ1bmN0aW9uXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdmaWx0ZXIoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ZpbHRlclxcKC9nLCBwcmVmaXggKyAnZmlsdGVyKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xudmFyIHZhbHVlcyA9IHtcbiAgZmxleDogdHJ1ZSxcbiAgJ2lubGluZS1mbGV4JzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiBbJy13ZWJraXQtYm94JywgJy1tb3otYm94JywgJy1tcy0nICsgdmFsdWUgKyAnYm94JywgJy13ZWJraXQtJyArIHZhbHVlLCB2YWx1ZV07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hPbGQ7XG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJ1xufTtcblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZmxleERpcmVjdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xKSB7XG4gICAgICBzdHlsZS5XZWJraXRCb3hPcmllbnQgPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5XZWJraXRCb3hPcmllbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSkge1xuICAgICAgc3R5bGUuV2Via2l0Qm94RGlyZWN0aW9uID0gJ3JldmVyc2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5XZWJraXRCb3hEaXJlY3Rpb24gPSAnbm9ybWFsJztcbiAgICB9XG4gIH1cbiAgaWYgKGFsdGVybmF0aXZlUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgc3R5bGVbYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV1dID0gYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFkaWVudDtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJyddO1xuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlcy50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbWFnZVNldDtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3NzLWltYWdlLXNldFxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGltYWdlU2V0KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdpbWFnZS1zZXQoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ltYWdlLXNldFxcKC9nLCBwcmVmaXggKyAnaW1hZ2Utc2V0KCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwb3NpdGlvbjtcbmZ1bmN0aW9uIHBvc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgcmV0dXJuIFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J107XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpemluZztcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICBtYXhIZWlnaHQ6IHRydWUsXG4gIG1heFdpZHRoOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBjb2x1bW5XaWR0aDogdHJ1ZSxcbiAgbWluV2lkdGg6IHRydWUsXG4gIG1pbkhlaWdodDogdHJ1ZVxufTtcbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHNpemluZyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbnZhciBjYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZyBpbiBjYWNoZVxuICAgID8gY2FjaGVbc3RyaW5nXVxuICAgIDogY2FjaGVbc3RyaW5nXSA9IHN0cmluZ1xuICAgICAgLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kJicpXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh5cGhlbmF0ZVByb3BlcnR5O1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiAoMCwgX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCkocHJvcGVydHkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbjtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHknKTtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVQcm9wZXJ0eSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvbjogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG59O1xuXG5cbnZhciBwcmVmaXhNYXBwaW5nID0ge1xuICBXZWJraXQ6ICctd2Via2l0LScsXG4gIE1vejogJy1tb3otJyxcbiAgbXM6ICctbXMtJ1xufTtcblxuZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUsIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gIGlmICgoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtdWx0aXBsZVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBzaW5nbGVWYWx1ZSA9IG11bHRpcGxlVmFsdWVzW2ldO1xuICAgIHZhciB2YWx1ZXMgPSBbc2luZ2xlVmFsdWVdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gICAgICB2YXIgZGFzaENhc2VQcm9wZXJ0eSA9ICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHNpbmdsZVZhbHVlLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IHByb3BlcnR5UHJlZml4TWFwW3Byb3BlcnR5XTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIHBMZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGogPCBwTGVuOyArK2opIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgdmFsdWVzLnVuc2hpZnQoc2luZ2xlVmFsdWUucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBwcmVmaXhNYXBwaW5nW3ByZWZpeGVzW2pdXSArIGRhc2hDYXNlUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG11bHRpcGxlVmFsdWVzW2ldID0gdmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlLCBwcm9wZXJ0eVByZWZpeE1hcCk7XG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy1tb3otfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIHdlYmtpdE91dHB1dDtcbiAgICB9XG5cbiAgICB2YXIgbW96T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy13ZWJraXQtfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignTW96JykgPiAtMSkge1xuICAgICAgcmV0dXJuIG1vek91dHB1dDtcbiAgICB9XG5cbiAgICBzdHlsZVsnV2Via2l0JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHdlYmtpdE91dHB1dDtcbiAgICBzdHlsZVsnTW96JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IG1vek91dHB1dDtcbiAgICByZXR1cm4gb3V0cHV0VmFsdWU7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVQcmVmaXhlciA9IHJlcXVpcmUoJy4vY3JlYXRlUHJlZml4ZXInKTtcblxudmFyIF9jcmVhdGVQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcmVmaXhlcik7XG5cbnZhciBfc3RhdGljRGF0YSA9IHJlcXVpcmUoJy4vc3RhdGljRGF0YScpO1xuXG52YXIgX3N0YXRpY0RhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGljRGF0YSk7XG5cbnZhciBfY3Vyc29yID0gcmVxdWlyZSgnLi9wbHVnaW5zL2N1cnNvcicpO1xuXG52YXIgX2N1cnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXJzb3IpO1xuXG52YXIgX2Nyb3NzRmFkZSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jcm9zc0ZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlKTtcblxudmFyIF9maWx0ZXIgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmlsdGVyJyk7XG5cbnZhciBfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpbHRlcik7XG5cbnZhciBfZmxleCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Jyk7XG5cbnZhciBfZmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4KTtcblxudmFyIF9mbGV4Ym94T2xkID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hPbGQnKTtcblxudmFyIF9mbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hPbGQpO1xuXG52YXIgX2dyYWRpZW50ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2dyYWRpZW50Jyk7XG5cbnZhciBfZ3JhZGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JhZGllbnQpO1xuXG52YXIgX2ltYWdlU2V0ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ltYWdlU2V0Jyk7XG5cbnZhciBfaW1hZ2VTZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1hZ2VTZXQpO1xuXG52YXIgX3Bvc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3Bvc2l0aW9uJyk7XG5cbnZhciBfcG9zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb24pO1xuXG52YXIgX3NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9zaXppbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6aW5nKTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGx1Z2lucyA9IFtfY3Jvc3NGYWRlMi5kZWZhdWx0LCBfY3Vyc29yMi5kZWZhdWx0LCBfZmlsdGVyMi5kZWZhdWx0LCBfZmxleGJveE9sZDIuZGVmYXVsdCwgX2dyYWRpZW50Mi5kZWZhdWx0LCBfaW1hZ2VTZXQyLmRlZmF1bHQsIF9wb3NpdGlvbjIuZGVmYXVsdCwgX3NpemluZzIuZGVmYXVsdCwgX3RyYW5zaXRpb24yLmRlZmF1bHQsIF9mbGV4Mi5kZWZhdWx0XTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVQcmVmaXhlcjIuZGVmYXVsdCkoe1xuICBwcmVmaXhNYXA6IF9zdGF0aWNEYXRhMi5kZWZhdWx0LnByZWZpeE1hcCxcbiAgcGx1Z2luczogcGx1Z2luc1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJpbXBvcnQge1xuICBjYW1lbGl6ZUtleXMsXG4gIGh5cGhlbmF0ZUtleXMsXG4gIGV4dGVuZCxcbiAgdHJpbUNvbW1lbnRcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyB0YWdCZWdpbiwgdGFnRW5kIH0gZnJvbSAnLi4vdXRpbHMvcGVyZidcbmltcG9ydCBhZGRQcmVmaXggZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYydcblxuZnVuY3Rpb24gZ2V0SGVhZFN0eWxlTWFwICgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdGFnQmVnaW4oJ2dldEhlYWRTdHlsZU1hcCcpXG4gIH1cbiAgY29uc3QgcmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cyB8fCBbXSlcbiAgICAucmVkdWNlKChwcmUsIHN0eWxlU2hlZXQpID0+IHtcbiAgICAgIC8vIHdoeSBub3QgdXNpbmcgc3R5bGVTaGVldC5ydWxlcyB8fCBzdHlsZVNoZWV0LmNzc1J1bGVzIHRvIGdldCBjc3MgcnVsZXMgP1xuICAgICAgLy8gYmVjYXVzZSB3ZWV4J3MgY29tcG9uZW50cyBkZWZpbmVkIG5vbi1zdGFuZGFyZCBzdHlsZSBhdHRyaWJ1dGVzLCB3aGljaCBpc1xuICAgICAgLy8gYXV0byBpZ25vcmVkIHdoZW4gYWNjZXNzIHJ1bGUuY3NzVGV4dC5cbiAgICAgIGNvbnN0IHN0ckFyciA9IHRyaW1Db21tZW50KHN0eWxlU2hlZXQub3duZXJOb2RlLnRleHRDb250ZW50LnRyaW0oKSkuc3BsaXQoL30vKVxuICAgICAgY29uc3QgbGVuID0gc3RyQXJyLmxlbmd0aFxuICAgICAgY29uc3QgcnVsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBzdHIgPSBzdHJBcnJbaV1cbiAgICAgICAgaWYgKCFzdHIgfHwgc3RyLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKCg/Oiw/XFxzKlxcLltbXFxdXFx3LV0rXFxzKikrKSh7W159XSspLylcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgIC8vIG5vdCB0aGUgdnVlIHN0YXRpYyBjbGFzcyBzdHlsZXMgbWFwLiBzbyBhY3F1aXJlIG5vIHJ1bGVzIGZvciB0aGlzIHN0eWxlU2hlZXQuXG4gICAgICAgICAgLy8ganVzdCBqdW1wIHRocm91Z2ggdGhpcyBzdHlsZVNoZWV0IGFuZCBnbyB0byBhbmFseXppbmcgbmV4dC5cbiAgICAgICAgICByZXR1cm4gcHJlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xzTm1zID0gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAobiA9PiBuLnRyaW0oKSlcbiAgICAgICAgY29uc3QgY3NzVGV4dCA9IG1hdGNoWzJdLnJlcGxhY2UoL1t7fV0vZywgJycpLnRyaW0oKVxuICAgICAgICBsZXQgY2xzTm1zSWR4ID0gMFxuICAgICAgICBjb25zdCBjbHNObXNMZW4gPSBjbHNObXMubGVuZ3RoXG4gICAgICAgIHdoaWxlIChjbHNObXNJZHggPCBjbHNObXNMZW4pIHtcbiAgICAgICAgICBydWxlcy5wdXNoKHtcbiAgICAgICAgICAgIHNlbGVjdG9yVGV4dDogY2xzTm1zW2Nsc05tc0lkeF0sXG4gICAgICAgICAgICBjc3NUZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICBjbHNObXNJZHgrK1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBcnJheS5mcm9tKHJ1bGVzKS5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3JUZXh0IHx8ICcnXG4gICAgICAgIHByZVtzZWxlY3Rvcl0gPSB0cmltQ29tbWVudChydWxlLmNzc1RleHQpLnNwbGl0KCc7JylcbiAgICAgICAgICAucmVkdWNlKChzdHlsZU9iaiwgc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50ICYmIHN0YXRlbWVudC5pbmRleE9mKCcvKicpIDw9IC0xKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc0FyciA9IHN0YXRlbWVudC5zcGxpdCgnOicpLm1hcCgocGFydCkgPT4gcGFydC50cmltKCkpXG4gICAgICAgICAgICAgIHN0eWxlT2JqW3Jlc0FyclswXV0gPSByZXNBcnJbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZU9ialxuICAgICAgICAgIH0sIHt9KVxuICAgICAgfSlcbiAgICAgIHJldHVybiBwcmVcbiAgICB9LCB7fSlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgdGFnRW5kKCdnZXRIZWFkU3R5bGVNYXAnKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8vIGdldCBzdGF0aWMgY2xhc3Mgc3R5bGUgbWFwIGZyb20gZG9jdW1lbnQncyBzdHlsZVNoZWV0cy5cbiAgICBpZiAoIXdlZXguc3R5bGVNYXApIHtcbiAgICAgIHdlZXguc3R5bGVNYXAgPSBnZXRIZWFkU3R5bGVNYXAoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgJHByb2Nlc3NTdHlsZSAoc3R5bGUpIHtcbiAgICAgIHdpbmRvdy5fc3R5bGVfcHJvY2Vzc2luZ19hZGRlZCA9IHRydWVcbiAgICAgIGlmICghc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAod2luZG93Ll9wcm9jZXNzX3N0eWxlKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuX3Byb2Nlc3Nfc3R5bGUoc3R5bGUpXG4gICAgICB9XG4gICAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ3dlZXgtZmxleC1jdCcpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGh5cGhlbmF0ZUtleXMoYWRkUHJlZml4KGNhbWVsaXplS2V5cyhzdHlsZSkpKVxuICAgIH0sXG5cbiAgICBfZ2V0U2NvcGVTdHlsZSAoY2xhc3NOYW1lcykge1xuICAgICAgY29uc3Qgc2NvcGVJZHMgPSB0aGlzLl9nZXRTY29wZUlkcygpXG4gICAgICBjb25zdCBzdHlsZSA9IHt9XG4gICAgICBjb25zdCBzdHlsZU1hcCA9IHdlZXguc3R5bGVNYXBcbiAgICAgIGxldCBtYXBcbiAgICAgIGxldCBjbHNcbiAgICAgIGxldCBjbHNObXNJZHhcbiAgICAgIGxldCBzY3BJZHNJZHhcbiAgICAgIGNvbnN0IGNsc05tc0xlbiA9IGNsYXNzTmFtZXMubGVuZ3RoXG4gICAgICBjb25zdCBzY3BJZHNMZW4gPSBzY29wZUlkcy5sZW5ndGhcbiAgICAgIGlmIChjbHNObXNMZW4gPD0gMCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICAgIGNsc05tc0lkeCA9IDBcbiAgICAgIHdoaWxlIChjbHNObXNJZHggPCBjbHNObXNMZW4pIHtcbiAgICAgICAgc2NwSWRzSWR4ID0gMFxuICAgICAgICB3aGlsZSAoc2NwSWRzSWR4IDwgc2NwSWRzTGVuKSB7XG4gICAgICAgICAgY2xzID0gYC4ke2NsYXNzTmFtZXNbY2xzTm1zSWR4XX1bJHtzY29wZUlkc1tzY3BJZHNJZHhdfV1gXG4gICAgICAgICAgbWFwID0gc3R5bGVNYXBbY2xzXVxuICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICBzY3BJZHNJZHgrK1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIG1hcCkge1xuICAgICAgICAgICAgc3R5bGVba10gPSBtYXBba11cbiAgICAgICAgICB9XG4gICAgICAgICAgc2NwSWRzSWR4KytcbiAgICAgICAgfVxuICAgICAgICBjbHNObXNJZHgrK1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfSxcblxuICAgIF9nZXRTaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB3aCA9IHt9XG4gICAgICBjb25zdCBzdHlsZSA9IGRhdGEuc3R5bGVcbiAgICAgIGNvbnN0IHN0YXRpY1N0eWxlID0gZGF0YS5zdGF0aWNTdHlsZVxuICAgICAgY29uc3QgY2xhc3NlcyA9IHR5cGVvZiBkYXRhLmNsYXNzID09PSAnc3RyaW5nJyA/IGRhdGEuY2xhc3Muc3BsaXQoJyAnKSA6IChkYXRhLmNsYXNzIHx8IFtdKVxuICAgICAgY29uc3Qgc3RhdGljQ2xhc3MgPSB0eXBlb2YgZGF0YS5zdGF0aWNDbGFzcyA9PT0gJ3N0cmluZycgPyBkYXRhLnN0YXRpY0NsYXNzLnNwbGl0KCcgJykgOiAoZGF0YS5jbGFzcyB8fCBbXSlcbiAgICAgIGNvbnN0IGNsc05tcyA9IHN0YXRpY0NsYXNzLmNvbmNhdChjbGFzc2VzKVxuICAgICAgZnVuY3Rpb24gZXh0ZW5kV0hGcm9tICh0bywgZnJvbSkge1xuICAgICAgICBpZiAoIWZyb20pIHsgcmV0dXJuIH1cbiAgICAgICAgZnJvbS53aWR0aCAmJiAodG8ud2lkdGggPSBmcm9tLndpZHRoKVxuICAgICAgICBmcm9tLmhlaWdodCAmJiAodG8uaGVpZ2h0ID0gZnJvbS5oZWlnaHQpXG4gICAgICB9XG4gICAgICBleHRlbmRXSEZyb20od2gsIHRoaXMuX2dldFNjb3BlU3R5bGUoY2xzTm1zKSlcbiAgICAgIGV4dGVuZFdIRnJvbSh3aCwgc3RhdGljU3R5bGUpXG4gICAgICBleHRlbmRXSEZyb20od2gsIHN0eWxlKVxuICAgICAgcmV0dXJuIHdoXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGdldCBzdHlsZSBmcm9tIGNsYXNzLCBzdGF0aWNDbGFzcywgc3R5bGUgYW5kIHN0YXRpY1N0eWxlLlxuICAgICAqIG1lcmdlIHN0eWxlcyBwcmlvcml0eTogaGlnaCAtPiBsb3dcbiAgICAgKiAgMS4gZGF0YS5zdHlsZSAoYm91bmQgc3R5bGUpLlxuICAgICAqICAyLiBkYXRhLnN0YXRpY1N0eWxlIChpbmxpbmUgc3R5bGVzKS5cbiAgICAgKiAgMy4gZGF0YS5jbGFzcyBzdHlsZSAoYm91bmQgY2xhc3MgbmFtZXMpLlxuICAgICAqICA0LiBkYXRhLnN0YXRpY0NsYXNzIHN0eWxlIChzY29wZWQgc3R5bGVzIG9yIHN0YXRpYyBjbGFzc2VzKS5cbiAgICAgKi9cbiAgICBfZ2V0Q29tcG9uZW50U3R5bGUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHN0YXRpY0NsYXNzTmFtZXMgPSAodHlwZW9mIGRhdGEuc3RhdGljQ2xhc3MgPT09ICdzdHJpbmcnKSA/IGRhdGEuc3RhdGljQ2xhc3Muc3BsaXQoJyAnKSA6IChkYXRhLnN0YXRpY0NsYXNzIHx8IFtdKVxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9ICh0eXBlb2YgZGF0YS5jbGFzcyA9PT0gJ3N0cmluZycpID8gZGF0YS5jbGFzcy5zcGxpdCgnICcpIDogKGRhdGEuY2xhc3MgfHwgW10pXG4gICAgICBjb25zdCBjbHNObXMgPSBzdGF0aWNDbGFzc05hbWVzLmNvbmNhdChjbGFzc05hbWVzKVxuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9nZXRTY29wZVN0eWxlKGNsc05tcylcbiAgICAgIGNvbnN0IHJlcyA9IGV4dGVuZChzdHlsZSwgZGF0YS5zdGF0aWNTdHlsZSwgZGF0YS5zdHlsZSlcbiAgICAgIHJldHVybiByZXNcbiAgICB9LFxuXG4gICAgX2dldFBhcmVudFJlY3QgKCkge1xuICAgICAgY29uc3QgcGFyZW50RWxtID0gdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtXG4gICAgICByZXR1cm4gcGFyZW50RWxtICYmIHBhcmVudEVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0VGhyb3R0bGVMYXp5bG9hZCwgdGhyb3R0bGUgfSBmcm9tICcuLi91dGlscydcblxubGV0IHRocm90dGxlU2Nyb2xsXG5mdW5jdGlvbiBnZXRUaHJvdHRsZWRTY3JvbGwgKGNvbnRleHQpIHtcbiAgaWYgKCF0aHJvdHRsZVNjcm9sbCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjb250ZXh0LiRyZWZzLndyYXBwZXJcbiAgICBjb25zdCBpbm5lciA9IGNvbnRleHQuJHJlZnMuaW5uZXJcbiAgICBsZXQgcHJlT2Zmc2V0ID0gKGNvbnRleHQuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgPyB3cmFwcGVyLnNjcm9sbExlZnRcbiAgICAgICAgOiB3cmFwcGVyLnNjcm9sbFRvcClcbiAgICAgIHx8IDBcbiAgICB0aHJvdHRsZVNjcm9sbCA9IHRocm90dGxlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGNvbnRleHQuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgPyB3cmFwcGVyLnNjcm9sbExlZnRcbiAgICAgICAgOiB3cmFwcGVyLnNjcm9sbFRvcFxuICAgICAgY29uc3QgaW5kZW50ID0gcGFyc2VJbnQoY29udGV4dC5vZmZzZXRBY2N1cmFjeSlcbiAgICAgIGZ1bmN0aW9uIHRyaWdnZXJTY3JvbGwgKCkge1xuICAgICAgICBjb25zdCByZWN0ID0gaW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgZXZ0LmNvbnRlbnRTaXplID0geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9XG4gICAgICAgIGV2dC5jb250ZW50T2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IHdyYXBwZXIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBwb3NpdGl2ZSBkaXJlY2l0b24gZm9yIHktYXhpcyBpcyBkb3duLlxuICAgICAgICAgICAqIHNvIHNob3VsZCB1c2UgbmVnYXRpdmUgb3BlcmF0aW9uIG9uIHNjcm9sbFRvcC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqICAoMCwwKS0tLS0tLS0tLS0tLS0tLT4geFxuICAgICAgICAgICAqICAgICAgIHxcbiAgICAgICAgICAgKiAgICAgICB8XG4gICAgICAgICAgICogICAgICAgfFxuICAgICAgICAgICAqICAgICAgIHxcbiAgICAgICAgICAgKiAgICAgICB2IHlcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHk6IC13cmFwcGVyLnNjcm9sbFRvcFxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuJGVtaXQoJ3Njcm9sbCcsIGV2dClcbiAgICAgIH1cbiAgICAgIGlmIChpbmRlbnRcbiAgICAgICAgJiYgIWlzTmFOKGluZGVudClcbiAgICAgICAgJiYgaW5kZW50ID4gMFxuICAgICAgICAmJiBNYXRoLmFicyhvZmZzZXQgLSBwcmVPZmZzZXQpID49IGluZGVudCkge1xuICAgICAgICB0cmlnZ2VyU2Nyb2xsKClcbiAgICAgICAgcHJlT2Zmc2V0ID0gb2Zmc2V0XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaW5kZW50IHx8IGlzTmFOKGluZGVudCkgfHwgaW5kZW50IDw9IDApIHtcbiAgICAgICAgdHJpZ2dlclNjcm9sbCgpXG4gICAgICB9XG4gICAgfSwgMTYsIHRydWUpXG4gIH1cbiAgcmV0dXJuIHRocm90dGxlU2Nyb2xsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBvZmZzZXRBY2N1cmFjeTogW051bWJlciwgU3RyaW5nXVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlTGF5b3V0ICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSByZWN0LmhlaWdodFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVTY3JvbGwgKGV2ZW50KSB7XG4gICAgICBnZXRUaHJvdHRsZUxhenlsb2FkKDI1LCB0aGlzLiRlbCwgJ3Njcm9sbCcpKClcbiAgICAgIGdldFRocm90dGxlZFNjcm9sbCh0aGlzKShldmVudClcbiAgICAgIGlmICh0aGlzLnJlYWNoQm90dG9tKCkpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnbG9hZG1vcmUnLCBldmVudClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVhY2hUb3AgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgcmV0dXJuICghIXdyYXBwZXIpICYmICh3cmFwcGVyLnNjcm9sbFRvcCA8PSAwKVxuICAgIH0sXG5cbiAgICByZWFjaEJvdHRvbSAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGNvbnN0IG9mZnNldCA9IE51bWJlcih0aGlzLmxvYWRtb3Jlb2Zmc2V0KSB8fCAwXG5cbiAgICAgIGlmICh3cmFwcGVyICYmIGlubmVyKSB7XG4gICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICByZXR1cm4gd3JhcHBlci5zY3JvbGxUb3AgPj0gaW5uZXJIZWlnaHQgLSB3cmFwcGVySGVpZ2h0IC0gb2Zmc2V0XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fbG9hZGluZyB8fCB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgICAgcmVhY2hUb3A6IHRoaXMucmVhY2hUb3AoKSxcbiAgICAgICAgICByZWFjaEJvdHRvbTogdGhpcy5yZWFjaEJvdHRvbSgpLFxuICAgICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgICBzdGFydFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFkgPSBvZmZzZXRZXG4gICAgICAgICAgaWYgKHJlYWNoVG9wICYmIHRoaXMuX3JlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2gucHVsbGluZ0Rvd24ob2Zmc2V0WSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAocmVhY2hCb3R0b20gJiYgdGhpcy5fbG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGluZy5wdWxsaW5nVXAoLW9mZnNldFkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgIGlmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChyZWFjaEJvdHRvbSAmJiB0aGlzLl9sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nLnB1bGxpbmdFbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgfVxuICB9XG59XG4iLCIvLyBpbnB1dCBhbmQgdGV4dGFyZSBoYXMgc29tZSBjb21tb24gYXBpIGFuZCBldmVudFxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGZpbmRFbnRlcktleVR5cGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGNvbnN0IGtleXMgPSBbJ2RlZmF1bHQnLCAnZ28nLCAnbmV4dCcsICdzZWFyY2gnLCAnc2VuZCddXG4gIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgcmV0dXJuIGtleVxuICB9XG4gIHJldHVybiAnZG9uZSdcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgZm9jdXMgKCkge1xuICAgICAgdGhpcy4kZWwgJiYgdGhpcy4kZWwuZm9jdXMoKVxuICAgIH0sXG4gICAgYmx1ciAoKSB7XG4gICAgICB0aGlzLiRlbCAmJiB0aGlzLiRlbC5ibHVyKClcbiAgICB9LFxuICAgIC8vIHN1cHBvcnQgZW50ZXIga2V5IGVudmVudFxuICAgIGNyZWF0ZUtleWJvYXJkRXZlbnQgKGV2ZW50cykge1xuICAgICAgY29uc3QgY3VzdG9tS2V5VHlwZSA9IHRoaXMucmV0dXJuS2V5VHlwZVxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgIGlmICh0aGlzLl9ldmVudHNbJ3JldHVybiddKSB7XG4gICAgICAgIGNvbnN0IGtleWJvYXJkRXZlbnRzID0ge1xuICAgICAgICAgICdrZXl1cCc6IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IGV2LmtleUNvZGVcbiAgICAgICAgICAgIGxldCBrZXkgPSBldi5rZXlcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAxMykge1xuICAgICAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09ICd0YWInKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gJ25leHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXlUeXBlID0gZmluZEVudGVyS2V5VHlwZShjdXN0b21LZXlUeXBlKVxuICAgICAgICAgICAgICBldi5yZXR1cm5LZXlUeXBlID0gcmlnaHRLZXlUeXBlXG4gICAgICAgICAgICAgIGV2LnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ3JldHVybicsIGV2KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSBleHRlbmQoZXZlbnRzLCBrZXlib2FyZEV2ZW50cylcbiAgICAgIH1cbiAgICAgIHJldHVybiBldmVudHNcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGZpbGVPdmVydmlldyBJbnB1dCBjb21wb25lbnQuXG4gKiBTdXBwb3J0IHYtbW9kZWwgb25seSBpZiB2dWUgdmVyc2lvbiBpcyBsYXJnZSB0aGFuIDIuMi4wXG4gKi9cbmltcG9ydCB7IGlucHV0Q29tbW9uIH0gZnJvbSAnLi4vbWl4aW5zJ1xuaW1wb3J0IHsgZXh0ZW5kLCBtYXBGb3JtRXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtpbnB1dENvbW1vbl0sXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICdlbWFpbCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3VybCdcbiAgICAgICAgICAvLyB1bnN1cHBvcnRlZCB0eXBlOlxuICAgICAgICAgIC8vIGJ1dHRvbiwgY2hlY2tib3gsIGNvbG9yLCBkYXRlLCBkYXRldGltZSwgZmlsZSwgaGlkZGVuLCBpbWFnZSxcbiAgICAgICAgICAvLyBtb250aCwgcmFkaW8sIHJhbmdlLCByZXNldCwgc3VibWl0LCB0aW1lLCB3ZWVrLFxuICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG1heGxlbmd0aDogW1N0cmluZywgTnVtYmVyXSxcbiAgICByZXR1cm5LZXlUeXBlOiBTdHJpbmdcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2lucHV0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cbiAgICBjb25zdCBldmVudHMgPSBleHRlbmQodGhpcy5fY3JlYXRlRXZlbnRNYXAoKSwgbWFwRm9ybUV2ZW50cyh0aGlzKSlcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDppbnB1dCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnaW5wdXQnLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvZm9jdXM6ICh0aGlzLmF1dG9mb2N1cyAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgbWF4bGVuZ3RoOiB0aGlzLm1heGxlbmd0aCxcbiAgICAgICAgJ3JldHVybktleVR5cGUnOiB0aGlzLnJldHVybktleVR5cGVcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUtleWJvYXJkRXZlbnQoZXZlbnRzKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbnB1dCB3ZWV4LWVsJ1xuICAgIH0pXG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgc3VwcG9ydFN0aWNreSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGlja3k6IGZhbHNlLFxuICAgICAgaW5pdFRvcDogMCxcbiAgICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgICAgc3VwcG9ydFN0aWNreTogc3VwcG9ydFN0aWNreSgpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdFRvcCA9IHRoaXMuJGVsLm9mZnNldFRvcFxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfSxcblxuICB1cGRhdGVkICgpIHtcbiAgICBpZiAoIXRoaXMuc3RpY2t5KSB7XG4gICAgICB0aGlzLmluaXRUb3AgPSB0aGlzLiRlbC5vZmZzZXRUb3BcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFkZFN0aWNreSAoKSB7XG4gICAgICB0aGlzLnN0aWNreSA9IHRydWVcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSB0aGlzLiRlbC5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5wbGFjZWhvbGRlciwgdGhpcy4kZWwpXG4gICAgfSxcblxuICAgIHJlbW92ZVN0aWNreSAoKSB7XG4gICAgICB0aGlzLnN0aWNreSA9IGZhbHNlXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucGxhY2Vob2xkZXIpXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2hlYWRlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6aGVhZGVyJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdoZWFkZXInIH0sXG4gICAgICBvbjogdGhpcy5fY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHJlZjogJ2hlYWRlcicsXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaGVhZGVyIHdlZXgtY3QnLFxuICAgICAgY2xhc3M6IHsgc3RpY2t5OiB0aGlzLnN0aWNreSwgaW9zc3RpY2t5OiB0aGlzLnN1cHBvcnRTdGlja3kgfVxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cbiIsImltcG9ydCB7IHN1cHBvcnRTdGlja3kgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlTGlzdFNjcm9sbCAoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKGV2ZW50KVxuXG4gICAgICBpZiAoc3VwcG9ydFN0aWNreSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLiRlbC5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IGggPSB0aGlzLiRjaGlsZHJlbi5maWx0ZXIodm0gPT4gdm0uJHJlZnMuaGVhZGVyKVxuXG4gICAgICBpZiAoaC5sZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoW2ldLmluaXRUb3AgPCBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBoW2ldLmFkZFN0aWNreSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaFtpXS5yZW1vdmVTdGlja3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBzY3JvbGxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vbWl4aW5zJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2xpc3QnLFxuICBtaXhpbnM6IFtzY3JvbGxhYmxlLCBsaXN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIGxvYWRtb3Jlb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LWxpc3QnLCAnd2VleC1saXN0LXdyYXBwZXInLCAnd2VleC1jdCddXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIGNsYXNzQXJyYXkucHVzaCgnd2l0aC1yZWZyZXNoJylcbiAgICAgIHRoaXMuX2xvYWRpbmcgJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLWxvYWRpbmcnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICByZXNldExvYWRtb3JlICgpIHtcbiAgICAgIHRoaXMuX2F2YWlsYWJsZVRvRmlyZUxvYWRtb3JlID0gdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlQ2hpbGRyZW4gKGgpIHtcbiAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgdGhpcy5fY2VsbHMgPSBzbG90cy5maWx0ZXIodm5vZGUgPT4ge1xuICAgICAgICBpZiAoIXZub2RlLnRhZyB8fCAhdm5vZGUuY29tcG9uZW50T3B0aW9ucykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgnaHRtbDpkaXYnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1saXN0LWlubmVyIHdlZXgtY3QnXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKVxuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xpc3QnXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2xpc3QnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21haW4nLCB7XG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnbGlzdCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiBleHRlbmQodGhpcy5fY3JlYXRlRXZlbnRNYXAoKSwge1xuICAgICAgICBzY3JvbGw6IHRoaXMuaGFuZGxlTGlzdFNjcm9sbCxcbiAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICB0b3VjaG1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgfSlcbiAgICB9LCB0aGlzLmNyZWF0ZUNoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpKVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ2NlbGwnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdjZWxsJyB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtY2VsbCB3ZWV4LWN0J1xuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cbiIsImltcG9ydCB7IHNjcm9sbGFibGUgfSBmcm9tICcuLi8uLi9taXhpbnMnXG4vLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGxpc3RNaXhpbiBmcm9tICcuL2xpc3QvbGlzdE1peGluJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3Njcm9sbGFibGUsIGxpc3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgc2Nyb2xsRGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICd2ZXJ0aWNhbCcsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRtb3Jlb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgLy8gVE9ETzogc3VwcG9ydCBsb2FkbW9yZSByZXRyeVxuICAgIGxvYWRtb3JlcmV0cnk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtc2Nyb2xsZXInLCAnd2VleC1zY3JvbGxlci13cmFwcGVyJywgJ3dlZXgtY3QnXVxuICAgICAgaWYgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXNjcm9sbGVyLWhvcml6b250YWwnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zY3JvbGxlci12ZXJ0aWNhbCcpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZUNoaWxkcmVuIChoKSB7XG4gICAgICBjb25zdCBzbG90cyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIHRoaXMuX2NlbGxzID0gc2xvdHMuZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZS50YWcgfHwgIXZub2RlLmNvbXBvbmVudE9wdGlvbnMpIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2h0bWw6ZGl2Jywge1xuICAgICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtc2Nyb2xsZXItaW5uZXIgd2VleC1jdCdcbiAgICAgICAgfSwgdGhpcy5fY2VsbHMpXG4gICAgICBdXG4gICAgfSxcbiAgICBzY3JvbGxUbyAodm5vZGUpIHtcbiAgICAgIGlmICh2bm9kZSAmJiB2bm9kZS4kZWwpIHtcbiAgICAgICAgLy8gVE9ETzogYWRkIGFuaW1hdGlvblxuICAgICAgICB0aGlzLiRlbC5zY3JvbGxUb3AgPSB2bm9kZS4kZWwub2Zmc2V0VG9wXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnc2Nyb2xsZXInXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3Njcm9sbGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cblxuICAgIHRoaXMuX2NlbGxzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21haW4nLCB7XG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc2Nyb2xsZXInIH0sXG4gICAgICBzdGF0aWNDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG4gICAgICBvbjogZXh0ZW5kKHRoaXMuX2NyZWF0ZUV2ZW50TWFwKCksIHtcbiAgICAgICAgc2Nyb2xsOiB0aGlzLmhhbmRsZVNjcm9sbCxcbiAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICB0b3VjaG1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgfSlcbiAgICB9LCB0aGlzLmNyZWF0ZUNoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQsIGV4dGVuZEtleXMgfSBmcm9tICcuLi8uLi91dGlscydcblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9ySXRlbVN0eWxlIChzcGVjLCBpc0FjdGl2ZSkge1xuICBjb25zdCBzdHlsZSA9IHt9XG4gIHN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSBzcGVjW2lzQWN0aXZlID8gJ2l0ZW0tc2VsZWN0ZWQtY29sb3InIDogJ2l0ZW0tY29sb3InXVxuICBzdHlsZVsnd2lkdGgnXSA9IHN0eWxlWydoZWlnaHQnXSA9IHNwZWNbJ2l0ZW0tc2l6ZSddXG4gIHJldHVybiBzdHlsZVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyIChjb250ZXh0LCBoKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSBjb250ZXh0Ll9nZXRDb21wb25lbnRTdHlsZShjb250ZXh0LiR2bm9kZS5kYXRhKVxuICBjb250ZXh0LiR2bm9kZS5kYXRhLmNhY2hlZCA9IHt9XG4gIGV4dGVuZEtleXMoY29udGV4dC4kdm5vZGUuZGF0YS5jYWNoZWQsIG1lcmdlZFN0eWxlLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuICBjb25zdCBpbmRpY2F0b3JTcGVjU3R5bGUgPSBleHRlbmRLZXlzKFxuICAgICAge30sXG4gICAgICBtZXJnZWRTdHlsZSxcbiAgICAgIFsnaXRlbS1jb2xvcicsICdpdGVtLXNlbGVjdGVkLWNvbG9yJywgJ2l0ZW0tc2l6ZSddXG4gICAgKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcihjb250ZXh0LmNvdW50KTsgKytpKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsnd2VleC1pbmRpY2F0b3ItaXRlbSB3ZWV4LWVsJ11cbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZVxuICAgIGlmIChpID09PSBOdW1iZXIoY29udGV4dC5hY3RpdmUpKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ3dlZXgtaW5kaWNhdG9yLWl0ZW0tYWN0aXZlJylcbiAgICAgIGlzQWN0aXZlID0gdHJ1ZVxuICAgIH1cbiAgICBjaGlsZHJlbi5wdXNoKGgoJ21hcmsnLCB7XG4gICAgICBzdGF0aWNDbGFzczogY2xhc3NOYW1lcy5qb2luKCcgJyksXG4gICAgICBzdGF0aWNTdHlsZTogZ2V0SW5kaWNhdG9ySXRlbVN0eWxlKGluZGljYXRvclNwZWNTdHlsZSwgaXNBY3RpdmUpXG4gICAgfSkpXG4gIH1cbiAgaWYgKCFjb250ZXh0LiR2bm9kZS5jb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICBjb250ZXh0LiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBfcmVMYXlvdXQodGhpcywgX2dldFZpcnR1YWxSZWN0KHRoaXMsIG1lcmdlZFN0eWxlKSwgX2dldEx0YnIodGhpcywgbWVyZ2VkU3R5bGUpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGgoJ25hdicsIHtcbiAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2luZGljYXRvcicgfSxcbiAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW5kaWNhdG9yIHdlZXgtY3QnLFxuICAgIHN0YXRpY1N0eWxlOiBtZXJnZWRTdHlsZVxuICB9LCBjaGlsZHJlbilcbn1cblxuLyoqXG4gKiBnZXQgaW5kaWNhdG9yJ3MgdmlydHVhbCByZWN0ICh3aWR0aCwgaGVpZ2h0KSwgd2hpY2ggaXMgdGhlIC5cbiAqL1xuZnVuY3Rpb24gX2dldFZpcnR1YWxSZWN0IChjb250ZXh0LCBtZXJnZWRTdHlsZSkge1xuICBjb25zdCBjdCA9IGNvbnRleHQuX2dldFBhcmVudFJlY3QoKVxuICBjb25zdCByZWN0ID0gWyd3aWR0aCcsICdoZWlnaHQnXS5yZWR1Y2UoKHByZSwga2V5KSA9PiB7XG4gICAgY29uc3QgbXN2ID0gbWVyZ2VkU3R5bGUgJiYgbWVyZ2VkU3R5bGVba2V5XVxuICAgIHByZVtrZXldID0gbXN2ID8gcGFyc2VGbG9hdChtc3YpIDogY3Rba2V5XVxuICAgIHJldHVybiBwcmVcbiAgfSwge30pXG4gIHJldHVybiByZWN0XG59XG5cbi8qKlxuICogZ2V0IGluZGljYXRvcidzIGx0YnIgdmFsdWVzICh3aXRob3V0IHVuaXRzKS5cbiAqL1xuZnVuY3Rpb24gX2dldEx0YnIgKGNvbnRleHQsIG1lcmdlZFN0eWxlKSB7XG4gIHJldHVybiBbJ2xlZnQnLCAndG9wJywgJ2JvdHRvbScsICdyaWdodCddLnJlZHVjZSgocHJlLCBrZXkpID0+IHtcbiAgICBjb25zdCBtc3YgPSBtZXJnZWRTdHlsZSAmJiBtZXJnZWRTdHlsZVtrZXldXG4gICAgLy8gdW5kZWZpbmVkLCBudWxsLCBvciAnMHB4JyAtPiBvXG4gICAgcHJlW2tleV0gPSBtc3YgJiYgcGFyc2VGbG9hdChtc3YpIHx8IDBcbiAgICByZXR1cm4gcHJlXG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIGdldCBpbmRpY2F0b3IncyByZWN0ICh3aWR0aCwgaGVpZ2h0KS5cbiAqL1xuZnVuY3Rpb24gX2dldEluZGljYXRvclJlY3QgKGVsKSB7XG4gIGxldCB3aWR0aCwgaGVpZ2h0XG4gIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICB3aWR0aCA9IGhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLmNoaWxkcmVuWzBdKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGl0ZW1Db21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwuY2hpbGRyZW5bMV0pXG4gICAgY29uc3QgcGFkZGluZyA9IHBhcnNlRmxvYXQoaXRlbUNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdClcbiAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGl0ZW1Db21wdXRlZFN0eWxlLmhlaWdodClcbiAgICB3aWR0aCA9IGVsLmNoaWxkcmVuLmxlbmd0aCAqIChoZWlnaHQgKyBwYWRkaW5nKSAtIHBhZGRpbmdcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH1cbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgYW5kIHJlc2V0IGluZGljYXRvcidzIHdpZHRoLCBoZWlnaHQsIGFuZCBsdGJyLlxuICogQHBhcmFtIHtvYmplY3R9IHZpcnR1YWxSZWN0LiB3aWR0aCBhbmQgaGVpZ2h0IG9mIGluZGljYXRvcidzIHZpcnR1YWwgcmVjdCBib3guXG4gKiBAcGFyYW0ge29iamVjdH0gbHRici4gdGhlIHVzZXIgc3BlY2lmaWVkIGxlZnQsIHRvcCwgYm90dG9tLCByaWdodCBwaXhlbHMgKHdpdGhvdXQgdW5pdHMpLlxuICovXG5mdW5jdGlvbiBfcmVMYXlvdXQgKGNvbnRleHQsIHZpcnR1YWxSZWN0LCBsdGJyKSB7XG4gIGNvbnN0IGVsID0gY29udGV4dC4kZWxcbiAgY29uc3QgcmVjdCA9IF9nZXRJbmRpY2F0b3JSZWN0KGVsKVxuICBjb25zdCByZWN0V2l0aFB4ID0gT2JqZWN0LmtleXMocmVjdCkucmVkdWNlKChwcmUsIGtleSkgPT4ge1xuICAgIHByZVtrZXldID0gcmVjdFtrZXldICsgJ3B4J1xuICAgIHJldHVybiBwcmVcbiAgfSwge30pXG4gIGV4dGVuZChlbC5zdHlsZSwgcmVjdFdpdGhQeClcbiAgY29uc3QgYXhpc01hcCA9IFtcbiAgICB7IGRpcjogbHRici5sZWZ0ID8gJ2xlZnQnIDogbHRici5yaWdodCA/ICdyaWdodCcgOiAnbGVmdCcsIHNjYWxlOiAnd2lkdGgnIH0sXG4gICAgeyBkaXI6IGx0YnIudG9wID8gJ3RvcCcgOiBsdGJyLmJvdHRvbSA/ICdib3R0b20nIDogJ3RvcCcsIHNjYWxlOiAnaGVpZ2h0JyB9XG4gIF1cbiAgT2JqZWN0LmtleXMoYXhpc01hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IHsgZGlyLCBzY2FsZSB9ID0gYXhpc01hcFtrZXldXG4gICAgZWwuc3R5bGVbZGlyXSA9IGx0YnJbZGlyXSArIHZpcnR1YWxSZWN0W3NjYWxlXSAvIDIgLSByZWN0W3NjYWxlXSAvIDIgKyAncHgnXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGljYXRvcicsXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfVxuICB9LFxuICBwcm9wczoge1xuICAgIGNvdW50OiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIGFjdGl2ZTogW051bWJlciwgU3RyaW5nXVxuICB9LFxuICB1cGRhdGVkICgpIHtcbiAgICBjb25zdCBtZXJnZWRTdHlsZSA9IHRoaXMuX2dldENvbXBvbmVudFN0eWxlKHRoaXMuJHZub2RlLmRhdGEpXG4gICAgX3JlTGF5b3V0KHRoaXMsIF9nZXRWaXJ0dWFsUmVjdCh0aGlzLCBtZXJnZWRTdHlsZSksIF9nZXRMdGJyKHRoaXMsIG1lcmdlZFN0eWxlKSlcbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIF9yZW5kZXIodGhpcywgY3JlYXRlRWxlbWVudClcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRXZlbnQvKiwgbmV4dEZyYW1lKi8sIGZpcmVMYXp5bG9hZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBUUkFOU0lUSU9OX1RJTUUgPSAyMDBcblxuLy8gdHJpZ2dlciBzY3JvbGwgZXZlbnQgZnJlcXVlbmN5LlxuLy8gY29uc3Qgc2Nyb2xsRGFtID0gMTZcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgLy8gZ2V0IHN0YW5kYXJkIGluZGV4XG4gICAgbm9ybWFsaXplSW5kZXggKGluZGV4KSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IChpbmRleCArIHRoaXMuZnJhbWVDb3VudCkgJSB0aGlzLmZyYW1lQ291bnRcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuZXdJbmRleCwgMCksIHRoaXMuZnJhbWVDb3VudCAtIDEpXG4gICAgfSxcblxuICAgIHNsaWRlVG8gKGluZGV4KSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMubm9ybWFsaXplSW5kZXgoaW5kZXgpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLl9jZWxscy5sZW5ndGggPD0gMSA/IDAgOiB0aGlzLmN1cnJlbnRJbmRleCAtIGluZGV4XG4gICAgICB0aGlzLmlubmVyT2Zmc2V0ICs9IE1hdGguc2lnbihzdGVwKSAqIHRoaXMud3JhcHBlcldpZHRoXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgLy8gY29uc3QgbWF0Y2ggPSAoaW5uZXIuc3R5bGUudHJhbnNmb3JtIHx8IGlubmVyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSkubWF0Y2goLyhcXGQrKXB4LylcbiAgICAgICAgLy8gY29uc3QgY3VycmVudE9mZnNldCA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pXG4gICAgICAgIC8vIFRPRE86IHdpbGwtY2hhbmdlIHwgc2V0IHN0eWxlcyB0b2dldGhlclxuICAgICAgICBpbm5lci5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gYC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dGBcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5pbm5lck9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlubmVyLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnJ1xuICAgICAgICAgIGlubmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJ1xuICAgICAgICB9LCBUUkFOU0lUSU9OX1RJTUUpXG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBlbWl0IHNjcm9sbCBldmVudC5cbiAgICAgIC8vIG5leHRGcmFtZSgpXG5cbiAgICAgIGlmIChuZXdJbmRleCAhPT0gdGhpcy5jdXJyZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBuZXdJbmRleFxuICAgICAgICAvLyByZXBsYWNlICRlbCB3aXRoIHsgYXR0ciwgc3R5bGUgfSBpcyBhIGxlZ2FjeSB1c2FnZS4gSXMgaXQgbmVjZXNzYXJ5IHRvXG4gICAgICAgIC8vIGRvIHRoaXMgPyBPciBqdXN0IHRlbGwgZGV2ZXJzIHRvIHVzZSBpbmxpbmUgZnVuY3Rpb25zIHRvIGFjY2VzcyBhdHRycyA/XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGNyZWF0ZUV2ZW50KHRoaXMuJGVsLCAnY2hhbmdlJywge1xuICAgICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRJbmRleFxuICAgICAgICB9KSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucmVvcmRlcigpIH0sIFRSQU5TSVRJT05fVElNRSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVvcmRlciAoKSB7XG4gICAgICBjb25zdCByZW1vdmVDbG9uZSA9IChjbG9uZSwgcHJldkVsbSkgPT4ge1xuICAgICAgICAvLyBzd2l0Y2ggY3VycmVudCBwYWdlLlxuICAgICAgICBjb25zdCBjdXJUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstdGhpcy5pbm5lck9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIHByZXZFbG0uc3R5bGUudHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtXG4gICAgICAgIHByZXZFbG0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtXG4gICAgICAgIC8vIHJlbW92ZSBjbG9uZSBub2RlLlxuICAgICAgICBjbG9uZSAmJiBjbG9uZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jZWxscy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFByZXYgPSB0aGlzLl9wcmV2RWxtXG4gICAgICAgIGNvbnN0IHByZXZJbmRleCA9IHRoaXMubm9ybWFsaXplSW5kZXgodGhpcy5jdXJyZW50SW5kZXggLSAxKVxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLm5vcm1hbGl6ZUluZGV4KHRoaXMuY3VycmVudEluZGV4ICsgMSlcbiAgICAgICAgbGV0IHByZXZFbG0gPSB0aGlzLl9wcmV2RWxtID0gdGhpcy5fY2VsbHNbcHJldkluZGV4XS5lbG1cbiAgICAgICAgY29uc3QgbmV4dEVsbSA9IHRoaXMuX2NlbGxzW25leHRJbmRleF0uZWxtXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFbG0gPSB0aGlzLl9jZWxsc1t0aGlzLmN1cnJlbnRJbmRleF0uZWxtXG5cbiAgICAgICAgLy8gcHV0IGN1cnJlbnQgc2xpZGUgb24gdGhlIHRvcC5cbiAgICAgICAgY3VycmVudEVsbS5zdHlsZS56SW5kZXggPSAxXG5cbiAgICAgICAgLy8gY2xvbmUgcHJldkNlbGwgaWYgdGhlcmUgYXJlIG9ubHkgdG93IHNsaWRlcy5cbiAgICAgICAgaWYgKHRoaXMuX2NlbGxzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHRoaXMuX2Nsb25lUHJldiAmJiByZW1vdmVDbG9uZSh0aGlzLl9jbG9uZVByZXYsIGxhc3RQcmV2KVxuICAgICAgICAgIHRoaXMuX2Nsb25lUHJldiA9IHByZXZFbG0uY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgdGhpcy5fY2xvbmVQcmV2LmNsYXNzTGlzdC5hZGQoJ3dlZXgtc2xpZGUtY2xvbmUtcHJldicpXG4gICAgICAgICAgcHJldkVsbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLl9jbG9uZVByZXYsIGN1cnJlbnRFbG0pXG4gICAgICAgICAgaWYgKCF0aGlzLl9wcmV2RmlyZWQpIHtcbiAgICAgICAgICAgIGZpcmVMYXp5bG9hZCh0aGlzLl9jbG9uZVByZXYsIHRydWUpXG4gICAgICAgICAgICB0aGlzLl9wcmV2RmlyZWQgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIHByZXZFbG0gPSB0aGlzLl9jbG9uZVByZXZcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZPZmZzZXQgPSAtdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLmlubmVyT2Zmc2V0XG4gICAgICAgIHByZXZFbG0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cHJldk9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIHByZXZFbG0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cHJldk9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuaW5uZXJPZmZzZXRcbiAgICAgICAgbmV4dEVsbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtuZXh0T2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgbmV4dEVsbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtuZXh0T2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIG5leHQgKCkge1xuICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuY3VycmVudEluZGV4ICsgMSlcbiAgICB9LFxuXG4gICAgcHJldiAoKSB7XG4gICAgICB0aGlzLnNsaWRlVG8odGhpcy5jdXJyZW50SW5kZXggLSAxKVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaFN0YXJ0IChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgIHRoaXMuX3RvdWNoUGFyYW1zID0ge1xuICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybTogdGhpcy4kcmVmcy5pbm5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgdGhpcy4kcmVmcy5pbm5lci5zdHlsZS50cmFuc2Zvcm0sXG4gICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgIHN0YXJ0WDogdG91Y2gucGFnZVgsXG4gICAgICAgIHN0YXJ0WTogdG91Y2gucGFnZVksXG4gICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb25zdCB0cCA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICBpZiAoIXRwKSB7IHJldHVybiB9XG4gICAgICBjb25zdCB7IHN0YXJ0WCwgc3RhcnRZIH0gPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRvdWNoLnBhZ2VYIC0gc3RhcnRYXG4gICAgICBjb25zdCBvZmZzZXRZID0gdG91Y2gucGFnZVkgLSBzdGFydFlcbiAgICAgIHRwLm9mZnNldFggPSBvZmZzZXRYXG4gICAgICB0cC5vZmZzZXRZID0gb2Zmc2V0WVxuICAgICAgbGV0IGlzViA9IHRwLmlzVmVydGljYWxcbiAgICAgIGlmICh0eXBlb2YgaXNWID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpc1YgPSB0cC5pc1ZlcnRpY2FsID0gTWF0aC5hYnMob2Zmc2V0WCkgPCBNYXRoLmFicyhvZmZzZXRZKVxuICAgICAgICBpZiAoIWlzVikge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbHN0YXJ0JywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdzY3JvbGxzdGFydCcsIHt9KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdmVydGljYWwgc2Nyb2xsLiBqdXN0IGlnbm9yZSBpdC5cbiAgICAgIGlmIChpc1YpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBob3Jpem9udGFsIHNjcm9sbC4gdHJpZ2dlciBzY3JvbGwgZXZlbnQuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lciAmJiBvZmZzZXRYKSB7XG4gICAgICAgIC8vIFRPRE86IGFkZCB0aHJvdHRsZS5cbiAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdzY3JvbGwnLCB7XG4gICAgICAgICAgb2Zmc2V0WFJhdGlvOiBvZmZzZXRYIC8gdGhpcy53cmFwcGVyV2lkdGhcbiAgICAgICAgfSkpXG4gICAgICAgIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuaW5uZXJPZmZzZXQgKyBvZmZzZXRYfXB4LCAwLCAwKWBcbiAgICAgICAgaW5uZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5pbm5lck9mZnNldCArIG9mZnNldFh9cHgsIDAsIDApYFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaEVuZCAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBjb25zdCB0cCA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICBpZiAoIXRwKSB7IHJldHVybiB9XG4gICAgICBjb25zdCBpc1YgPSB0cC5pc1ZlcnRpY2FsXG4gICAgICBpZiAodHlwZW9mIGlzViA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGNvbnN0IHsgb2Zmc2V0WCB9ID0gdHBcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGxlbmQnLCBjcmVhdGVFdmVudCh0aGlzLiRlbCwgJ3Njcm9sbGVuZCcpKVxuICAgICAgICAvLyBUT0RPOiB0ZXN0IHRoZSB2ZWxvY2l0eSBpZiBpdCdzIGxlc3MgdGhhbiAwLjIuXG4gICAgICAgIGNvbnN0IHJlc2V0ID0gTWF0aC5hYnMob2Zmc2V0WCAvIHRoaXMud3JhcHBlcldpZHRoKSA8IDAuMlxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRYID4gMCA/IDEgOiAtMVxuICAgICAgICBjb25zdCBuZXdJbmRleCA9IHJlc2V0ID8gdGhpcy5jdXJyZW50SW5kZXggOiAodGhpcy5jdXJyZW50SW5kZXggLSBkaXJlY3Rpb24pXG4gICAgICAgIHRoaXMuc2xpZGVUbyhuZXdJbmRleClcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaFBhcmFtc1xuICAgIH1cbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InXG5pbXBvcnQgeyB0aHJvdHRsZSwgYmluZCwgZXh0ZW5kLCBmaXJlTGF6eWxvYWQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InXG5pbXBvcnQgc2xpZGVNaXhpbiBmcm9tICcuL3NsaWRlTWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbc2xpZGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgJ2F1dG8tcGxheSc6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMzAwMFxuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgZnJhbWVDb3VudDogMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY29tcHV0ZVdyYXBwZXJTaXplICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSByZWN0LmhlaWdodFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVMYXlvdXQgKCkge1xuICAgICAgdGhpcy5jb21wdXRlV3JhcHBlclNpemUoKVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMuZnJhbWVDb3VudCArICdweCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9ybWF0Q2hpbGRyZW4gKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgbGV0IGluZGljYXRvclZub2RlXG4gICAgICBjb25zdCBjZWxscyA9IGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnKSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHZub2RlLmNvbXBvbmVudE9wdGlvbnMgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICAgICAgaW5kaWNhdG9yVm5vZGUgPSB2bm9kZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KS5tYXAodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgcmVmOiAnY2VsbHMnLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXItY2VsbCdcbiAgICAgICAgfSwgW3Zub2RlXSlcbiAgICAgIH0pXG4gICAgICBpZiAoaW5kaWNhdG9yVm5vZGUpIHtcbiAgICAgICAgaW5kaWNhdG9yVm5vZGUuZGF0YS5hdHRycyA9IGluZGljYXRvclZub2RlLmRhdGEuYXR0cnMgfHwge31cbiAgICAgICAgaW5kaWNhdG9yVm5vZGUuZGF0YS5hdHRycy5jb3VudCA9IGNlbGxzLmxlbmd0aFxuICAgICAgICBpbmRpY2F0b3JWbm9kZS5kYXRhLmF0dHJzLmFjdGl2ZSA9IHRoaXMuY3VycmVudEluZGV4XG4gICAgICAgIHRoaXMuX2luZGljYXRvciA9IGNyZWF0ZUVsZW1lbnQoaW5kaWNhdG9yLCBpbmRpY2F0b3JWbm9kZS5kYXRhKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNlbGxzXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMud2VleFR5cGUgPSAnc2xpZGVyJ1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMFxuICAgIHRoaXMuaW5uZXJPZmZzZXQgPSAwXG4gICAgdGhpcy5faW5kaWNhdG9yID0gbnVsbFxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTGF5b3V0KClcbiAgICB9KVxuICB9LFxuXG4gIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIHRoaXMucmVvcmRlcigpXG4gIH0sXG5cbiAgdXBkYXRlZCAoKSB7XG4gICAgZmlyZUxhenlsb2FkKHRoaXMuJGVsLCB0cnVlKVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXkgIT09ICdmYWxzZScpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gTnVtYmVyKHRoaXMuaW50ZXJ2YWwpXG4gICAgICB0aGlzLl9sYXN0U2xpZGVUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICBjb25zdCBhdXRvUGxheUZuID0gYmluZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvUGxheVRpbWVyKVxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIGxldCBuZXh0VGljayA9IGludGVydmFsIC0gbm93ICsgdGhpcy5fbGFzdFNsaWRlVGltZVxuICAgICAgICBuZXh0VGljayA9IG5leHRUaWNrID4gMTAwID8gbmV4dFRpY2sgOiBpbnRlcnZhbFxuXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIHRoaXMuX2xhc3RTbGlkZVRpbWUgPSBub3dcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlUaW1lciA9IHNldFRpbWVvdXQoYXV0b1BsYXlGbiwgbmV4dFRpY2spXG4gICAgICB9LCB0aGlzKVxuXG4gICAgICB0aGlzLl9hdXRvUGxheVRpbWVyID0gc2V0VGltZW91dChhdXRvUGxheUZuLCBpbnRlcnZhbClcbiAgICB9XG5cbiAgICB0aGlzLnJlb3JkZXIoKVxuICAgIGZpcmVMYXp5bG9hZCh0aGlzLiRlbCwgdHJ1ZSlcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3NsaWRlcicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICAvLyB9XG4gICAgdGhpcy5fY2VsbHMgPSB0aGlzLmZvcm1hdENoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpXG4gICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fY2VsbHMubGVuZ3RoXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgICduYXYnLFxuICAgICAge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzbGlkZXInIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXIgd2VleC1zbGlkZXItd3JhcHBlciB3ZWV4LWN0JyxcbiAgICAgICAgb246IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcChbJ3Njcm9sbCcsICdzY3JvbGxzdGFydCcsICdzY3JvbGxlbmQnXSksIHtcbiAgICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgdG91Y2htb3ZlOiB0aHJvdHRsZShiaW5kKHRoaXMuaGFuZGxlVG91Y2hNb3ZlLCB0aGlzKSwgMjUpLFxuICAgICAgICAgIHRvdWNoZW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCd1bCcsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNsaWRlci1pbm5lciB3ZWV4LWN0J1xuICAgICAgICB9LCB0aGlzLl9jZWxscyksXG4gICAgICAgIHRoaXMuX2luZGljYXRvclxuICAgICAgXVxuICAgIClcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYXJrJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nLWluZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nLWluZGljYXRvciB3ZWV4LWN0J1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gJy4vbG9hZGluZy1pbmRpY2F0b3InXG5pbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdER5OiAwLFxuICAgICAgdmlld0hlaWdodDogMCxcbiAgICAgIGhlaWdodDogLTFcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZWQgKCkge1xuICB9LFxuICB3YXRjaDoge1xuICAgIGhlaWdodCAodmFsKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnXG4gICAgfSxcbiAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHB1bGxpbmcgKG9mZnNldFkgPSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IG9mZnNldFlcbiAgICAgIHRoaXMuJGVtaXQoJ3B1bGxpbmdkb3duJywgY3JlYXRlRXZlbnQodGhpcywgJ3B1bGxpbmdkb3duJywge1xuICAgICAgICBkeTogb2Zmc2V0WSAtIHRoaXMubGFzdER5LFxuICAgICAgICBwdWxsaW5nRGlzdGFuY2U6IG9mZnNldFksXG4gICAgICAgIHZpZXdIZWlnaHQ6IHRoaXMudmlld0hlaWdodFxuICAgICAgfSkpXG4gICAgICB0aGlzLmxhc3REeSA9IG9mZnNldFlcbiAgICB9LFxuICAgIHB1bGxpbmdEb3duIChvZmZzZXRZKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAwc2BcbiAgICAgIHRoaXMucHVsbGluZyhvZmZzZXRZKVxuICAgIH0sXG4gICAgcHVsbGluZ0VuZCAoKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAuMnNgXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPj0gdGhpcy52aWV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucHVsbGluZyh0aGlzLnZpZXdIZWlnaHQpXG4gICAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2gnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHVsbGluZygwKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2hpbGRyZW4gKCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ID09PSAnc2hvdycpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHZub2RlLmNvbXBvbmVudE9wdGlvbnNcbiAgICAgICAgICAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZyAhPT0gJ2xvYWRpbmctaW5kaWNhdG9yJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHRoaXMuJHBhcmVudC5fcmVmcmVzaCA9IHRoaXNcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICByZWY6ICdyZWZyZXNoJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAncmVmcmVzaCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1yZWZyZXNoIHdlZXgtY3QnXG4gICAgfSwgdGhpcy5nZXRDaGlsZHJlbigpKVxuICB9XG59XG4iLCJpbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tICcuL2xvYWRpbmctaW5kaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAtMSxcbiAgICAgIHZpZXdIZWlnaHQ6IDBcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMudmlld0hlaWdodCA9IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgIGlmICh0aGlzLmRpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHRcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZWQgKCkge1xuICB9LFxuICB3YXRjaDoge1xuICAgIGhlaWdodCAodmFsKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS5oZWlnaHQgPSB2YWwgKyAncHgnXG4gICAgfSxcbiAgICBkaXNwbGF5ICh2YWwpIHtcbiAgICAgIGlmICh2YWwgPT09ICdoaWRlJykge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld0hlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHB1bGxpbmcgKG9mZnNldFkgPSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IG9mZnNldFlcbiAgICB9LFxuICAgIHB1bGxpbmdVcCAob2Zmc2V0WSkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgMHNgXG4gICAgICB0aGlzLnB1bGxpbmcob2Zmc2V0WSlcbiAgICB9LFxuICAgIHB1bGxpbmdFbmQgKCkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgLjJzYFxuICAgICAgaWYgKHRoaXMuaGVpZ2h0ID49IHRoaXMudmlld0hlaWdodCkge1xuICAgICAgICB0aGlzLnB1bGxpbmcodGhpcy52aWV3SGVpZ2h0KVxuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkaW5nJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnB1bGxpbmcoMClcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldENoaWxkcmVuICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gICAgICAgICAgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgIT09ICdsb2FkaW5nLWluZGljYXRvcidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLiRwYXJlbnQuX2xvYWRpbmcgPSB0aGlzXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FzaWRlJywge1xuICAgICAgcmVmOiAnbG9hZGluZycsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xvYWRpbmcnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbG9hZGluZyB3ZWV4LWN0J1xuICAgIH0sIHRoaXMuZ2V0Q2hpbGRyZW4oKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEltcGwgb2YgdGV4dCBjb21wb25lbnQuXG4gKlxuICogTm90ZXMgYWJvdXQgdGhlIHN0eWxlICdoZWlnaHQnIGFuZCAnbGluZXMnOlxuICogaWYgdGhlIGNvbXB1dGVkIHZhbHVlIG9mICdoZWlnaHQnIGlzIGJpZ2dlciB0aGFuICdsaW5lcycsIHRoYW4gdGhlIHRleHQgd2lsbFxuICogYmUgY2xpcHBlZCBhY2NvcmRpbmcgdG8gdGhlICdsaW5lcycuIE90aGVyd2lzZSwgaXQnbGwgYmUgdGhlICdoZWlnaHQnLlxuICovXG5cbi8qKlxuICogR2V0IHRleHQgc3BlY2lhbCBzdHlsZXMgKGxpbmVzIGFuZCB0ZXh0LW92ZXJmbG93KS5cbiAqL1xuZnVuY3Rpb24gZ2V0VGV4dFNwZWNTdHlsZSAoY29udGV4dCA9IHt9LCBtcyA9IHt9KSB7XG4gIGNvbnN0IGxpbmVzID0gcGFyc2VJbnQobXMubGluZXMpIHx8IDBcbiAgY29uc3Qgb3ZlcmZsb3cgPSBtc1sndGV4dC1vdmVyZmxvdyddIHx8ICdlbGxpcHNpcydcbiAgaWYgKGxpbmVzID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAndGV4dC1vdmVyZmxvdyc6IG92ZXJmbG93LFxuICAgICAgJy13ZWJraXQtbGluZS1jbGFtcCc6IGxpbmVzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBsaW5lczogW051bWJlciwgU3RyaW5nXSxcbiAgICB2YWx1ZTogW1N0cmluZ11cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3RleHQnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIGNvbnN0IG1zID0gdGhpcy5fZ2V0Q29tcG9uZW50U3R5bGUodGhpcy4kdm5vZGUuZGF0YSlcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAndGV4dCcgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHQgd2VleC1lbCcsXG4gICAgICBzdGF0aWNTdHlsZTogZ2V0VGV4dFNwZWNTdHlsZSh0aGlzLCBtcylcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFt0aGlzLnZhbHVlXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5wdXRDb21tb24gfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyBleHRlbmQsIG1hcEZvcm1FdmVudHMgfSBmcm9tICcuLi91dGlscydcbi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2lucHV0Q29tbW9uXSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDJcbiAgICB9LFxuICAgIHJldHVybktleVR5cGU6IFN0cmluZ1xuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICB2YWxpZGF0ZVN0eWxlcygndGV4dGFyZWEnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuICAgIGNvbnN0IGV2ZW50cyA9IGV4dGVuZCh0aGlzLl9jcmVhdGVFdmVudE1hcCgpLCBtYXBGb3JtRXZlbnRzKHRoaXMpKVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOnRleHRhcmVhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd0ZXh0YXJlYScsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvZm9jdXM6ICh0aGlzLmF1dG9mb2N1cyAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgcm93czogdGhpcy5yb3dzLFxuICAgICAgICAncmV0dXJuLWtleS10eXBlJzogdGhpcy5yZXR1cm5LZXlUeXBlXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVLZXlib2FyZEV2ZW50KGV2ZW50cyksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdGV4dGFyZWEgd2VleC1lbCdcbiAgICB9KVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNyYzogU3RyaW5nLFxuICAgIHBsYXlTdGF0dXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwYXVzZScsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ3BsYXknLCAncGF1c2UnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF1dG9QbGF5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHBsYXlzaW5saW5lOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIC8vICAgdmFsaWRhdGVTdHlsZXMoJ3ZpZGVvJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IHN1cHBvcnQgcGxheVN0YXR1c1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOnZpZGVvJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd2aWRlbycsXG4gICAgICAgIGF1dG9wbGF5OiAodGhpcy5hdXRvcGxheSAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9wbGF5ICE9PSBmYWxzZSksXG4gICAgICAgIGF1dG9QbGF5OiAodGhpcy5hdXRvcGxheSAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9wbGF5ICE9PSBmYWxzZSksXG4gICAgICAgIGNvbnRyb2xzOiB0aGlzLmNvbnRyb2xzLFxuICAgICAgICBzcmM6IHRoaXMuc3JjXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuX2NyZWF0ZUV2ZW50TWFwKFsnc3RhcnQnLCAncGF1c2UnLCAnZmluaXNoJywgJ2ZhaWwnXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdmlkZW8gd2VleC1lbCdcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gJy4uL3V0aWxzJ1xuLy8gaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gVE9ETzogY2hlY2sgY3Jvc3Mtb3JpZ2luXG4gICAgZ29CYWNrICgpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICB0aGlzLiRlbC5jb250ZW50V2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgICB9XG4gICAgfSxcbiAgICBnb0ZvcndhcmQgKCkge1xuICAgICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICAgIHRoaXMuJGVsLmNvbnRlbnRXaW5kb3cuaGlzdG9yeS5mb3J3YXJkKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbG9hZCAoKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgdGhpcy4kZWwuY29udGVudFdpbmRvdy5oaXN0b3J5LnJlbG9hZCgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgdGhpcy4kZW1pdCgncGFnZXN0YXJ0JywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdwYWdlc3RhcnQnLCB7IHVybDogdGhpcy5zcmMgfSkpXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdwYWdlZmluaXNoJywgY3JlYXRlRXZlbnQodGhpcy4kZWwsICdwYWdlZmluaXNoJywgeyB1cmw6IHRoaXMuc3JjIH0pKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyAgIHZhbGlkYXRlU3R5bGVzKCd3ZWInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnd2ViJyxcbiAgICAgICAgc3JjOiB0aGlzLnNyY1xuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLl9jcmVhdGVFdmVudE1hcChbJ2Vycm9yJ10pLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXdlYiB3ZWV4LWVsJ1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBfc3dpdGNoIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0IHsgX3N3aXRjaCBhcyBzd2l0Y2ggfVxuXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgZGl2IGZyb20gJy4vZGl2J1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnXG5pbXBvcnQgaW5wdXQgZnJvbSAnLi9pbnB1dCdcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9zY3JvbGxhYmxlL2hlYWRlcidcbmltcG9ydCBsaXN0IGZyb20gJy4vc2Nyb2xsYWJsZS9saXN0J1xuaW1wb3J0IGNlbGwgZnJvbSAnLi9zY3JvbGxhYmxlL2xpc3QvY2VsbCdcbmltcG9ydCBzY3JvbGxlciBmcm9tICcuL3Njcm9sbGFibGUvc2Nyb2xsZXInXG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuLy8gaW1wb3J0IGluZGljYXRvciBmcm9tICcuL3dhcm5pbmcnXG5pbXBvcnQgaW5kaWNhdG9yIGZyb20gJy4vc2xpZGVyL2luZGljYXRvcidcbi8vIGltcG9ydCByZWZyZXNoIGZyb20gJy4vd2FybmluZydcbi8vIGltcG9ydCBsb2FkaW5nIGZyb20gJy4vd2FybmluZydcbmltcG9ydCByZWZyZXNoIGZyb20gJy4vc2Nyb2xsYWJsZS9yZWZyZXNoJ1xuaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi9zY3JvbGxhYmxlL2xvYWRpbmcnXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tICcuL3Njcm9sbGFibGUvbG9hZGluZy1pbmRpY2F0b3InXG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnXG5pbXBvcnQgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSdcbmltcG9ydCB2aWRlbyBmcm9tICcuL3ZpZGVvJ1xuaW1wb3J0IHdlYiBmcm9tICcuL3dlYidcblxuZXhwb3J0IHtcbiAgYSxcbiAgZGl2LFxuICBkaXYgYXMgY29udGFpbmVyLFxuICBpbWFnZSxcbiAgaW1hZ2UgYXMgaW1nLFxuICBpbnB1dCxcbiAgaGVhZGVyLFxuICBsaXN0LFxuICBjZWxsLFxuICBzY3JvbGxlcixcbiAgc2xpZGVyLFxuICBpbmRpY2F0b3IsXG4gIHJlZnJlc2gsXG4gIGxvYWRpbmcsXG4gIExvYWRpbmdJbmRpY2F0b3IsXG4gIHRleHQsXG4gIHRleHRhcmVhLFxuICB2aWRlbyxcbiAgd2ViXG59XG4iLCIvLyBpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB3ZWV4IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgc2V0VnVlIH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgKiBhcyBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB7IGJhc2UsIHN0eWxlIH0gZnJvbSAnLi9taXhpbnMnXG4vLyBpbXBvcnQgc3R5bGVNaXhpbiBmcm9tICcuL21peGlucy9zdHlsZSdcblxuLyoqXG4gKiBpbml0IHdlZXguXG4gKiBAcGFyYW0gIHtWdWUkMn0gVnVlOiBWdWUgQ29uc3RydWN0b3IuXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnM6IGV4dGVuZCB3ZWV4IHBsdWdpbnMuXG4gKiAgICAgICAgIC0gY29tcG9uZW50cy5cbiAqICAgICAgICAgLSBtb2R1bGVzLlxuICovXG5mdW5jdGlvbiBpbml0IChWdWUvKiwgb3B0aW9ucyA9IHt9Ki8pIHtcbiAgc2V0VnVlKFZ1ZSlcblxuICBWdWUucHJvdG90eXBlLiRnZXRDb25maWcgPSAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKCdbVnVlIFJlbmRlcl0gXCJ0aGlzLiRnZXRDb25maWdcIiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFwid2VleC5jb25maWdcIiBpbnN0ZWFkLicpXG4gICAgcmV0dXJuIHdlZXguY29uZmlnXG4gIH1cblxuICBjb25zdCBodG1sUmVnZXggPSAvXmh0bWw6L2lcbiAgVnVlLmNvbmZpZy5pc1Jlc2VydmVkVGFnID0gdGFnID0+IGh0bWxSZWdleC50ZXN0KHRhZylcbiAgVnVlLmNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSA9IHRhZyA9PiB0YWcucmVwbGFjZShodG1sUmVnZXgsICcnKVxuXG4gIC8vIHJlZ2lzdGVyIHNkayBjb21wb25lbnRzLlxuICBmb3IgKGNvbnN0IG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgIFZ1ZS5jb21wb25lbnQobmFtZSwgY29tcG9uZW50c1tuYW1lXSlcbiAgfVxuXG4gIC8vIC8vIGdldCB1c2VyIGV4dGVuZGVkIHBsdWdpbnMuXG4gIC8vIGNvbnN0IHsgY29tcG9uZW50czogY29tcHMsIG1vZHVsZXMgfSA9IG9wdGlvbnNcbiAgLy8gLy8gcmVnaXN0ZXIgdXNlciBleHRlbmRlZCBjb21wb25lbnRzLlxuICAvLyBmb3IgKGNvbnN0IG5hbWUgaW4gY29tcHMpIHtcbiAgLy8gICBWdWUuY29tcG9uZW50cyhuYW1lLCBjb21wc1tuYW1lXSlcbiAgLy8gfVxuICAvLyAvLyByZWdpc3RlciB1c2VyIGV4dGVuZGVkIG1vZHVsZXMuXG4gIC8vIGZvciAoY29uc3QgbW9kIGluIG1vZHVsZXMpIHtcbiAgLy8gICB0aGlzLnJlZ2lzdGVyTW9kdWxlKG1vZCwgbW9kdWxlc1ttb2RdKVxuICAvLyB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIC8vICAgaWYgKHNlbXZlci5sdChWdWUudmVyc2lvbiwgJzIuMS41JykpIHtcbiAgLy8gICAgIGNvbnNvbGUud2FybihgW1Z1ZSBSZW5kZXJdIFRoZSB2ZXJzaW9uIG9mIFZ1ZSBzaG91bGQgYmUgYCArXG4gIC8vICAgICAgIGBncmVhdGVyIHRoYW4gMi4xLjUsIGN1cnJlbnQgaXMgJHtWdWUudmVyc2lvbn0uYClcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5pbmZvKGBbVnVlIFJlbmRlcl0gUmVnaXN0ZXJlZCBjb21wb25lbnRzOiBgXG4gIC8vICAgICArIGBbJHtPYmplY3Qua2V5cyhjb21wb25lbnRzKS5qb2luKCcsICcpfV0uYClcbiAgVnVlLm1peGluKGJhc2UpXG4gIFZ1ZS5taXhpbihzdHlsZSlcbiAgLy8gfVxufVxuXG4vLyBhdXRvIGluaXQgaW4gZGlzdCBtb2RlLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgaW5pdCh3aW5kb3cuVnVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWV4XG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsImlzT2JqZWN0IiwicmVxdWlyZSQkMSIsImRvY3VtZW50IiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJkUCIsInJlcXVpcmUkJDQiLCJnbG9iYWwiLCIkZXhwb3J0IiwidG9TdHJpbmciLCJJT2JqZWN0IiwidG9JbnRlZ2VyIiwibWluIiwidG9JT2JqZWN0IiwiZGVmaW5lZCIsInJlcXVpcmUkJDUiLCJhcmd1bWVudHMiLCJjb2YiLCJhbk9iamVjdCIsImdldEtleXMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiUFJPVE9UWVBFIiwiaGFzIiwiVEFHIiwiY3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJ0b09iamVjdCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQ4IiwicmVkZWZpbmUiLCJyZXF1aXJlJCQ3IiwiaGlkZSIsInJlcXVpcmUkJDYiLCJJdGVyYXRvcnMiLCJJVEVSQVRPUiIsIkFycmF5UHJvdG8iLCJjbGFzc29mIiwiYUZ1bmN0aW9uIiwiY3R4IiwicHJvY2VzcyIsIlByb21pc2UiLCJpc05vZGUiLCJTUEVDSUVTIiwiTElCUkFSWSIsInJlcXVpcmUkJDE3IiwicmVxdWlyZSQkMTYiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTAiLCJUeXBlRXJyb3IiLCJjb25zdCIsInRoaXMiLCJtZXRhIiwibGV0IiwiaGFzT3duUHJvcGVydHkiLCJxcyIsIl91aWQiLCJnZXRQYXJlbnRTY3JvbGxlciIsInN0ZXAiLCJxdWV1ZSIsIkNPTlRFTlRfQ0xBU1MiLCJNU0dfQ0xBU1MiLCJCVVRUT05fR1JPVVBfQ0xBU1MiLCJCVVRUT05fQ0xBU1MiLCJldmVudCIsImdlb2xvY2F0aW9uIiwicGFnZUluZm8iLCJzdG9yYWdlIiwic3RyZWFtIiwiY2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiayIsImxpYiIsIndlZXgiLCJ1dGlscyIsInV0aWxzLmJpbmQiLCJtb2R1bGVzIiwiY2FjaGUiLCJpbml0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxBQUVBLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUN6QixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFBO0FBQy9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO0FBQ2pDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7Ozs7Ozs7Ozs7QUFVbEIsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQ25DLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQTtFQUNaLE9BQU8sRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUU7TUFDakMsT0FBTyxFQUFFO0tBQ1Y7SUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQTtHQUNuQjtFQUNELE9BQU8sSUFBSTtDQUNaOzs7Ozs7Ozs7QUFTRCxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUN2QyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0VBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTs7RUFFakMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7TUFDbkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNwQjtHQUNGOztFQUVELE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JELFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7RUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0VBQ3hFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQzFCLElBQUksU0FBUyxHQUFHO0lBQ2QsRUFBRTtNQUNBLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDN0IsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQixFQUFFO01BQ0EsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QixLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTs7RUFFbEMsT0FBTztJQUNMLE1BQU0sRUFBRSxNQUFNO0lBQ2Qs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LEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3ZFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzVDOztBQ2ZE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QUU7SUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUVBLE1BQUksQ0FBQyxDQUFBO0dBQ2pEO0NBQ0YsQ0FBQTs7QUM5SkQsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFBLEtBQUssRUFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBQSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyx3SEFBd0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxD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QUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxFQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEFBQUM7O0FDQXpzSTs7Ozs7Ozs7QUFRQWxCLElBQUksYUFBYSxHQUFHLEdBQTBCLENBQUE7O0FBRTlDSCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUE7QUFDM0VBLElBQU0sU0FBUyxHQUFHLGNBQWMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQ3BGLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxhQUFhLEdBQUcsU0FBUyxDQUFBLEVBQUU7Ozs7O0FB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QVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxD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
