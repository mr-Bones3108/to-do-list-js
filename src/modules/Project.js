// factory
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}



const myProject = new Project("project A")
console.log(myProject.getName())

myProject.setName("Project X")
console.log(myProject.getName())


myProject.addTask("task1")
myProject.addTask("task2")

console.log(myProject.tasks)

myProject.removeTask('task1');

console.log(myProject.tasks)



export default Project;