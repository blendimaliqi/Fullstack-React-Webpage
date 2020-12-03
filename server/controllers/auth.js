import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler';

export const register = catchAsyncErrors(async (req, res, next) => {
    const user = await userService.createUser(req.body);


});

export login = catchAsyncErrors(async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('Fyll ut epost og passord', 400))
    }


    const user = await userService.getUserByEmail({email}, true);
    
})