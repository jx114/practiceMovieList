const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected to MongoDB"));

const movieSchema = new mongoose.Schema({
  title: String,
  watch: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
  Movie,
}