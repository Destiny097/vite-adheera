import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Stories from './components/Stories';
import Celebrations from './components/Celebrations';
import EventsCarousol from './components/EventsCarousol';
import Experiences from './components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <About/>
      <Stories/>
      <EventsCarousol/>
      <Experiences/>
      <Celebrations/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;