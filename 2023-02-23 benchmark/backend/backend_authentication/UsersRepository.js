import User from './User.js';

export default class UsersRepository {
    static _users = [
        new User('6173-9371', 'amanda.bonaque', 'Amanda', 'Bonaque', 'Hola1234'),
        new User('1498-3581', 'alexsteven.castro', 'Alex Steven', 'Castro', 'Hola1234'),
        new User('7398-6817', 'victor.cecilia', 'Victor', 'Cecilia', 'Hola1234'),
        new User('3871-9893', 'mario.cerdera', 'Mario', 'Cerdera', 'Hola1234'),
        new User('1856-4879', 'mariadelpilar.diaz', 'Maria del Pilar', 'Diaz', 'Hola1234'),
        new User('3793-1659', 'antonioramon.esteban', 'Antonio Ramon', 'Esteban', 'Hola1234'),
        new User('1578-3674', 'cristian.garcia', 'Cristian', 'Garcia', 'Hola1234'),
        new User('2873-5849', 'daniel.lorente', 'Daniel', 'Lorente', 'Hola1234'),
        new User('1973-3789', 'javier.lucas', 'Javier', 'Lucas', 'Hola1234'),
        new User('7895-6879', 'ruben.moreno', 'Ruben', 'Moreno', 'Hola1234'),
        new User('1495-1859', 'adolfo.martin', 'Adolfo', 'Martin', 'Hola1234'),
    ];


    isValidUserAndPassword(username, password) {
        const user = UsersRepository._users
            .find(user => user.username === username && user.password === password);
        return user ? true : false;
    }


    retrieveUsers() {
        return UsersRepository._users;
    }


    retrieveUserByUsername(username) {
        return UsersRepository._users.find(user => user.username === username);
    }
}