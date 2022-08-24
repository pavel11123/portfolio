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
              <h6>Web студия. Создание сайтов.</h6>
              <h6>Продвижение сайтов. Дизайн сайтов.</h6>
            </div>
          </div>
        </div>
        <div className="section__block">
          <div className="footer__block-right d-fl-col">
            <div className="d-fl-col footer__text footer__contact">
              <span>Связаться</span>
              <div className="d-fl-wrap footer-gap">
                <div className="d-fl-col footer__text">
                  <a href="">+7 (983) 520-03-64</a>
                  <a href="">+7 (950) 782-29-66</a>
                </div>
                <div className="d-fl-col footer__text">
                  <a href="">korobko.studio@mail.ru</a>
                </div>
              </div>
            </div>
            <div className="d-fl-col footer__text footer__studio">
              <span>Студия</span>
              <div className="d-fl-wrap footer__text footer-gap">
                <a href="">Почему мы</a>
                <a href="">Что мы делаем</a>
                <a href="">Наши работы</a>
                <a href="">Контакты</a>
              </div>
              <span>Россия г. Омск</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
