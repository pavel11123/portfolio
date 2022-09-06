import { useState } from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div
        className="burgerMenu d-fl-col"
        onClick={() => {
          setMenuActive(true);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menu ${menuActive ? "animated" : " "}`}>
        <div className="container">
          <div className="menu__wrapper d-fl-col">
            <div className="menu__logo">
              <img src="../img/icon/logo2.svg" alt="korobko web studio" />
            </div>
            <div className="menu__close-wrapper">
              <div
                className="menu__close"
                onClick={() => {
                  setMenuActive(false);
                }}
              ></div>
            </div>
            <div className="menu__content d-fl">
              <div className="menu__content-nav d-fl">
                <nav className="d-fl">
                  <ul className="d-fl-col">
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          setMenuActive(false);
                        }}
                      >
                        Главная
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#about"
                        onClick={() => {
                          setMenuActive(false);
                        }}
                      >
                        О нас
                      </a>
                    </li>
                    <li>
                      <a
                        href="#work"
                        onClick={() => {
                          setMenuActive(false);
                        }}
                      >
                        Услуги
                      </a>
                    </li>
                    <li>
                      <a
                        href="#portfolio"
                        onClick={() => {
                          setMenuActive(false);
                        }}
                      >
                        Наши работы
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contacts"
                        onClick={() => {
                          setMenuActive(false);
                        }}
                      >
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="society d-fl-col">
                  <a className="society__img">
                    <svg>
                      <use xlinkHref="/sprite.svg#vk"></use>
                    </svg>
                  </a>
                  <a className="society__img">
                    <svg>
                      <use xlinkHref="/sprite.svg#inst"></use>
                    </svg>
                  </a>
                  <a className="society__img">
                    <svg>
                      <use xlinkHref="/sprite.svg#tg"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="menu__content-right">
                <div className="menu__content-img">
                  <img
                    src="../img/photo/menu-img.png"
                    alt="web студия - разработаем сайт для вашего бизнеса"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
