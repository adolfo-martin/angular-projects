import StarwarsService from '../services/StarwarsService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const service = new StarwarsService();
    const people = await service.getPeople();
    fillPeopleTable(people);
});


function fillPeopleTable(people) {
    const nTbody = document.querySelector('#tTabPeople>tbody');

    people.forEach(person => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);        
        nTr.setAttribute('data-people-id', person.id);
        
        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.textContent = person.name;
        nTd.addEventListener('click', fillPersonDetails);
    });
}

async function fillPersonDetails(e) {
    const nTr = e.target.closest('tr');
    const id = nTr.getAttribute('data-people-id');
    const service = new StarwarsService();
    const person = await service.getPersonById(id);
    
    const nTxtName = document.querySelector('#tTxtName');
    const nTxtHeight = document.querySelector('#tTxtHeight');
    const nTxtWeight = document.querySelector('#tTxtWeight');
    
    nTxtName.value = person.name;
    nTxtHeight.value = person.height;
    nTxtWeight.value = person.weight;
}
