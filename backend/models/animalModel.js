const mongoose = require('mongoose');   

const animalSchema = new mongoose.Schema({  
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Animal', animalSchema);  