// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }



// export default App




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import WriteBlog  from "./pages/WriteBlog"; 
// import ReadBlogs  from "./pages/ReadBlogs"; 

// console.log("Profile component rendered");


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/write" element={<WriteBlog />} />
//         <Route path="/blogs" element={<ReadBlogs />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }
// export default App;




// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import WriteBlog from "./pages/WriteBlog";
// import ReadBlogs from "./pages/ReadBlogs";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// console.log("rendered navbar component");

// // A simple wrapper component so we can use `useLocation`
// function AppRoutes() {
//   const location = useLocation();

//   // List of routes where Navbar should NOT appear
//   const noNavbarRoutes = ["/", "/register"];

//   const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

//   return (
//     <>
//       {shouldShowNavbar && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/write" element={<WriteBlog />} />
//         <Route path="/blogs" element={<ReadBlogs />} />
//       </Routes>
//     </>
//   );
// }

// // function App() {
// //   return (
// //     <Router>
// //       <AppRoutes />
// //     </Router>
// //   );
// // }

// // export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import WriteBlog from "./pages/WriteBlog";
import ReadBlogs from "./pages/ReadBlogs";
import SingleBlog from "./pages/SingleBlog";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";




function AppRoutes() {
  const location = useLocation();

  const noNavbarRoutes = ["/", "/register"];
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/write" element={<ProtectedRoute><WriteBlog /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><ReadBlogs /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<ProtectedRoute><SingleBlog /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>

      {/* {shouldShowNavbar && <Footer />} ✅ this was the missing piece */}
    </>
  );
}



function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}


export default App;