const monk = require("monk");

const DbName = process.env.DbName;
const DbPassword = process.env.DbPassword;
const DbUsername = process.env.DbUsername;

const dbUrl = `mongodb://${DbUsername}:${DbPassword}@cluster0-shard-00-00-eleyj.mongodb.net:27017,cluster0-shard-00-01-eleyj.mongodb.net:27017,cluster0-shard-00-02-eleyj.mongodb.net:27017/${DbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

const DbConnect = monk(dbUrl);
const christmasData = DbConnect.get("ChristmasGifts");

module.exports = {
  christmasData
};
