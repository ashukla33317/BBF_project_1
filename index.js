const main_menu = document.querySelector('.main_menu');
const open_menu = document.querySelector('.open_menu');
const close_menu = document.querySelector('.close_menu');






function show() {
    main_menu.style.display ='flex';
    main_menu.style.top ='0';

    
}

function close() {
    main_menu.style.top ='-100%';

}

open_menu.addEventListener('click',show);
close_menu.addEventListener('click',close);
