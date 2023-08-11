const mongoose = require('mongoose');  
mongoose.set('strictQuery',true)
const url = "mongodb+srv://MongoTest:3KmXjeZQbftGQude@cluster0.1q7zwyp.mongodb.net/?retryWrites=true&w=majority"


const connection = (async(req,res)=>{

    try {
        const client  = await mongoose.connect(url)
            console.log('server connected to atlas Database');
            return client
        } catch (error) {
        console.log(error);
    }

})

module.exports = connection