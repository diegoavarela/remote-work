import React from "react";
import imgDatabiz from "./images/client-databiz.svg";
import imgAudioPhile from "./images/client-audiophile.svg";
import imgMeet from "./images/client-meet.svg";
import imgMaker from "./images/client-maker.svg";

export default function Body() {
  return (
    <div className="w-[90%] flex flex-col justify-center mx-auto">
      <h1 className="mx-auto mt-8 text-5xl font-bold lg:text-6xl lg:mt-0">Make remote work</h1>
      <p className="mt-8 text-center lg:text-left">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button type="button" className=" bg-black text-white rounded-lg p-2 w-32 mx-auto mt-8 lg:mx-0">Learn more</button>
      <div className="grid grid-cols-4 gap-8 align-middle mt-8 lg:mt-28">
        <img className="self-center" src={imgDatabiz} alt="" srcset="" />
        <img className="self-center" src={imgAudioPhile} alt="" srcset="" />
        <img className="self-center" src={imgMeet} alt="" srcset="" />
        <img className="self-center" src={imgMaker} alt="" srcset="" />
      </div>
    </div>
  );
}
