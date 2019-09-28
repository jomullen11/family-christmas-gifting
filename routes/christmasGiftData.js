const { Router } = require('express')
const models = require('../models')

const router = Router()

router.get('/christmas-gift-data', async (req, res) => {
    const results = await models.christmasData.find({})
    res.status(200).send(results)
})

module.exports = router