window.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.aside'),
    menuItem = document.querySelectorAll('.aside__item'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.aside__close');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        aside.classList.toggle('aside__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            aside.classList.toggle('aside__active');
        });
    });
    
    close.addEventListener('click', () => {
            aside.classList.remove('aside__active');
        });
    
});
