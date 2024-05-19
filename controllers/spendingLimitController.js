const SpendingLimit = require('../models/SpendingLimit');


module.exports.create = async(req,res)=>{
    try{

        const {userId, yearMonth, limit} = req.body;
        const user = await SpendingLimit.create({userId, yearMonth, limit, remainingLimit:limit});
        res.status(201).json({status: "Success",message: "Bso successfully created!"})
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.all = async(req,res)=>{
    try{
        const {id} = req.params;
        const bso = await SpendingLimit.find({userId: id});
        res.status(201).json({status: "Success",data: bso})
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
module.exports.update = async(req,res)=>{
    try{
        const {id} = req.params;
        const {limit} = req.body;
        const bso = await SpendingLimit.updateOne({_id: id},{ limit,remainingLimit:limit});
        res.status(201).json({status: "Success",message: "Record successfully updated!"});
    }catch(err){
        res.status(500).json({status: "Failure",message: err})
    }
}
