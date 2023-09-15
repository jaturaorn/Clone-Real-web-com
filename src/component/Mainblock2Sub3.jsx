// image
import ImgGrahp from "../images/Artwork-01_0.png";

const Mainblock2Sub3 = () => {
  return (
    // Box-All
    <div
      className="w-1/2 h-64 shadow-lg flex flex-col 
      px-2 py-2 rounded-lg border border-slate-300 max-sm:w-full
      max-lg:w-full max-xl:w-screen bg-[url('https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
      bg-cover bg-center"
    >
      <div className="flex place-content-end gap-2">
        <input
          type="text"
          placeholder="2023/04/59"
          className="w-[100px] outline outline-1"
        />
        <button className="bg-[#5A6EE6] px-2 py-1">ok</button>
      </div>
    </div>
  );
};

export default Mainblock2Sub3;
