import React, { useState } from "react";
import Modal, { ModalFooter, ModalHeader } from "../components/ui/Modal";
import Drawer from "../components/ui/Drawer";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState("right");
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
    <div className="bg-black/90 text-blue-300 w-screen h-screen flex flex-col justify-center items-center gap-4">
      <button
        className="text-center bg-blue-300 text-black/90 border p-4 block w-[20%] rounded-md hover:bg-black/40"
        onClick={toggleDrawerPosition}
      >
        Toggle Drawer Position: {drawerPosition}
      </button>
      <Modal isShown={showModal}>
        <ModalHeader title="Login" subtitle="Login to continue!" />
        <ModalFooter>
          <button
            onClick={handleModalClose}
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
      ></Drawer>
      <div className="flex flex-col gap-4 items-center bg-white/10 p-8 rounded-2xl border-blue-300 border">
        <h2>List of components : </h2>
        <button
          onClick={handleModalOpen}
          className="border pl-2 pr-2 pt-4 pb-4 w-full rounded-lg bg-black hover:bg-black/40 transition-all"
        >
          Open Model
        </button>
        <button
          onClick={handleDrawerToggle}
          className="border pl-2 pr-2 pt-4 pb-4 w-full rounded-lg bg-black hover:bg-black/40 transition-all"
        >
          Open Drawer
        </button>
      </div>
    </div>
  );
};

export default Components;
