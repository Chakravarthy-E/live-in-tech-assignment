import TypeWriter from "typewriter-effect";
function Home() {
  return (
    <div className="content min-h-screen flex items-center justify-between">
      <div className="w-1/2"></div>
      <div className="flex items-end justify-center text-center flex-col px-5  w-1/2">
        <div className="flex items-start flex-col space-y-3">
          <h1 className="text-6xl text-white uppercase tracking-widest ">
            Operational
          </h1>
          <div className="text-6xl text-blue-700 uppercase ">
            <TypeWriter
              options={{
                strings: ["Compounder", "Partner"],
                autoStart: true,
                loop: true,
                delay: "natural",
              }}
            />
          </div>

          <p className="text-white  text-start ">
            We collaborate with exceptional <a href="#">Entrepreneurs</a> and{" "}
            <a href="#">Intrapreneurs</a> to bring meaningful ideas to reality.
            We encourage collaboration through validation, talent, resources,
            and investment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
