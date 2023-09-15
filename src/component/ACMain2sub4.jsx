// component
import ACMain2sub5sup1 from "./ACMain2sub4sup1";

const ACMain2sub4 = () => {
  return (
    <div
      className="absolute bg-rose-400 p-3 w-[21%] h-[33%]
      top-[210px] left-[44.5%] rounded-lg overflow-hidden"
    >
      <div className="flex flex-col gap-y-4">
        {/* Box top */}
        <div className="flex gap-x-4">
          <div>
            <p className="text-xs font-semibold">ACB1 METER01</p>
          </div>
          <div>
            <p className="text-xs font-semibold">
              Last update: <span>2023-09-12 14:14:00</span>
            </p>
          </div>
        </div>
        <ACMain2sub5sup1 />
        {/* Box Bottom */}
        <div className="flex justify-between">
          <div>
            <p className="text-xs font-semibold">Daily Energy (kWh)</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#5A6EE6]">00,000.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs font-semibold">Lifetime Energy (kWh)</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#5A6EE6]">00,000.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACMain2sub4;
