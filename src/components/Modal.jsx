import React from "react";
import "./Modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    // если active = true то будем добавлять класс modal и active иначе добавляем просто класс modal
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
