const ACMain2sun3 = () => {
  return (
    <div className="flex items-start">
      <div className="flex gap-x-3 max-sm:gap-x-0">
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-sm">
              Actual Power
              <br />
              <span className="font-bold">(kWh)</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-bold">
              Actual Power
              <br />
              <span className="font-bold">(kWh)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="pt-2 max-sm:pt-0">
            <p className="font-bold text-sm text-[#5A6EE6]">00,000.0</p>
          </div>
          <div className="pb-2">
            <p className="font-bold text-sm text-[#5A6EE6]">00,000.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACMain2sun3;
