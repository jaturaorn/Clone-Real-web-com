const ACMain2sub3sup1 = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3>Name</h3>
          <h3 className="text-sm font-semibold">P (kW)</h3>
          <h3 className="text-sm font-semibold">VLL (V)</h3>
          <h3 className="text-sm font-semibold">VLN (V)</h3>
          <h3 className="text-sm font-semibold">IL (A)</h3>
        </div>
        <div className="flex flex-col">
          <h3>Total</h3>
          <h3 className="text-sm font-semibold">1,841.0</h3>
          <h3 className="text-sm font-semibold">481.9</h3>
          <h3 className="text-sm font-semibold">278.3</h3>
          <h3 className="text-sm font-semibold">22.1</h3>
        </div>
        <div className="flex flex-col text-right">
          <h3>A/B/C</h3>
          <h3 className="text-sm font-semibold">631.0 / 630.0 / 630.0</h3>
          <h3 className="text-sm font-semibold">478.5 / 477.0 / 477.5</h3>
          <h3 className="text-sm font-semibold">275.5 / 275.9 / 275.6</h3>
          <h3 className="text-sm font-semibold">22.8 / 22.9 / 22.8</h3>
        </div>
      </div>
    </div>
  );
};

export default ACMain2sub3sup1;
