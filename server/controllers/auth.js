const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async (req, res, next) => {
    const{username, email, password} = req.body;

    try {
        const user = await User.create({
            username, email, password
        });

        sendToken(user, 201, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
};

exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    
    if(!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        if(!user){
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid Credentials", 401))
        }

        sendToken(user,200,res);
    } catch (error) {
        next();
    }
};

exports.forgotpassword = (req, res, next) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404))
        }

        const resetToken = user.getResetPasswordToken()
        
        await user.save();
        
        //Redirect to frontend
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>You have requested a password reset </h1>
            <p>Please go to this link to reset your password </p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

    } catch (error) {
        
    }
    res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => { 
    res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({success: true, token});
}