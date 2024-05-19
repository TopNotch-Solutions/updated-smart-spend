const mongoose = require('mongoose');

const spendingLimitSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    yearMonth: {
        type: Date,
        required: true,
        unique: true,
        validate: {
            validator: async function(yearMonth) {

                const year = yearMonth.getFullYear();
                const month = yearMonth.getMonth();
                
                const existingRecord = await this.constructor.findOne({ 
                    yearMonth: { 
                        $gte: new Date(year, month, 1),
                        $lt: new Date(year, month + 1, 1) 
                    }
                });
                
                return !existingRecord;
            },
            message: "Record already exists"
        }
    },
    limit: {
        type: Number,
        required: true,
        default: 0.00
      },
      remainingLimit: {
        type: Number,
        default: 0.00
      }
      
},{timestamps: true});

const SpendingLimit = mongoose.model('spendingLimit', spendingLimitSchema);
module.exports = SpendingLimit;