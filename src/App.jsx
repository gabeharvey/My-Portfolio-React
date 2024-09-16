import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyExperience from './components/MyExperience'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <MyExperience />
      <Footer />
    </div>
  )
}

export default App;