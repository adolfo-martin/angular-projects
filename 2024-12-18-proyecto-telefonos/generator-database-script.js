import fs from 'node:fs/promises';

export default class GeneratorDatabaseLoader {
    // static #url = '/2024-09-08_alumnos.csv';
    static #url = 'C:\\Users\\adolfo\\Desktop\\2024-12-18-proyecto-telefonos\\2024-09-08_alumnos.csv';

    static #supposedLevelsAndGroups = [
        { level: 'e1', groups: ["E1A","E1B","E1C","E1D","E1E","E1F","E1G"] }, 
        { level: 'e2', groups: ["E2A","E2B","E2C","E2D","E2E","E2F"] }, 
        { level: 'e3', groups: ["E3A","E3B","E3C","E3D","E3E","E3F"] }, 
        { level: 'e4', groups: ["E4A","E4B","E4C","E4D","E4E"] }, 
        { level: 'b1', groups: ["B1A","B1B","B1C","B1D","B1E"] }, 
        { level: 'b2', groups: ["B2A","B2B","B2C","B2D","B2E"] }, 
        { level: 'fp', groups: ["FPB1","FPB2","MGEA1","MGEA2","SAYF1","SAYF2","SDAW1","SDAW2"] }, 
    ];
    
    static supposedLevelsAndGroupsAux = GeneratorDatabaseLoader.#supposedLevelsAndGroups;

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
        if (!GeneratorDatabaseLoader.#people) {
            await this.#proccessFile();
        }

        return GeneratorDatabaseLoader.#people;
    }


    async retrievePeopleByGroup(group){
        if (!GeneratorDatabaseLoader.#people) {
            await this.#proccessFile();
        }

        return GeneratorDatabaseLoader.#people.filter(person => person.group === group);
    };


    async retrievePeopleByLevel(level){
        if (!GeneratorDatabaseLoader.#people) {
            await this.#proccessFile();
        }

        // return GeneratorDatabaseLoader.#people.filter(person => person.group === group);
        const groups = await this.retrieveGroupsByLevel(level); 
        return GeneratorDatabaseLoader.#people.filter(person => groups.includes(person.group));
    };


    async retrieveGroups() {
        if (!GeneratorDatabaseLoader.#groups) {
            await this.#proccessFile();
        }

        GeneratorDatabaseLoader.#groups = Array.from(new Set(GeneratorDatabaseLoader.#people.map(({ group }) => group))).toSorted();
        return GeneratorDatabaseLoader.#groups;
    }


    async retrieveLevels() {
        return GeneratorDatabaseLoader.#levels;
    }


    async retrieveGroupsByLevel(levelCode) {
        return GeneratorDatabaseLoader.#supposedLevelsAndGroups
            .find(level => level.level === levelCode)
            .groups;
    }


    async #proccessFile() {
        // const response = await fetch(GeneratorDatabaseLoader.#url);
        // const data = await response.text();
        const data = await fs.readFile(GeneratorDatabaseLoader.#url, { encoding: 'utf8' });
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
            .filter((_, i) => i < 1)
            ;

        GeneratorDatabaseLoader.#people = people;
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

const generator = new GeneratorDatabaseLoader();

// const levels = await generator.retrieveLevels();
// levels.forEach(level => {
//     const insert = `INSERT INTO levels (code, shortname, longname) VALUES ('${level.code}', '${level.shortname}', '${level.longname}');`;
//     console.log(insert);
// });

// const groups = GeneratorDatabaseLoader.supposedLevelsAndGroupsAux;
// console.log(groups)
// groups.forEach(({level, groups}) => {
//     groups.forEach(group => {
//         const insert = `INSERT INTO groups (code, \`code-level\`) VALUES ('${group}', '${level}');`;
//         console.log(insert);
//     })
// });

const people = await generator.retrievePeople();
console.log(people);


people.forEach(({firstname,
    lastname,
    recordnumber,
    group,
    phone1,
    phone2,
    mothername,
    fathername,
    motherphone,
    fatherphone,
}) => {
    groups.forEach(group => {
        const insert = `INSERT INTO groups (code, \`code-level\`) VALUES ('${group}', '${level}');`;
        console.log(insert);
    })
});