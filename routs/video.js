const express = require('express')
const router= express.Router()

const {
    createVideo, 
    returnVideo, 
    getSingleVideo,
    updateVideo,
    deleteVideo
} = require('../controller/video')

router.post('/',createVideo);

router.get('/',returnVideo);

router.get('/:videoId',getSingleVideo);

router.patch('/:videoId',updateVideo)

router.delete('/:videoId',deleteVideo)

module.exports = router;