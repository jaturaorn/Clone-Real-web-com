import { MdElectricBolt } from "react-icons/md";

const MainblockSub2 = () => {
  return (
    // Box-All
    <div className="w-1/5 h-64 shadow-lg flex flex-col 
            justify-between p-4 rounded-lg border border-slate-300 
            max-sm:w-full max-lg:w-[33%] max-xl:w-[30%] bg-white">
            <div className="flex gap-x-3 max-sm:gap-x-32">
                <MdElectricBolt className="border border-black 
                rounded-lg font-bold" />
                <div className="flex text-center font-bold">
                    <p>INV Room #3 - 2,262 kWp</p>
                </div>
            </div>
                <div className="text-center">
                    <p>Daily</p>
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
  )
}

export default MainblockSub2