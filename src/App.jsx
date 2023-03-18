import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
// import Loading from "./components/Loading";

import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Feedbacks from "./components/Feedbacks";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Stars from "./components/canvas/Stars";

const App = () => {
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   }, []);
  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <BrowserRouter>
        <div className=" relative z-0 bg-primary">
          <Stars />
          <div>
            <Navbar />
            <Home />
          </div>

          <About />
          <Projects />
          <Tech />
          <Experience />
          <Feedbacks />
          <Contact />
        </div>
      </BrowserRouter>
      {/* )} */}
    </>
  );
};

export default App;
