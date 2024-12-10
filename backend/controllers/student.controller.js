const Sequelize = require("sequelize");
const Student = require("./../db/models/student");
const Mark = require("./../db/models/mark");


const AddNewStudent = async () => {
    try {
        let {studentName, studentEmail, markSheet} = req.body;

        const newStudent = await Student.create({name: studentName, email: studentEmail });
        markSheet = markSheet.map((el)=>{
            return {
                ...el,
                student_id: newStudent.id
            }
        })
        const newMarks = await Mark.bulkCreate(markSheet)
        res.status(201).json({
            id: newStudent.id,
            name: newStudent.name,
            email: newStudent.email
        });
    } catch (err) {
        console.error('Error adding student:', err);
        res.status(500).json({ message: 'Error in adding student' });
    }
}

module.exports =  {
    AddNewStudent
}