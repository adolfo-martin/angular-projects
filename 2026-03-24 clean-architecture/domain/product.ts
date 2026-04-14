export class Product {
    #price: number;

    public constructor(
        public readonly id: string,
        public readonly name: string,
        price: number, 
    ) {
        this.#price = price;
    }

    public get price() {
        return this.#price;
    }

    public set price(value: number) {
        if (value < 0) {
            throw new ProductException('Price cannot be fewer than 0');
        }
        this.#price = value;
    }
}


export class ProductException extends Error {
    public constructor(message: string) {
        super(message);
    }

    public toString() {
        return `[Product class error]: ${this.message}. ${this.cause}`;
    }
}