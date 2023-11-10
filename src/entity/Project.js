export default class Project {
    static count = 1;
    tasks = [];

    constructor(name) {
        this.count = Project.count;
        this.name = name;
        Project.count++;
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

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    taskCount() {
        return this.tasks.length;
    }

    deleteTask(id) {
        console.log(id)
        let newArray = this.tasks.filter(task => {
            console.log(task.getId());    
            return task.getId() !== id;
        });
        this.tasks = newArray;
    }

    print() {
        let string = `
            id: ${this.id} 
            name: ${this.name} 
            tasks: ${this.tasks}`;
        
        console.log(string);
    }
}






