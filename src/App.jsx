import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
// import Contact from './components/Contact';
import Stories from './components/Stories';
import Celebrations from './components/Celebrations';

function App() {
  return (
    <div className="w-screen h-auto">
      <Navbar />
      <Homepage/>
      <About/>
      <Stories/>
      <Celebrations/>
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;