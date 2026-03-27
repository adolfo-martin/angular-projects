paragraphs = document.querySelectorAll('p[data-mrf-recirculation="links-parrafos"]');

const nDivOnlyParagraphsContainer = document.createElement("div");
const styles = {
    'position': 'absolute',
    'z-index': '1000',
    'top': '100px',
    'left': '100px',
    'margin-right': '100px',
    'minHeight': '90%',
    'width': '80%',
    'border': 'solid 10px black',
    'backgroundColor': 'yellow',
    'font-size': "24px"
}

for (const key in styles) {
    nDivOnlyParagraphsContainer.style[key] = styles[key]
}

paragraphs.forEach(paragraph => {
    const nParagraph = document.createElement('p');
    nParagraph.style.marginTop = '0.5rem';
    nParagraph.textContent += paragraph.textContent;
    nDivOnlyParagraphsContainer.appendChild(nParagraph);
});


document.body.appendChild(nDivOnlyParagraphsContainer);