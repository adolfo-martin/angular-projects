import User from './User.js';

export default class UsersRepository {
    static _users = [
        new User('6173-9371', 'sonia.silverado', 'Sonia', 'Silverado', 's'),
        new User('1498-3581', 'juan.jaramillo', 'Juan', 'Jaramillo', 'j'),
        new User('7398-6817', 'antonio.alcamara', 'Antonio', 'Alcamara', 'a'),
        new User('3871-9893', 'cristina.calanueva', 'Cristina', 'Calanueva', 'c'),
        new User('1893-3879', 'natalia.figueroa', 'Natalia', 'Figueroa', 'Hola1234'),
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