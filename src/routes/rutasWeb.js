const express = require('express');
const router = express.Router();
const Task = require('../models/modelo');

//ingreso a la db tareas para ver datos en la db
router.get('/', async(req, res) => {

    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks)
});

//obtener un unico dato de la db por medio del id
router.get('/:id', async(req, res) => {
    const tasks= await Task.findById(req.params.id);
    res.json(tasks);
})

//ver datos agregar
router.post('/', async(req, res) => {
    const {title, description} = req.body;
    const task=new Task({title,description});
    await task.save();
    console.log(task);
    res.json({status:'tarea guardada'});
})

//actualizar datos por id
router.put('/:id',  async(req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status:'tarea actualizada'})
});

//eliminar dato de db
router.delete('/:id',  async(req, res) => {
   
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'tarea Eliminada'})
});

module.exports=router;



