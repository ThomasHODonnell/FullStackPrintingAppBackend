// defines array
const people = [];

export const add = (req, res) => {
  console.log(req.body)
  // adds body to array
  people.push(req.body)
  // return confirmation
  res.json(req.body)
}

export const get = (req, res) => {
  res.json(people)
}

