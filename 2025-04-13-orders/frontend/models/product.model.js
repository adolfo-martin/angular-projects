export default class Product {
  #id;
  #name;
  #description;
  #price;
  #imageUrl;

  constructor(id, name, description, price, imageUrl) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#price = price;
    this.#imageUrl = imageUrl;
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

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    this.#price = value;
  }

  get imageUrl() {
    return this.#imageUrl;
  }

  set imageUrl(value) {
    this.#imageUrl = value;
  }
}