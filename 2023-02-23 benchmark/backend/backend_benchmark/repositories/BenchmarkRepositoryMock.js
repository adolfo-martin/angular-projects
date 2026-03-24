import Socket from '../entities/Socket.js';
import Processor from '../entities/Processor.js';
import Persona from '../entities/Persona.js';

export default class BenchmarkRepositoryMock {

    _sockets = [
        new Socket("1200", "Zócalo 1200", "Intel", 8, 64, 64, 260),
        new Socket("1700", "Zócalo 1700", "Intel", 16, 128, 80, 290),
        new Socket("am4", "Zócalo AM4", "AMD", 16, 64, 48, 280),
        new Socket("am5", "Zócalo AM5", "AMD", 16, 128, 64, 310),
    ];

    _processors = [
        new Processor("am4-01", "AMD Ryzen 7 5800X3D", "R7 5800X3D", "am4", 8, 3.4, 375.90, 1107),
        new Processor("am4-02", "AMD Ryzen 7 5800X", "R7 5800X", "am4", 8, 3.8, 261.25, 978),
        new Processor("am4-03", "AMD Ryzen 5 5600X", "R5 5600X", "am4", 6, 3.7, 198.99, 762),
        new Processor("am4-04", "AMD Ryzen 5 5600G", "R5 5600G", "am4", 6, 3.9, 149.45, 698),
        new Processor("am4-05", "AMD Ryzen 5 4600G", "R5 4600G", "am4", 6, 4.2, 108.90, 649),
        new Processor("am4-06", "AMD Ryzen 5 3600", "R5 3600", "am4", 6, 3.6, 102.90, 687),
        new Processor("am4-07", "AMD Ryzen 3 3200G", "R3 3200G", "am4", 4, 3.6, 94.95, 374),
        new Processor("am4-08", "AMD Ryzen 5 4500", "R5 4500", "am4", 6, 3.6, 89.99, 638),
        new Processor("am4-09", "AMD Ryzen 3 4100", "R3 4100", "am4", 4, 3.8, 79.90, 428),
        
        new Processor("am5-01", "AMD Ryzen 9 7950X", "R9 7950X", "am5", 8, 4.5, 678.80, 2069),
        new Processor("am5-02", "AMD Ryzen 9 7900X", "R9 7900X", "am5", 8, 4.7, 508.90, 1574),
        new Processor("am5-03", "AMD Ryzen 7 7700X", "R7 7700X", "am5", 8, 4.5, 399.90, 1147),
        new Processor("am5-04", "AMD Ryzen 7 7700", "R7 7700", "am5", 8, 3.8, 384.50, 1054),
        new Processor("am5-05", "AMD Ryzen 5 7600X", "R5 7600X", "am5", 6, 4.7, 260.50, 847),
        new Processor("am5-06", "AMD Ryzen 3 7100X", "R3 7100", "am5", 4, 3.1, 160.40, 492),
        new Processor("am5-07", "AMD Ryzen 5 7600", "R5 7600", "am5", 6, 4.2, 240.40, 829),
        new Processor("am5-08", "AMD Ryzen 3 7300X", "R3 7300", "am5", 4, 3.3, 175.60, 518),

        new Processor("1200-01", "Intel Celeron G5905", "Celeron G5905", "1200", 4, 3.5, 48.99, 225),
        new Processor("1200-02", "Intel Core i3 10100F", "i3 10100F", "1200", 4, 3.60, 74.25, 415),
        new Processor("1200-03", "Intel Core i5 10400", "i5 10400", "1200", 6, 2.9, 137.99, 614),
        new Processor("1200-04", "Intel Core i5 11400F", "i5 11400F", "1200", 6, 2.6, 166.05, 649),
        new Processor("1200-05", "Intel Core i5 11600KF", "i5 11600KF", "1200", 6, 3.9, 264.95, 738),
        new Processor("1200-06", "Intel Core i9 11900K", "i9 11950K", "1200", 8, 3.8, 399.90, 1013),
        new Processor("1200-07", "Intel Core i9 11900K", "i9 11900K", "1200", 8, 3.5, 379.90, 956),
        
        new Processor("1700-01", "Intel Pentium Gold G7400", "Pentium G7400", "1700", 4, 3.7, 102.15, 246),
        new Processor("1700-02", "Intel Core i3 12100F", "i3 12100F", "1700", 4, 3.3, 109.99, 467),
        new Processor("1700-03", "Intel Core i5 12400", "i5 12400", "1700", 6, 2.5, 196.35, 683),
        new Processor("1700-04", "Intel Core i5 13400", "i5 13400", "1700", 6, 2.7, 239.89, 738),
        new Processor("1700-05", "Intel Core i5 12600", "i5 12600", "1700", 6, 2.5, 291.85, 701),
        new Processor("1700-06", "Intel Core i7 13700F", "i7 13700F", "1700", 8, 2.4, 389.90, 1025),
        new Processor("1700-07", "Intel Core i7 12700KF", "i7 12700KF", "1700", 8, 3.6, 372.80, 807),
        new Processor("1700-08", "Intel Core i9 12900KF", "i9 12900KF", "1700", 8, 3.2, 514.35, 885),
        new Processor("1700-09", "Intel Core i9 13900KF", "i9 13900KF", "1700", 8, 3.0, 639.50, 1305),
        new Processor("1700-10", "Intel Core i3 12300F", "i3 12300F", "1700", 4, 3.7, 126.90, 498),
    ];

    
    async retrieveSockets() {
        if (this._isThereTechnicalProblem()) {
            throw new Error('Cannot retrieve sockets.');
        }

        return this._sockets;
    }


    async retrieveProcessorsBySocketIdAndCoresQuantity(socketId, coresQuantity) {
        return this._processors
            .filter(processor => processor.socketId === socketId && processor.cores === coresQuantity)
            .map(({ id }) => id)
    }


    async retrieveProcessorById(id) {
        return this._processors.find(processor => processor.id === id)
    }


    _isThereTechnicalProblem() {
        return Math.random() < 0.4 ? true : false;
    }
}
