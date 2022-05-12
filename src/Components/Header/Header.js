import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../.././images/Logo.svg";
import "./Header.css";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <nav className="flex justify-center sticky top-0  md:items-center p-3 flex-col w-full md:flex-row z-10 shadow-lg">
      <div className="flex w-full md:w-1/3 items-center text-center">
        <div
          onClick={() => setOpen(!open)}
          className="text-white w-8 cursor-pointer md:hidden"
        >
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <Link
          to="/"
          className="block w-full cursor-pointer text-center mx-auto"
        >
          <img className="mx-auto" src={Logo} alt="Ema John" />
        </Link>
      </div>
      <ul
        className={`text-white text-center shadow-lg md:shadow-none absolute top-14 z-10 md:flex md:items-center md:top-0 left-0 w-full md:sticky ${
          open ? "block" : "hidden"
        }`}
      >
        <li className="nav-link py-2 px-4 md:py-0 md:ml-auto">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link py-2 px-4 md:py-0">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li className="nav-link py-2 px-4 md:py-0">
          <NavLink to="/order-review">Order Review</NavLink>
        </li>
        <li className="nav-link py-2 px-4 md:py-0">
          <NavLink to="/inventory">Inventory</NavLink>
        </li>
        <li className="nav-link py-2 px-4 md:py-0 md:mr-16">
          {user ? (
            <button className="signout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
