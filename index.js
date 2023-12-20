const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");

const homeRouter = require("./routes/home")

app.use("/", homeRouter)

 
 const addRouter = require("./routes/add")

app.use("/add", addRouter)



app.listen(5000);

