import express from 'express';
import cors from 'cors'; 
import {get, add} from './api/index.js'
const app = express()
const port = 3001


// parses incoming to JSON to req.body
app.use(cors()); 
app.use(express.json());

// get request @localhost:3000/api & return array in JSON format
app.get('/api', (req, res) => get(req, res));
  
//recieves post request
app.post('/api', (req, res) => add(req, res));

// opens/ listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

