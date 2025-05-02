import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-5">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-5">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
