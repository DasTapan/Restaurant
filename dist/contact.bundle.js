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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactLoad = (element) => {

    let _contactDiv = document.createElement('div');
    _contactDiv.classList.add('contact-card');

    let _contactHeading = document.createElement('h2');
    _contactHeading.classList.add('contact-heading');
    _contactHeading.textContent = 'Royal Restaurant';

    let _addressBox = document.createElement('div');
    _addressBox.classList.add('address-box');

    const _spanOne = document.createElement('span');
    _spanOne.classList.add('span-one')
    _spanOne.textContent = 'C T Road';
    const brOne = document.createElement('br');

    const _spanTwo = document.createElement('span');
    _spanTwo.classList.add('span-two')
    _spanTwo.textContent = 'Puri-2, Odisha'
    const brTwo = document.createElement('br');

    const _spanThree = document.createElement('span');
    _spanThree.classList.add('span-three')
    _spanThree.textContent = 'PIN- 752002'
    const brThree = document.createElement('br');

    const _spanFour = document.createElement('span');
    _spanFour.classList.add('span-four')
    _spanFour.textContent = 'Ph- 8280213987';
    const brFour = document.createElement('br');

    _addressBox.append(_spanOne, _spanTwo, _spanThree, _spanFour);

    _spanOne.insertAdjacentElement('afterend', brOne);
    _spanTwo.insertAdjacentElement('afterend', brTwo);
    _spanThree.insertAdjacentElement('afterend', brThree);
    _spanFour.insertAdjacentElement('afterend', brFour);

    _contactDiv.append(_contactHeading, _addressBox);

    const _render = () => {
        element.appendChild(_contactDiv);
    };

    const renderContact = () => {
        _render();
    };

    return { renderContact };

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjs7QUFFQSxpRUFBZSxXQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGFjdExvYWQgPSAoZWxlbWVudCkgPT4ge1xuXG4gICAgbGV0IF9jb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX2NvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkJyk7XG5cbiAgICBsZXQgX2NvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBfY29udGFjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgX2NvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ1JveWFsIFJlc3RhdXJhbnQnO1xuXG4gICAgbGV0IF9hZGRyZXNzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX2FkZHJlc3NCb3guY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1ib3gnKTtcblxuICAgIGNvbnN0IF9zcGFuT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIF9zcGFuT25lLmNsYXNzTGlzdC5hZGQoJ3NwYW4tb25lJylcbiAgICBfc3Bhbk9uZS50ZXh0Q29udGVudCA9ICdDIFQgUm9hZCc7XG4gICAgY29uc3QgYnJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgY29uc3QgX3NwYW5Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgX3NwYW5Ud28uY2xhc3NMaXN0LmFkZCgnc3Bhbi10d28nKVxuICAgIF9zcGFuVHdvLnRleHRDb250ZW50ID0gJ1B1cmktMiwgT2Rpc2hhJ1xuICAgIGNvbnN0IGJyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgIGNvbnN0IF9zcGFuVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgX3NwYW5UaHJlZS5jbGFzc0xpc3QuYWRkKCdzcGFuLXRocmVlJylcbiAgICBfc3BhblRocmVlLnRleHRDb250ZW50ID0gJ1BJTi0gNzUyMDAyJ1xuICAgIGNvbnN0IGJyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgY29uc3QgX3NwYW5Gb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIF9zcGFuRm91ci5jbGFzc0xpc3QuYWRkKCdzcGFuLWZvdXInKVxuICAgIF9zcGFuRm91ci50ZXh0Q29udGVudCA9ICdQaC0gODI4MDIxMzk4Nyc7XG4gICAgY29uc3QgYnJGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgIF9hZGRyZXNzQm94LmFwcGVuZChfc3Bhbk9uZSwgX3NwYW5Ud28sIF9zcGFuVGhyZWUsIF9zcGFuRm91cik7XG5cbiAgICBfc3Bhbk9uZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgYnJPbmUpO1xuICAgIF9zcGFuVHdvLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBiclR3byk7XG4gICAgX3NwYW5UaHJlZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgYnJUaHJlZSk7XG4gICAgX3NwYW5Gb3VyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBickZvdXIpO1xuXG4gICAgX2NvbnRhY3REaXYuYXBwZW5kKF9jb250YWN0SGVhZGluZywgX2FkZHJlc3NCb3gpO1xuXG4gICAgY29uc3QgX3JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChfY29udGFjdERpdik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIF9yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgcmVuZGVyQ29udGFjdCB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=