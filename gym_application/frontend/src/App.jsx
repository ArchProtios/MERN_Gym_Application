import '../src/App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero.jsx';
import WorkoutSessions from './components/WorkoutSessions.jsx';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

function App() { 
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
        <ToastContainer theme='dark' position='top-center' />
      </Router>
    </>
  )
}

export default App
