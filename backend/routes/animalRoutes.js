const express = require('express');
const router = express.Router();
const {getAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimalById
} = require('../control/animalControl');


router.route('/').get(getAnimal);

router.route('/').post(createAnimal);

router.route('/:id').put(updateAnimal);

router.route('/:id').delete(deleteAnimal);

router.route('/:id').get(getAnimalById);

module.exports = router;