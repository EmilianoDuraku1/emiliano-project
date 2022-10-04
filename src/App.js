import "./App.scss";
import Description from "./components/Body/Description/Description";
import Header from "./components/Header/Header";
import Search from "./components/Body/Search/Search";
import Slider from "./components/Body/Slider/Slider";
import StandardSlider from "./StandardSlider/StandardSlider"
import About from "./components/Body/About/About";
import Footer from "./components/Footer/Footer";
import img from "./assets/BG_Stripes.png";
function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Search />
        <section className="layout-center">
          {/* <div className="background-img">
            <img src={img} alt=""></img>
          </div> */}
          <Description />
          {/* <Slider /> */}
          <StandardSlider />
          <About />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
