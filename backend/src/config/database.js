const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/sales', {useNewUrlParser: true, useUnifiedTopology: true})