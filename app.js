const express = require('express')
const app = express();

app.get('/names', (req,res)=>{
    res.send("Nos Rangsiman");
})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})