const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')




// register API
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)


// add-project
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),
projectController.addProjects
)

// getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)

// getallprojects
router.get('/projects/all',jwtMiddleware,projectController.getallProjetcs)

// getHomeProject
router.get('/projects/home-projects',projectController.getHomeProjects)

// editProject 
router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProjectController)

// deleteProject
router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)




// export server
module.exports = router
