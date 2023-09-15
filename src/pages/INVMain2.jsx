const INVMain2 = () => {
  return (
    <section className="flex flex-col p-2">
      <div
        className="w-full h-52 shadow-lg p-2 rounded-lg border
        border-slate-300 bg-white"
      >
        <div className="flex gap-x-2 py-2 px-1">
          <h3>Date</h3>
          <input
            type="text"
            placeholder="2023-09-14"
            className="w-[100px] outline outline-1"
          />
          <h3>Point</h3>
          <select className="outline outline-1">
            <option value="inv">Inv</option>
            <option value="pv">PV</option>
          </select>
        </div>
        <div
          className="flex justify-center items-center bg-[url('https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                    bg-cover bg-center bg-no-repeat h-[153px] p-1"
        >
          <p className="font-bold text-xl">Graph</p>
        </div>
      </div>
      <div className="flex justify-end py-3 gap-2 pr-1">
        <h3>Search :</h3>
        <input type="text" className="outline outline-1" />
      </div>
    </section>
  );
};

export default INVMain2;
