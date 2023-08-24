const mongoose = require('mongoose');
const express = require('express');
const taskdb = require("../model/task");
const taskRoutes = express.Router();


// Insert a new entry in database
taskRoutes.post('/',async(req,res)=>{
    try{
        const task = await taskdb.create(req.body);
        res.status(200).json(task);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});


// Get all the tasks from database
taskRoutes.get('/', async(req,res) => {
    try{
        const task = await taskdb.find()
        res.json(task)
    }catch(err){
        console.log('Error:' + err)
    }
});


//Get a specific  task from database
taskRoutes.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const task1 = await taskdb.findById(id);
    res.status(200).json(task1);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});


// Update an existing task in database
taskRoutes.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const update_task = await taskdb.findByIdAndUpdate(id,req.body);
        if(!update_task)
        {
            res.status(404).json({message:`cannot find any product with id ${id}`});
        }
        const updated_task = await taskdb.findById(id);
        res.status(200).json(updated_task);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});


// Delete a task from database
taskRoutes.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const del_task = await taskdb.findByIdAndDelete(id);
        if(!del_task)
        {
            res.status(404).json({message:`cannot find any product with id ${id}`});
        }
        res.status(200).json(del_task);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});

module.exports = taskRoutes;