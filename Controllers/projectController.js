const projects = require('../Models/projectSchema')

// add projects
exports.addProjects = (req,res)=>{
    console.log('inside add Project function');
    const userId = req.payload
    console.log(`${userId}`);
    res.status(200).json("addProjects request recieved")
}