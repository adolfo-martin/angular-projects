import Student from '../entities/Student';
import SchoolRepositoryInterface from './SchoolRepositoryInterface';
import crypto from 'crypto';

export default class SchoolRepositoryMock implements SchoolRepositoryInterface {

    private static _students: Student[] = SchoolRepositoryMock.setupStudents();


    public async retrieveStudents(): Promise<Student[]> {
        return SchoolRepositoryMock._students;
    }


    static setupStudents(): Student[] {
        const students: Student[] = [];
        students.push(new Student(crypto.randomUUID(), 'Luis', 'Lorente'));
        students.push(new Student(crypto.randomUUID(), 'Mónica', 'Millán'));
        students.push(new Student(crypto.randomUUID(), 'Rubén', 'Ramírez'));
        return students;
    }
}