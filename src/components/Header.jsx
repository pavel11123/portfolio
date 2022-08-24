import BurgerMenu from "./HeaderComponents/BurgerMenu";
import Logo from "./Logo";
import ModalBtn from "./HeaderComponents/ModalBtn";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="d-fl header-main">
            <BurgerMenu />

            <Logo />

            <ModalBtn />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
