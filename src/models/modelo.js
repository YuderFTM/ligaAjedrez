const mongoose = require('mongoose');
const {Schema}= mongoose;

//estructura de la bd
const TareasSchema=new Schema({
    title: { type: String, required:true},
    description: { type: String, required:true}
});



module.exports = mongoose.model('Task', TareasSchema);