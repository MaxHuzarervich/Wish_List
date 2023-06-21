import {auth} from "./index.js";
import {getUser} from "./service.js";
import {createElement, pluralizeYears} from "./helper.js";

export const createWishList = async pageLogin => {
    const login = auth.login;

    if (!pageLogin) {
        pageLogin = login;
    }

    const user = await getUser(pageLogin);


    const section = createElement('section', {
        className: 'wishlist',
    });

    const container = createElement('div', {
        className: 'container'
    });

    section.append(container)

    const profile = createElement('div', {
        className: 'wishlist_profile profile'
    });

    const avatar = createElement('img', {
        className: 'profile_avatar',
        src: 'image/user%201.png',
        alt: 'фото',
    });

    const content = createElement('div', {
        className: 'profile_content',
    });

    const fullname = user.name || user.surname ? `${user.name || ''} ${user.surname || ''}`.trim() : user.login

    const title = createElement('h2', {
        className: 'profile_fullname',
        textContent: fullname
    });

    content.append(title)

    if (user.birthday) {
        const birthday = new Date(user.birthday);
        const day = birthday.getDate();
        const month = birthday.toLocaleString('default', {month: 'long'});
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        const plural = pluralizeYears(age);

        const ageMessage = `${day} ${month} исполнится ${age} ${plural}`

        const birthdayElem = createElement('p', {
            className: 'profile_birthday',
            textContent: ageMessage
        });

        content.append(birthdayElem);
    }


    const editBtn = createElement('button', {
        className: 'profile_edit'
    });

}