document.addEventListener('DOMContentLoaded', function () {
    const nContainer = document.querySelector('.centered-container');
    
    for (let i = 0; i < 1000; i++) {
        const time = generateRandomNumber(1, i * 50);
        setTimeout(
            function () {
                const letter = makeid(1);
                createLetter(nContainer, letter);
            }, 
            time
        );
    }
})


function createLetter(nContainer, letter) {
    const nDiv = document.createElement('div');
    nDiv.classList.add('letter');
    nDiv.style.left = generateRandomNumber(0, 100) + '%';
    nDiv.style.animationDuration = generateRandomNumber(1000, 5000) + 'ms';

    nDiv.appendChild(document.createTextNode(letter));
    nContainer.appendChild(nDiv);
}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}