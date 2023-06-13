import {createElement} from "./helper.js";

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
    });
    const modalForm = createElement('form', {
        className: 'modal_form',

    });

    modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const ok = await submitHandler(e);
        if (ok) {
            modal.remove();
        }
    })

    const modalField = createElement('fieldset', {
        className: 'modal_field',
    });
    const modalLoginLabel = createElement('label', {
        className: 'modal_label',
    });
    const modalInputLogin = createElement('input', {
        className: 'modal_input',
        type: 'text',
        name: 'login',
        placeholder: 'Логин',
        required: true
    });
    const modalLoginPassword = createElement('label', {
        className: 'modal_label',
    });
    const modalInputPassword = createElement('input', {
        className: 'modal_input',
        type: 'password',
        name: 'password',
        placeholder: 'Пароль',
        required: true
    });

    const modalSubmitBtn = createElement('button', {
        className: 'modal_btn btn',
        textContent: btnSubmit,
    });

    const modalCloseBtn = createElement('button', {
        className: 'modal_close',
        innerHTML: `
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5676 18.1826C20.2477 17.8845 19.8246 17.7222 19.3874 17.73C18.9502 17.7377 18.5331 17.9148 18.224 18.224C17.9148 18.5331 17.7377 18.9502 17.73 19.3874C17.7222 19.8246 17.8845 20.2477 18.1826 20.5676L22.6151 25.0001L18.1826 29.4326C18.0168 29.5871 17.8838 29.7734 17.7916 29.9804C17.6994 30.1874 17.6498 30.4108 17.6458 30.6374C17.6418 30.864 17.6835 31.0891 17.7683 31.2992C17.8532 31.5093 17.9795 31.7002 18.1398 31.8604C18.3 32.0207 18.4909 32.147 18.701 32.2319C18.9111 32.3168 19.1362 32.3584 19.3628 32.3544C19.5894 32.3504 19.8128 32.3008 20.0198 32.2086C20.2268 32.1164 20.4131 31.9834 20.5676 31.8176L25.0001 27.3851L29.4326 31.8176C29.7525 32.1157 30.1756 32.278 30.6128 32.2702C31.05 32.2625 31.4671 32.0854 31.7763 31.7763C32.0854 31.4671 32.2625 31.05 32.2702 30.6128C32.278 30.1756 32.1157 29.7525 31.8176 29.4326L27.3851 25.0001L31.8176 20.5676C31.9834 20.4131 32.1164 20.2268 32.2086 20.0198C32.3008 19.8128 32.3504 19.5894 32.3544 19.3628C32.3584 19.1362 32.3168 18.9111 32.2319 18.701C32.147 18.4909 32.0207 18.3 31.8604 18.1398C31.7002 17.9795 31.5093 17.8532 31.2992 17.7683C31.0891 17.6835 30.864 17.6418 30.6374 17.6458C30.4108 17.6498 30.1874 17.6994 29.9804 17.7916C29.7734 17.8838 29.5871 18.0168 29.4326 18.1826L25.0001 22.6151L20.5676 18.1826Z" fill="#365ABA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1283 0.8125H24.8717C19.6765 0.8125 15.6062 0.8125 12.4293 1.24C9.18025 1.6765 6.61525 2.59 4.6015 4.6015C2.58775 6.61525 1.6765 9.18025 1.24 12.4315C0.8125 15.6062 0.8125 19.6765 0.8125 24.8717V25.1283C0.8125 30.3235 0.8125 34.3937 1.24 37.5708C1.6765 40.8197 2.59 43.3848 4.6015 45.3985C6.61525 47.4123 9.18025 48.3235 12.4315 48.76C15.6062 49.1875 19.6765 49.1875 24.8717 49.1875H25.1283C30.3235 49.1875 34.3937 49.1875 37.5708 48.76C40.8197 48.3235 43.3848 47.41 45.3985 45.3985C47.4123 43.3848 48.3235 40.8198 48.76 37.5685C49.1875 34.3937 49.1875 30.3235 49.1875 25.1283V24.8717C49.1875 19.6765 49.1875 15.6062 48.76 12.4293C48.3235 9.18025 47.41 6.61525 45.3985 4.6015C43.3848 2.58775 40.8198 1.6765 37.5685 1.24C34.3937 0.8125 30.3235 0.8125 25.1283 0.8125ZM6.98875 6.98875C8.27125 5.70625 10.0037 4.9705 12.8815 4.5835C15.8065 4.192 19.6495 4.1875 25 4.1875C30.3505 4.1875 34.1935 4.192 37.1185 4.5835C39.9963 4.9705 41.731 5.7085 43.0135 6.98875C44.2938 8.27125 45.0295 10.0037 45.4165 12.8815C45.808 15.8065 45.8125 19.6495 45.8125 25C45.8125 30.3505 45.808 34.1935 45.4165 37.1185C45.0295 39.9963 44.2915 41.731 43.0112 43.0135C41.7287 44.2938 39.9963 45.0295 37.1185 45.4165C34.1935 45.808 30.3505 45.8125 25 45.8125C19.6495 45.8125 15.8065 45.808 12.8815 45.4165C10.0037 45.0295 8.269 44.2915 6.9865 43.0112C5.70625 41.7287 4.9705 39.9963 4.5835 37.1185C4.192 34.1935 4.1875 30.3505 4.1875 25C4.1875 19.6495 4.192 15.8065 4.5835 12.8815C4.9705 10.0037 5.7085 8.27125 6.98875 6.98875Z" fill="#365ABA"/>
            </svg>`
    });

    modal.addEventListener('click', ({target}) => {
        if(target === modal || target.closest('.modal_close')){
            modal.remove()
        }
    })

    modalLoginLabel.append(modalInputLogin)
    modalLoginPassword.append(modalInputPassword)
    modalField.append(modalLoginLabel, modalLoginPassword)

    modalForm.append(modalField, modalSubmitBtn)
    modalMain.append(modalTitle, modalDescription, modalForm, modalCloseBtn)

    modal.append(modalMain)

    document.body.append(modal)

};