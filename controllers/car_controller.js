const carModel = require ('../models/car_model');
const carController = {};

carController.getCars = async(req,res) => {
    const cars = await carModel.find();
    res.json(cars);
};

carController.addCar = async (req, res) =>{
    const car = new carModel(req.body);
    await car.save();
    res.json({'status': 'Coche guardado satisfactoriamente!'});
};

module.exports = carController;