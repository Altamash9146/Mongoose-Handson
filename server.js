const express = require('express');
const router = require('./Route')
const connection = require('./Connection/db')
const server = express()
server.use('/data',router)

server.listen('5050',async(req,res)=>{
    try {
        await connection()
        console.log('server running on port 5050');
    } catch (error) {
        console.log("error occured in running server",error);
    }
})