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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\n  \r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    addTask(task) {\r\n        if (this.tasks.indexOf(task) > 0) return;\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    deleteTask(taskName) {\r\n        const task = this.tasks.find((task) => task.name === taskName);\r\n        this.tasks.splice(this.tasks.indexOf(task), 1);\r\n    }\r\n\r\n    getTask(taskName) {\r\n        return Object.assign(\r\n            new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n            this.tasks.find((task) => task.name === taskName)\r\n        );\r\n    }\r\n    \r\n\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n\r\n    setTaskName(taskName, newTaskName) {\r\n        this.tasks.find((task) => task.name === taskName).name = newTaskName;\r\n    }\r\n    \r\n    setTaskDate(taskName, newDueDate) {\r\n        this.tasks.find((task) => task.name === taskName).dueDate = newDueDate;\r\n    }\r\n\r\n    contains(taskName){\r\n        return this.tasks.some((task)=> task.name === taskName)\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\r\n\r\nclass Storage {\r\n  static saveTodoList(data) {\r\n    localStorage.setItem(\"todoList\", JSON.stringify(data));\r\n  }\r\n\r\n  static getTodoList() {\r\n    return Object.assign(\r\n      new _TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n      JSON.parse(localStorage.getItem(\"todoList\"))\r\n    );\r\n  }\r\n\r\n  static addProject(project) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.addProject(project);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n\r\n  static deleteProject(projectName) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.deleteProject(projectName);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n\r\n  static addTask(projectName, task) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.getProject(projectName).addTask(task);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n\r\n  static deleteTask(projectName, taskName) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.getProject(projectName).deleteTask(taskName);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n\r\n  static renameTask(projectName, taskName, newTaskName) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.getProject(projectName).setTaskName(taskName, newTaskName);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n\r\n  static setTaskDate(projectName, taskName, newDueDate) {\r\n    const todoList = Storage.getTodoList();\r\n    todoList.getProject(projectName).setTaskDate(taskName, newDueDate);\r\n    Storage.saveTodoList(todoList);\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// factory\r\n\r\nclass Task {\r\n    constructor(name, dueDate = \"no date\") {\r\n        this.name = name;\r\n        this.dueDate = dueDate;\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    setDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n\r\n    getDate() {\r\n        return this.dueDate;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\r\n\r\nclass TodoList {\r\n    constructor() {\r\n      this.projects = [];\r\n      this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\"));\r\n      this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\"));\r\n      this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"This week\"));\r\n    }\r\n    addProject(project) {\r\n      if (this.projects.indexOf(project) > 0) return;\r\n      this.projects.push(project);\r\n    }\r\n    deleteProject(projectName) {\r\n      const project = this.projects.find(\r\n        (project) => project.name === projectName\r\n      );\r\n      this.projects.splice(this.projects.indexOf(project), 1);\r\n    }\r\n  \r\n    getProject(projectName) {\r\n      return Object.assign(\r\n        new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\r\n        this.projects.find((project) => project.name === projectName)\r\n        );\r\n      \r\n    }\r\n  \r\n    getProjects() {\r\n      return this.projects;\r\n    }\r\n    \r\n    contains(projectName) {\r\n      return this.projects.some((project) => project.name === projectName);\r\n    }\r\n\r\n    //getTasksToday\r\n    //getTasksThisWeek\r\n  }\n\n//# sourceURL=webpack://to-do-list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\n\r\nclass UI {\r\n  // LOADING CONTENT\r\n\r\n  static loadHomepage() {\r\n    UI.loadProjects();\r\n    UI.loadProjectContent(\"Inbox\");\r\n  }\r\n  static loadProjects() {\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\r\n      .getProjects()\r\n      .forEach((project) => {\r\n        if (\r\n          project.name !== \"Inbox\" &&\r\n          project.name !== \"Today\" &&\r\n          project.name !== \"This week\"\r\n        ) {\r\n          UI.createProject(project.name);\r\n        }\r\n      });\r\n\r\n    UI.initAddProjectButtons();\r\n  }\r\n\r\n  static loadTasks(projectName) {\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\r\n      .getProject(projectName)\r\n      .getTasks()\r\n      .forEach((task) => UI.createTask(task.name, task.dueDate));\r\n\r\n    UI.initAddTaskButtons();\r\n  }\r\n\r\n  static loadProjectContent(projectName) {\r\n    const projectPreview = document.getElementById(\"project-preview\");\r\n    projectPreview.innerHTML = `\r\n      <h1 id=\"project-name\">${projectName}</h1>\r\n        <div class=\"tasks-list\" id=\"tasks-list\"></div>\r\n        <button class=\"button-add-task\" id=\"button-add-task\">\r\n          <i class=\"fas fa-plus\"></i>\r\n          Add Task\r\n        </button>\r\n        <div class=\"add-task-popup\" id=\"add-task-popup\">\r\n          <input\r\n            class=\"input-add-task-popup\"\r\n            id=\"input-add-task-popup\"\r\n            type=\"text\"\r\n          />\r\n          <div class=\"add-task-popup-buttons\">\r\n            <button class=\"button-add-task-popup\" id=\"button-add-task-popup\">\r\n              Add\r\n            </button>\r\n            <button\r\n              class=\"button-cancel-task-popup\"\r\n              id=\"button-cancel-task-popup\"\r\n            >\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>`;\r\n\r\n    UI.loadTasks(projectName);\r\n  }\r\n\r\n  // CREATING CONTENT\r\n\r\n  static createProject(name) {\r\n    const userProjects = document.getElementById(\"projects-list\");\r\n    userProjects.innerHTML += ` \r\n      <button class=\"button-project\" data-project-button>\r\n        <div class=\"left-project-panel\">\r\n          <i class=\"fas fa-tasks\"></i>\r\n          <span>${name}</span>\r\n        </div>\r\n        <div class=\"right-project-panel\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </div>\r\n      </button>`;\r\n    UI.initProjectButtons();\r\n  }\r\n  static createTask(name, dueDate) {\r\n    const tasksList = document.getElementById(\"tasks-list\");\r\n    tasksList.innerHTML += `\r\n      <button class=\"button-task\" data-task-button>\r\n        <div class=\"left-task-panel\">\r\n          <i class=\"far fa-circle\"></i>\r\n          <p class=\"task-content\">${name}</p>\r\n          <input type=\"text\" class=\"input-task-name\" data-input-task-name>\r\n        </div>\r\n        <div class=\"right-task-panel\">\r\n          <p class=\"due-date\" id=\"due-date\">${dueDate}</p>\r\n          <input type=\"date\" class=\"input-due-date\" data-input-due-date>\r\n          <i class=\"fas fa-times\"></i>\r\n        </div>\r\n      </button>`;\r\n    UI.initTaskButtons();\r\n  }\r\n\r\n  static clear() {\r\n    UI.clearProjectPreview();\r\n    UI.clearProjects();\r\n    UI.clearTasks();\r\n  }\r\n\r\n  static clearProjectPreview() {\r\n    const projectPreview = document.getElementById(\"project-preview\");\r\n    projectPreview.textContent = \"\";\r\n  }\r\n\r\n  static clearProjects() {\r\n    const projectsList = document.getElementById(\"projects-list\");\r\n    projectsList.textContent = \"\";\r\n  }\r\n\r\n  static clearTasks() {\r\n    const tasksList = document.getElementById(\"tasks-list\");\r\n    tasksList.textContent = \"\";\r\n  }\r\n\r\n  // PROJECT ADD EVENT LISTENERS\r\n\r\n  static initAddProjectButtons() {\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n    const addProjectPopupButton = document.getElementById(\r\n      \"button-add-project-popup\"\r\n    );\r\n    const cancelProjectPopupButton = document.getElementById(\r\n      \"button-cancel-project-popup\"\r\n    );\r\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopup);\r\n    addProjectPopupButton.addEventListener(\"click\", UI.addProject);\r\n    cancelProjectPopupButton.addEventListener(\"click\", UI.closeAddProjectPopup);\r\n  }\r\n\r\n  static openAddProjectPopup() {\r\n    const addProjectPopup = document.getElementById(\"add-project-popup\");\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n\r\n    addProjectPopup.classList.add(\"active\");\r\n    addProjectButton.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddProjectPopup() {\r\n    const addProjectPopup = document.getElementById(\"add-project-popup\");\r\n    const addProjectButton = document.getElementById(\"button-add-project\");\r\n    const addProjectPopupInput = document.getElementById(\r\n      \"input-add-project-popup\"\r\n    );\r\n\r\n    addProjectPopup.classList.remove(\"active\");\r\n    addProjectButton.classList.remove(\"active\");\r\n    addProjectPopupInput.value = \"\";\r\n  }\r\n\r\n  static addProject() {\r\n    const addProjectPopupInput = document.getElementById(\r\n      \"input-add-project-popup\"\r\n    );\r\n    const projectName = addProjectPopupInput.value;\r\n\r\n    if (projectName === \"\" || _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().contains(projectName)) {\r\n      UI.closeAddProjectPopup();\r\n      return;\r\n    }\r\n\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName));\r\n    UI.createProject(projectName);\r\n    UI.closeAddProjectPopup();\r\n  }\r\n\r\n  // PROJECT EVENT LISTENERS\r\n  static initProjectButtons() {\r\n    const inboxProjectsButton = document.getElementById(\r\n      \"button-inbox-projects\"\r\n    );\r\n    const todayProjectsButton = document.getElementById(\r\n      \"button-today-projects\"\r\n    );\r\n    const weekProjectsButton = document.getElementById(\"button-week-projects\");\r\n    const projectButtons = document.querySelectorAll(\"[data-project-button]\");\r\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxTasks);\r\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayTasks);\r\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekTasks);\r\n    projectButtons.forEach((projectButton) =>\r\n      projectButton.addEventListener(\"click\", UI.handleProjectButton)\r\n    );\r\n  }\r\n\r\n  static openInboxTasks() {\r\n    UI.openProject(\"Inbox\", this);\r\n  }\r\n\r\n  static openTodayTasks() {\r\n    //sort today\r\n    UI.openProject(\"Today\", this);\r\n  }\r\n\r\n  static openWeekTasks() {\r\n    //sort this week\r\n    UI.openProject(\"This week\", this);\r\n  }\r\n\r\n  static handleProjectButton(e) {\r\n    const projectName = this.children[0].children[1].textContent;\r\n\r\n    if (e.target.classList.contains(\"fa-times\")) {\r\n      UI.deleteProject(projectName);\r\n      return;\r\n    }\r\n\r\n    UI.openProject(projectName, this);\r\n  }\r\n\r\n  static openProject(projectName, button) {\r\n    const defaultProjectButtons = document.querySelectorAll(\r\n      \".button-default-project\"\r\n    );\r\n    const projectButtons = document.querySelectorAll(\".button-project\");\r\n    const buttons = [...defaultProjectButtons, ...projectButtons];\r\n\r\n    buttons.forEach((button) => button.classList.remove(\"active\"));\r\n    button.classList.add(\"active\");\r\n    UI.loadProjectContent(projectName);\r\n  }\r\n\r\n  static deleteProject(projectName) {\r\n    const openedProjectName = document.getElementById(\"project-name\")\r\n      .textContent;\r\n\r\n    if (projectName === openedProjectName) UI.clearProjectPreview();\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(projectName);\r\n    UI.clearProjects();\r\n    UI.loadProjects();\r\n  }\r\n\r\n  // ADD TASK EVENT LISTENERS\r\n  static initAddTaskButtons() {\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n    const addTaskPopupButton = document.getElementById(\"button-add-task-popup\");\r\n    const cancelTaskPopupButton = document.getElementById(\r\n      \"button-cancel-task-popup\"\r\n    );\r\n    addTaskButton.addEventListener(\"click\", UI.openAddTaskPopup);\r\n    addTaskPopupButton.addEventListener(\"click\", UI.addTask);\r\n    cancelTaskPopupButton.addEventListener(\"click\", UI.closeAddTaskPopup);\r\n  }\r\n\r\n  static openAddTaskPopup() {\r\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n\r\n    addTaskPopup.classList.add(\"active\");\r\n    addTaskButton.classList.add(\"active\");\r\n  }\r\n\r\n  static closeAddTaskPopup() {\r\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\r\n    const addTaskButton = document.getElementById(\"button-add-task\");\r\n    const addTaskInput = document.getElementById(\"input-add-task-popup\");\r\n\r\n    addTaskPopup.classList.remove(\"active\");\r\n    addTaskButton.classList.remove(\"active\");\r\n    addTaskInput.value = \"\";\r\n  }\r\n\r\n  static addTask() {\r\n    const projectName = document.getElementById(\"project-name\").textContent;\r\n    const addTaskPopupInput = document.getElementById(\"input-add-task-popup\");\r\n    const taskName = addTaskPopupInput.value;\r\n\r\n    if (\r\n      taskName === \"\" ||\r\n      _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName).contains(taskName)\r\n    ) {\r\n      UI.closeAddTaskPopup();\r\n      return;\r\n    }\r\n\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskName));\r\n    UI.createTask(taskName, \"No date\");\r\n    UI.closeAddTaskPopup();\r\n  }\r\n  // TASK EVENT LISTENERS\r\n  static initTaskButtons() {\r\n    const taskButtons = document.querySelectorAll(\"[data-task-button]\");\r\n    const taskNameInputs = document.querySelectorAll(\"[data-input-task-name\");\r\n    const dueDateInputs = document.querySelectorAll(\"[data-input-due-date\");\r\n    taskButtons.forEach((taskButton) =>\r\n      taskButton.addEventListener(\"click\", UI.handleTaskButton)\r\n    );\r\n    taskNameInputs.forEach((taskNameInput) =>\r\n      taskNameInput.addEventListener(\"keypress\", UI.renameTask)\r\n    );\r\n    dueDateInputs.forEach((dueDateInput) =>\r\n      dueDateInput.addEventListener(\"change\", UI.setTaskDate)\r\n    );\r\n  }\r\n  static handleTaskButton(e) {\r\n    if (e.target.classList.contains(\"fa-circle\")) {\r\n      UI.setTaskCompleted(this);\r\n      return;\r\n    }\r\n    if (e.target.classList.contains(\"fa-times\")) {\r\n      UI.deleteTask(this);\r\n      return;\r\n    }\r\n    if (e.target.classList.contains(\"task-content\")) {\r\n      UI.openRenameInput(this);\r\n      return;\r\n    }\r\n    if (e.target.classList.contains(\"due-date\")) {\r\n      UI.openSetDateInput(this);\r\n      return;\r\n    }\r\n  }\r\n\r\n  static setTaskCompleted(taskButton) {\r\n    const projectName = document.getElementById(\"project-name\").textContent;\r\n    const taskName = taskButton.children[0].children[1].textContent;\r\n\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(projectName, taskName);\r\n    UI.clearTasks();\r\n    UI.loadTasks(projectName);\r\n  }\r\n\r\n  static deleteTask(taskButton) {\r\n    const projectName = document.getElementById(\"project-name\").textContent;\r\n    const taskName = taskButton.children[0].children[1].textContent;\r\n\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(projectName, taskName);\r\n    UI.clearTasks();\r\n    UI.loadTasks(projectName);\r\n  }\r\n\r\n  static openRenameInput(taskButton) {\r\n    const taskName = taskButton.children[0].children[1];\r\n    const taskNameInput = taskButton.children[0].children[2];\r\n\r\n    taskName.classList.add(\"active\");\r\n    taskNameInput.classList.add(\"active\");\r\n  }\r\n\r\n  static closeRenameInput(taskButton) {\r\n    const taskName = taskButton.children[0].children[1];\r\n    const taskNameInput = taskButton.children[0].children[2];\r\n\r\n    taskName.classList.remove(\"active\");\r\n    taskNameInput.classList.remove(\"active\");\r\n    taskNameInput.value = \"\";\r\n  }\r\n\r\n  static renameTask(e) {\r\n    if (e.key !== \"Enter\") return;\r\n\r\n    const projectName = document.getElementById(\"project-name\").textContent;\r\n    const taskName = this.previousElementSibling.textContent;\r\n    const newTaskName = this.value;\r\n\r\n    if (\r\n      newTaskName === \"\" ||\r\n      _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName).contains(newTaskName)\r\n    ) {\r\n      this.value = \"\";\r\n      UI.closeRenameInput(this.parentNode.parentNode);\r\n      return;\r\n    }\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renameTask(projectName, taskName, newTaskName);\r\n    UI.clearTasks();\r\n    UI.loadTasks(projectName);\r\n    UI.closeRenameInput(this.parentNode.parentNode);\r\n  }\r\n\r\n  static openSetDateInput(taskButton) {\r\n    const dueDate = taskButton.children[1].children[0];\r\n    const dueDateInput = taskButton.children[1].children[1];\r\n    dueDate.classList.add(\"active\");\r\n    dueDateInput.classList.add(\"active\");\r\n  }\r\n  static closeSetDateInput(taskButton) {\r\n    const dueDate = taskButton.children[1].children[0];\r\n    const dueDateInput = taskButton.children[1].children[1];\r\n    dueDate.classList.remove(\"active\");\r\n    dueDateInput.classList.remove(\"active\");\r\n  }\r\n\r\n  static setTaskDate() {\r\n    const taskButton = this.parentNode.parentNode;\r\n    const projectName = document.getElementById(\"project-name\").textContent;\r\n    const taskName = taskButton.children[0].children[1].textContent;\r\n    const newDueDate = this.value;\r\n\r\n    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskDate(projectName, taskName, newDueDate);\r\n    UI.clearTasks();\r\n    UI.loadTasks(projectName);\r\n    UI.closeSetDateInput(taskButton);\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/UI.js?");

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