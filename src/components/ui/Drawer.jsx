import React, { useState } from "react";

const Drawer = ({ showDrawer = -25 }) => {
  return (
    <div
      className="fixed bg-blue-300 h-screen w-[25%] flex flex-col justify-between items-center transition-all delay-30 z-10"
      style={{ right: showDrawer + "%" }}
    >
      <div>TITLE</div>
      <div>SUBTITLE</div>
      <div>CONTENT</div>
      <div>LOGIN BUTTON</div>
      <div>ANOTHER BUTTON</div>
    </div>
  );
};

<></>;
export default Drawer;
