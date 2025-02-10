// import React from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = ({ isAuth }) => {
//   return (
//     <header>
//       <div className="logo">Nice and Easy</div>

//       <div className="link">
//         <Link to={"/"}>Home</Link>
//         <Link to={"/courses"}>Courses</Link>
//         <Link to={"/about"}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"}>Account</Link>
//         ) : (
//           <Link to={"/login"}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./header.css";

const Header = ({ isAuth }) => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo1" style={{ backgroundImage: `url(${logo})` }}></div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to={"/"} className="nav-btn">Home</Link>
        <Link to={"/about"} className="nav-btn">About</Link>
        <Link to={"/courses"} className="nav-btn">Courses</Link>
      </nav>

      {/* Login/Register or Account Button */}
      <div className="user-section">
        {isAuth ? (
          <Link to={"/account"} className="login-btn">Account</Link>
        ) : (
          <Link to={"/login"} className="login-btn">Login/Register</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
