import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const modalRootId = "modal-root";

const Modal = ({ children, className, showModal, setShowModal }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(window.document.getElementById(modalRootId));
  }, []);

  if (!showModal) return null;

  const ModalContainer = (
    <div className="modal-container">
      <div className="modal-wrap">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShowModal(false)}
        >
          CLOSE
        </button>
        <div className="modal-scroll-container">
          <div className={`modal-contents ${className}`}>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(ModalContainer, container);
};

export default React.memo(Modal);
