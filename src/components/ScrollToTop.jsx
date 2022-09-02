import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScrollTopButton && (
        <div className="btn__top" onClick={scrollTop}></div>
      )}
    </>
  );
};

export default ScrollToTop;
