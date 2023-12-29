const express = require('express')
const router = express.Router()
const projectController= require('../controllers/project.controller')

// get project
router.route('/')
    .get(projectController.getProjects)
    .post(projectController.createProject)


module.exports = router;