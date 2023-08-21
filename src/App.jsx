import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import LandingPage from "./LandingPage";
import ProjectCollection from "./ProjectCollection";
import ProjectSlider from "./ProjectSlider";
import AtomicSpinner from 'atomic-spinner'
function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsPageLoaded(true);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element=
          {<LandingPage/>}/>
          <Route path="/projectcollection" element={<ProjectCollection />} />
          <Route path="/projectcollection/slider" element={<ProjectSlider />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
