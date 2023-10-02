// Chart.js
import LineChart from "./LineChart";

const Mainblock3Sub1 = () => {
  return (
    <div
      className="w-full h-72 shadow-lg flex flex-col 
      p-2 rounded-lg border border-slate-300 bg-white bg-cover"
      // bg-[url('https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      // bg-cover bg-center
    >
      <div style={({ width: 600 }, { height: 400 })}>
        <LineChart />
      </div>
    </div>
  );
};

export default Mainblock3Sub1;
