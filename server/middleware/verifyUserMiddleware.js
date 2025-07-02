import jwt from 'jsonwebtoken';
import errorHandler from '../utils/errorHandler.js';
import asyncHandler from 'express-async-handler';




const verifyUserMiddleware = asyncHandler(async (req, res, next) => {

const token = req.headers.authorization?.split(" ")[1];


    if (!token) {
        return next(errorHandler('Unauthorized Access, Token not found!', 401));
    }



    const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyUser;



    next();

});




export default verifyUserMiddleware;