import {createElement} from "./helper";

export const renderModal = ({
                                title,
                                description,
                                btnSubmit,
                                submitHandler
                            }) => {
    const modal = createElement('div', {
        className: 'modal',
    });
    const modalMain = createElement('div', {
        className: 'modal_main'
    });
    const modalTitle = createElement('h2', {
        className: 'modal_title',
        textContent: title
    });
    const modalDescription = createElement('p', {
        className: 'modal_description',
        textContent: description
    })
}