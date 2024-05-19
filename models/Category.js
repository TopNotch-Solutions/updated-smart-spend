const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    spendingLimitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SpendingLimit',
        required: true
    },
    category: {
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
    categoryLimit: {
        type: Number,
        required: true,
        default: 0.00
      },
      remainingCategoryLimit: {
        type: Number,
        required: true,
        default: 0.00
      }
},{timestamps: true});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;