const express = require('express');
const router = express.Router();
const Task = require('../models/modeloRegistro');

//ingreso a la db tareas para ver datos en la db
router.get('/registros', async(req, res) => {

    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks)
});

//obtener un unico dato de la db por medio del id
router.get('/registros:id', async(req, res) => {
    const tasks= await Task.findById(req.params.id);
    res.json(tasks);
})

//ver datos agregar
router.post('/registros', async(req, res) => {
    const {nombre,email,pass} = req.body;
    const task=new Task({nombre,email,pass});
    await task.save();
    console.log(task);
    res.json({status:'tarea guardada'});
})

//actualizar datos por id
router.put('/registros:id',  async(req, res) => {
    const {nombre,email,pass} = req.body;
    const newTask = {nombre,email,pass};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status:'tarea actualizada'})
});

//eliminar dato de db
router.delete('/registros:id',  async(req, res) => {
   
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'tarea Eliminada'})
});

module.exports=router;