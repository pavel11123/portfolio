import "./Logo.scss";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <svg>
          <use xlinkHref="/sprite.svg#logo"></use>
        </svg>
      </div>
    </>
  );
};

export default Logo;
