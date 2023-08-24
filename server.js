require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./router/task');

const uri = process.env.mongo_url;
const app = express();

// Connecting Mongodb
async function connect() {
    try{
        await mongoose.connect(uri)
        {
            console.log("Connected to Mongo");
        }
    }catch(error){
        console.log(error);
    }
}

 connect();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/',(req,res)=>{
    res.send("POST Method called");
});

app.get('/',(req,res)=>{
    res.send("GET Method called");
});

app.put('/',(req,res)=>{
    res.send("UPDATE Method called");
});

app.delete('/',(req,res)=>{
    res.send("DELETE Method called");
});



app.use("/task",taskRoutes);


app.listen(4000,()=>{
    console.log("Server started on port 4000");
})





