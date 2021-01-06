const {Movie} = require('../../database');

const getMovies = (cb) => {
  Movie.find((err, docs) => {
    if (err) {
      cb(err);
    } else {
      cb(err, docs);
    }
  })
}

const addMovies = (title, watch, cb) => {
  Movie.create({title: title, watch: watch}, (err, docs) => {
    if (err) {
      cb(err);
    } else {
      cb(err, docs);
    }
  })
}

const deleteMovies = (id, title, cb) => {
  Movie.deleteOne({_id: id}, (err,docs)=> {
    if (err){
      cb(err);
    } else {
      cb(err, docs)
    }
  })
}
module.exports = {
  getMovies,
  addMovies,
  deleteMovies,
}