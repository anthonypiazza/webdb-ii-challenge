const express = require('express')

const carRouter = require('./carRouter');

const server = require('./server');

server.use(express.json());

server.use('/cars', carRouter)

server.listen(8000, () => console.log('Listening on Port 8000'))