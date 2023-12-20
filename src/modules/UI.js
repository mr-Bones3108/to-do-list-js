import Storage from "./Storage";
import TodoList from "./TodoList";
import Project from "./Project";
import Task from "./Task";
export default class UI {
  // LOADING CONTENT

  static loadHomepage() {
    UI.initAddProjectButtons();
    UI.loadProjects();
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => UI.createProject(project.name));
  }
  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task.name, task.dueDate));
  }
  static loadProjectContent(projectName) {
    const projectPreview = document.getElementById("project-preview");
    projectPreview.innerHTML = `
      <h1>${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus"></i>
          Add Task
        </button>
        <div class="add-task-popup" id="add-task-popup">
          <input
            class="input-add-task-popup"
            id="input-add-task-popup"
            type="text"
          />
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">
              Add
            </button>
            <button
              class="button-cancel-task-popup"
              id="button-cancel-task-popup"
            >
              Cancel
            </button>
          </div>
        </div>`;
    UI.initAddTaskButtons();
    UI.loadTasks(projectName);
  }

  static createProject(name) {
    const userProjects = document.getElementById("user-projects");
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`;

    UI.initProjectButtons();
  }

  static createTask(name, dueDate) {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML += `
      <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${name}</p>
        </div>
        <div class="right-task-panel">
          <div class="due-date">${dueDate}</div>
          <i class="fas fa-times"></i>
        </div>
      </button>`;

    UI.initTaskButtons();
  }

  static clear() {
    UI.clearProjects();
    UI.clearTasks();
  }

  static clearProjects() {
    const userProjects = document.getElementById("user-projects");
    userProjects.textContent = "";
  }

  static clearTasks() {
    const tasksList = document.getElementById("tasks-list");
    tasksList.textContent = "";
  }

  // ADD PROJECT EVENT LISTENERS

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById("button-add-project");
    const addProjectPopupButton = document.getElementById(
      "button-add-project-popup"
    );
    const cancelProjectPopupButton = document.getElementById(
      "button-cancel-project-popup"
    );
    addProjectButton.addEventListener("click", UI.openAddProjectPopup);
    addProjectPopupButton.addEventListener("click", UI.addProject);
    cancelProjectPopupButton.addEventListener("click", UI.closeAddProjectPopup);
  }
  static openAddProjectPopup() {
    const projectPopup = document.getElementById("add-project-popup");
    projectPopup.classList.add("active");
    this.classList.add("active");
  }
  static closeAddProjectPopup() {
    const projectPopup = document.getElementById("add-project-popup");
    projectPopup.classList.remove("active");
    const projectInput = document.getElementById("input-add-project-popup");
    projectInput.value = "";
    const addProjectButton = document.getElementById("button-add-project");
    addProjectButton.classList.remove("active");
  }
  static addProject() {
    const projectInput = document.getElementById("input-add-project-popup");
    const projectName = projectInput.value;
    if (projectName !== "" && !Storage.getTodoList().contains(projectName)) {
      UI.createProject(projectName);
      Storage.addProject(new Project(projectName));
    }
    UI.closeAddProjectPopup();
  }
  // PROJECT EVENT LISTENERS
  static initProjectButtons() {
    const inboxProjectsButton = document.getElementById(
      "button-inbox-projects"
    );
    const todayProjectsButton = document.getElementById(
      "button-today-projects"
    );
    const weekProjectsButton = document.getElementById("button-week-projects");
    const projectButtons = document.querySelectorAll("[data-project-button]");
    inboxProjectsButton.addEventListener("click", UI.openInboxTasks);
    todayProjectsButton.addEventListener("click", UI.openTodayTasks);
    weekProjectsButton.addEventListener("click", UI.openWeekTasks);
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener("click", UI.handleProjectButton)
    );
  }
  static openInboxTasks() {
    //setup event listeners
    //store in localStorage as Inbox
    //maybe start page with inbox
  }
  static openTodayTasks() {}
  static openWeekTasks() {}

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent;
    if (e.target.classList.contains("fa-times")) {
      UI.deleteProject(projectName);
      return;
    }
    UI.loadProjectContent(projectName);
  }

  static deleteProject(projectName) {
    Storage.deleteProject(projectName);
    UI.clear();
    UI.loadProjects();
  }

  // ADD TASK EVENT LISTENERS
  static initAddTaskButtons() {
    const addTaskButton = document.getElementById("button-add-task");
    const addTaskPopupButton = document.getElementById("button-add-task-popup");
    const cancelTaskPopupButton = document.getElementById(
      "button-cancel-task-popup"
    );
    addTaskButton.addEventListener("click", UI.openAddTaskPopup);
    addTaskPopupButton.addEventListener("click", UI.addTask);
    cancelTaskPopupButton.addEventListener("click", UI.closeAddTaskPopup);
  }
  static openAddTaskPopup() {
    const addTaskPopup = document.getElementById("add-task-popup");
    addTaskPopup.classList.add("active");
    this.classList.add("active");
  }
  static closeAddTaskPopup() {
    const addTaskPopup = document.getElementById("add-task-popup");
    addTaskPopup.classList.remove("active");
    const addTaskInput = document.getElementById("input-add-task-popup");
    addTaskInput.value = "";
    const addTaskButton = document.getElementById("button-add-task");
    addTaskButton.classList.remove("active");
  }
  static addTask() {
    const addTaskPopupInput = document.getElementById("input-add-task-popup");
    const taskName = addTaskPopupInput.value;
    const projectPreview = document.getElementById("project-preview");
    const projectName = projectPreview.children[0].textContent;
    if (
      taskName !== "" &&
      !Storage.getTodoList().getProject(projectName).contains(taskName)
    ) {
      UI.createTask(taskName, "No date");
      Storage.addTask(projectName, new Task(taskName));
    }
    UI.closeAddTaskPopup();
  }
  // TASK EVENT LISTENERS
  static initTaskButtons() {
    const taskButtons = document.querySelectorAll("[data-task-button]");
    taskButtons.forEach((taskButton) =>
      taskButton.addEventListener("click", UI.handleTaskButton)
    );
  }
  static handleTaskButton(e) {
    const project = document.getElementById("project-preview");
    const projectName = project.children[0].textContent;
    const taskName = this.children[0].children[1].textContent;

    if (e.target.classList.contains("fa-circle")) {
      UI.setTaskCompleted(projectName, taskName);
      return;
    }
    if (e.target.classList.contains("task-content")) {
      UI.renameTask(projectName, taskName);
      return;
    }
    if (e.target.classList.contains("due-date")) {
      UI.setTaskDate(projectName, taskName);
      return;
    }
    if (e.target.classList.contains("fa-times")) {
      UI.deleteTask(projectName, taskName);
      return;
    }
  }

  static setTaskCompleted(projectName, taskName) {
    console.log("setCompleted");
    Storage.deleteTask(projectName, taskName);
    UI.clearTasks();
    UI.loadTasks(projectName);
  }

  static renameTask(projectName, taskName) {
    console.log("renameTask");
  }
  static setTaskDate(projectName, taskName) {
    console.log("setTaskDate");
  }
  static deleteTask(projectName, taskName) {
    console.log("deleteTask");
    Storage.deleteTask(projectName, taskName);
    UI.clearTasks();
    UI.loadTasks(projectName);
  }
}