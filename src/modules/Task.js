// factory

export default class Task {
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



// factory implementation
