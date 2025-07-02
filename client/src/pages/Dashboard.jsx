// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50">
//       {/* Navbar
//       <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
//         <h1 className="text-xl font-bold text-blue-700">InterviewExperiences</h1>
//         <button
//           onClick={() => navigate("/profile")}
//           className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-semibold"
//         >
//           U
//         </button>
//       </nav> */}

//       {/* Main Content */}
//       <main className="flex flex-col items-center justify-center mt-24 space-y-6 px-4">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome!</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
//           <button
//             onClick={() => navigate("/blogs")}
//             className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl border border-blue-200 text-blue-700 font-semibold text-lg transition-transform hover:scale-[1.02]"
//           >
//             📖 Read Interview Experiences
//           </button>
//           <button
//             onClick={() => navigate("/write")}
//             className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl border border-indigo-200 text-indigo-700 font-semibold text-lg transition-transform hover:scale-[1.02]"
//           >
//             ✍️ Write Your Interview Experience
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">Welcome VNITians!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        <button
          onClick={() => navigate("/blogs")}
          className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl border border-blue-200 text-blue-700 font-semibold text-lg transition-transform hover:scale-[1.02]"
        >
          📖 Read Interview Experiences
        </button>
        <button
          onClick={() => navigate("/write")}
          className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl border border-indigo-200 text-indigo-700 font-semibold text-lg transition-transform hover:scale-[1.02]"
        >
          ✍️ Write Your Interview Experience
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
