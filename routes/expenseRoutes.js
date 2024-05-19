const {Router} = require('express');
const expenseController = require('../controllers/expenseController');
const expenseRouter = Router();

expenseRouter.post('/create', expenseController.create);
expenseRouter.get('/all/:id', expenseController.all);
expenseRouter.put('/update/:itemupdate', expenseController.item);
expenseRouter.put('/update/:quantityupdate', expenseController.quantity);
expenseRouter.delete('/delete/:id', expenseController.delete);

module.exports = expenseRouter;