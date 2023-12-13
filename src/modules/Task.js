// factory

class Task {
    constructor(name, dueDate = "no date") {
        this.name = name;
        this.dueDate = dueDate;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDate() {
        return this.dueDate;
    }
}

// Creating a new task
const task = new Task("Do the math", "25-12-2023");

// Accessing the initial values
console.log(task.getName());
console.log(task.getDate());

// Updating the name and date
task.setName("clean the floor");
task.setDate("01-01-2024");

// Accessing the updated values
console.log(task.getName());
console.log(task.getDate());



export default Task
