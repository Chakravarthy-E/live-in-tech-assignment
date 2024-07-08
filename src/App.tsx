import { Parallax } from "react-parallax";
import Bird from "./images/bird.jpg";
import LightHouse from "./images/lighthouse.jpg";
import Dog from "./images/dog.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhyStudio from "./components/WhyStudio";
import Tracks from "./components/Tracks";

function App() {
  return (
    <div>
      <Navbar />
      <Parallax strength={400} lazy bgImage={Bird}>
        <Home />
      </Parallax>

      <Parallax strength={400} bgImage={LightHouse} lazy>
        <WhyStudio />
      </Parallax>

      <Parallax strength={400} bgImage={Dog} lazy>
        <Tracks />
      </Parallax>
    </div>
  );
}

export default App;
