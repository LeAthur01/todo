import Task from './../entity/Task.js';
import Project from './../entity/Project.js';
import projectService from './ProjectService.js';

let today = new Date();

let nextWeek =  new Date();
nextWeek.setDate(today.getDate() + 7);

let nextDay = new Date();
nextDay.setDate(today.getDate() + 1);

let todayTask = new Task('clean house', 'clean house', today, 'low');
let nextDayTask = new Task('assignment', 'assignment', nextDay, 'medium');
let nextWeekTask = new Task('vung tau trip', 'vung tau trip', nextWeek, 'high');

let project1 = new Project('Important things');
project1.addTask(todayTask);
project1.addTask(nextDayTask);
project1.addTask(nextWeekTask);

let project2 = new Project('House Innovation');
project2.addTask(nextDayTask);

let projects = []
projects.push(project1);
projects.push(project2);

projectService.projects = [...projects];

projectService.getThisWeekProjects().forEach(project => {
    console.log(project.getTasks());
});

