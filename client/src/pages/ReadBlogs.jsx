// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const departments = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEMICAL", "METALLURGY", "MINING", "ARCHITECTURE"];
// const offerTypes = ["Internship", "Placement", "Govtjob", "Other"];
// const years = Array.from({ length: 10 }, (_, i) => 2025 - i);

// const ReadBlogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [filters, setFilters] = useState({
//     department: [],
//     offerType: [],
//     passOutYear: [],
//   });

//   const [companySearch, setCompanySearch] = useState("");

//   const fetchBlogs = async () => {
//     try {
//       // Convert filters to query parameters
//       const params = {};
//       if (filters.department.length) params.department = filters.department.join(",");
//       if (filters.offerType.length) params.offertype = filters.offerType.join(",");
//       if (filters.passOutYear.length) params.passOutYear = filters.passOutYear.join(",");
//       if (companySearch) params.company = companySearch;

//       const res = await axios.get("http://localhost:5000/api/blog/get-all-blogs", {
//         params,
//       });
//       setBlogs(res.data.blogs || []);
//     } catch (err) {
//       console.error("Error fetching blogs", err);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, [filters, companySearch]);

//   const toggleCheckbox = (type, value) => {
//     setFilters((prev) => {
//       const updated = prev[type].includes(value)
//         ? prev[type].filter((item) => item !== value)
//         : [...prev[type], value];
//       return { ...prev, [type]: updated };
//     });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-72 bg-white p-6 shadow-md hidden md:block">
//         <h2 className="text-xl font-bold text-indigo-600 mb-4">Filters</h2>

//         <div className="mb-4">
//           <p className="font-medium mb-1">Department</p>
//           {departments.map((dept) => (
//             <label key={dept} className="block text-sm mb-1">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={filters.department.includes(dept)}
//                 onChange={() => toggleCheckbox("department", dept)}
//               />
//               {dept}
//             </label>
//           ))}
//         </div>

//         <div className="mb-4">
//           <p className="font-medium mb-1">Offer Type</p>
//           {offerTypes.map((type) => (
//             <label key={type} className="block text-sm mb-1">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={filters.offerType.includes(type)}
//                 onChange={() => toggleCheckbox("offerType", type)}
//               />
//               {type}
//             </label>
//           ))}
//         </div>

//         <div className="mb-4">
//           <p className="font-medium mb-1">Passout Year</p>
//           {years.map((year) => (
//             <label key={year} className="block text-sm mb-1">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={filters.passOutYear.includes(year)}
//                 onChange={() => toggleCheckbox("passOutYear", year)}
//               />
//               {year}
//             </label>
//           ))}
//         </div>

//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Search Company..."
//             className="border px-2 py-1 w-full text-sm"
//             value={companySearch}
//             onChange={(e) => setCompanySearch(e.target.value)}
//           />
//         </div>
//       </aside>

//       {/* Blog List */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold text-blue-700 mb-4">Interview Experiences</h1>
//         {blogs.length === 0 ? (
//           <p className="text-gray-600">No blogs found matching your criteria.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs.map((blog) => (
//               <div key={blog._id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
//                 <h2 className="text-lg font-semibold text-indigo-700">{blog.company}</h2>
//                 <p className="text-sm text-gray-700"><strong>Role:</strong> {blog.role}</p>
//                 <p className="text-sm text-gray-700"><strong>Offer Type:</strong> {blog.offerType}</p>
//                 <p className="text-sm text-gray-700"><strong>Department:</strong> {blog.department}</p>
//                 <p className="text-sm text-gray-700"><strong>Passout:</strong> {blog.passOutYear}</p>
//                 <p className="mt-2 text-sm text-gray-600 line-clamp-3">{blog.description.slice(0, 200)}...</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ReadBlogs;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const departments = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEMICAL", "METALLURGY", "MINING", "ARCHITECTURE"];
const offerTypes = ["Internship", "Placement", "Govtjob", "Other"];
const years = Array.from({ length: 10 }, (_, i) => 2025 - i);

const ReadBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({
    department: [],
    offerType: [],
    passOutYear: [],
  });
  const [companySearch, setCompanySearch] = useState("");

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const params = {};
      if (filters.department.length) params.department = filters.department.join(",");
      if (filters.offerType.length) params.offerType = filters.offerType.join(","); // ✅ fixed key name
      if (filters.passOutYear.length) params.passOutYear = filters.passOutYear.join(",");
      if (companySearch) params.company = companySearch;

      const res = await axios.get("https://interview-experience-j3p6.onrender.com/api/blog/get-all-blogs", { params });
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [filters, companySearch]);

  const toggleCheckbox = (type, value) => {
    setFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 shadow-md hidden md:block">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">Filters</h2>

        <div className="mb-4">
          <p className="font-medium mb-1">Department</p>
          {departments.map((dept) => (
            <label key={dept} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.department.includes(dept)}
                onChange={() => toggleCheckbox("department", dept)}
              />
              {dept}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-medium mb-1">Offer Type</p>
          {offerTypes.map((type) => (
            <label key={type} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.offerType.includes(type)}
                onChange={() => toggleCheckbox("offerType", type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-medium mb-1">Passout Year</p>
          {years.map((year) => (
            <label key={year} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.passOutYear.includes(year)}
                onChange={() => toggleCheckbox("passOutYear", year)}
              />
              {year}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search Company..."
            className="border px-2 py-1 w-full text-sm"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
          />
        </div>
      </aside>

      {/* Blog List */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Interview Experiences</h1>
        {blogs.length === 0 ? (
          <p className="text-gray-600">No blogs found matching your criteria.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer"
                onClick={() => handleBlogClick(blog._id)}
              >
                <h2 className="text-lg font-semibold text-indigo-700">{blog.company}</h2>
                <p className="text-sm text-gray-700"><strong>Role:</strong> {blog.role}</p>
                <p className="text-sm text-gray-700"><strong>Offer Type:</strong> {blog.offerType}</p>
                <p className="text-sm text-gray-700"><strong>Department:</strong> {blog.department}</p>
                <p className="text-sm text-gray-700"><strong>Passout:</strong> {blog.passOutYear}</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{blog.description.slice(0, 200)}...</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ReadBlogs;


