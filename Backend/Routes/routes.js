const express = require('express');
const router = express.Router();
const Employee = require('../Models/employee');


module.exports = router;
//get api

router.get('/', (req, res)=>{
    Employee.find((err, doc)=>{
        if(err){
            console.log('Error in Get Data',err);
        }else{
            res.send(doc);
        }
    })
    });


//post api
// Base path : http//localhost:3000/employee

router.post('/', (req, res)=>{
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    });
    
    emp.save((err, doc)=>{
        if(err){
            console.log('error in post data',err);
        }else{
            res.send(doc);
        }
    })
});