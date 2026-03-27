export default class PeopleServiceMock {
    static #url = '/2024-09-08_alumnos.csv';

    static #supposedLevelsAndGroups = [
        { level: 'e1', groups: ["E1A","E1B","E1C","E1D","E1E","E1F","E1G"] }, 
        { level: 'e2', groups: ["E2A","E2B","E2C","E2D","E2E","E2F"] }, 
        { level: 'e3', groups: ["E3A","E3B","E3C","E3D","E3E","E3F"] }, 
        { level: 'e4', groups: ["E4A","E4B","E4C","E4D","E4E"] }, 
        { level: 'b1', groups: ["B1A","B1B","B1C","B1D","B1E"] }, 
        { level: 'b2', groups: ["B2A","B2B","B2C","B2D","B2E"] }, 
        { level: 'fp', groups: ["FPB1","FPB2","MGEA1","MGEA2","SAYF1","SAYF2","SDAW1","SDAW2"] }, 
    ];

    static #levels = [
        { code: 'e1', shortname: '1º ESO', longname: 'Primero de Educación Secundaria Obligatoria' },
        { code: 'e2', shortname: '2º ESO', longname: 'Segundo de Educación Secundaria Obligatoria' },
        { code: 'e3', shortname: '3º ESO', longname: 'Tercero de Educación Secundaria Obligatoria' },
        { code: 'e4', shortname: '4º ESO', longname: 'Cuarto de Educación Secundaria Obligatoria' },
        { code: 'b1', shortname: '1º BACH', longname: 'Primero de Bachillerato' },
        { code: 'b2', shortname: '2º BACH', longname: 'Segundo de Bachillerato' },
        { code: 'fp', shortname: 'FP', longname: 'Formación Profesional' },
    ];

    static #people = null;
    static #groups = null;

    async retrievePeople(){
        if (!PeopleServiceMock.#people) {
            await this.#proccessFile();
        }

        return PeopleServiceMock.#people;
    }


    async retrievePeopleByGroup(group){
        if (!PeopleServiceMock.#people) {
            await this.#proccessFile();
        }

        return PeopleServiceMock.#people.filter(person => person.group === group);
    };


    async retrievePeopleByLevel(level){
        if (!PeopleServiceMock.#people) {
            await this.#proccessFile();
        }

        // return PeopleServiceMock.#people.filter(person => person.group === group);
        const groups = await this.retrieveGroupsByLevel(level); 
        return PeopleServiceMock.#people.filter(person => groups.includes(person.group));
    };


    async retrieveGroups() {
        if (!PeopleServiceMock.#groups) {
            await this.#proccessFile();
        }

        PeopleServiceMock.#groups = Array.from(new Set(PeopleServiceMock.#people.map(({ group }) => group))).toSorted();
        return PeopleServiceMock.#groups;
    }


    async retrieveLevels() {
        return PeopleServiceMock.#levels;
    }


    async retrieveGroupsByLevel(levelCode) {
        return PeopleServiceMock.#supposedLevelsAndGroups
            .find(level => level.level === levelCode)
            .groups;
    }


    async #proccessFile() {
        const response = await fetch(PeopleServiceMock.#url);
        const data = await response.text();
        const people = data
            .split('\n')
            .filter((_, i) => i !== 0)
            .map(replaceCommasForSemicolon)
            .map(line => line.split(';'))            
            .map(line => ({ 
                firstname: line[3],
                lastname: line[2],
                recordnumber: line[8],
                group: line[4],
                phone1: line[13],
                phone2: line[14],
                mothername: line[15],
                fathername: line[16],
                motherphone: line[22],
                fatherphone: line[21],
            }))
            // .filter((_, i) => i < 10)
            ;

        PeopleServiceMock.#people = people;
        return;

            
        function replaceCommasForSemicolon(text) {
            let result = '';
            let isStringValue = false;
    
            for (let character of text) {
                if (character === '"') {
                    isStringValue = !isStringValue;
                    continue;
                }
    
                if (character === ',') {
                    result += isStringValue ? ',': ';';
                    continue;
                }
    
                result += character;
            }
        
            return result;
        }
    }
}

