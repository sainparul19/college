
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import { carouselPics } from "./Components/Home/Images"
import About from './Components/About/About';
import Act from './Components/Activity/Act';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
    <Header />
    <Info />
    <Home slides={carouselPics}/>
    <Act />
    <About />
    <Footer />
    </div>
  );
}

export default App;
