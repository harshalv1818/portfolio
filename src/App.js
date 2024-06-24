import Gallery from "./components/Gallery/Gallery";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      
        <NavBar/>
        <Main/>
        <Skills/>
        <Gallery/>
        <ContactMe/>
        <Footer/>
      
    </div>
  );
}

export default App;
