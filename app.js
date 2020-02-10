// $(document).ready(function() {
//   console.log("please work");
// });

const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.oregonlive.com/portland/").then(urlResponse => {
  let $ = cheerio.load(urlResponse.data);

  $("h2.river-item__headline--small-screens").each((i, element) => {
    const link = $(element)
      .find("a.river-item__headline-link")
      .attr("href")
      .split(",");

    console.log(link);
  });
});
