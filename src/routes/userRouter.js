const { Router } = require('express');
const userRouter = Router();

const { getAll } = require('../controllers/userController');

userRouter.get('/', getAll);

module.exports = userRouter;
