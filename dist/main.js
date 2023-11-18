/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction detailsPopUp() {\n    const detailBtns = document.querySelectorAll('#todos .button');\n    const popUpBackground = document.querySelector('#pop-up');\n    const popUp = document.querySelector('#pop-up div');\n\n\n    detailBtns.forEach(btn => {\n        btn.addEventListener('click', e => {\n            popUpBackground.classList.toggle('hidden');\n        })\n    });\n\n    popUpBackground.addEventListener('click', e => {\n        popUpBackground.classList.toggle('hidden');\n    });\n\n    popUp.addEventListener('click', e => {\n        e.stopPropagation();\n    })\n}\n\nfunction setFocusPriority() {\n    const labels = document.querySelectorAll('#todo__priority-wrapper label');\n    const lowLabel = labels[0];\n    const mediumLabel = labels[1];\n    const highLabel = labels[2];\n\n    lowLabel.addEventListener('click', e => {\n        lowLabel.classList.add('green');\n        lowLabel.classList.add('checked');\n        if (mediumLabel.classList.contains('checked')) {\n            mediumLabel.classList.remove('orange');\n            mediumLabel.classList.remove('checked');\n        } else {\n            highLabel.classList.remove('red');\n            highLabel.classList.remove('checked');\n        }\n    });\n\n    mediumLabel.addEventListener('click', e => {\n        mediumLabel.classList.add('orange');\n        mediumLabel.classList.add('checked');\n        if (lowLabel.classList.contains('checked')) {\n            lowLabel.classList.remove('green');\n            lowLabel.classList.remove('checked');\n        } else {\n            highLabel.classList.remove('red');\n            highLabel.classList.remove('checked');\n        }\n    });\n\n    highLabel.addEventListener('click', e => {\n        highLabel.classList.add('red');\n        highLabel.classList.add('checked');\n        if (lowLabel.classList.contains('checked')) {\n            lowLabel.classList.remove('green');\n            lowLabel.classList.remove('checked');\n        } else {\n            mediumLabel.classList.remove('orange');\n            mediumLabel.classList.remove('checked');\n        }\n    });\n}\n\nfunction getTodoFormData() {\n    const form = document.forms[\"pop-up-form__grid-layout\"];\n    console.log(form);\n}\n\ndetailsPopUp();\nsetFocusPriority();\ngetTodoFormData();\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;