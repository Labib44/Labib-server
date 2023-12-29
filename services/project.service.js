const Project = require("../models/Project");

exports.getProjectService = async () => {
    const projects = await Project.find({})
    return projects;
}

// Post project service
exports.createProjectService = async (data) => {
    const product = await Project.create(data)
    return product;
}