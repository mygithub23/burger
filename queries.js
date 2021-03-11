

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
