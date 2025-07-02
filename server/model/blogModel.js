import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    role : String,
    offerType : {
        type : String,
        enum : ['Internship' , 'Placement' , 'Govtjob' , 'Other'], // other for higher studies sat etc 
        required : true
    },
    department: {
        type: String,
        enum: ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'CHEMICAL', 'METALLURGY', 'MINING', 'ARCHITECTURE', 'OTHER'],
        required: true
    },
    passOutYear: {
        type: Number,
        max: 2030,
        required: true
    },
    salary : {
        type : String,   // as 10LPA , 75K/Month etc
        required: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    postedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true

    }},{
    timestamps:true
});
const blogModel = mongoose.model('blog', blogSchema);;

export default blogModel ;