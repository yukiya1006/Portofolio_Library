import './App.css';
import LanguagePage from './components/languagePage/LanguagePage';
import HomePage from './components/homePage/HomePage';
import FramworkPage from './components/freamworkPage/FrameworkPage';
import LibraryPage from './components/libraryPage/LibraryPage';
import PotofolioPage from './components/potofolioPage/PotofolioPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gsap from './Gsap';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/language" element={<LanguagePage />}/>
          <Route path="/framework" element={<FramworkPage />}/>
          <Route path="/library" element={<LibraryPage />}/>=
          <Route path="/portforio" element={<PotofolioPage />}/>
        </Routes>
      </Router>
      <Gsap/>
    </div>
  );
}

export default App;
