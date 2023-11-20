import Project from './entity/Project.js';
import Task from './entity/Task.js';
import projectService from './service/ProjectService.js';
// Popup the details of a todo when clicking on the detail buttons
function detailsPopUp() {
    const detailBtns = document.querySelectorAll('#todos .button');
    const popUpBackground = document.querySelector('#pop-up');
    const popUp = document.querySelector('#pop-up div');
    const popUpFormBackground = document.querySelector('#pop-up-form');


    detailBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            popUpFormBackground.classList.toggle('hidden');
        })
    });

    popUpBackground.addEventListener('click', e => {
        popUpBackground.classList.toggle('hidden');
    });

    popUp.addEventListener('click', e => {
        e.stopPropagation();
    })
}

// Popup the todo form when clicking on the add button
function todoPopUp() {
    const addBtn = document.querySelector('.iconify-clicked-wrapper');
    const popUpBackground = document.querySelector('#pop-up-form');
    const popUpForm = document.querySelector('#pop-up-form form');

    addBtn.addEventListener('click', e => {
        popUpBackground.classList.toggle('hidden');
    });

    popUpBackground.addEventListener('click', e => {
        popUpBackground.classList.toggle('hidden');
    });

    popUpForm.addEventListener('click', e => {
        e.stopPropagation();
    })
}

// Highlight the priority checkboxs in the todo form when clicking on it
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

// Reset the priority checboxs after the todo form has been submitted
function uncheckPriority() {
    const labels = document.querySelectorAll('#todo__priority-wrapper label');
    labels.forEach(label => {
        label.removeAttribute('class');
    });
}


const universalProject = new Project('Default');

// Get the data from to todo form
function saveTodoFormData() {
    const form = document.forms["pop-up-form__grid-layout"];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = form.title.value;
        const details = form.details.value;
        const dueDate = new Date(form.dueDate.value);
        const priority = form.priority.value;

        const task = new Task(title, details, dueDate, priority);
        console.log(task);
        
        universalProject.addTask(task);
        projectService.saveProject(universalProject);

        // reset the form after it has been submitted
        form.reset();
        uncheckPriority();
        const titleField = document.querySelector("input[name='title']");
        titleField.focus();
    });
}

function loadPage() {

}

detailsPopUp();
todoPopUp();
setFocusPriority();
saveTodoFormData();



