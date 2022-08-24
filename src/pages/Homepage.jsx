import "./Homepage.scss";
import { motion } from "framer-motion";

import Form from "../components/Form";

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
  return (
    <main className="main">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="start"
      >
        <div className="container">
          <div className="d-fl-col block__start">
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
                src="/img/photo/banana.png"
                alt="Коробко веб студия - качественно, красиво, удобно, стильно"
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
            <div className="d-fl block__start-bottom">
              <div className="num">
                <svg>
                  <use xlinkHref="/sprite.svg#num"></use>
                </svg>
              </div>
              <div className="mouse">
                <svg>
                  <use xlinkHref="/sprite.svg#mouse"></use>
                </svg>
              </div>
              <div className="idea">
                <svg>
                  <use xlinkHref="/sprite.svg#idea"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="section__about section-wrap"
      >
        <article className="section__block block-left">
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
                качественная работа
              </motion.li>
              <motion.li variants={listAnimation} custom={2}>
                соблюдение сроков
              </motion.li>
              <motion.li variants={listAnimation} custom={3}>
                индивидуальный подход
              </motion.li>
              <motion.li variants={listAnimation} custom={4}>
                непрерывная связь
              </motion.li>
            </motion.ul>
          </div>
        </article>
        <div className="section__block block-red d-fl">
          <motion.div
            variants={blockAnimation}
            custom={1}
            className="block__img"
          >
            <img
              src="/img/photo/nintendo.webp"
              alt="Коробко студия - качественно, красиво, удобно, стильно"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="section__about section-wrap--reverse"
      >
        <div className="section__block block-yellow d-fl">
          <div className="block__img block__img-rubic">
            <motion.img
              variants={blockAnimation}
              custom={1}
              src="/img/photo/rubic.webp"
              alt="Коробко студия - качественно, красиво, удобно, стильно"
            />
          </div>
        </div>
        <article className="section__block block-left">
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
                landing page
              </motion.li>
              <motion.li variants={listAnimationRight} custom={2}>
                многостраничный сайт
              </motion.li>
              <motion.li variants={listAnimationRight} custom={3}>
                сайт-визитка
              </motion.li>
              <motion.li variants={listAnimationRight} custom={4}>
                сайт-пригласительное
              </motion.li>
            </motion.ul>
          </div>
        </article>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="portfolio"
      >
        <div className="container">
          <div className="portfolio-main">
            <motion.h2 variants={textAnimation} custom={1} className="title">
              наши работы
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
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
                      src="/img/photo/portfolio/headphones.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    Сайт изучения <br />
                    иностранных языков
                  </h6>
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
                      src="/img/photo/portfolio/box.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    Интернет-магазин <br />
                    custom box
                  </h6>
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
                      src="/img/photo/portfolio/car.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    Сайт логистической <br />
                    компании
                  </h6>
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
                      src="/img/photo/portfolio/coffee.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    сайт для малого <br /> бизнеса
                  </h6>
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
                      src="/img/photo/portfolio/minion.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    сайт для nft <br />
                    store
                  </h6>
                </div>
              </motion.a>
              <motion.div
                variants={cartAnimation}
                custom={6}
                className="portfolio__cart"
              >
                <div className="portfolio__cart-main">
                  <div className="cart__img">
                    <img
                      src="/img/photo/portfolio/cat.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    дизайн приюта <br />
                    домашних животных
                  </h6>
                </div>
              </motion.div>
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
                      src="/img/photo/portfolio/oil.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    сайт покупки и <br />
                    утилизации масла
                  </h6>
                </div>
              </motion.a>
              <motion.div
                variants={cartAnimation}
                custom={8}
                className="portfolio__cart"
              >
                <div className="portfolio__cart-main">
                  <div className="cart__img">
                    <img
                      src="/img/photo/portfolio/nike.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    дизайн модели <br />
                    кроссовок nike
                  </h6>
                </div>
              </motion.div>
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
                      src="/img/photo/portfolio/cake.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    сайт домашней <br />
                    выпечки
                  </h6>
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
                      src="/img/photo/portfolio/pillow.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    интернет-магазин <br />
                    подушек
                  </h6>
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
                      src="/img/photo/portfolio/film.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    Сайт промо к <br />
                    кинофильму
                  </h6>
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
                      src="/img/photo/portfolio/space.png"
                      alt="Коробко студия - качественно, красиво, удобно, стильно"
                    />
                  </div>
                </div>
                <div className="portfolio__cart-title">
                  <h6>
                    сайт агенства <br />
                    travel space
                  </h6>
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
                  <Form />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className="section__block section__block-right block-red d-fl"
            >
              <div className="block__img block__img-contacts">
                <motion.img
                  variants={blockAnimation}
                  custom={1}
                  src="/img/photo/phone.webp"
                  alt="Коробко студия - качественно, красиво, удобно, стильно"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export { Homepage };
