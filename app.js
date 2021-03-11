const { response } = require('express');
const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser')
const app = express();
 const db = require('./queries1')
// const Joi = require('joi');
app.use(express.json());
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

// GET Request to root URL (/)

app.get('/', (req, res) => {
    const burgers = (db.getBurgers())
console.log("test --->>----------- ", burgers)
    res.sendFile('home')
    //response.json({Welcome: 'How to create API with Node.js,EXPRESS and PostgreSQL' })
  })
// Endpoints
// console.log( db.getBurgers)
// app.get ('/burgers', (req, res) => {
//     res.render('burger1', db.getBurgers)
// })
const burgers = (db.getBurgers)
console.log("test result--------<<<------ ", burgers)


app.get('/burgers', db.getBurgers)
app.get('/burger/:id', db.getBurgerById)


// app.post('/burgers', db.createBurger)
// app.put('/burgers/:id', db.updateBurger)
// app.delete('/burgers/:id', db.deleteBurger)


    app.listen(port, () => {
        console.log(`App running on port ${port}.`)
    })