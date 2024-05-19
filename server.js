const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const spendingLimitRouter = require('./routes/spendingLimitRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const expenseRouter = require('./routes/expenseRoutes');
//const {checkUser,requireAuth} = require('./middlewares/authMiddleware');

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

//database connection
const dbURI = 'mongodb://127.0.0.1:27017/smart-spend';
mongoose.connect(dbURI)
.then((result)=>{
    app.listen(3001);
    console.log('listening');
})
.catch((err)=>{
    console.log(err);
});

//routes
app.use('/auth',authRoutes);
app.use('/limits', spendingLimitRouter);
app.use('/category', categoryRouter);
app.use('/expense',expenseRouter)