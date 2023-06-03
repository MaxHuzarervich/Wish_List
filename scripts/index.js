import {renderNavigation} from "./renderNavigation.js";
import {createHero} from "./createHero.js";

const app = document.querySelector('.app')
console.log('app: ', app)

const handleHomePage = () => {
    app.textContent = '';
    renderNavigation();
    const section = createHero();
    app.append(section);
}

const init = () => {
    handleHomePage();
}

init();