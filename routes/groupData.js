const { Router } = require('express')
const models = require('../models')

const router = Router()

router.get('/data', async (req, res) => {
    const results = await models.groupData.find({})
    res.status(200).send(results)
})

router.get('/group-name/data', async (req, res) => {
    const results = await models.groupLoginData.find({ _id: "groupNames" })
    res.status(200).send(results)
})

router.get('/data/:id', async (req, res) => {
    const results = await models.groupData.findOne({ _id: req.params.id })
    res.status(200).send(results)
})

router.post('/data', async (req, res) => {
    const results = await models.groupData.insert(req.body)
    res.status(201).send(results)
})

router.put('/data/:id', async (req, res) => {
    const data = req.body
    const results = await models.groupData.findOneAndUpdate({_id: req.params.id}, { $set: {"groupName": data.groupName, "groupAdmin": data.groupAdmin, "groupEmails": data.groupEmails, "giftPriceRange": data.giftPriceRange} }, req.body)
    res.status(201).send(results)
})

router.delete('/data/:id', async (req, res) => {
    const results = await models.groupData.findOneAndDelete({_id: req.params.id})
    res.status(200).send(results)
})

module.exports = router