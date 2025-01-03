import React, { useContext, useState } from "react";
import logo from "../../assets/QuizLogo.png";
import Modal from "./Modal";
import Login from "../Auth/Login";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import AppContext from "../../context/AuthContext";
const NavBar = () => {
  const context = useContext(AppContext);
  return (
    <>
      <div className="flex items-center justify-between z-10">
        <img src={logo} alt="" className="w-[300px]" />
        <button
          onClick={() => context.setIsOpen(true)}
          className="bg-[#43b5a0] text-white px-6  mr-5 py-2 rounded-full text-lg font-black font-sans"
        >
          Log In
        </button>
      </div>
      <Modal>
        <Login />
      </Modal>
    </>
  );
};

export default NavBar;
