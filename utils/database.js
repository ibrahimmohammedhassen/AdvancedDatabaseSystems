const mongoose = require('mongoose');

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:27017/houseprice')
.then(() => {
  console.log('App is Connected To MongoDB using Mongoose package.');

}).catch((error) => {
  console.error(error);
})
