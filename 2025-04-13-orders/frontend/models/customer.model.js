export default class Customer {
  #id;
  #name;
  #email;
  #phone;
  #address;

  constructor(id, name, email, phone, address) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#phone = phone;
    this.#address = address;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  get phone() {
    return this.#phone;
  }

  set phone(value) {
    this.#phone = value;
  }

  get address() {
    return this.#address;
  }

  set address(value) {
    this.#address = value;
  }
}