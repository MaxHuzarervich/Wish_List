import {createElement} from "./helper.js";
import {createBurgerMenu} from "./createBurgerMenu.js";
import {API_URL} from "./const.js";

const nav = document.querySelector('.nav');

createBurgerMenu(nav, 'nav_active');

export const renderNavigation = () => {
    nav.textContent = '';

    const buttonSignUp = createElement('button', {
        className: 'nav_btn btn',
        textContent: 'Зарегистрироваться'
    });

    buttonSignUp.addEventListener('click', () => {
        renderModal({
            title: 'Регистрация',
            description: 'Введите ваши данные для регистрациина сервисе WishList',
            btnSubmit: 'Зарегистрироваться',
            submitHandler: async (event) => {
                const formData = new FormData(event.target);
                const credentials = {
                    login: formData.get('login'),
                    password: formData.get('password'),
                };

                try {
                    const resp = await fetch(`${API_URL}/login`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(credentials)
                    });
                    if (resp.ok) {
                        const data = await resp.json()
                        console.log(data)
                    } else {
                        console.log(await resp.json())
                        throw new Error('Invalid credentials')
                    }
                } catch (e) {

                }
            }
        })
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