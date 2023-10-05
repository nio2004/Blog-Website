const Blog = require("./../model/blog")

const getallblogs = async(req,res) => {
    try {
        const blogs = await Blog.find({})
        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

const getbyuserid = async(req,res) => {
    // const { blogid } = req.params
    // console.log(req.params)
    try {
        const blog = await Blog.find(req.params)
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

const getbyblogid = async(req,res) => {
    const  {id}  = req.params
    console.log(id)
    try {
        const blog = await Blog.find({_id: id})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

const createblog = async(req,res) => {
    let userid = null;
    let blogid = null;
    let title = null;
    let description = null;
    let comments = null;
    let image = "";
    ({ userid, blogid, title, description, comments, image} = req.body)
    // console.log(image)
    try {
        const blog = await Blog.create({ userid, blogid, title, description, comments, image})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

const deleteblog = async(req,res) => {
    const { blogid } = req.params
    try {
        const blog = await Blog.findOneAndDelete(blogid)
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

const updateblog = async(req,res) => {
    const { blogid } = req.params
    
    try {
        const blog = await Blog.findOneAndUpdate({_id: blogid},{...req.body})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({"error":error})
    }
    
}

module.exports = {
    getallblogs,
    getbyuserid,
    getbyblogid,
    createblog,
    deleteblog,
    updateblog
}
