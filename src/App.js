import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import Mailing from './components/Mailing';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Features />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
