const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const mongoose=require('./src/database');
const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3001);

//funciones

app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use(('/api'),require('./routes/rutasWeb'));
app.use(('/registro',require('./routes/tareaRegistro')))

//archivos estaticos
// console.log();
app.use(express.static(path.join(__dirname, 'public')))

// inicio del servidor
app.listen(app.get('port'), () => {
    console.log('Server en port ' + app.get('port'));

})