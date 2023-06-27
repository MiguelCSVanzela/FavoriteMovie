document.addEventListener('DOMContentLoaded', function () {
    // Header
    const heroSection = document.querySelector('.hero');
    const watchSection = document.querySelector('.watch');
    const header = document.querySelector('.header');
    const headerHeight = document.querySelector('.header');
    const hideHeaderClass = 'header--is-hidden';

    const heroHeight = heroSection.clientHeight;
    const watchHeight = watchSection.clientHeight;
    const headerHEight = headerHeight.clientHeight;


    window.addEventListener('scroll', function () {
        const currentHeight = document.scrollingElement;
        if (watchHeight == headerHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    })

    function showHeader() {
        header.classList.remove(hideHeaderClass);
    }

    function hideHeader() {
        header.classList.add(hideHeaderClass);
    }


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
            console.log(counter);
            AddIsOpenClass(counter);
            counter += 1;
            console.log(counter);
        } else {
            counter = 0;
            console.log("zerou", counter);
            AddIsOpenClass(counter);
        }
        return counter;
    })

    buttonPrev.addEventListener('click', function () {
        removeIsOpenClass();
        if (counter > 0) {
            console.log(counter);
            AddIsOpenClass(counter);
            counter -= 1;
            console.log(counter);
        } else {
            counter = 2;
            AddIsOpenClass(counter);
        }
        return counter;
    })


    // Curious 
    const curiousQuestion = document.querySelectorAll('[data-curious-question]');

    function openOrCloseAnswer(element) {
        const classOpen = 'curious__questions__item--is-open';
        const parentElement = element.target.parentNode;

        parentElement.classList.toggle(classOpen);
    }
    for (let i = 0; i < curiousQuestion.length; i++) {
        curiousQuestion[i].addEventListener('click', openOrCloseAnswer)
    }
})