import "./Footer.scss";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap">
        <div className="section__block">
          <div className="d-fl-col">
            <Logo />

            <div className="footer__info d-fl-col">
              <h1>Профессиональная разработка сайтов.</h1>
              <h5>Web студия. Создание сайтов.</h5>
              <h5>Продвижение сайтов. Дизайн сайтов.</h5>
            </div>
          </div>
        </div>
        <div className="section__block">
          <div className="footer__block-right d-fl-col">
            <div className="d-fl-col footer__text footer__contact">
              <span>Связаться</span>
              <div className="d-fl-wrap footer-gap">
                <div className="d-fl-col footer__text">
                  <a href="tel:+79835200346">+7 (983) 520-03-46</a>
                  <a href="tel:+79507822966">+7 (950) 782-29-66</a>
                </div>
                <div className="d-fl-col footer__text">
                  <a href="mailto:korobko.studio@gmail.ru">
                    korobko.studio@gmail.ru
                  </a>
                </div>
              </div>
            </div>
            <div className="d-fl-col footer__text footer__studio">
              <span>Студия</span>
              <ul className="d-fl-wrap footer__text footer-gap">
                <li>
                  <a href="#about">Почему мы</a>
                </li>
                <li>
                  <a href="#work">Что мы делаем</a>
                </li>
                <li>
                  <a href="#portfolio">Наши работы</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
              <address className="footer__address">Россия г. Омск</address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
