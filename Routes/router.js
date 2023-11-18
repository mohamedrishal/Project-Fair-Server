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



// export server
module.exports = router
