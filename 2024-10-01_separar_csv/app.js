import fs from 'node:fs/promises';
// const fs = require('node:fs/promises');


async function readStudentsFromFile(file) {
    const data = await fs.readFile(file, { encoding: 'utf8' });
    const studentsAsText = data.split('\n');
    const dataAsArrays = studentsAsText
        .map(text => text.split(','))
        .map(student => ({ firstname: student[17], lastname: student[18], group: student[19] }))
        .filter(student => student.group !== undefined && student.group.length === 3);
    return dataAsArrays;
}


function getUniqueGroups(students) {
    const groups = new Set(students.map(student => student.group));
    return Array.from(groups);
}

function getStudentsOfGroup(students, group) {
    return students.filter(student => student.group === group);
}

async function writeStudentsToFilesByGroups(students, groups) {
    const promises = groups.map(group => {
        const studentsOfGroup = getStudentsOfGroup(students, group);
        const studentsAsString = studentsOfGroup.reduce((acc, cur) => acc += ',' + JSON.stringify(cur) + '\n', '');
        return fs.writeFile(`${group}.csv`, studentsAsString);
    });
    await Promise.all(promises);
}


const students = await readStudentsFromFile('pendientesESO.csv');
const groups = getUniqueGroups(students).sort();
await writeStudentsToFilesByGroups(students, groups);