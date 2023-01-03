const express = require("express")
const app = express()
const taskRouter = require("./Routes/task")
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/task-manager?retryWrites=true&w=majority")

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())


app.use("/",taskRouter)

app.listen(5000, (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
})