document.addEventListener('DOMContentLoaded', function () {

    // Scenes Section
    const buttonPrev = document.querySelector('.scenes__button__prev');
    const buttonNext = document.querySelector('.scenes__button__next');
    const scenesList = document.querySelectorAll('.scenes__list');
    const scenesPlaceholder = document.querySelectorAll(".scenes__list__placeholder__item");

    function removeIsOpenClass() {
        for (let i = 0; i < scenesList.length; i++) {
            if (scenesList[i].classList.contains('scenes__list--is-open')) {
                scenesList[i].classList.remove('scenes__list--is-open');
            }
        }
        for (let i = 0; i < scenesPlaceholder.length; i++) {
            scenesPlaceholder[i].classList.add("hide");
        }
    }
    function AddIsOpenClass(counterValue) {
        scenesList[counterValue].classList.add('scenes__list--is-open');
    }

    let counter = 0;

    buttonNext.addEventListener('click', function () {
        removeIsOpenClass();
        if (counter < 3) {
            AddIsOpenClass(counter);
            counter += 1;
        } else {
            counter = 0;
            AddIsOpenClass(counter);
        }
        return counter;
    })

    buttonPrev.addEventListener('click', function () {
        removeIsOpenClass();
        if (counter > 0) {
            AddIsOpenClass(counter);
            counter -= 1;
        } else {
            counter = 2;
            AddIsOpenClass(counter);
        }
        return counter;
    })


    // Curious 
    const curiousQuestion = document.querySelectorAll('[data-curious-question]');
    const curiousSection = document.querySelector('.curious');

    function openOrCloseAnswer(element) {
        const classOpen = 'curious__questions__item--is-open';
        const parentElement = element.target.parentNode;

        parentElement.classList.toggle(classOpen);
        curiousSection.style.overflowY = 'scroll';
    }
    for (let i = 0; i < curiousQuestion.length; i++) {
        curiousQuestion[i].addEventListener('click', openOrCloseAnswer)
    }
})