const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const controller = require('./controllers/MovieController.js');
const {Movie} = require('../database');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send("Hello World!");
// });

app.get('/movies', controller.getMovies);

app.post('/movies', controller.addMovies);
// app.post('/movies', (req, res) => {
//   const {title, watch} = req.body;
//   console.log(Movie);
//   Movie.create({title: title, watch: watch}, (err, docs) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.status(201).send(`You've added ${title}`);
//     }
//   });
// });
app.delete('/movies/:id', controller.deleteMovies);
// app.delete('/movies/:id', (req, res)=> {
//   const {id} = req.params;
//   const {title} = req.body;
//   Movie.deleteOne({_id: id}, (err, docs)=>{
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.status(200).send(`You've deleted ${title}, with the id of: ${id}`)
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});