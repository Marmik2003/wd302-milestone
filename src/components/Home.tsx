import React, { useState, useEffect, Key } from "react";
import { IFormData } from "./HomeForm";

import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Home = (props: {
  setHomeState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [localForms, setLocalForms] = useState([]);

  useEffect(() => {
    const localForms = localStorage.getItem("formDatas");
    if (localForms) {
      setLocalForms(JSON.parse(localForms));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedLocalForms = localForms.filter(
      (f: IFormData) => f.id.toString() !== id
    );
    setLocalForms(updatedLocalForms);
    localStorage.setItem("formDatas", JSON.stringify(updatedLocalForms));
  };

  const handleClick = () => {
    props.setHomeState(Number(new Date()).toString());
  };

  return (
    <>
      {localForms.length > 0 &&
        localForms.map((f: IFormData) => (
          <div className="flex" key={f.id as Key}>
            <div className="bg-slate-100 flex w-full justify-between items-center p-4 rounded-xl mt-4">
              <div className="flex justify-start items-center gap-2">
                <div>
                  <p className="text-gray-700 text-lg font-medium tracking-wider">
                    <span className="">{f.title}</span>
                  </p>
                </div>
              </div>
              <div className="flex columns-2 space-x-2">
                <button
                  onClick={() => props.setHomeState(f.id.toString())}
                  className="w-full bg-teal-400 font-medium px-2 py-1 rounded-md text-white tracking-wide"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(f.id.toString())}
                  className="w-full bg-rose-500 font-medium px-2 py-1 rounded-md text-white tracking-wide"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
          </div>
        ))}
      <button
        type="button"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
        onClick={handleClick}
      >
        New Form
      </button>
    </>
  );
};

export default Home;
