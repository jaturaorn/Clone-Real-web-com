// react-icons
import { MdElectricBolt } from "react-icons/md";

// component
import Mainblock2Sub1 from "../component/Mainblock2Sub1";
import Mainblock2Sub2 from "../component/Mainblock2Sub2";
import Mainblock2Sub3 from "../component/Mainblock2Sub3";

const Mainblock2 = () => {
  return (
    // Box-All
    <section className="flex px-2 mb-2 gap-2 max-xl:flex-wrap max-lg:gap-[3px] 
            max-lg:flex-row max-sm:flex-col max-sm:gap-y-2 max-sm:gap-x-0">
        {/* Box-Left */}
        <div className="w-1/5 h-64 shadow-lg flex flex-col justify-between 
            p-4 rounded-lg border border-slate-300 max-sm:w-full 
            max-lg:w-[33%] max-xl:w-[33%] bg-white">
                <div className="flex gap-x-3">
                    <MdElectricBolt className="border border-black 
                    rounded-lg font-bold" />
                    <div className="font-bold">
                        <p>INV Room #1 - 2,964 kWp</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <p>Daily</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Power</p>
                        <p className="font-bold text-3xl 
                        text-[#5A6EE6] text-center">0,000.0</p>
                        <p className="font-bold">kW</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Energy</p>
                        <p className="font-bold text-3xl 
                        text-[#5A6EE6] text-center">0,000.0</p>
                        <p className="font-bold">kWh</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <p>Lifetime Energy (MWh)</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                    <p className="font-bold text-3xl 
                    text-[#5A6EE6] text-center pl-2">000,000.0</p>
                    </div>
                </div>
        </div>
        {/* End-Box-Left */}
        {/* Box-Left-Mid */}
        <Mainblock2Sub1 />
        {/* Box-Mid */}
        <Mainblock2Sub2 />
        {/* Box-Right */}
        <Mainblock2Sub3 />
    </section>
    // End-Box-All
  )
}

export default Mainblock2