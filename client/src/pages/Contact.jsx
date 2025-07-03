import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold">Contact Me</h1>

        <p className="text-lg">
          Feel free to reach out to me via email or connect through social platforms.
        </p>

        <div className="space-y-2 text-base">
          <p>Email 1: <a href="mailto:rohitnaruka6852@gmail.com" className="text-blue-600 underline">rohitnaruka6852@gmail.com</a></p>
          <p>Email 2: <a href="mailto:bt23ece047@students.vnit.ac.in" className="text-blue-600 underline">bt23ece047@students.vnit.ac.in</a></p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/rohitsingh1206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          {/* <a
            href="https://github.com/rohitsinghnaruka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            GitHub
          </a> */}
          <a
            href="mailto:rohitnaruka6852@gmail.com"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
