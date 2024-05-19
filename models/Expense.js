const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    item: {
        type: String,
        unique: true,
        validate: {
            validator: async function(category) {
                const user = await this.constructor.findOne({ category});
                return !user;
            },
            message: "Category already exists"
        }
      },
      quantity:{
        type: Number,
        default: 0
      },
    price: {
        type: Number,
        default: 0.00
      },
      totalPrice:{
        type: Number,
        default: 0.00
      }
},{timestamps: true});

const Expense = mongoose.model('expense', expenseSchema);
module.exports = Expense;