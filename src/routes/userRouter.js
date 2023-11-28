const { Router } = require('express');
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en la ruta GET /users');
});

module.exports = userRouter;