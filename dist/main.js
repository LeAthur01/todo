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

/***/ "./src/entity/Project.js":
/*!*******************************!*\
  !*** ./src/entity/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    static count = 1;\n    tasks = [];\n\n    constructor(name) {\n        this.id = Project.count;\n        this.name = name;\n        Project.count++;\n    }\n\n    getId() {\n        return this.id;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    taskCount() {\n        return this.tasks.length;\n    }\n\n    deleteTask(id) {\n        console.log(id)\n        let newArray = this.tasks.filter(task => {\n            console.log(task.getId());    \n            return task.getId() !== id;\n        });\n        this.tasks = newArray;\n    }\n\n    print() {\n        let string = `\n            id: ${this.id} \n            name: ${this.name} \n            tasks: ${this.tasks}`;\n        \n        console.log(string);\n    }\n\n    getTasks() {\n        return (this.tasks);\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n\n    printTasks() {\n        console.log('you are here');\n        this.tasks.forEach(task => {\n            task.print();\n        });\n    }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/entity/Project.js?");

/***/ }),

/***/ "./src/entity/Task.js":
/*!****************************!*\
  !*** ./src/entity/Task.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    static count = 1\n    done = false;\n\n    constructor(name, description, dueDate, priority) {\n        this.id = Task.count;\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        Task.count++;\n    }\n\n    getId() {\n        return this.id;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setDescription(description) {\n        this.description = description;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n\n    setDueDate(dueDate) {\n        console.log('you are in here');\n        this.dueDate = dueDate;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n\n    setPriority(priority) {\n        this.priority = priority;\n    }\n\n    getPriority(priority) {\n        return this.priority;\n    }\n\n    setDone(done) {\n        this.done = done;\n    }\n\n    isDone() {\n        return this.done;\n    }\n\n    print() {\n        let string = `\n            id: ${this.id}\n            name: ${this.name}\n            dueDate: ${this.dueDate}\n            done: ${this.done}`\n\n        console.log(string);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/entity/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity_Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/Project.js */ \"./src/entity/Project.js\");\n/* harmony import */ var _entity_Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity/Task.js */ \"./src/entity/Task.js\");\n/* harmony import */ var _service_ProjectService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/ProjectService.js */ \"./src/service/ProjectService.js\");\n\n\n\n\n// Popup the details of a todo when clicking on the detail buttons\nfunction detailsPopUp(task) {\n    const toDoSelector = `div[id='${task.getId()}']`;\n    const detailBtns = document.querySelectorAll(`#todos ${toDoSelector} .button`);\n    const popUpBackground = document.querySelector(`${toDoSelector} #pop-up`);\n    const popUp = document.querySelector(`${toDoSelector} #pop-up div`);\n\n    detailBtns.forEach(btn => {\n        btn.addEventListener('click', e => {\n            popUpBackground.classList.toggle('hidden');\n        })\n    });\n\n    popUpBackground.addEventListener('click', e => {\n        popUpBackground.classList.toggle('hidden');\n    });\n\n    popUp.addEventListener('click', e => {\n        e.stopPropagation();\n    })\n}\n\n// Popup the todo form when clicking on the add button\nfunction todoPopUp() {\n    const addBtn = document.querySelector('.iconify-clicked-wrapper');\n    const popUpBackground = document.querySelector('#pop-up-form');\n    const popUpForm = document.querySelector('#pop-up-form form');\n\n    addBtn.addEventListener('click', e => {\n        popUpBackground.classList.toggle('hidden');\n    });\n\n    popUpBackground.addEventListener('click', e => {\n        popUpBackground.classList.toggle('hidden');\n    });\n\n    popUpForm.addEventListener('click', e => {\n        e.stopPropagation();\n    })\n}\n\n// Highlight the priority checkboxs in the todo form when clicking on it\nfunction setFocusPriority() {\n    const labels = document.querySelectorAll('#todo__priority-wrapper label');\n    const lowLabel = labels[0];\n    const mediumLabel = labels[1];\n    const highLabel = labels[2];\n\n    lowLabel.addEventListener('click', e => {\n        lowLabel.classList.add('green');\n        lowLabel.classList.add('checked');\n        if (mediumLabel.classList.contains('checked')) {\n            mediumLabel.classList.remove('orange');\n            mediumLabel.classList.remove('checked');\n        } else {\n            highLabel.classList.remove('red');\n            highLabel.classList.remove('checked');\n        }\n    });\n\n    mediumLabel.addEventListener('click', e => {\n        mediumLabel.classList.add('orange');\n        mediumLabel.classList.add('checked');\n        if (lowLabel.classList.contains('checked')) {\n            lowLabel.classList.remove('green');\n            lowLabel.classList.remove('checked');\n        } else {\n            highLabel.classList.remove('red');\n            highLabel.classList.remove('checked');\n        }\n    });\n\n    highLabel.addEventListener('click', e => {\n        highLabel.classList.add('red');\n        highLabel.classList.add('checked');\n        if (lowLabel.classList.contains('checked')) {\n            lowLabel.classList.remove('green');\n            lowLabel.classList.remove('checked');\n        } else {\n            mediumLabel.classList.remove('orange');\n            mediumLabel.classList.remove('checked');\n        }\n    });\n}\n\n// Reset the priority checboxs after the todo form has been submitted\nfunction uncheckPriority() {\n    const labels = document.querySelectorAll('#todo__priority-wrapper label');\n    labels.forEach(label => {\n        label.removeAttribute('class');\n    });\n}\n\n\nconst universalProject = new _entity_Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default');\n\n// Get the data from to todo form\nfunction saveTodoFormData() {\n    const form = document.forms[\"pop-up-form__grid-layout\"];\n    form.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        const title = form.title.value;\n        const details = form.details.value;\n        const dueDate = new Date(form.dueDate.value);\n        const priority = form.priority.value;\n\n        const task = new _entity_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, details, dueDate, priority);\n        console.log(task);\n        \n        universalProject.addTask(task);\n        _service_ProjectService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveProject(universalProject);\n\n        // Render the added task\n        addTask(task);\n\n        // reset the form after it has been submitted\n        form.reset();\n        uncheckPriority();\n        const titleField = document.querySelector(\"input[name='title']\");\n        titleField.focus();\n    });\n}\n\nfunction addTask(task) {\n    const todoBoard = document.querySelector('#todos');\n    const taskEl = document.createElement('div');\n    taskEl.setAttribute('id', task.getId());\n\n    // Make due date right format\n    const taskDueDate = task.getDueDate();\n    const month = taskDueDate.toLocaleString('en-us', { month: 'short' });\n    const dateFormat = `${month} ${taskDueDate.getDate()}th`;\n    \n    const taskElMarkup = `\n        <div class=\"vertical-line\"></div>\n        <input type=\"checkbox\">\n        <span class=\"todo-title\">${task.getName()}</span>\n        <span class=\"button\">details</span>\n        <span class=\"date\">${dateFormat}</span>\n        <span class=\"iconify\" data-icon=\"ep:edit\"></span>\n        <span class=\"iconify\" data-icon=\"ph:trash\"></span>\n\n        <div id=\"pop-up\" class=\"fullscreen hidden\">\n            <div class=\"flex-container-center\">\n                <span class=\"heading\">${task.getName()}</span>\n                <p><span>Project:</span> Default</p>\n                <p><span>Priority:</span> ${task.getPriority()}</p>\n                <p><span>Due Date:</span> ${dateFormat + ', ' + taskDueDate.getFullYear()}</p>\n                <p><span>Details:</span> ${task.getDescription()}</p>\n            </div>\n        </div>\n    `    \n    taskEl.innerHTML = taskElMarkup;\n    todoBoard.appendChild(taskEl);\n\n    // Pop up details of a todo being clicked\n    detailsPopUp(task);\n\n    // Close form after the form has been submitted\n    const popUpBackground = document.querySelector('#pop-up-form');\n    popUpBackground.classList.toggle('hidden');\n}\n\nfunction loadPage() {\n\n}\n\ntodoPopUp();\nsetFocusPriority();\nsaveTodoFormData();\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/repository/ProjectRepository.js":
