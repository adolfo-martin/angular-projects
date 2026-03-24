window.addEventListener('DOMContentLoaded', setup);


function setup(e) {
    setupDefaultText();
    setupDebounceText();
}


function setupDefaultText() {
    const nInputText = document.querySelector('#tTxtInput')
    const nDefaultText = document.querySelector('#tTxtDefault');
    
    nInputText.addEventListener('input', () => {
        nDefaultText.value = nInputText.value;
    })
}


function setupDebounceText() {
    const nInputText = document.querySelector('#tTxtInput')
    const nDebounceText = document.querySelector('#tTxtDebounce');
    let timeout = undefined;

    nInputText.addEventListener('input', () => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(
            () => nDebounceText.value = nInputText.value,
            1000
        );
    })
}
