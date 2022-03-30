const mongoose = require('mongoose');
const URL = 'mongodb+srv://Admin123:pa$$word@cluster0.1x3te.mongodb.net/test';


mongoose.connect(URL, {
    useNewURLParser: true,
    useUnifiedTopology:true
})
.then(db => console.log('Conectado a Mongo DB'))
.catch(err => console.log('Tienes un error', err));

module.exports = mongoose;