const BlogModule = require('../models/blog')


const createBlog = async(req,res)=>{
 console.log(req.body)
    try{
        const newblog = await BlogModule.create(req.body);
        res.json(newblog)
    }catch(error){
        res.send("Some Error during create Blog")
    }
};

const returnAllBlog = async(req,res)=>{
   try{
    const blogData = await BlogModule.find()
    // console.log(blogData)
    res.json(blogData)
   }catch(e){
       res.send("some error occored during return all data")
   }
};

const returnSingleBlog = async(req,res)=>{
    const{blogId} = req.params;
    try{
        const blogData = await BlogModule.findById(blogId)
        res.json(blogData)
    }catch(e){
        res.send("Some error Occered !!")
    };
}


const editBlog = async (req,res)=>{
    const{blogId} = req.params;
    try{
        const edit = await BlogModule.findByIdAndUpdate(blogId, req.body,{new:true})
        res.json(edit)
    }catch(e){
        res.send("some error occerd during post edit")
    }
};

const deleteBlog = async(req,res)=>{
    const{blogId}= req.params;
    try{
        const blogDelete = await BlogModule.findByIdAndDelete(blogId)
        res.json(blogDelete)
    }catch(e){
        res.send("error occored during blog delete")

    }
};

module.exports = {returnAllBlog, createBlog, returnSingleBlog, editBlog, deleteBlog}

