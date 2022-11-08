//import express and cors packages inside of my server

const express = require('express');
const cors = require('cors'); //cors = "cross origin resource sharing"

//invoke express and save to a new var called app

const app = express()
let {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

//set up middleware - external code you want to run whenever your code starts
app.use(express.json())
app.use(cors())


app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses/', createHouse)
app.put('/api/houses/:id', updateHouse)


//open door to server
app.listen(4004, () => console.log('Docked at port 4004'))