const server = require('./server');

const db = require('./dbConfig');

server.get('/cars', (req, res) => {
    
    db('car-dealers')
        .then(cars => {
           res.status(200).json(cars); 
        })
        .catch(err => {
           res.status(500).json({ error: 'Couldnt get cars from DB' }) 
        })
});

server.post('/cars', (req, res) => {
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



server.listen(8000, () => console.log('Listening on Port 8000'))