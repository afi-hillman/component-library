import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Public = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const login = () => {
    setIsAdmin(true);
  };
  const logout = () => {
    setIsAdmin(false);
  };
  const navigate = useNavigate();
  const navigatePrivate = () => {
    navigate("/private");
  };
  const navigatePublic = () => {
    navigate("/public");
  };
  return (
    <div className="bg-black/90 flex justify-center items-center gap-4 flex-col h-screen w-screen">
      <Header />
      <h1 className="text-white">Public</h1>
      <div className="flex flex-row gap-4">
        <div>
          <button
            className="border text-white pl-4 pr-4"
            onClick={navigatePrivate}
          >
            Go to Private
          </button>
        </div>
        <div>
          <button
            className="border text-white pl-4 pr-4"
            onClick={navigatePublic}
          >
            Go to public
          </button>
        </div>
      </div>
    </div>
  );
};

export default Public;
