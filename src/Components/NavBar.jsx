import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import logo_with_heading from "../assets/images/logo_with_heading_noBg.jpg";

const NavBar = () => {
  // load from auth provider
  const { user, logOut, setLoading } = useContext(AuthContext);
  // const [userImg, setImg] = useState([]);

  // state for control theme: light or dark
  // const [isDarkMode, setIsDarkMode] = useState(
  //   localStorage.getItem("theme") || "light"
  // );

  // const handleToggleTheme = (e) => {
  //   setIsDarkMode(e.target.checked ? "dark" : "light");
  // };

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/user?email=${user?.email}`).then((res) => {
  //     setImg(res.data);
  //   });
  // }, [user?.email]);

  // useEffect(() => {
  //   localStorage.setItem("theme", isDarkMode);
  //   document.querySelector("html").setAttribute("data-theme", isDarkMode);
  // }, [isDarkMode]);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-semibold text-base border-x-2 border-primary_color"
        >
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products/aronnyDayaShifa"
          className="font-semibold text-base border-x-2 border-primary_color"
        >
          অরণ্য ডায়া শিফা
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-6 fixed top-0 container z-10 bg-light_color">
      <Helmet>
        <title>অরণ্য || হোম</title>
      </Helmet>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-[40px] md:w-[60px]"
            src={logo_with_heading}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-outline btn-sm text-base">
            লগ আউট
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm text-base">
            লগইন
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
