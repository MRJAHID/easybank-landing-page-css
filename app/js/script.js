const btnHamburger = document.getElementById('btn-hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
    // header.classList.toggle('open');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.remove('fadeIn');
            element.classList.add('fadeOut');
        });
    } else {
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.add('fadeIn');
            element.classList.remove('fadeOut');
        });
    }
});
