const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

// parses incoming to JSON to req.body
app.use(cors()); 
app.use(express.json());

// defines array
const people = [];

// get request @localhost:3000/api
app.get('/api', (req, res) => {
  // returns your array in JSON format
  res.json(people)
})

//recieves post request
app.post('/api', (req, res) => {
  console.log(req.body)
  // adds body to array
  people.push(req.body)
  // return confirmation
  res.json(req.body.name)
})

// opens/ listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

