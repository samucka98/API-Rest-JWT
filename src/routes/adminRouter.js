const express = require('express');
const adminRouter = express.Router();

const multer = require('multer');
const UploadConfig = require('../middlewares/Upload');
const uploadConfig = new UploadConfig();
const upload = multer(uploadConfig).useMulterUpload;

const UserController = require('../controllers/UserController');
const userController = new UserController();

adminRouter.get('/users', userController.index);
adminRouter.post('/users', upload.single('avatar'), userController.register);
adminRouter.put('/users/:id', userController.update);
adminRouter.delete('/users/:id', userController.delete);

module.exports = adminRouter;