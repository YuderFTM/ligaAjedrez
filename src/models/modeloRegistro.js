const mongoose = require('mongoose');
const {Schema}= mongoose;

//estructura de la bd
const RegistroSchema=new Schema({
    nombre: { type: String, required:true},
    email: { type: String, required:true},
    password: { type: String, required:true},
});



module.exports = mongoose.model('Registro', RegistroSchema);