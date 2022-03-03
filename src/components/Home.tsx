import React from "react";

import logo from "../assets/logo.svg";

const Home = (props: {setHomeState: React.Dispatch<React.SetStateAction<string>>}) => {

  const handleClick = () => {
    props.setHomeState("HOME_FORM");
  }

  return (
    <>
      <div className="flex">
        <img src={logo} className="h-48 w-48" alt="logo" />
        <div className="flex flex-1 justify-center items-center">
          <p>Welcome to the Home Page</p>
        </div>
      </div>
      <button
        type="button"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
        onClick={handleClick}
      >
        Open Form
      </button>
    </>
  );
};

export default Home;
