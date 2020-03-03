let path = require('path')
let fs = require('fs')

let dataPath = path.join(__dirname, '../chirps.json');

let chirpsArray = [
    {
      name: "Cheyenne",
      chirp: "hey"
    },
  
    {
      name: "Lexi",
      chirp: "sup"
    },
  
    {
      name: "Jamie",
      chirp: "broker"
    },
  
    {
      name: "Amanda",
      chirp: "salaried"
    },
  
    {
      name: "Emma",
      chirp: "puppy"
    }
  ]

  fs.writeFile(dataPath, JSON.stringify(chirpsArray), err => {
      if(err) console.log(err)
      
  })

  fs.readFile(dataPath, (err, data) => {
      if(err) console.log(err)
      console.log(JSON.parse(data))
  })
