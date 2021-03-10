const { response } = require('express');
const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser')
const app = express();
// const db = require('./queries')
// const Joi = require('joi');
app.use(express.json());
const port = 3000;


const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432

})
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.static("public"));

// GET Request to root URL (/)

app.get('/', (req, res) => {
    res.render('home')
    //response.json({Welcome: 'How to create API with Node.js,EXPRESS and PostgreSQL' })
  })
// Endpoints
// console.log( db.getBurgers)
// app.get ('/burgers', (req, res) => {
//     res.render('burger1', db.getBurgers)
// })
// const burgers = (db.getBurgers)
// console.log("test -------------- ", burgers)


// app.get('/burgers', db.getBurgers)
// app.get('/burgers/:id', db.getBurgerById)


// app.post('/burgers', db.createBurger)
// app.put('/burgers/:id', db.updateBurger)
// app.delete('/burgers/:id', db.deleteBurger)



app.get("/burgers", (req, res) => {
    const sql = 'SELECT custorder FROM burger'
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.log ("ERROR --------> ", err.message);
        }
        res.render("burger1", { burgers: result.rows });
    })
    });
// GET /create
app.get("/create", (req, res) => {
    res.render("create", { model: {} });
  });
  
  
 // POST /create
app.post("/create", (req, res) => {
    const sql = "INSERT INTO burger (custorder) VALUES ($1)";
    const { custorder } = req.body;
    const burger = [req.body.custorder];
    console.log("burger --------------->", burger)
    pool.query(sql, burger , (err, result) => {
      // if (err) ...
      console.log("custorder --------------->", custorder)
      res.redirect("/burgers");
    });
  });


// app.get("/", (req, res) => {
//     db.select("*").from("task").then(data => {
//     res.render("index", { todos: data });
//     }).catch(err => res.status(400).json(err));
//     });
    // // create new task
    // app.post("/addTask", (req, res) => {
    // const { textTodo } = req.body;
    // db("task").insert({ task: textTodo }).returning("*")
    // .then(todo => {res.redirect("/")}).catch(err => {
    // res.status(400).json({ message: "unable to create a new task" });
    // });
    // });
    // app.put("/moveTaskDone", (req, res) => {
    // const { name, id } = req.body;
    // if (name === "todo") {
    // db("task")
    // .where("id", "=", id).update("status", 1)
    // .returning("status").then(task => {res.json(task[0])})}
    //  else {
    // db("task").where("id", "=", id).update("status", 0)
    // .returning("status")
    // .then(task => {res.json(task[0])});
    // }
    // });

    app.listen(port, () => {
        console.log(`App running on port ${port}.`)
    })