function Tracks() {
  return (
    <div className="content min-h-screen flex items-center justify-between">
      <div className="flex items-end justify-center text-center flex-col px-5  w-1/2">
        <div className="flex items-start flex-col space-y-3">
          <h1 className="text-6xl text-white">COCREATE</h1>
          <h1 className="text-6xl text-blue-700 underline">&COINVEST</h1>
          <p className="text-white text-start ">
            We provide a streamlined risk-reward framework for co-creation,
            encompassing validation, solutioning, risk mitigation, and
            capability-capitalTM, so that entrepreneurs may focus on product and
            market fit.
          </p>
          <button className="bg-blue-700 text-white rounded-full px-5 py-3 uppercase flex justify-end">
            Reach Us
          </button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default Tracks;
