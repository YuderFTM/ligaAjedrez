const mongoose= require('mongoose');

const user= "YuderTM_user" ;
const password ="YuderTM_user";
const dbname = "veterinaria";
const uri= `mongodb+srv://${user}:${password}@cluster0.y5rvn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri
    // {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(db => console.log('DB conectada'))
    .catch(e=> console.log(e))

module.exports=mongoose;