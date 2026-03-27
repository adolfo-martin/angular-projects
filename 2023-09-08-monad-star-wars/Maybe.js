export class Maybe {
    // then(value) {
    //     throw new Error('Method not implemented');
    // } 
    // catch(value) { 
    //     throw new Error('Method not implemented');
    // }
}

export class Some extends Maybe {
    constructor(value) {
        super();
        this.value = value;
    }

    // some(value) {
    //     return new Some(value);
    // }

    // none() {
    //     return new None();
    // }

    async thenn(fn) {
        try {
            const result = await fn(this.value);
            console.log(result);
            return new Some(result);
        } catch (error) {
            return new None(error.message);
        }
    }

    async catchh(fn) {
        return this;
    }
}


export class None extends Maybe {
    constructor(value) {
        super();
        this.value = value;
    }

    // some(value) {
    //     return new Some(value);
    // }

    // none() {
    //     return new None();
    // }

    async thenn(fn) {
        return this;
    }

    async catchh(fn) {
        return new None(await fn(this.value));
    }
}
