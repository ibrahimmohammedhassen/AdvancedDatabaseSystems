# Project name:

Full Stack Web- Application

# Introduction:
(.................)


## How to run the project:
1- first open command in the project directory
2 - Type: code . then press enter and that will take you to Visual Studio  
3- then you need to install the Node.js package by typing: npm install 

## To run this project do the following: 

```npm run devstart``` in the terminal 

## TO access the application

type this localhost or use this URL

project Url: http://localhost:5000/

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

  
