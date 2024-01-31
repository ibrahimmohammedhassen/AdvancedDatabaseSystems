# Project name:
House Price
Full Stack Web- Application

# Introduction:
(.................)


 
## Prerequisites
```node.js```
...install node.js into your machines with the latest version installed

```mongoDB```
...setting up the MongoDB as an execution for the project

## How to run the project:
    1- first open command in the project directory
    
    2 - Type: ```code .``` then press enter and that will take you to Visual Studio  
    
    3- then you need to install the Node.js package: ```npm install``` 

## To run this project do the following: 

```npm run devstart``` in the terminal 

## TO access the application

type this localhost or use this URL

project Url: http://localhost:5000/ 

```
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

```

mongodb://localhost:27017/

```
const mongoose = require('mongoose');

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:27017/houseprice')
.then(() => {
console.log('App is Connected To MongoDB using Mongoose package.');


}).catch((error) => {
  console.error(error);
})
```

  
