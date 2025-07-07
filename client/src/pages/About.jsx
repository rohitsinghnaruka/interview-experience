
// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-6">
//       <div className="max-w-xl text-center">
//         <h1 className="text-3xl font-bold mb-4">About Us</h1>
//          <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-2">Rohit Singh Naruka</h2>
//           <p className="text-lg">
//             Hi! I’m <strong>Rohit Singh Naruka</strong>, a pre-final year student at
//             Visvesvaraya National Institute of Technology (VNIT), Nagpur. I'm from the
//             <strong> Department of Electronics and Communication Engineering (ECE)</strong>.
//           </p>
//           <p className="mt-4 text-base">
//             I’m passionate about full-stack web development, building real-world
//             projects, and preparing for software engineering roles. This platform was created
//             to help VNIT peers share and learn from placement & internship experiences.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-2">Om Tayade</h2>
//           <p className="text-lg">
//             Hi! I’m <strong>Om Tayade</strong>, also a pre-final year student at
//             Visvesvaraya National Institute of Technology (VNIT), Nagpur, from the
//             <strong> Department of Electronics and Communication Engineering (ECE)</strong>.
//           </p>
//           <p className="mt-4 text-base">
//             I share a passion for full-stack web development, real-world project building,
//             and software engineering preparation. Our goal with this platform is to empower VNIT
//             students by sharing authentic placement and internship experiences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// console.log("About component loaded");

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rohit's Card */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Rohit Singh Naruka</h2>
          <p className="text-base mb-2">
            Hi! I’m <strong>Rohit Singh Naruka</strong>, a pre-final year student at
            Visvesvaraya National Institute of Technology (VNIT), Nagpur. I'm from the
            <strong> Department of Electronics and Communication Engineering (ECE)</strong>.
          </p>
          <p className="text-sm text-gray-600 mt-3">
            I’m passionate about full-stack web development, building real-world projects,
            and preparing for software engineering roles. This platform was created to help
            VNIT peers share and learn from placement & internship experiences.
          </p>
        </div>

        {/* Om's Card */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Om Tayade</h2>
          <p className="text-base mb-2">
            Hi! I’m <strong>Om Tayade</strong>, also a pre-final year student at
            Visvesvaraya National Institute of Technology (VNIT), Nagpur, from the
            <strong> Department of Electronics and Communication Engineering (ECE)</strong>.
          </p>
          <p className="text-sm text-gray-600 mt-3">
            I share a passion for full-stack web development, real-world project building,
            and software engineering preparation. Our goal with this platform is to empower VNIT
            students by sharing authentic placement and internship experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

console.log("About component loaded ");

export default About;

