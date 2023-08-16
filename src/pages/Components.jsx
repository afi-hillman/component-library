import React, { useState } from "react";
import Modal, { ModalFooter, ModalHeader } from "../components/ui/Modal";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-black/90 text-blue-300 w-screen h-screen flex justify-center items-center">
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
      <div className="flex flex-col gap-4 items-center bg-white/10 p-8 rounded-2xl border-blue-300 border">
        <h2>List of components : </h2>
        <button
          onClick={handleModalOpen}
          className="border pl-2 pr-2 pt-4 pb-4 w-full rounded bg-black hover:bg-black/40 transition-all"
        >
          Open Model
        </button>
        <button className="border pl-2 pr-2 pt-4 pb-4 w-full rounded bg-black hover:bg-black/40 transition-all">
          Open Drawer
        </button>
      </div>
    </div>
  );
};

export default Components;
