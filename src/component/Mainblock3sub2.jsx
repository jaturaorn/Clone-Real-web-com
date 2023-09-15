// react-icons
import { FiSun } from "react-icons/fi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { GiPaperWindmill } from "react-icons/gi";
import { PiWind } from "react-icons/pi";

// image
import Site from "../images/Site.jpg";
import Mainblock3Sub2sup1 from "./Mainblock3Sub2sup1";

const Mainblock3sub2 = () => {
  return (
    <div
      className="flex flex-col w-2/5 max-sm:w-full max-md:w-full 
        max-lg:w-full max-xl:w-full max-sm:h-96 max-md:h-96 
        max-lg:h-96 max-xl:h-64 overflow-hidden"
    >
      <div
        className="w-full h-full shadow-lg flex flex-col p-4 rounded-lg 
                border border-slate-300  bg-[url('https://images.pexels.com/photos/18190585/pexels-photo-18190585.jpeg')] 
                bg-center bg-cover"
      >
        <div className="relative flex space-x-2 justify-end mb-4">
          <input
            type="text"
            placeholder="2023/04/59"
            className="w-[100px] outline outline-1"
          />
          <button className="bg-[#5A6EE6] px-2 py-1">ok</button>
        </div>
        <div className="relative">
          <div
            className="absolute top-2 left-1 z-10 w-[97%] max-sm:flex-row-2
                            max-sm:w-full max-sm:top-0"
          >
            <div
              className="flex flex-row flex-wrap space-x-1 gap-y-2
                                max-sm:space-x-0 max-sm:gap-y-0"
            >
              <div
                className="w-fit flex gap-x-2 border border-slate-200
                                shadow-lg rounded-lg bg-white"
              >
                <div className="flex items-center">
                  <FiSun />
                </div>
                <div className="flex flex-col">
                  <p>
                    Irradiation(W/m<sup>2</sup>)
                  </p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border bg-white
                                    border-slate-200 shadow-lg rounded-lg"
              >
                <div className="flex items-center">
                  <FiSun />
                </div>
                <div className="flex flex-col">
                  <p>
                    Dailly Irr.(kWh/m<sup>2</sup>)
                  </p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border bg-white
                                    border-slate-200 shadow-lg rounded-lg"
              >
                <div className="flex items-center">
                  <FaTemperatureHigh />
                </div>
                <div className="flex flex-col">
                  <p>Ambient Temp.(°C)</p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border border-slate-200
                                    shadow-lg rounded-lg bg-white"
              >
                <div className="flex items-center">
                  <FaTemperatureHigh />
                </div>
                <div className="flex flex-col">
                  <p>Module Temp.(°C)</p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border border-slate-200
                                    shadow-lg rounded-lg bg-white"
              >
                <div className="flex items-center">
                  <BiWater />
                </div>
                <div className="flex flex-col">
                  <p>Water Level(m)</p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border border-slate-200
                                shadow-lg rounded-lg bg-white"
              >
                <div className="flex items-center">
                  <GiPaperWindmill />
                </div>
                <div className="flex flex-col">
                  <p>Water Level(m)</p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
              <div
                className="w-fit flex gap-x-2 border border-slate-200
                                shadow-lg rounded-lg bg-white"
              >
                <div className="flex items-center">
                  <PiWind />
                </div>
                <div className="flex flex-col">
                  <p>Water Level(m)</p>
                  <p className="text-center font-bold">N/A</p>
                </div>
              </div>
            </div>
          </div>
          <Mainblock3Sub2sup1 />
        </div>
      </div>
    </div>
  );
};

export default Mainblock3sub2;
