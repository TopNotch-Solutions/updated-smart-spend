const {Router} = require('express');
const spendingLimitController = require('../controllers/spendingLimitController');
const spendingLimitRouter = Router();

spendingLimitRouter.post('/create', spendingLimitController.create);
spendingLimitRouter.get('/all/:id', spendingLimitController.all);
spendingLimitRouter.put('/update/:id', spendingLimitController.update);

module.exports = spendingLimitRouter;