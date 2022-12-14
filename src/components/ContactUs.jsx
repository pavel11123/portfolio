import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Form.scss";

// npm install emailjs-com --save
// npm install @emailjs/browser --save

const ContactUs = () => {
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
    <form ref={form} onSubmit={sendEmail} className="form__main d-fl-col">
      <div className="form__group d-fl">
        <input
          type="text"
          name="user_name"
          id="user_name"
          class="input"
          autocomplete="off"
          placeholder=" "
          required=" "
          x-webkit-speech
        />
        <label className="input__label" for="user_name">
          Имя
        </label>
      </div>

      <div class="form__group d-fl">
        <input
          type="text"
          name="user_phone"
          id="user_phone"
          class="input"
          autocomplete="off"
          placeholder=" "
          required=" "
          x-webkit-speech
        />
        <label className="input__label" for="user_phone">
          Телефон
        </label>
      </div>

      <div class="form__group d-fl">
        <textarea
          type="text"
          name="user_comments"
          id="user_comments"
          class="input input-comments"
          autocomplete="off"
          placeholder=" "
          autocorrect="off"
          x-webkit-speech
          spellcheck="true"
          autocapitalize="off"
        />
        <label className="input__label" for="user_comments">
          Комментарий
        </label>
      </div>

      <button type="submit" className="btn form__btn">
        Заказать
      </button>
    </form>
  );
};

export default ContactUs;
