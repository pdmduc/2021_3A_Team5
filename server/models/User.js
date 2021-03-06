const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a user name"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        reuiqred: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpired: Date
});

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next(); 
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function() {
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE}
    );
};

UserSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    // From now moment + 10 * (60* 1000) (60sec* 1000miliseconds = 1minute)
    this.resetPasswordExpired = Date.now() + 10 * (60 * 1000)

    return resetToken;
}

const User = mongoose.model("User", UserSchema);

module.exports = User;