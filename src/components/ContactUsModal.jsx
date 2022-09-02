import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUsModal = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b8q7vqb",
        "template_fhp7sad",
        form.current,
        "FvyseUWP5oNsupVp0"
      )
      .then(
        () => {
          Swal.fire({
            title: "Заявка отправлена!",
            text: "Скоро мы свяжемся с Вами",
            icon: "success",
            background: "white",
            allowEnterKey: false,
            confirmButtonColor: "#f8b700",
            timer: 3000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="modal__form d-fl-col">
      <div className="form__group d-fl">
        <input
          type="text"
          name="user_name"
          id="user_name-popup"
          class="input"
          autocomplete="off"
          placeholder=" "
          required=" "
          x-webkit-speech
        />
        <label className="input__label" for="user_name-popup">
          Имя
        </label>
      </div>

      <div class="form__group d-fl">
        <input
          type="text"
          name="user_phone"
          id="user_phone-popup"
          class="input"
          autocomplete="off"
          placeholder=" "
          required=" "
          x-webkit-speech
        />
        <label className="input__label" for="user_phone-popup">
          Телефон
        </label>
      </div>

      <div class="form__group d-fl">
        <textarea
          type="text"
          name="user_comments"
          id="user_comments-popup"
          class="input input-comments"
          autocomplete="off"
          placeholder=" "
          autocorrect="off"
          x-webkit-speech
          spellcheck="true"
          autocapitalize="off"
        />
        <label className="input__label" for="user_comments-popup">
          Комментарий
        </label>
      </div>

      <button type="submit" className="btn modal__btn">
        Заказать
      </button>
    </form>
  );
};

export default ContactUsModal;
