const mongoose = require('mongoose')
console.log("-----------------------------------------");
console.log("DEBUG - The read URI is:", process.env.MONGO_URI);
console.log("-----------------------------------------");
const URL = process.env.MONGO_URI

mongoose.connect(URL)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB ERROR: '))

module.exports = {db, mongoose}