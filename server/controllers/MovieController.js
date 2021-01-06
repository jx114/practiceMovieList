const models = require('../models/MovieModel.js')

const getMovies = (req, res) => {
  models.getMovies((err, docs)=> {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(docs);
    }
  });
}

const addMovies = (req, res) => {
  const {title, watch} = req.body;
  models.addMovies(title, watch, (err,docs) => {
    if (err){
      res.sendStatus(500);
    } else {
      res.status(201).send(`You've added ${title}!`);
    }
  });
}

const deleteMovies = (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  models.deleteMovies(id, title, (err, docs) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(`You've deleted ${title} with the id of: ${id}`);
    }
  });
}
module.exports = {
  getMovies,
  addMovies,
  deleteMovies,
}