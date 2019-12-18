require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const app = express()
app.use(express.json())
const {SERVER_PORT} = process.env

app.get('/api/jokes', ctrl.getJokes)
app.get('/api/jokes/specific', ctrl.specificJoke)
app.put('/api/jokes/:id', ctrl.updateJoke)
app.delete('/api/jokes/:id', ctrl.deleteJoke)



app.listen(SERVER_PORT, () => console.log(`We're going on ${SERVER_PORT}`))