/*!*********************************************!*\
  !*** ./src/repository/ProjectRepository.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity_Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../entity/Project.js */ \"./src/entity/Project.js\");\n/* harmony import */ var _entity_Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/Task.js */ \"./src/entity/Task.js\");\n\n\n\nclass ProjectRepository {\n    saveProjects(projects) {\n        localStorage.setItem('projects', JSON.stringify(projects));\n    }\n\n    getProjects() {\n        let jsonProjects = JSON.parse(localStorage.getItem('projects'));\n\n        // Populate the list of json projects\n        let projects = jsonProjects.map(project => {\n            return Object.assign(new _entity_Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project);\n        });\n        \n        // Populate the list of tasks of each project\n        projects.forEach(project => {\n            project.setTasks(project.getTasks().map(task => {\n                return Object.assign(new _entity_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task);\n            }));\n        });\n\n        return projects;\n    }\n}\n\nconst projectRepository = new ProjectRepository();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectRepository);\n\n//# sourceURL=webpack://todo/./src/repository/ProjectRepository.js?");

/***/ }),

/***/ "./src/service/ProjectService.js":
/*!***************************************!*\
  !*** ./src/service/ProjectService.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entity_Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../entity/Task.js */ \"./src/entity/Task.js\");\n/* harmony import */ var _entity_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entity/Project.js */ \"./src/entity/Project.js\");\n/* harmony import */ var _utility_DateUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utility/DateUtil.js */ \"./src/utility/DateUtil.js\");\n/* harmony import */ var _repository_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../repository/ProjectRepository.js */ \"./src/repository/ProjectRepository.js\");\n\n\n\n\n\nclass ProjectService {\n    static projectRepository;\n    projects = [];\n    first = true;\n\n    constructor(projectRepository) {\n        ProjectService.projectRepository = projectRepository;\n    }\n    \n    saveProject(project) {\n        if (this.first) {\n            this.projects.push(project);\n            this.first = false;\n        }\n        \n        ProjectService.projectRepository.saveProjects(this.projects);\n    }\n\n    getProjects() {\n        ProjectService.projects = ProjectService.projectRepository.getProjects();\n        // This function retrun a copy of the static property projects\n        return ProjectService.projects;\n    }\n\n    getTodayProjects() {\n        // this.getProjects();\n        let projects = [...this.projects];\n        let todayProjects = projects.map(project => {\n            let copyProject = new _entity_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            Object.assign(copyProject, project);\n            copyProject.setTasks(copyProject.getTasks().filter(task => {\n                // console.log(task);\n              return _utility_DateUtil_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isToday(task.getDueDate());\n            }));\n            return copyProject;\n        });\n\n        todayProjects = todayProjects.filter(project => {\n            return project.getTasks().length > 0;\n        });\n\n        return todayProjects;\n    }\n\n    getThisWeekProjects() {\n        // this.getProjects();\n        let projects = [...this.projects];\n        let weekProjects = projects.map(project => {\n            let copyProject = new _entity_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            Object.assign(copyProject, project);\n            copyProject.setTasks(copyProject.getTasks().filter(task => {\n                // console.log(task);\n              return _utility_DateUtil_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isDateInThisWeek(task.getDueDate());\n            }));\n            return copyProject;\n        });\n\n        weekProjects = weekProjects.filter(project => {\n            return project.getTasks().length > 0;\n        })\n\n        return weekProjects;\n    }\n}\n\nlet projectService = new ProjectService(_repository_ProjectRepository_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectService);\n\n//# sourceURL=webpack://todo/./src/service/ProjectService.js?");

