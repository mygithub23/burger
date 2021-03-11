const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432

})


const getBurgers = (request, response) => {
    pool.query('SELECT * FROM burger', (error, result) => {
      if (error) {
        throw error
      }
      response.render("burger2", { burgers: result.rows });
     // response.status(200).json(results.rows)
    })
  }

  const getBurgerById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM burger WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.rows)
    })
  }

  module.exports = {
      getBurgers,
      getBurgerById,
  }