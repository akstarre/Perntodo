const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const pool = require("../db");

//Middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo
app.post("/jtodos", async(req, res) => {
    try {

        console.log(req.body)

    } catch (err) {
        console.error(err.message);
    }
})

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {
console.log(`The Server has started listening on port ${PORT}`)
});