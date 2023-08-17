import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/ui/Modal";
import Drawer from "../components/ui/Drawer";

const Home = () => {
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
  const navigateComponents = () => {
    navigate("/components");
  };
  return (
    <>
      <div className="bg-black/90 flex justify-center items-center gap-4 flex-col h-screen w-screen overflow-hidden">
        <Header />
        <h1 className="text-white">Home</h1>

        {/* condition rendering */}
        {isAdmin ? (
          <h1 className="text-blue-300">Admin</h1>
        ) : (
          <h1 className="text-blue-300">Non-admin</h1>
        )}
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
              Go to Public
            </button>
          </div>
          <div>
            <button
              className="border text-white pl-4 pr-4"
              onClick={navigateComponents}
            >
              Go to Components
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
