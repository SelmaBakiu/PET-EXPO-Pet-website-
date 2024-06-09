const asyncHandler = require('express-async-handler');

const Animal = require('../models/animalModel');

const getAnimal = asyncHandler(async(req, res) => {
    const animals = await Animal.find({});
    res.json(animals);
});

const createAnimal = asyncHandler(async(req, res) => {
    console.log(req.body);
    const {type, name} = req.body;
    if(!type || !name){
        return res.status(400).json({msg: 'Please include name and type'});
    }
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
    res.send('post request to the homepage');
});  

const updateAnimal = asyncHandler(async(req, res) => {
    const animal = await Animal.findById(req.params.id);
    if(animal){
        animal.type = req.body.type || animal.type;
        animal.name = req.body.name || animal.name;
        const updatedAnimal = await animal.save();
        res.json(updatedAnimal);
    }else{
        res.status(404).json({msg: 'Animal not found'});
    }
});

const deleteAnimal = asyncHandler(async(req, res) => {
    const animal = await Animal.findById(req.params.id);
    if(animal){
        await animal.deleteOne();
        res.json({msg: 'Animal removed'});
    }else{
        res.status(404).json({msg: 'Animal not found'});
    }
});

const getAnimalById = asyncHandler(async(req, res) => {
    const animal = await Animal.findById(req.params.id);
    if(animal){
        res.json(animal);

    }else{
        res.status(404).json({msg: 'Animal not found'});
    }
});

module.exports = {getAnimal, createAnimal, updateAnimal, deleteAnimal, getAnimalById};