import './App.css';
import { Header, Navbar, Hero } from './components';
import About from './components/About';
import Footer from './components/Footer';
import Mission from './components/Mission';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Footer />
    </>
  );
}

export default App;
