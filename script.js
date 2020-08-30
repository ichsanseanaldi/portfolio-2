const toggle = document.querySelector('.menu-toggle');
const lwrap = document.querySelector('.list-wrap');
const line = document.querySelectorAll('.menu-toggle div');

toggle.addEventListener('click', () => {
    line[0].classList.toggle('deg-16');
    line[1].classList.toggle('deg-m-16');
    lwrap.classList.toggle('hide');
});