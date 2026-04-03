export class User {
    #id;
    #username;
    #firstname;
    #lastname;

    /**
     * 
     * @param {number} id
     * @param {string} username 
     * @param {string} firstname 
     * @param {string} lastname 
     */
    constructor(id, username, firstname, lastname) {
        this.#id = id;
        this.#username = username;
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get id() {
        return this.#id;
    }


    get firstname() {
        return this.#firstname;
    }


    get lastname() {
        return this.#lastname;
    }
}