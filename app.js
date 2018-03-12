require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const path = require('path')
const morgan = require('morgan')
const validator = require('express-validator')

const validateFormat = require('./app/helpers/validate')
require('./app/database/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(validator(validateFormat))
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT
const server = http.createServer(app)

app.use((req, res, next) => {
    res.set('X-Powered-By', 'Lap ... :P')
    next()
})

require('./routes')(app)

app.use((req, res) => res.status(404).json([{
    title: '404', message: 'Route not found'
}]))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public', 'index.html')))

server.listen(port)

module.exports = app
