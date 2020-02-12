const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/api", (req, res) => {
  console.log("Our server was hit");
});

// router.get("/link", (req, res) => {
//   db.News.find().then(news => {
//     res.json(news);
//     console.log("oregon live news");
//   });
// });

axios.get("https://www.oregonlive.com/portland/").then(urlResponse => {
  let $ = cheerio.load(urlResponse.data);

  $("h2.river-item__headline--small-screens").each((i, element) => {
    const link = $(element)
      .find("a.river-item__headline-link")
      .attr("href")
      .split(",");

    console.log(link);

    // db.News.find({
    //   headline: healine
    // }).then(result => {
    //   if (result.length > 0) {
    //   } else {
    //     let newObj = {};
    //     newObj.headline = headline.toString();
    //     db.News.create(newObj)
    //       .then(result => {})
    //       .catch(err => res.json(err));
    //   }
    // });
    // res.send("success");
  });
});

module.exports = router;
