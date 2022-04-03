const carModel = require ('../models/car_model');
const car_Controller = {};

car_Controller.getCars = async(req,res) => {
    const cars = await carModel.find();
    res.json(cars);
};

car_Controller.addCar = async (req, res) =>{
    const car = new carModel(req.body);
    await car.save();
    res.json({'status': 'Coche guardado satisfactoriamente!'});
};

module.exports = car_Controller;