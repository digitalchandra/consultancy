const FaqModule = require('../models/faq')

const createFaq = async(req,res)=>{
     console.log(req.body)
    try{
        const faq = await FaqModule.create(req.body)
        res.json(faq)
    }catch(error){
        res.send("some error occred during the FAQ create")
    }
}

const returnFaq = async (req,res)=>{
    try{
        const faqreturn = await FaqModule.find()
        res.json(faqreturn)
    }catch(error){
        res.send('some error occored durng product return')
    }
}

const returnSingleFaq = async(req,res)=>{
    const{faqId} = req.params;
    try{
        const faqreturn = await FaqModule.findById(faqId)
        res.json(faqreturn)
    }catch(error){
        res.send('some error occored during the Single Faq return')
    }
}

const updateFaq = async(req,res)=>{
    const{faqId} = req.params;
    try{
        const updatefaq = await FaqModule.findByIdAndUpdate(faqId, req.body,{new:true})
        res.json(updatefaq)
    }catch(error){
        res.send('some error occred during the proudct update')
    }
}

const deleteFaq = async (req,res)=>{
    const{faqId} = req.params;
    try{
        const faqdelete = await  FaqModule.findByIdAndDelete(faqId)
        res.json(faqdelete)
    } catch(error){
        res.send('some error occored during the product delete')
    }
}
module.exports={createFaq,returnFaq,returnSingleFaq,updateFaq,deleteFaq}