const express = require('express')

module.exports = function (server) {

    const router = express.Router()
    server.use('/api', router)

    const saleService = require('../api/saleService')
    saleService.register(router, '/sales')
}