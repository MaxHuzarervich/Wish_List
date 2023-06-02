import {renderNavigation} from "./renderNavigation";
import {createHero} from "./createHero";

const app = document.querySelector('.app')

const handleHomePage = () => {
    app.textContent = '';
    renderNavigation();
    const section = createHero();
    app.append(section);
}

const init = () => {
    handleHomePage();
}
debugger
init();