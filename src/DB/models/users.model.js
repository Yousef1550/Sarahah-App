import mongoose from "mongoose";
import { systemRoles } from "../../Constants/constants.js";



// Defining the schema with validations
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        lowercase: true,
        trim: true,
        unique: [true, 'Username already taken'],
        minLength: [3, 'Username must be at least 3 characters long'],
        maxLength: [20, 'Username must be at most 20 characters long']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already taken']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    phone:{
        type: String,
        required: [true, 'Phone number is required'],
    },
    age:{
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Age must be at least 18 years old to register'],
        max: [100, 'Age must be at most 100 years old to register']
    },
    profileImage: String,
    isDeleted:{
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    otp: String,
    role:{
        type: String,
        default: systemRoles.USER,
        enum: Object.values(systemRoles)   // return object values as an array >>> ['user', 'admin', 'super-admin']
    }
}, {
    timestamps: true
})

/**
    If the user model already exists, connect to it OR if not create it >>> to prevent any errors if the file rerendered an error that says 'the model is already exist' will occur.
    The file could be rerendered if I was not stricted to the file name case sensetive (upper || lower) so the code editor (e.g. vsCode) will treate the file as a new one and rerender it, if I stricted to the name case sensitive the file will be cached and won't be renrendered. 
*/
const User = mongoose.models.User || mongoose.model('User', userSchema)     // creating the collectiom



export default User