/***/ }),

/***/ "./src/utility/DateUtil.js":
/*!*********************************!*\
  !*** ./src/utility/DateUtil.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DateUtil {\n    isToday(date) {\n        let today = new Date();\n        return today.toDateString() === date.toDateString();\n    }\n\n    isDateInThisWeek(date) {\n        const todayObj = new Date();\n        const todayDate = todayObj.getDate();\n        const todayDay = todayObj.getDay();\n      \n        // get first date of week\n        const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay + 1));\n        firstDayOfWeek.setHours(0);\n        firstDayOfWeek.setMinutes(0);\n        firstDayOfWeek.setSeconds(0);\n        firstDayOfWeek.setMilliseconds(0);\n\n        // get last date of week\n        const lastDayOfWeek = new Date(firstDayOfWeek);\n        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);\n      \n        // if date is equal or within the first and last dates of the week\n        // console.log('first date of the week' + ' ' + firstDayOfWeek);\n        // console.log('the checking date: ' + date);\n        // console.log('the last day of the week ' + lastDayOfWeek);\n        return date >= firstDayOfWeek && date <= lastDayOfWeek;\n    }\n}\n\n\nconst dateUtil = new DateUtil();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateUtil);\n\n//# sourceURL=webpack://todo/./src/utility/DateUtil.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;