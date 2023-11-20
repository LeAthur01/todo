export default class Task {
    static count = 1
    done = false;

    constructor(name, description, dueDate, priority) {
        this.id = Task.count;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        Task.count++;
    }

    getId() {
        return this.id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDueDate() {
        return this.dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    setDone(done) {
        this.done = done;
    }

    isDone() {
        return this.done;
    }

    print() {
        let string = `
            id: ${this.id}
            name: ${this.name}
            dueDate: ${this.dueDate}
            done: ${this.done}`

        console.log(string);
    }
}


