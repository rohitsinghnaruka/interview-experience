import mongoose from "mongoose";




// Mongoose Schema : 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim : true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /@vnit\.ac\.in$/  // restrictn to vnit.ac.in 

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    enrollmentNumber:{
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
        enum: ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'CHEMICAL', 'METALLURGY', 'MINING','ARCHITECTURE', 'OTHER']
    },
    passOutYear: {
        type: Number,
        required: true,
        max : 2030
    },
    role:{
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true
});

const userModel = mongoose.model('User', userSchema);
export default userModel;