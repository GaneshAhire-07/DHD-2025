import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { MainRoutes } from "./components/routes/MainRoutes";
import { AboutRoutes } from "./components/routes/AboutRoutes";
import { ExpertiseRoutes } from "./components/routes/ExpertiseRoutes";
import { OtherRoutes } from "./components/routes/OtherRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16 bg-light-gray">
        <Routes>
          {MainRoutes()}
          {AboutRoutes()}
          {ExpertiseRoutes()}  
          {OtherRoutes()}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
