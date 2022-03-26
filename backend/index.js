const express = require ("express")
const cors = require("cors")
const connectDatabase = require("./database/database");
// const registerUser = require("./route/route")
const app = express ();


connectDatabase();
const port = process.env.PORT || 5002


app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.get('/', (req, res) =>{
    res.send("MY api")
});
app.get('/login', (req, res) =>{
        res.send("MY api")
});
app.post('/register', (req, res) =>{
     console.log(`req.body.name`)
})
app.listen(port, ()=>{
    console.log( `Listning to port no ${port} `)
});