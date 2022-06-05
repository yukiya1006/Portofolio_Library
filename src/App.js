import './App.css';
import LanguagePage from './components/languagePage/LanguagePage';
import HomePage from './components/homePage/HomePage';
import FramworkPage from './components/freamworkPage/FrameworkPage';
import LibraryPage from './components/libraryPage/LibraryPage';
import PotofolioPage from './components/potofolioPage/PotofolioPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Script from './Script';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/language" element={<LanguagePage />}/>
          <Route path="/framework" element={<FramworkPage />}/>
          <Route path="/library" element={<LibraryPage />}/>=
          <Route path="/portforio" element={<PotofolioPage />}/>
        </Routes>
      </Router>
      <Script/>
    </div>
  );
}

export default App;
