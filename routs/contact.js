const router = require('express').Router()
const Contact = require('../models/contact')

router.post('/', async(req, res)=>{
    const contact = new Contact(req.body)
    try{
        const saveContact= await contact.save()
        res.status(200).json(saveContact)

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports= router
