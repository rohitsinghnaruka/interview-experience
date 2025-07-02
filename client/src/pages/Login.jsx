import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import instance from "../utils/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.endsWith("@students.vnit.ac.in")) {
      setEmailError("Please use your VNIT email address (@students.vnit.ac.in)");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !value.endsWith("@students.vnit.ac.in")) {
      setEmailError("Please use your VNIT email address (@students.vnit.ac.in)");
    } else {
      setEmailError("");
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateEmail(email) || !password) return;

  try {
    const res = await instance.post("/user/login", {
      email,
      password,
    });

    // Save token to localStorage
    localStorage.setItem("token", res.data.createToken);

    // Optional: store user info if needed
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Navigate to dashboard
    navigate("/dashboard");
  } catch (err) {
    console.error("Login error:", err.response?.data?.message || err.message);
    alert("Login failed: " + (err.response?.data?.message || "Server error"));
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md">
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            🎓
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
            Welcome to InterviewExperiences
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to access interview experiences and insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">VNIT Email</label>
            <input
              type="email"
              placeholder="your.name@vnit.ac.in"
              value={email}
              onChange={handleEmailChange}
              required
              className={`w-full px-3 py-2 rounded border ${
                emailError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!!emailError || !email || !password}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded font-medium transition transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register here
          </Link>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4 border-t pt-4">
          Exclusively for VNIT students and alumni
        </p>
      </div>
    </div>
  );
};

export default Login;
