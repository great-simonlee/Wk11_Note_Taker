const crud = require("../db/crud");
const express = require("express");

const fs = require("fs");

const app = express();

app.get("/notes", function(req, res) {
    
    crud.parseNote(res);
        



//   console.log(fs.readFile("/Users/seunghoonlee/Documents/bootcamp/Week11/Wk11_Note_Taker/Develop/db/db.json", "utf8", (err, data) => {
//     if (err) {console.log(err)}
//     else {console.log(data)}
// }));
})

app.post("/notes", function(req, res) {

})

module.exports = app;