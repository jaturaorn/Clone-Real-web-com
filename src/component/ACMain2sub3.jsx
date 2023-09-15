// component
import ACMain2sub2sup1 from "../component/ACMain2sub3sup1";

const ACMain2sub3 = () => {
  return (
    <div
      className="absolute bg-green-500 p-3 w-[21%] h-[33%] top-[210px] 
      left-[184px] rounded-lg overflow-hidden max-xl:left-[150px]
      max-lg:left-[118px] max-md:left-[94px] max-sm:left-[82px]
      max-[515px]:left-[60px]"
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
        <ACMain2sub2sup1 />
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

export default ACMain2sub3;
