import {createElement} from "./helper.js";

export const createHero = () => {
    const section = createElement('section', {
        className: 'hero'
    });

    const container = createElement('div', {
        className: 'container hero_container'
    });

    section.append(container);

    const title = createElement('h1', {
        className: 'hero_title',
        innerHTML: '<span>Wish</span><span>List</span>'
    });

    const description = createElement('p', {
        className: 'hero_description',
        textContent: 'Никогда не поздно поставить новую цель или обрести новую мечту...'
    });

    const listSteps = createElement('ol', {
        className: 'hero_steps steps',
    });

    ['Создайте список желаний',
        'Поделитесь ссылкой с друзьями',
        'Получите желанный подарок'].forEach(text => {
        const step = createElement('li', {
            className: 'steps_item',
            textContent: 'Создайте список желаний'
        });
        listSteps.append(step)
    });

    container.append(title, description, listSteps);

    return section;
}