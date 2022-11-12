const mongoose = require('mongoose');
const { config } = require('dotenv');

config()

async function connect(uri) {
    try {
        mongoose.connect(uri || 'mongodb://localhost/27017')
        console.log('connected');
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = connect