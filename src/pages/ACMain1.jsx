// react-icons
import { BsFillCloudSleetFill } from "react-icons/bs";

const ACMain1 = () => {
  return (
    // Box-All
    <section className="flex p-2 gap-2 max-xl:flex-wrap max-lg:gap-[3px]
            max-lg:flex-row max-sm:flex-col">
        {/* Box-Left */}
        <div className="w-1/5 h-28 shadow-lg flex max-sm:w-full max-lg:w-1/3
            justify-between p-4 rounded-lg border border-slate-300 
            max-md:overflow-hidden max-md:w-1/2 bg-white">
            <div className="flex items-center">
            <p>
            Actual Power
            <br/>    
            <span className="font-bold">kW</span>
            </p>
            </div>
            <div className="flex items-center">
                <p className="font-bold text-3xl text-[#5A6EE6]">00,000.0</p>
            </div>
        </div>
        {/* Box-Left-Mid */}
        <div className="w-1/5 h-28 shadow-lg flex justify-between max-sm:w-full
                max-lg:w-[33%] p-4 rounded-lg border border-slate-300 
                overflow-hidden max-md:w-[49%] bg-white">
            <div className="flex items-center max-md:flex-2">
            <p>
            Daily Energy
            <br/>    
            <span className="font-bold">kWh</span>
            </p>
            </div>
            <div className="flex items-center">
                <p className="font-bold text-3xl text-[#5A6EE6]">00,000.0</p>
            </div>
        </div>
        {/* Box-Mid */}
        <div className="w-1/5 h-28 shadow-lg flex justify-between max-sm:w-full
                max-lg:w-[32.5%] p-3 rounded-lg border overflow-hidden 
                border-slate-300 max-md:w-1/2 bg-white">
            <div className="flex items-center">
            <p>
            Monthly Energy
            <br/>    
            <span className="font-bold">kWh</span>
            </p>
            </div>
            <div className="flex items-center">
                <p className="font-bold text-3xl text-[#5A6EE6]">000,000.0</p>
            </div>
        </div>
        {/* Box-Mid-Right > Box-2-Small */}
        <div className="flex gap-3 max-lg:gap-[4px] max-md:w-[49%] max-lg:w-[49%]
            max-sm:w-full">
            <div className="w-1/7 h-28 shadow-lg flex flex-col items-center 
                justify-between p-4 rounded-lg border border-slate-300 
                max-sm:w-1/2 bg-white max-md:w-1/2 max-lg:w-1/2">
                <div className="flex items-center">    
                    <span className="font-bold">PR</span>
                </div>
                <div className="flex items-center">
                    <p className="font-bold text-3xl text-[#5A6EE6]">000.0%</p>
                </div>
            </div>
            <div className="w-1/8 h-28 shadow-lg flex flex-col 
                items-center justify-between p-4 rounded-lg border border-slate-300 
                max-sm:w-1/2 bg-white max-md:w-1/2 max-lg:w-1/2">
                <div className="flex items-center">    
                    <span className="font-bold">Plant Factor</span>
                </div>
                <div className="flex items-center">
                    <p className="font-bold text-3xl text-[#5A6EE6]">000.0%</p>
                </div>
            </div>
        </div>
        {/* Box-Right */}
        <div className="w-1/5 h-28 shadow-lg flex flex-col 
            p-2 rounded-lg border border-slate-300 max-sm:w-full 
            max-lg:w-1/2 max-md:w-screen max-xl:w-1/4 bg-white">
            <div className="flex place-content-center justify-between">
                <div>
                    <BsFillCloudSleetFill className="text-xl" />
                </div>
                <div className="inline-flex ml-1">Reduced</div>
                <div className="flex space-x-2">
                    <button className="bg-slate-500 text-white py-1 px-2 cursor-pointer hover:bg-slate-700">D</button>
                    <button className="bg-slate-500 text-white py-1 px-2 cursor-pointer hover:bg-slate-700">M</button>
                    <button className="bg-slate-500 text-white py-1 px-2 cursor-pointer hover:bg-slate-700">Y</button>
                    <button className="bg-slate-500 text-white py-1 px-2 cursor-pointer hover:bg-slate-700">L</button>
                </div>
            </div>
            <div>
                <div className="flex place-content-center p-1">
                    <p className="font-bold text-3xl text-[#5A6EE6] text-center">0.0</p>
                </div>
            </div>
            <div>
                    <p className="flex place-content-end">Tons</p>
            </div>
        </div>
        {/* End-Box-Right */}
    </section>
  )
}

export default ACMain1