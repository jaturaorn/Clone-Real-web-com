import ACMain2sun3 from "./ACMain2sun3";

const ACMain2sub2 = () => {
  return (
    <div
      className="absolute bg-white top-[18px] p-3 left-[592px] 
      w-[41.5%] h-[21.5%] rounded-lg overflow-hidden max-xl:left-[470px]
      max-lg:left-[380px] max-md:left-[290px] max-sm:left-[232px] max-xl:p-0"
    >
      {/* Box Top */}
      <div className="flex justify-between">
        <div>
          <p>MVCB METER01</p>
        </div>
        <div>
          <p>
            Last update: <span>2023-09-12 14:14:00</span>
          </p>
        </div>
      </div>
      {/* Box left */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3>Name</h3>
          <h3 className="text-sm font-semibold">P (kW)</h3>
          <h3 className="text-sm font-semibold">VLL (V)</h3>
          <h3 className="text-sm font-semibold">VLN (V)</h3>
          <h3 className="text-sm font-semibold">IL (A)</h3>
        </div>
        {/* Box left Mid */}
        <div className="flex flex-col">
          <h3>Total</h3>
          <h3 className="text-sm font-semibold">3,310.0</h3>
          <h3 className="text-sm font-semibold">23,646.0</h3>
          <h3 className="text-sm font-semibold">13,632.0</h3>
          <h3 className="text-sm font-semibold">94.6</h3>
        </div>
        {/* Box Mid */}
        <div className="flex flex-col text-right">
          <h3>A/B/C</h3>
          <div className="flex flex-col justify-start">
            <h3 className="text-sm font-semibold">
              1,050.0 / 1,050.0 / 1,040.0
            </h3>
            <h3 className="text-sm font-semibold">
              23,642.0 / 23,616.0 / 23,616.0
            </h3>
            <h3 className="text-sm font-semibold">
              13,678.0 / 13,638.0 / 13,638.0
            </h3>
            <h3 className="text-sm font-semibold">92.9 / 93.0 / 92.7</h3>
          </div>
        </div>
        {/* Box right */}
        <ACMain2sun3 />
      </div>
    </div>
  );
};

export default ACMain2sub2;
