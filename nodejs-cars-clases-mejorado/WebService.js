const express = require('express');
const mongoose = require('mongoose');
const Car = require('./car.schema');

class WebService {
    constructor(port, repository) {
        this._port = port;
        this._repository = repository;

        mongoose.connect('mongodb://localhost/cars');

        this._app = express();
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));

        this._configureRoutes();
    }

    listen() {
        this._app.listen(this._port, () =>
            console.log(`Application listening on port ${this._port}`)
        )
    }

    _configureRoutes() {
        this._app.get('/', (req, res) => res.send('Please, use our API.'));
        this._app.get('/api/cars', this._retrieveAllCars);
        this._app.get('/api/cars/:id', this._retrieveCarById);
        this._app.post('/api/cars', this._createCar);
        this._app.put('/api/cars', this._updateCar);
        this._app.delete('/api/cars/:id', this._deleteCarById);
    }

    _retrieveAllCars(req, res) {
        console.log('Retrieving all cars ...');

        Car.find({})
            .exec(function (err, cars) {
                if (err) {
                    res.status(400).json({ ok: false, messaje: `Error: ${err}` });
                } else {
                    res.status(200).json({ ok: true, cars });
                }
            })
    }

    _retrieveCarById(req, res) {
        const carId = req.params.id;

        console.log(`Retrieving the car ${carId}...`);

        Car.find({ _id: carId })
            .exec(function (err, car) {
                if (err) {
                    res.status(400).json({ ok: false, messaje: `Error: ${err}` });
                } else {
                    res.status(200).json({ ok: true, car });
                }
            })
    }

    _createCar(req, res) {
        console.log('Creating car ...');

        const newCar = new Car();
        newCar.brand = req.body.brand;
        newCar.model = req.body.model;

        newCar.save(function (err, car) {
            if (err) {
                res.status(400).json({ ok: false, messaje: `Error: ${err}` });
                return;
            }
            res.status(200).json({ ok: true, car });
        })
    }

    _updateCar(req, res) {
        const carId = req.body.id;

        console.log(`Updating car ${carId}...`);

        Car.findOneAndUpdate(
            { _id: carId },
            {
                $set: {
                    brand: req.body.brand,
                    model: req.body.model
                }
            },
            function (err, car) {
                if (err) {
                    res.status(400).json({ ok: false, messaje: `Error: ${err}` });
                    return;
                }
                res.status(200).json({ ok: true, car });
            }
        )
    }

    _deleteCarById(req, res) {
        const carId = req.params.id;

        console.log(`Deleting the car ${carId}...`);

        Car.findOneAndRemove(
            { _id: carId },
            function (err, car) {
                if (err) {
                    res.status(400).json({ ok: false, messaje: `Error: ${err}` });
                    return;
                }
                res.status(200).json({ ok: true, car });
            }
        )
    }

}

module.exports = Server;