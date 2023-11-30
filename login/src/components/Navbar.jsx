// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">Home</Link>
//         </li>
       
//         <li className="nav-item">
//           <Link to="/register" className="nav-link">Register</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/login" className="nav-link">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="" className="nav-link">Log out</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';
// // import { useNavigate } from 'react-router-dom';


// const Navbar = () => {
//   const location = useLocation();
//   // const navigate = useNavigate();


//   // Function to check if the current route is the home page
//   const isHomePage = () => {
//     return location.pathname === '/';
//   };

//   // const isLoginPage = () => {
//   //   return location.pathname === '/login';
//   // };
  
  
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     // navigate('/'); // Redirect to the login page
//   };


//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/register" className="nav-link">Register</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/login" className="nav-link">Login</Link>
//        </li>
//         {/* Show Logout link only if not in the home page */}
//         {!isHomePage() && (
//           <li className="nav-item">
//             <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isHomePage = () => {
    return location.pathname === '/';
  };

  const isLoginPage = () => {
    return location.pathname === '/login';
  };

  const isRegisterPage = () => {
    return location.pathname === '/register';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
       
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        
        {!isHomePage() && !isLoginPage() &&  !isRegisterPage() && (
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
