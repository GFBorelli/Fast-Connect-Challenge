const restful = require('node-restful')
const mongoose = restful.mongoose

const saleSchema = new mongoose.Schema({
    description: { type: String, required: true },
    saleWay: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
})

module.exports = restful.model('Sale', saleSchema)