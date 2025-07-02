// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const SingleBlog = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
//         setBlog(res.data.blog);
//       } catch (err) {
//         console.error("Error fetching blog:", err);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) return <div className="p-6 text-center">Loading blog...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
//       <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-8">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-4">{blog.company}</h2>
//         <p className="text-sm text-gray-600 mb-2">
//           <strong>Role:</strong> {blog.role} | <strong>Offer Type:</strong> {blog.offerType} | <strong>Dept:</strong> {blog.department} | <strong>Passout:</strong> {blog.passOutYear}
//         </p>
//         <p className="text-sm text-gray-600 mb-4"><strong>Salary:</strong> {blog.salary}</p>
//         <div className="text-gray-800 leading-relaxed whitespace-pre-line">
//           {blog.description}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setBlog(res.data); // ✅ set the blog directly
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog. It may not exist.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading blog...</div>;

  if (error)
    return <div className="p-6 text-center text-red-600 font-semibold">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          {blog.company}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Role:</strong> {blog.role} |{" "}
          <strong>Offer Type:</strong> {blog.offerType} |{" "}
          <strong>Department:</strong> {blog.department} |{" "}
          <strong>Passout Year:</strong> {blog.passOutYear}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Salary:</strong> {blog.salary}
        </p>
        <div className="text-gray-800 leading-relaxed whitespace-pre-line">
          {blog.description}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
