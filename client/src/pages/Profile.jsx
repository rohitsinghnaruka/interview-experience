import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../utils/axios"; // Make sure this exists and has withCredentials: true

const departments = [
  "CSE", "ECE", "EEE", "Mech", "Civil", "Chemical", "MME", "Mining", "ARCH"
];

const Profile = () => {
  const navigate = useNavigate();

  // Get user from localStorage or a global auth context (you can change this)
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id;

  // console.log("Updating user ID:", userId);


  const [form, setForm] = useState({
    name: storedUser?.name || "",
    enrollment: storedUser?.enrollmentNumber || "",
    department: storedUser?.department || "",
    passoutYear: storedUser?.passOutYear || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.put(`/user/update/${userId}`, {
        name: form.name,
        enrollment: form.enrollment,
        department: form.department,
        passoutYear: form.passoutYear,
      });

      if (res.data.success) {
        alert("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(res.data.user)); // update local user
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Enrollment Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Number</label>
            <input
              type="text"
              name="enrollment"
              value={form.enrollment}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Passout Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passout Year</label>
            <input
              type="number"
              name="passoutYear"
              value={form.passoutYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              max={2030}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded hover:scale-[1.02] transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
