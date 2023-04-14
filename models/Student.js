const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    Stu_Name: String,
    Stu_Age: Number,
    Mail_Id: String
})
module.exports = mongoose.model("Student",studentSchema)
