
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//import landing page
import LandingPage from './Pages/LandingPage';
import History from './Pages/AboutUsPages/History';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />

      </Routes>
    </Router>

  );
}

export default App;
