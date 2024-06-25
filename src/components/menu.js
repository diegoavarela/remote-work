import React from "react";
import menuClose from "./images/icon-close-menu.svg";
import SubmenuFeatures from "./submenuFeatures";

function Menu({
  setMenuVisible,
  setMenuFeaturesVisible,
  menuFeaturesVisible,
  setMenuCompanyVisible,
  menuCompanyVisible,
}) {
  return (
    <div className="w-[70%] absolute top-0 right-0 h-screen bg-white flex flex-col">
      <div className="flex justify-end m-4 ">
        <button type="button" onClick={setMenuVisible}>
          <img src={menuClose} />
        </button>
      </div>
      <div className="ml-6">
        <nav className="">
          <ul>
            <li className="pt-4">
              Features
              <button
                className=" ml-2 cursor-pointer"
                type="button"
                onClick={setMenuFeaturesVisible}
              >
                <i class="bi bi-chevron-down"></i>
              </button>
            </li>
            {/* if menuFeaturesVisible is true, display the following list items */}
            {menuFeaturesVisible && <SubmenuFeatures />}
            <li className="pt-4">
              Company
              <button
                type="button"
                onClick={setMenuCompanyVisible}
                className="ml-2"
              >
                <i class="bi bi-chevron-down"></i>
              </button>
            </li>
            {menuCompanyVisible && (
              <ul>
                <li className="pl-4 pt-4">History</li>
                <li className="pl-4 pt-4">Our Team</li>
                <li className="pl-4 pt-4">Blog</li>
              </ul>
            )}
            <li className="pt-4">Careers</li>
            <li className="pt-4">About</li>
          </ul>
        </nav>
        <div className="mt-6 flex flex-col justify-center w-[90%]">
          <p className="text-center">Login</p>
          <p className="text-center mt-6 pt-2 pb-2 border border-black rounded-xl">
            Register
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
