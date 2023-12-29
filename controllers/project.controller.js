const { getProjectService, createProjectService } = require("../services/project.service")

exports.getProjects=async(req,res,next)=>{
    try {
        const projects= await getProjectService()
        res.status(200).json({
            status:"Success",
            data:projects
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Field",
            message:"Can't get the data",
            error:error.message
        })
    }
}

// Post projects
exports.createProject=async (req, res, next) => {

    try {
        const result = await createProjectService(req.body)

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }
}