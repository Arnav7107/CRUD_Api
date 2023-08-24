const mongoose = require('mongoose');

const taskschema = mongoose.Schema(
    {
        task:{
            type:String,
            required:[true,"Please Enter the Task"]
        },
        name:{
            type:String,
            required:[true,"Please Enter your Name"]
        }
    },
    {
        timestamps:true
    }
)

const taskdb = mongoose.model('taskdb',taskschema);

module.exports = taskdb;