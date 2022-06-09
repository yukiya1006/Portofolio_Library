import './App.css';
import LanguagePage from './components/languagePage/LanguagePage';
import HomePage from './components/homePage/HomePage';
import FrameworkPage from './components/freamworkPage/FrameworkPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gsap from './Gsap';

const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={ homeUrl } element={<HomePage />}/>
          <Route path={ "/language" } element={<LanguagePage />}/>
          <Route path={ "/framework" } element={<FrameworkPage />}/>
        </Routes>
      </Router>
      <Gsap/>
    </div>
  );
}

export default App;
