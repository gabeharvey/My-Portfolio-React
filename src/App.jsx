import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyExperience from './components/MyExperience'
import MyEducation from './components/MyEducation';
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Home />
      <MyExperience />
      <MyEducation />
      <Footer />
    </div>
  )
}

export default App;