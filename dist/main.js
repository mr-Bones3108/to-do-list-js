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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\r\n    static loadData() {}\r\n    static addProject() {}\r\n    static deleteProject() {}\r\n    static addTask() {}\r\n    static deleteTask() {}\r\n  }\n\n//# sourceURL=webpack://to-do-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\r\n\r\nclass UI {\r\n  static load() {\r\n    UI.renderContent();\r\n    UI.initRenderedButtons();\r\n    UI.initDefaultButtons();\r\n    UI.openInboxProjects();\r\n  }\r\n\r\n  static renderContent() {}\r\n\r\n  static initRenderedButtons() {\r\n    const projectButtons = document.querySelectorAll(\"[data-project-button]\");\r\n    projectButtons.forEach((projectButton) =>\r\n    projectButton.addEventListener(\"click\", UI.handleProjectButton)\r\n    );\r\n  }\r\n\r\n  static initDefaultButtons() {\r\n    const inboxProjectsButton = document.getElementById(\r\n      \"button-inbox-projects\"\r\n    );\r\n    const todayProjectsButton = document.getElementById(\r\n      \"button-today-projects\"\r\n    );\r\n    const weekProjectsButton = document.getElementById(\"button-week-projects\");\r\n\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n    const addProjectPopupButton = document.getElementById(\r\n      \"button-add-project-popup\"\r\n    );\r\n    const cancelProjectPopupButton = document.getElementById(\r\n      \"button-cancel-project-popup\"\r\n    );\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n    const addTaskPopupButton = document.getElementById(\"button-add-task-popup\");\r\n    const cancelTaskPopupButton = document.getElementById(\r\n      \"button-cancel-task-popup\"\r\n    );\r\n\r\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxProjects);\r\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayProjects);\r\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekProjects);\r\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopup);\r\n    addProjectPopupButton.addEventListener(\"click\", UI.addProject);\r\n    cancelProjectPopupButton.addEventListener(\"click\", UI.closeAddProjectPopup);\r\n    addTaskButton.addEventListener(\"click\", UI.openAddTaskPopup);\r\n    addTaskPopupButton.addEventListener(\"click\", UI.addTask);\r\n    cancelTaskPopupButton.addEventListener(\"click\", UI.closeAddTaskPopup);\r\n  }\r\n\r\n  // Default project button handlers\r\n\r\n  static openInboxProjects() {\r\n    //setup event listeners\r\n  }\r\n\r\n  static openTodayProjects() {}\r\n\r\n  static openWeekProjects() {}\r\n\r\n  // Add project button handlers\r\n\r\n  static openAddProjectPopup() {\r\n    const projectPopup = document.getElementById(\"add-project-popup\");\r\n    projectPopup.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddProjectPopup() {\r\n    const projectPopup = document.getElementById(\"add-project-popup\");\r\n    projectPopup.classList.remove(\"active\");\r\n\r\n    const projectInput = document.getElementById(\"input-add-project-popup\");\r\n    console.log(projectInput.value)\r\n    projectInput.value = \"\";\r\n  \r\n\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n    addProjectButton.classList.remove(\"active\");\r\n  }\r\n\r\n  static addProject() {\r\n    const projectInput = document.getElementById(\"input-add-project-popup\");\r\n    if (projectInput.value !== \"\") UI.createProject(projectInput.value);\r\n    UI.closeAddProjectPopup();\r\n  }\r\n\r\n  static createProject(name) {\r\n    const userProjects = document.getElementById(\"user-projects\");\r\n    userProjects.innerHTML += ` \r\n      <button class=\"button-project\" data-project-button>\r\n        <div class=\"left-project-panel\">\r\n          <i class=\"fas fa-tasks\"></i>\r\n          ${name}\r\n        </div>\r\n        <div class=\"right-project-panel\">\r\n          <i class=\"fas fa-ellipsis-h\"></i>\r\n        </div>\r\n      </button>`;\r\n      UI.initRenderedButtons();\r\n  }\r\n\r\n  // Add task button handlers\r\n\r\n  static openAddTaskPopup() {\r\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\r\n    addTaskPopup.classList.add(\"active\");\r\n    this.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddTaskPopup() {\r\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\r\n    addTaskPopup.classList.remove(\"active\");\r\n\r\n    const addTaskInput = document.getElementById(\"input-add-task-popup\");\r\n    addTaskInput.value = \"\";\r\n\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n    addTaskButton.classList.remove(\"active\");\r\n  }\r\n\r\n  static addTask() {\r\n    const addTaskPopupInput = document.getElementById(\"input-add-task-popup\");\r\n    if (addTaskPopupInput.value !== \"\")\r\n      UI.createTask(addTaskPopupInput.value, \"No date\");\r\n    UI.closeAddTaskPopup();\r\n  }\r\n\r\n  static createTask(name, dueDate) {\r\n    const tasksList = document.getElementById(\"tasks-list\");\r\n    tasksList.innerHTML += `\r\n      <button class=\"button-task\">\r\n        <div class=\"left-task-panel\">\r\n          <i class=\"far fa-circle\"></i>\r\n          <p class=\"task-content\">${name}</p>\r\n        </div>\r\n        <div class=\"right-task-panel\">\r\n          <div class=\"due-date\">${dueDate}</div>\r\n        </div>\r\n      </button>`;\r\n  }\r\n\r\n  // Project button handlers\r\n\r\n  static handleProjectButton(e) {\r\n    console.log(e)\r\n    if (e.target.classList.contains(\"fas\")) {\r\n      UI.openProjectSettings();\r\n      return;\r\n    }\r\n    UI.openProject();\r\n  }\r\n\r\n  static openProject() {\r\n    console.log(\"project\");\r\n  }\r\n\r\n  static openProjectSettings() {\r\n    console.log(\"settings\");\r\n  }\r\n\r\n  static renameProject() {}\r\n\r\n  static deleteProject() {}\r\n\r\n  // Tasks button handlers\r\n\r\n  static handleTaskButton() {}\r\n\r\n  static setTaskCompleted() {}\r\n\r\n  static deleteTask() {}\r\n\r\n  static renameTask() {}\r\n\r\n  static setTaskDate() {}\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/UI.js?");

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