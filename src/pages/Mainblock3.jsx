import { useState } from "react";

// component
import Mainblock3Sub1 from "../component/Mainblock3Sub1";
import Mainblock3sub2 from "../component/Mainblock3sub2";

// datePicker
import DatePicker from "react-datepicker";

// CSS - datePicker
import "react-datepicker/dist/react-datepicker.css";

// Chart.js
import LineChart from "../component/LineChart";

const Mainblock3 = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="flex px-2 gap-2 max-xl:flex-col">
      <div className="flex flex-col w-3/5 gap-y-3 max-xl:w-full">
        <div
          className="w-full h-72 shadow-lg flex flex-col 
                    p-2 rounded-lg border border-slate-300 max-sm:py-1 
                    max-sm:items-center bg-[url('https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                    bg-cover bg-center"
        >
          <div
            className="flex space-x-2 justify-end max-sm:flex-col 
                        max-sm:gap-y-0"
          >
            <div className="flex gap-x-2 max-sm:mb-1">
              <button
                className="bg-slate-500 text-white 
                            py-1 px-2 cursor-pointer hover:bg-slate-700"
              >
                Weekly
              </button>
              <button
                className="bg-slate-500 text-white py-1 
                            px-2 cursor-pointer hover:bg-slate-700"
              >
                Monthly
              </button>
              <button
                className="bg-slate-500 text-white 
                            py-1 px-2 cursor-pointer hover:bg-slate-700"
              >
                Annual
              </button>
              <button
                className="bg-slate-500 text-white 
                            py-1 px-2 cursor-pointer hover:bg-slate-700"
              >
                Lifetime
              </button>
            </div>
            <div className="flex gap-x-2 max-sm:justify-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-1 outline outline-1"
              />
              <button className="bg-[#5A6EE6] px-2 py-1">ok</button>
            </div>
          </div>
        </div>
        {/* Box-Bottom */}
        <Mainblock3Sub1 />
      </div>
      {/* Box-right */}
      <Mainblock3sub2 />
    </section>
  );
};

export default Mainblock3;
