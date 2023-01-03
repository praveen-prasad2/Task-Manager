const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    taskname:{type:String,maxLength:10,default:"New Task"},description:{type:String,maxLength:30},completed:{type:Boolean,default:false}
})

const TaskModel =mongoose.model('task',taskSchema)


module.exports=TaskModel