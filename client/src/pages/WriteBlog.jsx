// // 


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import instance from "../utils/axios";

// const departments = [
//   "CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEMICAL", "METALLURGY", "MINING", "ARCHITECTURE", "OTHER"
// ];

// const WriteBlog = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     company: "",
//     role: "",
//     offerType: "",
//     department: "",
//     passOutYear: "",
//     salary: "",
//     description: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { company, role, offerType, department, passOutYear, salary, description } = form;

//     if (!company || !role || !offerType || !department || !passOutYear || !salary || !description) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     try {
//       const response = await instance.post("/blog/post-blog", form);
//       console.log("Blog posted:", response.data);
//       alert("Blog posted successfully!");
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error posting blog:", error);
//       alert("Failed to post blog. Check console for details.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center px-4">
//       <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
//           Share Your Interview Experience
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Company Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Company Name *</label>
//             <input
//               type="text"
//               name="company"
//               value={form.company}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           {/* Role */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Role *</label>
//             <input
//               type="text"
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           {/* Offer Type */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Offer Type *</label>
//             <select
//               name="offerType"
//               value={form.offerType}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="">Select</option>
//               <option value="Internship">Internship</option>
//               <option value="Placement">Placement</option>
//               <option value="Govtjob">Govtjob</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Department *</label>
//             <select
//               name="department"
//               value={form.department}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="">Select</option>
//               {departments.map((dept) => (
//                 <option key={dept} value={dept}>{dept}</option>
//               ))}
//             </select>
//           </div>

//           {/* Passout Year */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Passout Year *</label>
//             <input
//               type="number"
//               name="passOutYear"
//               value={form.passOutYear}
//               onChange={handleChange}
//               required
//               max={2030}
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="e.g. 2026"
//             />
//           </div>

//           {/* Salary */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Salary *</label>
//             <input
//               type="text"
//               name="salary"
//               value={form.salary}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="e.g. 10LPA or 75K/Month"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Experience Description *</label>
//             <textarea
//               name="description"
//               rows="6"
//               value={form.description}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded resize-y"
//               placeholder="Describe interview rounds, questions, preparation tips etc."
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded hover:scale-[1.02] transition duration-200"
//           >
//             Submit Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WriteBlog;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../utils/axios";

const departments = [
  "CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEMICAL", "METALLURGY", "MINING", "ARCHITECTURE", "OTHER"
];

const WriteBlog = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    role: "",
    offerType: "",
    department: "",
    passOutYear: "",
    salary: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.company || !form.role || !form.offerType || !form.department || !form.passOutYear || !form.salary || !form.description) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await instance.post("/blog/post-blog", form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Blog posted:", response.data);
      alert("Blog posted successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Failed to post blog. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Share Your Interview Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Company */}
          <div>
            <label className="block text-sm font-medium mb-1">Company *</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role *</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Offer Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Offer Type *</label>
            <select
              name="offerType"
              value={form.offerType}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="Internship">Internship</option>
              <option value="Placement">Placement</option>
              <option value="Govtjob">Govtjob</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium mb-1">Department *</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* PassOut Year */}
          <div>
            <label className="block text-sm font-medium mb-1">PassOut Year *</label>
            <input
              type="number"
              name="passOutYear"
              value={form.passOutYear}
              onChange={handleChange}
              required
              max={2030}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium mb-1">Salary *</label>
            <input
              type="text"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. 10LPA or 75K/Month"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-2 border border-gray-300 rounded resize-y"
              placeholder="Interview process, rounds, questions, tips..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded hover:scale-[1.02] transition duration-200"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
