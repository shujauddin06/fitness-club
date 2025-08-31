import Navbar from "./assets/Components/Navbar";
import HeroSection from "./assets/Components/HeroSection";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import Animations from "./assets/Components/Animations";
function App(){
    return(
      <>
      <Navbar/>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
      <About/>
      </div>

      <Contact/>
      <Footer/>
      </>
      
    )
}
export default App;