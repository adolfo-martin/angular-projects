class RepositoryMongoDB {

    _retrieveAllCars(req, res) {
        console.log('Retrieving all cars ...');

        Car.find({})
            .exec(function (err, cars) {
                if (err) {
                    throw new Error(err);
                }

                return cars;
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