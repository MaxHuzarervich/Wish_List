import {createElement} from "./helper.js";

const nav = document.querySelector('.nav');

// const burger = createBurgerMenu(nav);

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