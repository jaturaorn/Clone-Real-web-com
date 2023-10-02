import { useState } from "react";

// datePicker
import DatePicker from "react-datepicker";

// CSS - datePicker
import "react-datepicker/dist/react-datepicker.css";

// chart.js
import LineChart from "./LineChart";

const Mainblock2Sub3 = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    // Box-All
    <div
      className="w-1/2 h-64 shadow-lg flex flex-col 
      px-2 py-2 rounded-lg border border-slate-300 max-sm:w-full
      max-lg:w-full max-xl:w-screen bg-white"
      // bg-[url('https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      // bg-cover bg-center
    >
      <div className="flex place-content-end gap-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="p-1 outline outline-1"
        />
        <button className="bg-[#5A6EE6] px-2 py-1">ok</button>
      </div>
      <div style={({ width: 600 }, { height: 300 })}>
        <LineChart />
      </div>
    </div>
  );
};

export default Mainblock2Sub3;
