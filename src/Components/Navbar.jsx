import React, { use } from 'react'
import toyIcone  from '../assets/toyicone.jpg'
import users from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { FiHome } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';

function Navbar() {
  const { logoutMyaccount , user } = use(AuthContext)

  const handleLogOut = () => {
     logoutMyaccount()
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-17 rounded-4xl" src={toyIcone} alt="" />
          <h2 className="font-bold text-xl">Toy House</h2>
        </Link>
        <ul className="items-center space-x-10 hidden md:flex">
          <li className="text-accent text-xl flex items-center gap-2">
            <FiHome />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-accent text-xl flex items-center gap-2 ">
            <FaCartShopping />
            <NavLink to="/alltoys">All Toys</NavLink>
          </li>
          {user && (
            <li className="text-accent text-xl flex items-center gap-2">
              <FaUser />
              <NavLink to="/myprofile">My Profile</NavLink>
            </li>
          )}
        </ul>
        <div className="flex items-center space-x-2">
          <div>
            <img
              className="w-13 rounded-full object-cover cursor-pointer"
              src={users}
              alt=""
            />
          </div>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn px-10 bg-secondary text-white"
            >
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn px-10 bg-secondary text-white">
              Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;