window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_list'),
    menuLink = document.querySelectorAll('.menu_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_list_active');
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_list_active');
        })
    })
    
})