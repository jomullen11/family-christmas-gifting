const { Router } = require('express')
const models = require('../models')

const router = Router()

router.get('/data', async (req, res) => {
    const results = await models.personData.find({})
    res.status(200).send(results)
})

router.get('/', async (req, res) => {
    const results = await models.personData.find({})
    res.status(200).send(results)
})

router.get('/:id', async (req, res) => {
    const results = await models.personData.findOne({ _id: req.params.id })
    res.status(200).send(results)
})

router.post('/', async (req, res) => {
    const results = await models.personData.insert(req.body)
    res.status(201).send(results)
})

router.put('/:id', async (req, res) => {
    const data = req.body
    const results = await models.personData.findOneAndUpdate({_id: req.params.id}, { $set: {"name": data.name, "email": data.email } }, req.body)
    res.status(201).send(results)
})

router.delete('/:id', async (req, res) => {
    const results = await models.personData.findOneAndDelete({_id: req.params.id})
    res.status(200).send(results)
})

module.exports = router