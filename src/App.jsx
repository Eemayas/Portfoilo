import { BrowserRouter } from "react-router-dom";
import { About, About2,Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero/>
        </div>
        <About/>
        <About2/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0 bg-primary">
        <Contact/>
        <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
