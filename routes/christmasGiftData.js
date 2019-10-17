const { Router } = require("express");
const models = require("../models");

const router = Router();

router.get("/data", async (req, res) => {
  const results = await models.christmasGiftData.find({});
  res.status(200).send(results);
});

router.get("/data/:id", async (req, res) => {
  const results = await models.christmasGiftData.findOne({
    _id: req.params.id
  });
  res.status(200).send(results);
});

router.post("/data", async (req, res) => {
  const results = await models.christmasGiftData.insert(req.body);
  res.status(200).send(results);
});

router.put("/data/:id", async (req, res) => {
  const data = req.body;
  const results = await models.christmasGiftData.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        giftName: data.giftName,
        giftPrice: data.giftPrice,
        giftDesc: data.giftDesc,
        giftLink: data.giftLink,
        giftImageUrl: data.giftImageUrl,
        importanceRating: data.importanceRating
      }
    },
    req.body
  );
  res.status(200).send(results);
});

router.delete("/data/:id", async (req, res) => {
  const results = await models.christmasGiftData.findOneAndDelete({
    _id: req.params.id
  });
  res.status(200).send(results);
});

module.exports = router;
