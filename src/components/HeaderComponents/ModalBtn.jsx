import "./ModalBtn.scss";
import { useState } from "react";
import Modal from "../Modal";
import ContactUsModal from "../ContactUsModal";

const ModalBtn = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="ModalBtn" onClick={() => setModalActive(true)}>
        <svg>
          <use xlinkHref="/sprite.svg#go"></use>
        </svg>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="d-fl">
          <div className="modal-left d-fl-col">
            <div className="modal-top">
              <h6>
                Сделайте заказ прямо сейчас и получите доменное имя в подарок!
              </h6>
            </div>
            <ContactUsModal></ContactUsModal>
          </div>
          <div className="modal-right d-fl-col">
            <div className="modal__img"></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBtn;
