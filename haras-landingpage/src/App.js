import './index.css';
import Header from './components/Header';
import Story from './components/Story';
import Installations from './components/Installations';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Story />
      <Installations />
      <Services />
      <Contact />
      <Team />
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default App;
