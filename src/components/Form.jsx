import "./Form.scss";

const Form = () => {
  return (
    <>
      <form action="post" class="form__main d-fl-col">
        <div class="form__group d-fl">
          <input
            type="text"
            name="user_name"
            id="user_name-popup"
            class="input"
            autocomplete="off"
            placeholder=" "
            required=""
          />
          <label class="input__label" for="user_name-popup">
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
            required=""
          />
          <label class="input__label" for="user_phone-popup">
            Телефон
          </label>
        </div>

        <div class="form__group d-fl">
          <input
            type="text"
            name="user_comments"
            id="user_comments-popup"
            class="input input-comments"
            autocomplete="off"
            placeholder=" "
          />
          <label class="input__label" for="user_comments-popup">
            Комментарий
          </label>
        </div>

        <button type="submit" class="btn form__btn">
          Заказать
        </button>
        <div class="messageBlockForm">Сообщение успешно отправленно!</div>
      </form>
    </>
  );
};

export default Form;
