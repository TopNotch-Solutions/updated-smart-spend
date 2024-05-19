const Category = require('../models/Category');
const SpendingLimit = require('../models/SpendingLimit');


module.exports.create = async(req,res)=>{
    try{
        const {spendingLimitId, category, categoryLimit} = req.body;
        const {remainingLimit} = await SpendingLimit.findOne({_id:spendingLimitId});
    
        if(remainingLimit < categoryLimit){
            res.status(404).json({status:"Failure", message:"The amount allocated exceeds the total limit"})
            }else{
            if( remainingLimit <= 0){
                res.status(404).json({status:"Failure", message:"The amount allocated exceeds the total limit"})
            }else{
                const newRemainingLimit = remainingLimit - categoryLimit;
            await SpendingLimit.updateOne({_id:spendingLimitId},{remainingLimit:newRemainingLimit});
            const user = await Category.create({spendingLimitId, category, categoryLimit, remainingCategoryLimit:categoryLimit});
            res.status(201).json({status: "Success",message: "Bso successfully created!"})
            }
        }
        
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.all = async(req,res)=>{
    try{
        const {id} = req.params;
        const bso = await Category.find({spendingLimitId: id});
        res.status(201).json({status: "Success",data: bso})
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.deleteCategory = async(req,res)=>{
    try{

        const {id} = req.params;
        const {categoryLimit, spendingLimitId} =  await Category.findOne({_id: id});

        const {remainingLimit} = await SpendingLimit.findOne({_id:spendingLimitId});

            const newLimit = categoryLimit + remainingLimit;
            await SpendingLimit.updateOne({_id:spendingLimitId},{remainingLimit:newLimit});
            const bso = await Category.findByIdAndDelete({_id: id});
        res.status(201).json({status: "Success",message: "Record successfully updated!"});
        
        
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
