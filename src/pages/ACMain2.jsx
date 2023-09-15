// react icons
import { AiOutlineDownload } from "react-icons/ai";

// images
import circuitPic from "../images/sld.png";

// component
import ACMain2sub1 from "../component/ACMain2sub1";
import ACMain2sub2 from "../component/ACMain2sub2";
import ACMain2sub3 from "../component/ACMain2sub3";
import ACMain2sub4 from "../component/ACMain2sub4";
import ACMain2sub5 from "../component/ACMain2sub5";

const ACMain2 = () => {
  return (
    <div
      className="w-full h-screen flex shadow-lg rounded-lg bg-no-repeat
        border border-slate-300"
    >
      <div className="w-full relative rounded-lg px-2">
        <img src={circuitPic} alt="circuitPic" className="w-full h-screen" />
        <div className="flex flex-col absolute top-4 right-[210px]">
          <div
            className="flex items-center justify-end gap-x-2 
            translate-x-[100%]"
          >
            {/* className="top-[3%] right-[0.8%]" */}
            <a href="#" className="underline underline-offset-4">
              Download SLD.pdf
            </a>
            <AiOutlineDownload />
          </div>
          <div className="flex items-center gap-x-2 translate-x-[100%]">
            <a href="#" className="underline underline-offset-4">
              Download LAYOUT.pdf
            </a>
            <AiOutlineDownload />
          </div>
        </div>
        <ACMain2sub1 />
        <ACMain2sub2 />
        <ACMain2sub3 />
        <ACMain2sub4 />
        <ACMain2sub5 />
      </div>
    </div>
  );
};

export default ACMain2;
