const express = require("express");
const router = express.Router()
const studentController = require("../controllers/student.controller")

router.post("/new-student", studentController.AddNewStudent);

module.exports = router;