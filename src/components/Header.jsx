import React, { useContext, useState } from "react";
import { AdminContext } from "../App";
import Modal, { ModalFooter, ModalHeader } from "../components/ui/Modal";
import Drawer from "./ui/Drawer";

const Header = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState("right");
  const login = () => {
    setIsAdmin(true);
    setShowModal(false);
  };
  const logout = () => {
    setIsAdmin(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  };
  const toggleDrawerPosition = () => {
    setDrawerPosition(drawerPosition === "right" ? "left" : "right");
  };
  return (
    <>
      <button
        className="text-center bg-black/90 text-blue-300 border p-4 block w-[20%] hover:bg-black/10 transition-all"
        onClick={toggleDrawerPosition}
      >
        Toggle Drawer Position: {drawerPosition}
      </button>
      <Modal isShown={showModal} setShow={setShowModal}>
        <ModalHeader title="Login" subtitle="Login to continue!" />
        <ModalFooter>
          <button
            onClick={login}
            className="text-center bg-black/90 text-blue-300 border pl-4 pr-4 block w-full"
          >
            Login
          </button>
          <button
            onClick={handleModalClose}
            className="text-center bg-transparent text-black
           border pl-4 pr-4 block w-full"
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
      <Drawer
        toggleDrawer={handleDrawerToggle}
        slideIn={showDrawer ? 0 : drawerPosition === "right" ? -25 : -25}
        position={drawerPosition}
      />
      <div>
        <div className="flex flex-row justify-between fixed top-0 left-0 w-screen h-10 pl-20 pr-20 pt-4 border-b-white">
          <div className="text-white">LOGO</div>
          <div>
            <button
              className="border text-white pl-4 pr-4"
              onClick={isAdmin ? logout : handleModalOpen}
            >
              {isAdmin ? "Logout" : "Login"}
            </button>
            <button
              className="text-center bg-black/90 text-blue-300 border pl-4 pr-4"
              onClick={handleDrawerToggle}
            >
              DRAWER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
