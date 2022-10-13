import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoading } from "../../states/page";

const OffCanvas = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeUrl = (link) => {
    dispatch(changeLoading(true));
    navigate(`${link}`);
  };

  return (
    <>
      <button
        className={show ? "button-menu2" : "button-menu d-flex"}
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
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
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <button
            className="button-menu2"
            style={{ position: "absolute", right: "1rem", top: "1rem" }}
            onClick={() => handleClose()}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ width: "100%" }}>
          <div className="d-flex flex-column">
            <button className="nav-button" onClick={() => changeUrl("/")}>
              Home
            </button>
            <button className="nav-button" onClick={() => changeUrl("/daily")}>
              Random
            </button>
            <button className="nav-button" onClick={() => changeUrl("/search")}>
              Searcher
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
