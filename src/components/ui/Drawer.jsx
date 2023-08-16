import React, { useState } from "react";

const Drawer = ({ slideIn, toggleDrawer, position }) => {
  const drawerStyles = {
    position: "fixed",
    top: 0,
    [position]: slideIn + "%",
    backgroundColor: "white",
    height: "100%",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    paddingLeft: "10px",
    zIndex: 10,
    transition: `${position} 0.2s ease-in-out`,
  };
  return (
    <div style={drawerStyles}>
      <button onClick={toggleDrawer}>X</button>
      <div className="flex flex-col gap-6">
        <div>TITLE</div>
        <div>SUBTITLE</div>
        <div>CONTENT</div>
        <div>LOGIN BUTTON</div>
        <div>ANOTHER BUTTON</div>
      </div>
    </div>
  );
};

<></>;
export default Drawer;
