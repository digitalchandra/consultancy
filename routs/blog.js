const express = require('express')
const router = express.Router()
const {
    createBlog,
    returnSingleBlog,
    returnAllBlog,
    editBlog,
    deleteBlog
    

} = require('../controller/blog')

router.get("/:blogId",returnSingleBlog);

router.get("/",returnAllBlog)

router.post("/",createBlog)

router.delete("/:blogId",deleteBlog)

router.patch("/:blogId",editBlog)

module.exports = router;