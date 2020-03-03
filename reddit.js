let path = require("path");
let fs = require("fs");
let request = require("request-promise");

let dataPath = path.join(__dirname, "/popular-articles.json");

request("https://reddit.com/r/popular.json")
  .then(body => {
    let map = JSON.parse(body).data.children.map(item => {
      return {
        title: item.data.title,
        url: item.data.url,
        author: item.data.author
      };
    });

    fs.writeFile(dataPath, JSON.stringify(map), err => {
      if (err) console.log(err);
    });
  })
  .catch(err => {
    if (err) console.log(err);
  });
