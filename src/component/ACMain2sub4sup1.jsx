const ACMain2sub4sup1 = () => {
  return (
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
        <h3 className="text-sm font-semibold">982.0</h3>
        <h3 className="text-sm font-semibold">478.6</h3>
        <h3 className="text-sm font-semibold">276.0</h3>
        <h3 className="text-sm font-semibold">11.8</h3>
      </div>
      <div className="flex flex-col text-right">
        <h3>A/B/C</h3>
        <h3 className="text-sm font-semibold">327.0 / 328.0 / 326.0</h3>
        <h3 className="text-sm font-semibold">478.6 / 477.3 / 476.2</h3>
        <h3 className="text-sm font-semibold">276.0 / 274.9 / 275.2</h3>
        <h3 className="text-sm font-semibold">11.4 / 11.4 / 11.4</h3>
      </div>
    </div>
  );
};

export default ACMain2sub4sup1;
