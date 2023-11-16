


function popUp() {
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

popUp();




