import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-8">

        <h1 className="text-3xl font-bold text-center">About the Platform</h1>

        <div className="bg-gray-100 rounded-2xl shadow-md p-6">
          <p className="text-base leading-relaxed">
            This platform is designed to create a centralized space where students can
            share and explore real interview and placement experiences. It helps students
            understand the recruitment process of different companies, learn from peers,
            and prepare more effectively for internships and full-time roles.
          </p>

          <p className="text-base leading-relaxed mt-4">
            Candidates can write detailed interview experiences including the company,
            rounds involved, questions asked, preparation strategy, and tips for future
            aspirants. By learning from real experiences, students can gain clarity on
            what to expect during technical interviews and recruitment processes.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>

          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Browse real interview and internship experiences shared by students</li>
            <li>Understand company-wise interview processes and preparation strategies</li>
            <li>Learn common technical questions asked in interviews</li>
            <li>Gain insights into different recruitment rounds and evaluation criteria</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Future Vision</h2>

          <p className="text-sm text-gray-700 mb-3">
            This platform will continue evolving to become a complete preparation
            ecosystem for students. Some upcoming features include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>
              <strong>AI Chatbot:</strong> A chatbot that can answer student queries
              based on previously shared interview experiences and preparation strategies.
            </li>
            <li>
              <strong>Mock Interview System:</strong> Students will be able to simulate
              real interview scenarios and practice technical and behavioral rounds.
            </li>
            <li>
              <strong>Smart Search:</strong> Quickly find experiences based on company,
              role, or interview topics.
            </li>
            <li>
              <strong>Preparation Insights:</strong> Aggregated patterns of commonly
              asked questions and interview trends.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;