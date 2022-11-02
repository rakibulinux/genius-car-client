import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("LogOut Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user?.uid ? (
        <>
          <li>
            <NavLink to="/profile" className="active:bg-white">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="active:bg-white">
              <button onClick={handleSignOut}>SignOut</button>
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 text-[#444444]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink className="btn bg-white hover:bg-white border-none normal-case text-xl">
          <img className="w-16" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end gap-5">
        <FaShoppingBag />
        <FaSearch />
        <NavLink className="btn bg-white hover:bg-white text-orange-750 border-orange-750 hover:border-orange-750 rounded-lg py-4 text-center px-8">
          Appointment
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
