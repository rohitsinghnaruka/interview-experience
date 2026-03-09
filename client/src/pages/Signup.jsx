import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/axios";

const departments = [
  "CSE", "ECE", "EEE", "Mech", "Civil", "Chemical", "MME", "Mining", "ARCH"
];

const Register = () => {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    enrollment:"",
    department:"",
    passoutYear:""
  });

  const [otp,setOtp] = useState("");
  const [showOtp,setShowOtp] = useState(false);

  const [errors,setErrors] = useState({});

  const validate = () => {

    const newErrors = {};

    if(!form.name.trim()) newErrors.name = "Name is required";

    if(!form.email.endsWith("@students.vnit.ac.in")){
      newErrors.email = "Use VNIT email only (@students.vnit.ac.in)";
    }

    if(form.password.length < 6){
      newErrors.password = "Password must be at least 6 characters";
    }

    if(form.password !== form.confirmPassword){
      newErrors.confirmPassword = "Passwords do not match";
    }

    if(!form.enrollment.trim()){
      newErrors.enrollment = "Enrollment number required";
    }

    if(!form.department){
      newErrors.department = "Select department";
    }

    const year = parseInt(form.passoutYear);

    if(!year || year > 2030 || year < 2020){
      newErrors.passoutYear = "Passout year must be 2020-2030";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleChange = (e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]:""
    });

  };

  const sendOtp = async () => {

    if(!validate()) return;

    try{

      await instance.post("/user/send-otp",{
        email:form.email
      });

      alert("OTP sent to your VNIT email");

      setShowOtp(true);

    }
    catch(err){
      alert(err.response?.data?.message || "Failed to send OTP");
    }

  };

  const verifyOtp = async () => {

    try{

      await instance.post("/user/verify-otp",{
        ...form,
        otp
      });

      alert("Registration successful");

      navigate("/login");

    }
    catch(err){
      alert(err.response?.data?.message || "Invalid OTP");

    }

  };

  return (

  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 p-4">

  <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">

  <div className="text-center">
  <h2 className="text-2xl font-bold text-blue-600">Create an Account</h2>
  <p className="text-sm text-gray-600">Join InterviewExperiences as a VNIT student</p>
  </div>

  <div className="space-y-4">

  {/* Name */}
  <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full p-2 border rounded"
  />

  {/* Email */}
  <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="VNIT Email"
  className="w-full p-2 border rounded"
  />

  {/* Password */}
  <input
  type="password"
  name="password"
  value={form.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full p-2 border rounded"
  />

  {/* Confirm Password */}
  <input
  type="password"
  name="confirmPassword"
  value={form.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm Password"
  className="w-full p-2 border rounded"
  />

  {/* Enrollment */}
  <input
  type="text"
  name="enrollment"
  value={form.enrollment}
  onChange={handleChange}
  placeholder="Enrollment Number"
  className="w-full p-2 border rounded"
  />

  {/* Department */}
  <select
  name="department"
  value={form.department}
  onChange={handleChange}
  className="w-full p-2 border rounded"
  >
  <option value="">Select Department</option>
  {departments.map((dept)=>(
    <option key={dept} value={dept}>{dept}</option>
  ))}
  </select>

  {/* Passout Year */}
  <input
  type="number"
  name="passoutYear"
  value={form.passoutYear}
  onChange={handleChange}
  placeholder="Passout Year"
  className="w-full p-2 border rounded"
  />

  {/* Send OTP */}
  {!showOtp && (

  <button
  onClick={sendOtp}
  className="w-full bg-blue-600 text-white py-2 rounded"
  >
  Send OTP
  </button>

  )}

  {/* OTP Input */}

  {showOtp && (

  <>
  <input
  type="text"
  value={otp}
  onChange={(e)=>setOtp(e.target.value)}
  placeholder="Enter OTP"
  className="w-full p-2 border rounded"
  />

  <button
  onClick={verifyOtp}
  className="w-full bg-green-600 text-white py-2 rounded"
  >
  Verify OTP & Register
  </button>
  </>

  )}

  </div>

  <div className="text-center text-sm text-gray-600">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline">
  Login here
  </Link>
  </div>

  </div>
  </div>

  );

};

export default Register;