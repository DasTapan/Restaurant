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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuLoad = (element) => {
    const _foodArray = ['Sahi Samosa', 'Large Dosa', 'Tandoori Chicken', 'Naan Paneer', 'Dahi Pakhal', 'Large Thali'];

    let menuHeading = document.createElement('h3');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Menu'

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('food-catalogue');

    //create six food box for six food items
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.classList.add('food-box');

        const childElementOne = document.createElement('div');
        childElementOne.classList.add('food-pic', `food${i + 1}`);

        const childElementTwo = document.createElement('div');
        childElementTwo.classList.add('food-name');
        childElementTwo.textContent = _foodArray[i];

        element.append(childElementOne, childElementTwo);
        menuDiv.appendChild(element);
    };

    const _render = () => {
        element.append(menuHeading, menuDiv);
    }

    const renderMenu = () => {
        _render();
    }

    return { renderMenu }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxNQUFNOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBLGlFQUFlLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtZW51TG9hZCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgX2Zvb2RBcnJheSA9IFsnU2FoaSBTYW1vc2EnLCAnTGFyZ2UgRG9zYScsICdUYW5kb29yaSBDaGlja2VuJywgJ05hYW4gUGFuZWVyJywgJ0RhaGkgUGFraGFsJywgJ0xhcmdlIFRoYWxpJ107XG5cbiAgICBsZXQgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ01lbnUnXG5cbiAgICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnZm9vZC1jYXRhbG9ndWUnKTtcblxuICAgIC8vY3JlYXRlIHNpeCBmb29kIGJveCBmb3Igc2l4IGZvb2QgaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ib3gnKTtcblxuICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hpbGRFbGVtZW50T25lLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtcGljJywgYGZvb2Qke2kgKyAxfWApO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGlsZEVsZW1lbnRUd28uY2xhc3NMaXN0LmFkZCgnZm9vZC1uYW1lJyk7XG4gICAgICAgIGNoaWxkRWxlbWVudFR3by50ZXh0Q29udGVudCA9IF9mb29kQXJyYXlbaV07XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGRFbGVtZW50T25lLCBjaGlsZEVsZW1lbnRUd28pO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBfcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFwcGVuZChtZW51SGVhZGluZywgbWVudURpdik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlck1lbnUgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9