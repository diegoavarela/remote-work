import React, { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";

export default function Header({ setMenuVisible }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  let desktop = (windowSize.width >= 1024);

  useEffect(() => {
    function handleResize() {
      if (windowSize.width > 1024) {
        desktop = (windowSize.width >= 1024)
        setMenuVisible(false);
        console.log("desktop: ", desktop);
      }

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    // Call handleResize immediately to set the initial size
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return !desktop ? (
    <div className="w-[90%] flex justify-between mx-auto mt-4">
      <img src={logo} alt="Logo" />
      <button onClick={setMenuVisible} type="button">
        <img src={menu} alt="Menu" />
      </button>
    </div>
  ) : (
<div className="w-[95%] flex justify-between items-center mx-auto mt-4 lg:justify-start">
  <img className="w-[45px] h-[15px] order-[-1]" src={logo} alt="Logo" />
  <div className="flex w-[100%] justify-end items-center">
    <div className="flex w-[100%] justify-start ml-6" >
    <nav>
      <ul className="flex gap-8 items-center">
        <li>Features<i className="bi bi-chevron-down pl-2"></i></li>
        <li>Company<i className="bi bi-chevron-down pl-2"></i></li>
        <li>Careers</li>
        <li>About</li>
      </ul>
    </nav>
    </div>
    <div className="flex gap-4 justify-end items-center">
      <p>Login</p>
      <p>Register</p>
    </div>
  </div>
</div>
  );
}
