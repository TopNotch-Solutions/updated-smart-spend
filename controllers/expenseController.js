const Expense = require('../models/Expense');
const Category = require('../models/Category');


module.exports.create = async(req,res)=>{
    try{
        const {categoryId, item, quantity,price} = req.body;
        const newTotalPrice = quantity * price;
       const {remainingCategoryLimit} = await Category.findOne({_id:categoryId});
       if(remainingCategoryLimit < newTotalPrice){
        res.status(404).json({status:"Failure", message:"The amount allocated exceeds the total limit"})
       }else{
        if(remainingCategoryLimit <= 0){
            res.status(404).json({status:"Failure", message:"The amount allocated exceeds the total limit"})
        }else{
            const newRemainintCategoryLimit = remainingCategoryLimit -newTotalPrice;
            await Category.updateOne({_id:categoryId},{remainingCategoryLimit:newRemainintCategoryLimit});
            const user = await Expense.create({categoryId, item, quantity,price,totalPrice:newTotalPrice});
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
        const bso = await Expense.find({categoryId: id});
        res.status(201).json({status: "Success",data: bso})
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.item = async(req,res)=>{
    try{
        const {itemupdate} = req.params;
        const {item, quantity, price} = req.body;
        const newTotalPrice = quantity * price;
        const bso = await Expense.updateOne({_id: itemupdate},{ item, quantity,price,totalPrice:newTotalPrice});
        res.status(201).json({status: "Success",message: "Record successfully updated!"});
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.quantity = async(req,res)=>{
    try{
        const {quantityupdate} = req.params;
        const {quantity,price} = req.body;
        const newTotalPrice = quantity * price;
        const bso = await Expense.updateOne({_id: id},{ quantity,price,totalPrice:newTotalPrice});
        res.status(201).json({status: "Success",message: "Record successfully updated!"});
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.delete = async(req,res)=>{
    try{

        const {id} = req.params;
        const {totalPrice, categoryId} =  await Expense.findOne({_id: id});

        const {remainingCategoryLimit} = await Category.findOne({_id:categoryId});

            const newLimit = totalPrice + remainingCategoryLimit;
            await Category.updateOne({_id:categoryId},{remainingCategoryLimit:newLimit});
            const bso = await Expense.findByIdAndDelete({_id: id});
        res.status(201).json({status: "Success",message: "Record successfully updated!"});
        
        
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}

