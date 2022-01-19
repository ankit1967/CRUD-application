const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log(' DataBase Connection is success');
    }else{
        console.log('error in connection'+ err);
    }
})

module.exports = mongoose;