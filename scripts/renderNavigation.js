import {createElement} from "./helper.js";
import {createBurgerMenu} from "./createBurgerMenu.js";

const nav = document.querySelector('.nav');

createBurgerMenu(nav, 'nav_active');

export const renderNavigation = () => {
    nav.textContent = '';

    const buttonSignUp = createElement('button', {
        className: 'nav_btn btn',
        textContent: 'Зарегистрироваться'
    });

    buttonSignUp.addEventListener('click', () => {
        console.log('buttonSignUp')
    })

    const buttonLogin = createElement('button', {
        className: 'nav_btn btn',
        textContent: 'Войти'
    });

    buttonLogin.addEventListener('click', () => {
        console.log('buttonLogin')
    })

    nav.append(buttonSignUp, buttonLogin);

}