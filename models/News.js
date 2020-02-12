const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  headline: {
    type: String
  }
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
