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
    _homeLink.setAttribute('id', 'home-button');
    _homeLink.textContent = 'Home';

    const _menuLink = document.createElement('a');
    _menuLink.setAttribute('id', 'menu-button');
    _menuLink.textContent = 'Menu';

    const _contactLink = document.createElement('a');
    _contactLink.setAttribute('id', 'contact-button');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCLGFBQWE7QUFDYjs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGFnZUxvYWQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IF9oZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgX21haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgX2Zvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIF9oZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIF9tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgX2Zvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBfaGVhZGluZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgX2hlYWRpbmdTcGFuLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICBfaGVhZGVyRWxlbWVudC5hcHBlbmQoX2hlYWRpbmdTcGFuKTtcblxuICAgIF9oZWFkaW5nU3Bhbi50ZXh0Q29udGVudCA9ICdSb3lhbCBSZXN0YXVyYW50JztcbiAgICBfZm9vdGVyRWxlbWVudC50ZXh0Q29udGVudCA9ICfCqSBEYXNUYXBhbi4gQWxsIFJpZ2h0cyBSZXNlcnZlZCc7XG5cbiAgICBjb25zdCBfbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9uYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1tZW51Jyk7XG5cbiAgICBjb25zdCBfaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgX2hvbWVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idXR0b24nKTtcbiAgICBfaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBfbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgX21lbnVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idXR0b24nKTtcbiAgICBfbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBfY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgX2NvbnRhY3RMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idXR0b24nKTtcbiAgICBfY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBfbmF2TWVudS5hcHBlbmQoX2hvbWVMaW5rLCBfbWVudUxpbmssIF9jb250YWN0TGluayk7XG4gICAgX2hlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoX25hdk1lbnUpO1xuXG4gICAgY29uc3QgX2FwcGVuZCA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoX2hlYWRlckVsZW1lbnQsIF9tYWluRWxlbWVudCwgX2Zvb3RlckVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHsgX2FwcGVuZCgpIH07XG5cbiAgICByZXR1cm4geyByZW5kZXIgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9