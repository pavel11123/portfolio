import "./Homepage.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

import ContactUs from "../components/ContactUs";
import Modal from "../components/Modal";
import ContactUsModal from "../components/ContactUsModal";
import ScrollToTop from "../components/ScrollToTop";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const bananaAnimation = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const listAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const listAnimationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const cartAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Homepage = () => {
  const [modalActive, setModalActive] = useState(false);

  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className="main">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="start"
        >
          <div className="container">
            <div className="d-fl-col block__start">
              <div className="start__block-center d-fl-col">
                <div className="title__start title__start-top d-fl-col">
                  <motion.span
                    variants={textAnimation}
                    custom={2}
                    className="title__start-big"
                  >
                    WaNNa
                  </motion.span>
                  <motion.span
                    variants={textAnimation}
                    custom={2}
                    className="title__start-small"
                  >
                    BaNaNa?
                  </motion.span>
                </div>
                <div className="img__start">
                  <motion.img
                    variants={bananaAnimation}
                    custom={1}
                    src="/img/photo/banana.webp"
                    alt="Коробко веб студия - Хочешь банан? Или сайт?"
                  />
                </div>
                <div className="title__start title__start-bottom d-fl-col">
                  <motion.span
                    variants={textAnimation}
                    custom={3}
                    className="title__start-small"
                  >
                    or site?
                  </motion.span>
                </div>
              </div>
              <div className="d-fl start__block-bottom">
                <div
                  className="num"
                  data-tooltip="Мы делаем удобные, качественные и продающие сайты!"
                >
                  <svg>
                    <use xlinkHref="/sprite.svg#num"></use>
                  </svg>
                </div>
                <div className="mouse" onClick={() => scrollToSection(about)}>
                  <svg>
                    <use xlinkHref="/sprite.svg#mouse"></use>
                  </svg>
                </div>
                <div className="idea" onClick={() => setModalActive(true)}>
                  <svg>
                    <use xlinkHref="/sprite.svg#idea"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section ref={about} className="section__about section-wrap">
          <a name="about"></a>
          <motion.article
            className="section__block block-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <div className="block-text">
              <motion.h2
                variants={blockAnimation}
                custom={1}
                className="title__block"
              >
                почему
                <br />
                <span className="title__block-yellow">мы</span>?
              </motion.h2>
              <motion.p
                variants={blockAnimation}
                custom={2}
                className="subtitle__block"
              >
                У нас небольшой коллектив, поэтому мы справляемся быстро и
                качественно, а также берёмся за срочные заказы.
              </motion.p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="list__block list__block-yellow d-fl-col"
              >
                <motion.li variants={listAnimation} custom={1}>
                  <h3>качественная работа</h3>
                </motion.li>
                <motion.li variants={listAnimation} custom={2}>
                  <h3>соблюдение сроков</h3>
                </motion.li>
                <motion.li variants={listAnimation} custom={3}>
                  <h3>индивидуальный подход</h3>
                </motion.li>
                <motion.li variants={listAnimation} custom={4}>
                  <h3>непрерывная связь</h3>
                </motion.li>
              </motion.ul>
            </div>
          </motion.article>
          <motion.div
            className="section__block block-red d-fl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <motion.div
              variants={blockAnimation}
              custom={1}
              className="block__img"
            >
              <img
                src="/img/photo/nintendo.webp"
                alt="Nintendo - Коробко веб студия"
              />
            </motion.div>
          </motion.div>
        </section>
        <a name="work"></a>
        <section className="section__about section-wrap--reverse">
          <motion.div
            className="section__block block-yellow d-fl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
          >
            <div className="block__img block__img-rubic">
              <motion.img
                variants={blockAnimation}
                custom={1}
                src="/img/photo/rubic.webp"
                alt="Rubic - Коробко веб студия"
              />
            </div>
          </motion.div>
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="section__block block-left"
          >
            <div className="block-text">
              <motion.h2
                variants={blockAnimation}
                custom={1}
                className="title__block"
              >
                Что <span className="title__block-red">мы</span>
                <br />
                делаем?
              </motion.h2>
              <motion.p
                variants={blockAnimation}
                custom={2}
                className="subtitle__block"
              >
                Наша студия занимается созданием профессиональных сайтов для
                малого и большого бизнеса.
              </motion.p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="list__block list__block-red d-fl-col"
              >
                <motion.li variants={listAnimationRight} custom={1}>
                  <h3>landing page</h3>
                </motion.li>
                <motion.li variants={listAnimationRight} custom={2}>
                  <h3>многостраничный сайт</h3>
                </motion.li>
                <motion.li variants={listAnimationRight} custom={3}>
                  <h3>сайт-визитка</h3>
                </motion.li>
                <motion.li variants={listAnimationRight} custom={4}>
                  <h3>сайт-пригласительное</h3>
                </motion.li>
              </motion.ul>
            </div>
          </motion.article>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="portfolio"
        >
          <a name="portfolio"></a>
          <div className="container">
            <div className="portfolio-main">
              <motion.h2 variants={textAnimation} custom={1} className="title">
                наши работы
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="portfolio-grid"
              >
                <motion.a
                  variants={cartAnimation}
                  custom={1}
                  href="../../portfolio/lang/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/headphones.webp"
                        alt="Landing page от Korobko Web-studio - изучение иностранных языков"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      Сайт изучения <br />
                      иностранных языков
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={2}
                  href="../../portfolio/arka/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/box.webp"
                        alt="Landing page от Korobko Web-studio - интернет магазин custom box"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      Интернет-магазин <br />
                      custom box
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={3}
                  href="https://doandhelp.ru/"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/car.webp"
                        alt="Landing page от Korobko Web-studio - сайт логистической компании"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      Сайт логистической <br />
                      компании
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={4}
                  href="../../portfolio/spoon/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/coffee.webp"
                        alt="Landing page от Korobko Web-studio - адаптивный сайт для бизнеса"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      сайт для малого <br /> бизнеса
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={5}
                  href="../../portfolio/NFT_2/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/minion.webp"
                        alt="Landing page от Korobko Web-studio - адаптивный NFT Store"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      сайт для nft <br />
                      store
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={6}
                  className="portfolio__cart"
                  href="/img/photo/portfolio/animals-photo.png"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/cat.webp"
                        alt="Landing page от Korobko Web-studio - Дизайн сайта для приюта домашних животных"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      дизайн приюта <br />
                      домашних животных
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={7}
                  href="https://www.ecos172.ru/"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/oil.webp"
                        alt="Коробко студия - качественно, красиво, удобно, стильно"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      сайт покупки и <br />
                      утилизации масла
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={8}
                  className="portfolio__cart"
                  href="/img/photo/portfolio/nike-photo.png"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/nike.webp"
                        alt="Landing page от Korobko Web-studio - Презентация новых кроссовок Nike"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      дизайн модели <br />
                      кроссовок nike
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={9}
                  href="https://korca55.ru/"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/cake.webp"
                        alt="Landing page от Korobko Web-studio - Сайт для кондитерской на дому"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      сайт домашней <br />
                      выпечки
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={10}
                  href="../../portfolio/Mariela/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/pillow.webp"
                        alt="Landing page от Korobko Web-studio - Интернет магазин подушек"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      интернет-магазин <br />
                      подушек
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={11}
                  href="../../portfolio/batman/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/film.webp"
                        alt="Landing page от Korobko Web-studio - Промо сайт к выходу нового фильма"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      Сайт промо к <br />
                      кинофильму
                    </h3>
                  </div>
                </motion.a>
                <motion.a
                  variants={cartAnimation}
                  custom={12}
                  href="../../portfolio/space/index.html"
                  className="portfolio__cart"
                  target={"_blank"}
                >
                  <div className="portfolio__cart-main">
                    <div className="cart__img">
                      <img
                        src="/img/photo/portfolio/space.webp"
                        alt="Landing page от Korobko Web-studio - Сайт для туристического агенства"
                      />
                    </div>
                  </div>
                  <div className="portfolio__cart-title">
                    <h3>
                      сайт агенства <br />
                      travel space
                    </h3>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="section__contacts"
        >
          <a name="contacts"></a>
          <div className="contacts-main">
            <motion.h2 variants={textAnimation} custom={1} className="title">
              контакты
            </motion.h2>
            <div className="section-wrap section__contacts-main">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="section__block section__block-left contacts-left"
              >
                <div className="contacts__text">
                  <motion.h2
                    variants={blockAnimation}
                    custom={1}
                    className="title__block"
                  >
                    у вас идея?
                    <br />у нас
                    <span className="title__block-yellow"> сайт</span>!
                  </motion.h2>
                  <motion.div
                    variants={blockAnimation}
                    custom={2}
                    className="contacts__form"
                  >
                    <ContactUs />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                className="section__block section__block-right block-red d-fl"
              >
                <div className="block__img block__img-contacts">
                  <motion.img
                    variants={blockAnimation}
                    custom={1}
                    src="/img/photo/phone.webp"
                    alt="Phone - Коробко веб студия"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="d-fl">
          <div className="modal-left d-fl-col">
            <div className="modal-top">
              <h6>учпочмак ел, кумыс пил, сайт где?</h6>
            </div>
            <ContactUsModal></ContactUsModal>
          </div>
          <div className="modal-right">
            <div className="modal__img"></div>
          </div>
        </div>
      </Modal>

      <ScrollToTop></ScrollToTop>
    </>
  );
};

export { Homepage };
