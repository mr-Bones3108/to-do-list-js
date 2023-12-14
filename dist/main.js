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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadWebsite);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList {\r\n    constructor() {\r\n      this.projects = [];\r\n    }\r\n    addProject(project) {\r\n      if (this.projects.indexOf(project) > 0) return;\r\n      this.projects.push(project);\r\n    }\r\n    removeProject(projectName) {\r\n      const project = this.projects.find(\r\n        (project) => project.name === projectName\r\n      );\r\n      this.projects.splice(this.projects.indexOf(project), 1);\r\n    }\r\n  \r\n    getProject(projectName) {\r\n      return this.projects.find((project) => project.name === projectName);\r\n    }\r\n  \r\n    getProjects() {\r\n      return this.projects;\r\n    }\r\n  }\n\n//# sourceURL=webpack://to-do-list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.js */ \"./src/modules/TodoList.js\");\n\r\n\r\nclass UI {\r\n  static loadWebsite() {\r\n    this.initDefaultButtons();\r\n    //const todoList = Storage.getTodoList()\r\n    //todolist/projects foreach createProject(project)\r\n    //todolist/project/tasks foreach createTask(task)\r\n  }\r\n\r\n  static initDefaultButtons() {\r\n    const inboxProjectsButton = document.getElementById(\"button-index\");\r\n    const todayProjectsButton = document.getElementById(\"button-today\");\r\n    const weekProjectsButton = document.getElementById(\"button-this-week\");\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n\r\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxProjects);\r\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayProjects);\r\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekProjects);\r\n    addTaskButton.addEventListener(\"click\", UI.addTask);\r\n    addProjectButton.addEventListener(\"click\", UI.addProject);\r\n  }\r\n\r\n  static openInboxProjects() {\r\n    //for other random tasks which can't be assign as a project\r\n    console.log(\"Inside openInboxProjects\")\r\n  }\r\n\r\n  static openTodayProjects() {\r\n    //get all today tasks\r\n  }\r\n\r\n  static openWeekProjects() {\r\n    //get all this week tasks\r\n  }\r\n\r\n  static addProject() {\r\n    //show popup\r\n    //cancel - hide popup\r\n    //add - create popup\r\n    //create element and addEventListener (handleProjectNutton)\r\n    //add to todolist\r\n    //add to UI\r\n    //save local\r\n    //hide popup\r\n  }\r\n\r\n  static addTask() {\r\n    //show popup\r\n    //cancel - hide popup\r\n    //create element and addEventListener (handleTaskButton)\r\n    //add to todolist/project\r\n    //add to UI\r\n    //save local\r\n    //hide popup\r\n  }\r\n\r\n  createProject(project) {\r\n    //creates an element in DOM\r\n  }\r\n\r\n  createTask(task) {\r\n    //creates an element in DOM\r\n  }\r\n\r\n  handleProjectButton() {\r\n    //name clicked -> openProject\r\n    //options clicked -> openProjectSettings\r\n  }\r\n\r\n  openProject() {\r\n    //update UI\r\n  }\r\n\r\n  openProjectSettings() {\r\n    //show popup\r\n    //rename clicked -> renameProject\r\n    //remove clicked -> removeProject\r\n    //hide popup\r\n  }\r\n\r\n  renameProject() {\r\n    //show popup (same size as setProject popup)\r\n    //cancel - hide popup\r\n    //update todo (setName)\r\n    //update UI (textContent)\r\n    //save local\r\n    //hide popup\r\n  }\r\n\r\n  removeProject() {\r\n    //remove from todolist\r\n    //remove from UI\r\n    //save local\r\n  }\r\n\r\n  handleTaskButton() {\r\n    //tick -> setTaskCompleted\r\n    //text -> renameTask\r\n    //date -> setTaskDate\r\n  }\r\n\r\n  setTaskCompleted() {\r\n    //set UI tick completed\r\n    //cross task out (setTimeout)\r\n    //removeTask\r\n  }\r\n\r\n  removeTask() {\r\n    //remove from todoist/project\r\n    //remove from UI\r\n    //save local\r\n  }\r\n\r\n  renameTask() {\r\n    //show popup\r\n    //cancel - hide popup\r\n    //update todolist/project (setName)\r\n    //update UI (textContent)\r\n    //save local\r\n    //hide popup\r\n  }\r\n\r\n  setTaskDate() {\r\n    //show popup\r\n    //cancel - hide popup\r\n    //update todoist/project (setDate)\r\n    //update UI (textContent)\r\n    //save local\r\n    //hide popup\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/UI.js?");

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