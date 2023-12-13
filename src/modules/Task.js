class Task {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    getAge() {
        return this.age;
    }
}

const task = new Task("xdddd", 25);
console.log(task.name);
console.log(task.getAge());
