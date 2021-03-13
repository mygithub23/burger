const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432

})


const getBurgers = (request, response) => {
    pool.query('SELECT * FROM burgers', (error, result) => {
      if (error) {
       console.log("getBurgers Error ======>", error)
      }
      console.log("resule.rows ======", result.rows)
      response.render("burger2", { burgers: result.rows });
     // response.status(200).json(results.rows)
    })
  }

  
// CREATE ROUTE FUNCTION TO ADD NEW RECORD INTO THE DATABASE
const addBurger = (request, response) => {
  const { burger_name } = request.body

  pool.query('INSERT INTO burgers (burger_name) VALUES ($1)', [burger_name], (error, results) => {
    if (error) {
      console.log("addBurger Error ======>", error)
    }
    response.status(201).send('A new burger has been added to the database')
  })
}


const updateBurger = (request, response) => {
  const id = parseInt(request.params.id)
  //const { status } = request.body
  const state = false;
  pool.query(
    'UPDATE burgers SET status = $1  WHERE id = $2',
    [state, id],
    (error, results) => {
      if (error) {
        console.log("updateBurger Error ======>", error)
      }
      response.status(200).send('Burger has been updated in the database')
    }
  )
}


  module.exports = {
    getBurgers,
    addBurger,
    updateBurger,
  }