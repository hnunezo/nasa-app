import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className={show ? "button-menu2" : "button-menu"}
        style={{ position: "absolute", right: "1rem", top: "1rem" }}
        onClick={handleShow}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="d-flex flex-column align-items-center"
        style={{
          background: "rgba(0,0,0,0.8)",
          color: "white",
          borderRight: "2px white solid",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Menu </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ width: "100%" }}>
          <div className="d-flex flex-column">
            <button className="nav-button">Home</button>
            <button className="nav-button">Pictures</button>
            <button className="nav-button">Gallery</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
