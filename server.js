const express = require("express"); 
const app = express(); 

const port = process.env.port  ||  3000;


app.get("/", function(req, res) {
  res.send("olá Infinity devs: porta:" + port); 
});

app.listen(port, () => {
  console.log("http://localhost:" + port); 
});