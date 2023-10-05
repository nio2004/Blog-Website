const express = require('express')

const router = express.Router()
const {
    getallblogs,
    getbyuserid,
    getbyblogid,
    createblog,
    deleteblog,
    updateblog
} = require("./../controller/blogController")

//get all route
router.get("/",getallblogs)

//get by user id
router.get("/:userid",getbyuserid)

//get by blog id
router.get("/detail/:id",getbyblogid)

//create  blog 
router.post("/",createblog)

//delte by blog id
router.delete("/:blogid",deleteblog)

//update by blog id
router.patch("/:blogid",updateblog)

module.exports = router