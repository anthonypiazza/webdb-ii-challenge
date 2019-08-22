const express = require('express');
const db = require('./dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    
    db('car-dealers')
        .then(cars => {
           res.status(200).json(cars); 
        })
        .catch(err => {
           res.status(500).json({ error: 'Couldnt get cars from DB' }) 
        })
});

router.post('/', (req, res) => {
    const newCar = req.body;

    db('car-dealers')
        .insert(newCar)
        .then(newCarID => {
            res.status(200).json(newCarID);
        })
        .catch(err => {
            res.status(500).json({ error: 'Couldnt post cars from DB' })
        })
});

module.exports = router;