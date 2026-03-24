export default class Processor {
    constructor(id, longname, shortname, socketId, cores, frequency, price, mark) {
        this.id = id;
        this.longname = longname;
        this.shortname = shortname;
        this.socketId = socketId;
        this.cores = cores;
        this.frequency = frequency;
        this.price = price;
        this.mark = mark;
    }
}