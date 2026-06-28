import React from "react";
import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
const Navber = () => {
  const nav = (
    <>
      <li>
        <NavLinks href={"/"}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={"/products"}>Products</NavLinks>
      </li>
      <li>
        <NavLinks href={"/blog"}>Blog</NavLinks>
      </li>
      <li>
        <NavLinks href={"/contact"}>Contact</NavLinks>
      </li>
      <li>
        <NavLinks href={"/aboutus"}>About Us</NavLinks>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end space-x-1.5">
        <Link href={"/cart"} className="btn btn-primary">
          <FaCartShopping />
        </Link>
        <Link href={"/login"}><button className="btn btn-primary btn-outline">Login</button></Link>
      </div>
    </div>
  );
};

export default Navber;
