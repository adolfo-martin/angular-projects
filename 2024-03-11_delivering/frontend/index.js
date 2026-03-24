import AuthenticationService from './services/AuthenticationService.js';

document.addEventListener('DOMContentLoaded', async e => {
    setupValidateUserButton();
});


function setupValidateUserButton() {
    const nButton = document.querySelector('#tButValidateUser');
    nButton.addEventListener('click', validateUser)
}

async function validateUser(e) {
    const username = document.querySelector('#tTxtUsername').value;
    const password = document.querySelector('#tTxtPassword').value;

    try {
        const service = new AuthenticationService();
        const token = await service.validateUserAndRetrieveToken(username, password);
        window.sessionStorage.setItem('token', token);
    } catch (error) {
        alert(`ERROR: ${error}`);
    }
}