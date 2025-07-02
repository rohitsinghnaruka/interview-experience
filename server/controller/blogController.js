import errorHandler from "../utils/errorHandler.js";
import asyncHandler from 'express-async-handler';
import blogModel from "../model/blogModel.js";
import userModel from '../model/userModel.js';





// Get all blogs : 

export const getAllBlogs = asyncHandler(async (req, res, next) => {

    const page = parseInt(req.query.page) || 1;
    const limitBlogs = parseInt(req.query.limit) || 8;
    const sortBlog = req.query.sort === 'asc' ? 1 : -1;
    const skipBlogs = (page - 1) * limitBlogs

    const filter = {
        ...(req.query.userId && { PostedBy: req.query.userId }),
        ...(req.query.company && { company: { $regex: req.query.company, $options: 'i' } }),
        ...(req.query.role && { role: { $regex: req.query.role, $options: 'i' } }),
        ...(req.query.offerType && { offerType: req.query.offerType }),
        ...(req.query.department && { department: req.query.department }),
        ...(req.query.passOutYear && { passOutYear: parseInt(req.query.passOutYear) }),
        ...(req.query.blogId && { _id: req.query.blogId })
    };


    try {
        const blogs = await blogModel.find(filter).skip(skipBlogs).sort({ updatedAt: sortBlog }).limit(limitBlogs)


        const countBlogs = await blogModel.countDocuments(filter);

        const currentDate = new Date();

        const oneMonthAgo = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            currentDate.getDate()
        );

        const lastMonthBlogs = await userModel.countDocuments({
            createdAt: { $gte: oneMonthAgo }
        });


        return res.status(200).json({
            success: true,
            message: 'Blogs have been fetched',
            lastMonthBlogs,
            countBlogs,
            blogs
        })
    } catch (error) {
        return next(errorHandler(error.message), 400);
    }
});




// Post Blog : POST API - 
// Post Blog : POST API

export const postBlog = asyncHandler(async (req, res, next) => {
  const { company, role, offerType, department, passOutYear, salary, description } = req.body;

  const user = req.user; // ✅ Extract user from req (set by verifyUser middleware)
  

  // Optional: Restrict non-admins
  // if (!user.isAdmin) {
  //   return next(errorHandler('You can not create blog, Unauthorized user!', 401));
  // }

  try {
    const newBlog = new blogModel({
      company,
      role,
      offerType,
      department,
      passOutYear,
      salary,
      description,
      postedBy: user.id,
    });

    await newBlog.save();

    return res.status(200).json({
      success: true,
      message: 'Blog has been created',
      blog: newBlog, // ✅ use the correct variable here
    });

  } catch (error) {
    return next(errorHandler(error.message || "An error occurred while posting the blog", 500));
  }
});



// Delete Blog : DELETE API : 

export const deleteBlog = asyncHandler(async (req, res, next) => {

    const { isAdmin } = req.body.user;
    const { blogid, userid } = req.params;



    if (isAdmin || userid) {
        try {
            await blogModel.findByIdAndDelete({ _id: blogid });
            return res.status(200).json({
                success: true,
                message: 'Blog has been deleted'
            })
        } catch (error) {
            next('An error occurred while deleting the blog!', 400);
        }
    } else {
        return next('You are not allowed to delete the blog', 401);
    }
})




// Update blog : PUT API 

export const updateBlog = asyncHandler(async (req, res, next) => {

    const user = await userModel.findById(req.params.userid);
    const blog = await blogModel.findById(req.params.blogid);

    if (user.isAdmin || blog.userId === req.params.userid) {
        const updatedBlog = await blogModel.findByIdAndUpdate(blog, {
            $set: {
                blogTitle: req.body.blogTitle,
                blogCategory: req.body.blogCategory,
                blogImgFile: req.body.blogImgFile,
                blogBody: req.body.blogBody
            }
        }, { new: true })

        return res.status(200).json({
            success: true,
            message: 'Blog has been updated',
            blog: updatedBlog
        })
    } else {
        return next(errorHandler('An unexpected error occurred while updating blog!', 401));
    }
});



export const getBlogById = asyncHandler(async (req, res, next) => {
  try {
    const blog = await blogModel.findById(req.params.id).populate("postedBy", "-password"); // Optional: populate user
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    next(errorHandler("Invalid blog ID", 400));
  }
});
