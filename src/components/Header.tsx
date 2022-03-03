import React from "react";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={logo}
        alt="React Logo"
        className="animate-spin h-16 w-16"
        style={{ animation: "spin 3s linear infinite" }}
      />
      <h1 className="text-2xl font-bold">React Typescript</h1>
    </div>
  );
};

export default Header;
