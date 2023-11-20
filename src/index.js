import Project from './entity/Project.js';
import Task from './entity/Task.js';
import projectService from './service/ProjectService.js';

// Popup the details of a todo when clicking on the detail buttons
function detailsPopUp(task) {
    const toDoSelector = `div[id='${task.getId()}']`;
    const detailBtns = document.querySelectorAll(`#todos ${toDoSelector} .button`);
    const popUpBackground = document.querySelector(`${toDoSelector} #pop-up`);
    const popUp = document.querySelector(`${toDoSelector} #pop-up div`);

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

        // Render the added task
        addTask(task);

        // reset the form after it has been submitted
        form.reset();
        uncheckPriority();
        const titleField = document.querySelector("input[name='title']");
        titleField.focus();
    });
}

function addTask(task) {
    const todoBoard = document.querySelector('#todos');
    const taskEl = document.createElement('div');
    taskEl.setAttribute('id', task.getId());

    // Make due date right format
    const taskDueDate = task.getDueDate();
    const month = taskDueDate.toLocaleString('en-us', { month: 'short' });
    const dateFormat = `${month} ${taskDueDate.getDate()}th`;
    
    const taskElMarkup = `
        <div class="vertical-line"></div>
        <input type="checkbox">
        <span class="todo-title">${task.getName()}</span>
        <span class="button">details</span>
        <span class="date">${dateFormat}</span>
        <span class="iconify" data-icon="ep:edit"></span>
        <span class="iconify" data-icon="ph:trash"></span>

        <div id="pop-up" class="fullscreen hidden">
            <div class="flex-container-center">
                <span class="heading">${task.getName()}</span>
                <p><span>Project:</span> Default</p>
                <p><span>Priority:</span> ${task.getPriority()}</p>
                <p><span>Due Date:</span> ${dateFormat + ', ' + taskDueDate.getFullYear()}</p>
                <p><span>Details:</span> ${task.getDescription()}</p>
            </div>
        </div>
    `    
    taskEl.innerHTML = taskElMarkup;
    todoBoard.appendChild(taskEl);

    // Pop up details of a todo being clicked
    detailsPopUp(task);

    // Close form after the form has been submitted
    const popUpBackground = document.querySelector('#pop-up-form');
    popUpBackground.classList.toggle('hidden');
}

function loadPage() {

}

todoPopUp();
setFocusPriority();
saveTodoFormData();



