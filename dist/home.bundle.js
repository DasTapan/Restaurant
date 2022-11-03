/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pageLoad = (element) => {
    const _headerElement = document.createElement('div');
    const _mainElement = document.createElement('div');
    const _footerElement = document.createElement('div');

    _headerElement.classList.add('header');
    _mainElement.classList.add('main');
    _footerElement.classList.add('footer');

    const _headingSpan = document.createElement('span');
    _headingSpan.classList.add('heading');
    _headerElement.append(_headingSpan);

    _headingSpan.textContent = 'Royal Restaurant';
    _footerElement.textContent = '© DasTapan. All Rights Reserved';

    const _navMenu = document.createElement('div');
    _navMenu.classList.add('nav-menu');

    const _homeLink = document.createElement('a');
    _homeLink.textContent = 'Home';
    const _menuLink = document.createElement('a');
    _menuLink.textContent = 'Menu';
    const _contactLink = document.createElement('a');
    _contactLink.textContent = 'Contact';

    _navMenu.append(_homeLink, _menuLink, _contactLink);
    _headerElement.appendChild(_navMenu);

    const _append = () => {
        element.append(_headerElement, _mainElement, _footerElement);
    }

    const render = () => { _append() };

    return { render };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixhQUFhO0FBQ2I7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHBhZ2VMb2FkID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBfaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IF9tYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IF9mb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBfaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBfbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIF9mb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgX2hlYWRpbmdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIF9oZWFkaW5nU3Bhbi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgX2hlYWRlckVsZW1lbnQuYXBwZW5kKF9oZWFkaW5nU3Bhbik7XG5cbiAgICBfaGVhZGluZ1NwYW4udGV4dENvbnRlbnQgPSAnUm95YWwgUmVzdGF1cmFudCc7XG4gICAgX2Zvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSAnwqkgRGFzVGFwYW4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQnO1xuXG4gICAgY29uc3QgX25hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfbmF2TWVudS5jbGFzc0xpc3QuYWRkKCduYXYtbWVudScpO1xuXG4gICAgY29uc3QgX2hvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIF9ob21lTGluay50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBjb25zdCBfbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgX21lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnN0IF9jb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBfY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBfbmF2TWVudS5hcHBlbmQoX2hvbWVMaW5rLCBfbWVudUxpbmssIF9jb250YWN0TGluayk7XG4gICAgX2hlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoX25hdk1lbnUpO1xuXG4gICAgY29uc3QgX2FwcGVuZCA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoX2hlYWRlckVsZW1lbnQsIF9tYWluRWxlbWVudCwgX2Zvb3RlckVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHsgX2FwcGVuZCgpIH07XG5cbiAgICByZXR1cm4geyByZW5kZXIgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9