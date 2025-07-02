import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/axios"; // Adjust the import path as needed

const departments = [
  "CSE", "ECE", "EEE", "Mech", "Civil", "Chemical", "MME", "Mining", "ARCH"
];

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    enrollment: "",
    department: "",
    passoutYear: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.endsWith("@vnit.ac.in")) {
      newErrors.email = "Use VNIT email only (must end with @vnit.ac.in)";
    }

    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.enrollment.trim()) {
      newErrors.enrollment = "Enrollment number is required";
    }

    if (!form.department) {
      newErrors.department = "Please select a department";
    }

    const year = parseInt(form.passoutYear);
    if (!year || year > 2030 || year < 2020) {
      newErrors.passoutYear = "Passout year must be between 2020 and 2030";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const res = await instance.post("/user/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        enrollmentNumber: form.enrollment,
        department: form.department,
        passOutYear: form.passoutYear
      });

      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error?.response?.data?.message || "Something went wrong!");
    }
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">Create an Account</h2>
          <p className="text-sm text-gray-600">Join InterviewExperiences as a VNIT student</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your full name"
              required
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">VNIT Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="example@vnit.ac.in"
              required
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Minimum 6 characters"
              required
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Enrollment Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
            <input
              type="text"
              name="enrollment"
              value={form.enrollment}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.enrollment ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. B21CS123"
              required
            />
            {errors.enrollment && <p className="text-sm text-red-600">{errors.enrollment}</p>}
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.department ? "border-red-500" : "border-gray-300"
              }`}
              required
            >
              <option value="">Select department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && <p className="text-sm text-red-600">{errors.department}</p>}
          </div>

          {/* Passout Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Passout Year</label>
            <input
              type="number"
              name="passoutYear"
              value={form.passoutYear}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded focus:outline-none ${
                errors.passoutYear ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. 2026"
              required
              max={2030}
            />
            {errors.passoutYear && <p className="text-sm text-red-600">{errors.passoutYear}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded hover:scale-[1.02] transition transform duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
