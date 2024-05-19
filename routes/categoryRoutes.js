const {Router} = require('express');
const categoryController = require('../controllers/categoryController');
const categoryRouter = Router();

categoryRouter.post('/create', categoryController.create);
categoryRouter.get('/all/:id', categoryController.all);
categoryRouter.delete('/delete/:id', categoryController.deleteCategory);

module.exports = categoryRouter;