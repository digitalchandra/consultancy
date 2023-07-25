const ExamModule = require('../models/testPreaparation')

const createExam = async(req,res)=>{

    try{
        const exam = await ExamModule.create(req.body)
        res.json(exam)
    }
    catch(error){
        res.send('Some Error Occored During the Creating Test Preparation')
    }
}
const returnAllExam = async(req,res)=>{
    try{
        const examData = await ExamModule.find()
        res.json(examData)
    }catch(error){
        res.send('Some Error Occored Return all Test Preparation')
    }
}

const returnSingleExam = async(req,res)=>{
    const {examId} = req.params;
    try{
        const singlereturn = await ExamModule.findById(examId)
        res.json(singlereturn)
    }
    catch(error){
        res.send('Some Eerror Occored During the Return Single Test Preparation Post')
    }

}


const editExam = async(req,res)=>{
    const {examId} =req.params;
    try{
        const examEdit = await ExamModule.findByIdAndUpdate(examId,req.body,{new:true})
        res.json(examEdit)
    }catch(error){
        res.send('Some Error Occored During the Edit Test Preparation')
    }
}

const deleteExam = async(req,res)=>{
    const{examId} = req.params;
    try{
        const deleteExam = await ExamModule.findByIdAndDelete(examId)
        res.json(deleteExam)
    }catch(error){
        res.send('Some Error Occored During the Delete Test Post ')
    }
}
module.exports ={createExam,returnAllExam,returnSingleExam,editExam,deleteExam}