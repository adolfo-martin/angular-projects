export class Product {
    constructor(id, name, description, price, stock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    // static fromRow(row) {
    //     return new Product(
    //         row.id,
    //         row.name,
    //         row.description,
    //         row.price,
    //         row.stock
    //     );
    // }
}