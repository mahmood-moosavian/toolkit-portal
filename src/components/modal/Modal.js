import React, { useEffect, useRef } from "react";
import ReactPortal from "../portal/ReactPortal";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

const Modal = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        className="modal"
        nodeRef={nodeRef}
      >
        <div className="modal">
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
