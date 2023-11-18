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
    console.log(form);
}

detailsPopUp();
setFocusPriority();
getTodoFormData();



