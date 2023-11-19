import Project from './entity/Project.js';
import Task from './entity/Task.js';
import projectService from './service/ProjectService.js';

function detailsPopUp() {
    const detailBtns = document.querySelectorAll('#todos .button');
    const popUpBackground = document.querySelector('#pop-up');
    const popUp = document.querySelector('#pop-up div');


    detailBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            popUpBackground.classList.toggle('hidden');
        })
    });

    popUpBackground.addEventListener('click', e => {
        popUpBackground.classList.toggle('hidden');
    });

    popUp.addEventListener('click', e => {
        e.stopPropagation();
    })
}

function setFocusPriority() {
    const labels = document.querySelectorAll('#todo__priority-wrapper label');
    const lowLabel = labels[0];
    const mediumLabel = labels[1];
    const highLabel = labels[2];

    lowLabel.addEventListener('click', e => {
        lowLabel.classList.add('green');
        lowLabel.classList.add('checked');
        if (mediumLabel.classList.contains('checked')) {
            mediumLabel.classList.remove('orange');
            mediumLabel.classList.remove('checked');
        } else {
            highLabel.classList.remove('red');
            highLabel.classList.remove('checked');
        }
    });

    mediumLabel.addEventListener('click', e => {
        mediumLabel.classList.add('orange');
        mediumLabel.classList.add('checked');
        if (lowLabel.classList.contains('checked')) {
            lowLabel.classList.remove('green');
            lowLabel.classList.remove('checked');
        } else {
            highLabel.classList.remove('red');
            highLabel.classList.remove('checked');
        }
    });

    highLabel.addEventListener('click', e => {
        highLabel.classList.add('red');
        highLabel.classList.add('checked');
        if (lowLabel.classList.contains('checked')) {
            lowLabel.classList.remove('green');
            lowLabel.classList.remove('checked');
        } else {
            mediumLabel.classList.remove('orange');
            mediumLabel.classList.remove('checked');
        }
    });
}

function getTodoFormData() {
    const form = document.forms["pop-up-form__grid-layout"];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = form.title.value;
        const details = form.details.value;
        const dueDate = new Date(form.dueDate.value);
        const priority = form.priority.value;

        const task = new Task(title, details, dueDate, priority);
        console.log(task);
        
        // projectService.saveProject(project1);
        // const project1 = new Project('House Innovation');
        // project1.addTask(task);

        // const project2 = new Project('School Assignment');
        // project2.addTask(new Task('clean house', 'with cleaner', new Date(), 'high'));

        // projectService.saveProject(project2);
        // const projectData = projectService.getProjects();
        // const thisWeekProjectdata = projectService.getThisWeekProjects();
        // const todayProjectData = projectService.getTodayProjects();

        // console.log('All projects: ' + projectData);
        // console.log(projectData);
        // console.log('Today projects: ' + todayProjectData);
        // console.log(todayProjectData);
        // console.log('This week projects: ' + thisWeekProjectdata);
        // console.log(thisWeekProjectdata);
    });
}

detailsPopUp();
setFocusPriority();
getTodoFormData();



