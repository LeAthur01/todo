import Project from './../entity/Project.js';
import Task from './../entity/Task.js';

let project1 = new Project('home');
project1.addTask(new Task('work out'));
project1.addTask(new Task('clean house'));

let project2 = new Project('class'); 
project2.addTask(new Task('assignment'));
let projectArray = [];

projectArray.push(project1);
projectArray.push(project2);

let jsonProjects = JSON.parse(JSON.stringify(projectArray));

let projects = jsonProjects.map(project => {
    return Object.assign(new Project(), project);
});

projects.forEach(project => {
    project.setTasks(project.getTasks().map(task => {
        return Object.assign(new Task(), task);
    }));
});

console.log('first project');
projects[0].printTasks();

console.log('second project');
projects[1].printTasks();