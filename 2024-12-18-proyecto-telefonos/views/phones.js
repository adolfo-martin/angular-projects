import PeopleServiceMock from "/services/PeopleServiceMock.js";

document.addEventListener('DOMContentLoaded', setup);


async function setup(_) {
    setupNameField();
    setupSelectGroupField()

    const service = new PeopleServiceMock();
    const people = await service.retrievePeople();
    const groups = await service.retrieveGroups();
    const levels = await service.retrieveLevels();

    renderLevels(levels);
    renderGroups(groups);
    renderPeople(people);
}


function setupSelectGroupField() {
    document.querySelector('#tSelGroups')
        .addEventListener('change', async e => {
            const grupo = e.target.value;
            const service = new PeopleServiceMock();
            if (!grupo) {
                var people = await service.retrievePeople();
            } else {
                var people = await service.retrievePeopleByGroup(grupo);
            }
            renderPeople(people);
        });
}


function setupNameField() {
    const nSearchField = document.querySelector('#tLstPeople');
    nSearchField.addEventListener('change', fillStudentDetails);
    
    function fillStudentDetails(e) {
        const search = e.target.value;
        const nOption = document.querySelector(`#tDatlstPeople option[value="${search}"]`)
        document.querySelector('#tTxtFullname').value = nOption.value;
        document.querySelector('#tTxtGroup').value = nOption.dataset.group;
        document.querySelector('#tTxtPhone1').value = nOption.dataset.phone1;
        document.querySelector('#tTxtPhone2').value = nOption.dataset.phone2;
        document.querySelector('#tTxtMothername').value = nOption.dataset.mothername;
        document.querySelector('#tTxtMotherphone').value = nOption.dataset.motherphone;
        document.querySelector('#tTxtFathername').value = nOption.dataset.fathername;
        document.querySelector('#tTxtFatherphone').value = nOption.dataset.fatherphone;
    }
}


function clearStudentDetails() {
    document.querySelector('#tTxtFullname').value = '';
    document.querySelector('#tTxtGroup').value = '';
    document.querySelector('#tTxtPhone1').value = '';
    document.querySelector('#tTxtPhone2').value = '';
    document.querySelector('#tTxtMothername').value = '';
    document.querySelector('#tTxtMotherphone').value = '';
    document.querySelector('#tTxtFathername').value = '';
    document.querySelector('#tTxtFatherphone').value = '';
}


function renderLevels(levels) {
    const nDiv = document.querySelector('#tDivLevels');

    nDiv.querySelector('input[type=radio][value=all]').addEventListener('change', changeGroupsToSelectedLevel);


    levels.forEach(level => {
        const nOption = document.createElement('input');
        nDiv.appendChild(nOption);
        nOption.setAttribute('type', 'radio');
        nOption.setAttribute('name', 'level');
        nOption.setAttribute('id', `tRadLevel${level.code}`);
        nOption.setAttribute('value', level.code);
        nOption.addEventListener('change', changeGroupsToSelectedLevel);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tRadLevel${level.code}`);
        nLabel.textContent = level.shortname;
    });


    async function changeGroupsToSelectedLevel(e) {
        const currentLevel = e.target.value;
        const service = new PeopleServiceMock();
        if (currentLevel === 'all') {
            var groups = await service.retrieveGroups();
            var people = await service.retrievePeople();
        } else {
            var groups = await service.retrieveGroupsByLevel(currentLevel);
            var people = await service.retrievePeopleByLevel(currentLevel);
        }
        renderGroups(groups);
        renderPeople(people);
    }
}


function renderGroups(groups) {
    const nSelect = document.querySelector('#tSelGroups');
    nSelect.innerHTML = '<option value="all" checked>Todos</option>';

    groups.forEach(group => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', group);
        nOption.textContent = group;
    });
}


function renderPeople(people) {
    document.querySelector('#tLstPeople').value = '';
    clearStudentDetails();

    const nDatalist = document.querySelector('#tDatlstPeople');
    nDatalist.innerHTML = '';

    people.forEach(person => {
        const nOption = document.createElement('option');
        nDatalist.appendChild(nOption);
        nOption.setAttribute('value', `${person.lastname} ${person.firstname} (${person.group} - ${person.recordnumber})`)
        nOption.setAttribute('data-recordnumber', person.recordnumber);
        nOption.setAttribute('data-group', person.group);
        nOption.setAttribute('data-phone1', person.phone1);
        nOption.setAttribute('data-phone2', person.phone2);
        nOption.setAttribute('data-mothername', person.mothername);
        nOption.setAttribute('data-fathername', person.fathername);
        nOption.setAttribute('data-motherphone', person.motherphone);
        nOption.setAttribute('data-fatherphone', person.fatherphone);
    });
}




// function replaceCommasForSemicolon(text) {
    //     let result = '';
    //     let isStringValue = false;

    //     for (let character of text) {
    //         if (character === '"') {
    //             isStringValue = !isStringValue;
    //             continue;
    //         }

    //         if (character === ',') {
    //             result += isStringValue ? ',': ';';
    //             continue;
    //         }

    //         result += character;
    //     }
    
    //     return result;
    // }
    
    // const theText = '"1","ABDOUS CHKIR, ADAM","ABDOUS CHKIR","ADAM","E3F","E3Fm","3 ESO F Biling�e Mejora","10/03/2009","58974","4715327","V","4715327@alu.murciaeduca.es","lorcamurcia3038@gmail.com","602042799","","CHKIR, NEZHA","ABDOUS, HAMID","CL. EULOGIO PERIAGO N.31 P.1�C  - LORCA CP:30800 (MURCIA)","30297544N","c24_25#foto=E3F#ABDOUS_CHKIR,ADAM(4715327)[58974]","E3","","","10400401-25","Educaci�n Secundaria Obligatoria Programa de Mejora en Lenguas Extranjeras","","Padre","Madre"';
    // const result = replaceCommasForSemicolon(theText);
    // console.log(result);

    // return;