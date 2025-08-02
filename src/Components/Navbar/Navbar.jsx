import React, { useContext } from "react";
import { MdLogin } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Tag } from "lucide-react";

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="Update-profile">Update Profile</NavLink>
    </li>
    <li>
      <NavLink to="Profile">My Profile</NavLink>
    </li>
    <li>
      <NavLink to="aboutdev">About Dev</NavLink>
    </li>
    <li>
      <NavLink to="brands">Brands</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    // .then(() => console.log('Logged out successfully'))
    // .catch((err) => console.error('Logout Error:', err));
  };

  return (
    <div className="navbar bg-[#59A5D8] py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <section className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-primary">
              <Tag className="h-5 w-5 text-primary-foreground text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-primary  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Discount PRO
              </h3>
              <p className="text-xs text-white text-muted-foreground">
                Save More, Spend Less
              </p>
            </div>
          </section>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-x-4 items-center">
        {user && user?.email ? (
          <div className="relative group flex items-center gap-x-3">
            <button
              onClick={handleLogout}
              className="btn btn-sm border-none bg-[#386FA4] text-white hover:bg-[#468dcf] p-4 ml-3"
            >
              Logout
            </button>
            <div>
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User Profile"
                className="object-cover w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              />

              <div className="absolute left-1/2 transform translate-y-7 -translate-x-1/2 bottom-12 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "User"}
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn border-none bg-[#386FA4] text-white flex gap-1 items-center">
                Login <MdLogin />
              </button>
            </Link>
            <Link to="/register">
              <button className="border-none text-white bg-[#386FA4] btn">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
