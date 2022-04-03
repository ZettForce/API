const mongoose = require('mongoose');
const URL = 'mongodb+srv://ZettForce:Zett1995@cluster0.nwau9.mongodb.net/api';


mongoose.connect(URL, {
    useNewURLParser: true,
    useUnifiedTopology:true
})
.then(db => console.log('Conectado a Mongo DB'))
.catch(err => console.log('Tienes un error', err));

module.exports = mongoose;