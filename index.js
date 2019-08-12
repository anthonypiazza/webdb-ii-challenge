const server = require('./server');

const db = require('./dbConfig');

server.get('/cars', async (req, res) => {
    try{
        const cars = await db('car-dealers');
        res.json(cars);
    }
    catch(err){
        res.status(500).json({ error: 'Couldnt get cars from DB' })
    }
});

server.post('/cars', async (req, res) => {
    try{
        const cars = await db('car-dealers').insert({
            vin: "1IHJDUSY9P7IUHDGD",
            make: "BMW",
            model: "326i",
            mileage: 90000,
            //when turned integer^ to string it worked and converted auto to number
            //when turning string to number it crashed
            transmissionType: "automatic",
            titleStatus: "clean"
        });;
        res.json(cars);
    }
    catch(err){
        res.status(500).json({ error: 'Couldnt post cars from DB' })
    }
});



server.listen(8000, () => console.log('Listening on Port 8000'))