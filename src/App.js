import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Intro from "./Component/Intro/Intro";
import Service from "./Component/Service/Service";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
