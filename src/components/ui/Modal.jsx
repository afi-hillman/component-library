import React, { useState } from "react";

const Modal = ({ isShown = false, children }) => {
  return (
    isShown && (
      <div className="bg-black/90 fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-2">
        <div className="bg-white w-full md:w-[500px] p-4 rounded">
          {children}
        </div>
      </div>
    )
  );
};

export const ModalHeader = ({ title, subtitle }) => {
  return (
    <div className="space-y-2 py-4">
      <h4 className="font-bold text-black">{title}</h4>
      <p className="text-black">{subtitle}</p>
    </div>
  );
};

export const ModalFooter = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

export default Modal;
