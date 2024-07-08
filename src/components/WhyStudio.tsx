function WhyStudio() {
  return (
    <div className="content min-h-screen flex items-center justify-between">
      <div className="flex items-end justify-center text-center flex-col px-5  w-1/2">
        <div className="flex items-start flex-col space-y-3">
          <h1 className="text-6xl text-white">TOGETHER</h1>
          <h1 className="text-6xl text-white">FROM IDEA TO</h1>
          <h1 className="text-6xl text-blue-700">ICONIC</h1>
          <p className="text-white text-base text-start ">
            We believe in an outcome-driven process to test assumptions,
            eliminate confirmation biases, and operate with passion. We reduce a
            process that could take years to months. We ensure that you are
            pursuing the right market, that you are fully validated, and that
            you are surrounded by incredible teammates.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <video
          src="https://media.istockphoto.com/id/1752533608/video/high-five-business-people-and-teamwork-with-collaboration-and-celebration-in-a-office-with.mp4?s=mp4-640x640-is&k=20&c=gyLwIv9faT9EUS3KFvUYcshBt6qFJeNHlOUBl3jZEFk="
          autoPlay
          typeof="video/mp4"
        ></video>
      </div>
    </div>
  );
}

export default WhyStudio;
