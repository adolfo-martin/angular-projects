export default class Person {
    constructor(id, name, height = undefined, mass = undefined)  {
        this.id = id;
        this.name = name;
        this.height = height;
        this.mass = mass;
    }
}