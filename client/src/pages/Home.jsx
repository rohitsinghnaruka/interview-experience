// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
//       {/* Hero Section */}
//       <header className="text-center py-20 px-4">
//         <h1 className="text-5xl font-extrabold text-indigo-700">
//           InterviewExperiences
//         </h1>
//         <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
//           Your peer-driven platform to read and share interview journeys, strategies, and success stories. Built by students, for students.
//         </p>
//         <div className="mt-8 flex justify-center gap-4 flex-wrap">
//           <button
//             onClick={() => navigate("/blogs")}
//             className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all"
//           >
//             Explore Experiences
//           </button>
//           <button
//             onClick={() => navigate("/write")}
//             className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-50 transition-all"
//           >
//             Share Yours
//           </button>
//         </div>
//       </header>

//       {/* Mission Section */}
//       <section className="bg-white py-12 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl font-bold text-gray-800">🎯 Our Mission</h2>
//           <p className="mt-4 text-gray-600">
//             To empower every VNIT student with real, relatable interview experiences and prep tips. We believe in learning from peers, reducing anxiety, and increasing placement confidence through shared stories.
//           </p>
//         </div>
//       </section>

//       {/* Developer Section */}
//       <section className="bg-indigo-100 py-10 px-6 text-center">
//         <h3 className="text-xl font-semibold text-indigo-700">👨‍💻 Built by Rohit Singh Naruka</h3>
//         <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
//           Pre-final-year B.Tech ECE student at VNIT. I built InterviewExperiences to simplify the placement journey for juniors and peers — inspired by the stories we share over chai & samosa at Chandu.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col items-center justify-center text-center px-6">
      {/* App Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-3">
        Interview Experiences
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-1">
        Exclusively for VNIT Students
      </p>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-8">
        Discover real interview stories shared by your seniors and peers at VNIT.
        Whether you're preparing for internships, placements, or government jobs — read,
        learn, and share your journey!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/blogs")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
        >
          📖 Read Blogs
        </button>
        <button
          onClick={() => navigate("/write")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
        >
          ✍️ Write Blog
        </button>
      </div>
    </div>
  );
};

export default Home;
