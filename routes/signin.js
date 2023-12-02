const express = require('express');
const signin_router = express.Router();
const signin_controller = require('../controllers/signin');

signin_router.post("/", signin_controller.signin);
signin_router.get("/", function(req,res){
    console.log("in backend");
    res.status(200).json({data: "helloworld"})
})

module.exports = signin_router;