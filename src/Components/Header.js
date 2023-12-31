import React, { useEffect } from "react";
import Logo from "../Assets/Logo.png";
import { CART_LOGO, PROJECTS_API, USER_LOGO } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addFilteredProjects, addProject } from "../Utils/projectsSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = () => {
    const projects = PROJECTS_API;
    dispatch(addProject(projects));
    dispatch(addFilteredProjects(projects));
  };
  return (
    <div className="flex w-screen bg-white fixed top-0 justify-between shadow-2xl h-20 items-center">
      <a href="/">
        <img className="h-56" src={Logo} alt="" />
      </a>
      <div className="flex justify-between font-semibold items-center">
        <Link to={"/cart"}>
          <div className="flex mx-3">
            <img className="h-9 mt-1" src={CART_LOGO} alt="" />
            <h1 className="p-2  text-lg">Cart</h1>
          </div>
        </Link>
        <div className="flex mx-3">
          <img className="h-9 mt-1" src={USER_LOGO} alt="" />
          <h1 className="p-2  text-lg">Sign In</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
