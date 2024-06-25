import "./App.css";
import Header from "./components/header";
import Background from "./components/background";
import Body from "./components/body";
import { useState } from "react";
import Menu from "./components/menu";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuFeaturesVisible, setMenuFeaturesVisible] = useState(false);
  const [menuCompanyVisible, setMenuCompanyVisible] = useState(false);

  const toggleMenuCompanyVisible = () => {
    setMenuCompanyVisible(!menuCompanyVisible);
  };

  const toggleMenuFeatures = () => {
    setMenuFeaturesVisible(!menuFeaturesVisible);
    console.log("menuFeaturesVisible: ", menuFeaturesVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="App flex flex-col justify-center lg:items-center">
      {menuVisible && (
        <div className=" bg-overlay h-screen w-screen fixed top-0 left-0 m-0 "></div>
      )}
      <Header 
        setMenuVisible={toggleMenu} />
      <div className="lg:flex lg:flex-row-reverse lg:gap-6 lg:w-[80%] lg:justify-center lg:h-screen lg:align-middle lg:max-h-[800px]">
        <Background />
        <Body />
      </div>
      {menuVisible && (
        <Menu
          setMenuVisible={toggleMenu}
          setMenuFeaturesVisible={toggleMenuFeatures}
          menuFeaturesVisible={menuFeaturesVisible}
          setMenuCompanyVisible={toggleMenuCompanyVisible}
          menuCompanyVisible={menuCompanyVisible}
        />
      )}
    </div>
  );
}

export default App;
