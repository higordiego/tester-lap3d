const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const url = process.env.MONGODB_URL

const options = {
    useMongoClient: true
}

mongoose.connect(url, options)
    .then(() => {
        // console.log('Mongodb Connected : )')
        mongoose.connection.on('error', (err) => {
            console.log(`mongoose connection: ${err}`)
        })
        mongoose.connection.on('reconnected', () => {
            console.log('Reconnected to MongoDB')
        })
    })
    .catch((err) => {
        console.log(`rejected promise ${err}`)
        mongoose.disconnect()
    })
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongodb: bye : )')
        process.exit(0)
    })
})
