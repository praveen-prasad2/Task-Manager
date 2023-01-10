const TaskModel = require("../Models/taskmodel")

const addTask = async (req, res) => {
    try {
        let data = await TaskModel.create(req.body)
        res.json({
            success:true,
            message:"Task added successfully",
            data
        })
    } catch (error) {
        res.json({
            success:false,
        message:"Task adding unsuccessful"})
    }
}
const getAllTask = async (req,res) => {
    try {
        let alltask = await TaskModel.find(req.body)
        res.json({
            success:true,
            message:"Got all Tasks",
            alltask
        })
    } catch (error) {
        res.json({
            success:false,
        message:"can't get all task"})
    }
}
const getOneTask = async (req,res) => {
    try {
        let task = await TaskModel.findOne({ _id: req.params.id })
        res.json(task)
    } catch (error) {
        res.json("cant get task")
    }
}
const updateTask = async (req,res) => {

    let newtask = await TaskModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({
        success: true,
        message: "updated succesfully"
    })

}
const deleteTask = async (req, res) => {
    let deltask = await TaskModel.findOneAndDelete({ _id: req.params.id })
    res.json(deltask)
}
module.exports = { addTask, getAllTask, getOneTask, updateTask, deleteTask }