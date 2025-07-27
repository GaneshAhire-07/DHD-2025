import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Layout/Footer";
import LandingPage from "./Pages/LandingPage";
import HistoryPage from "./Pages/about/HistoryPage";
import VisionMission from "./Pages/landing/VisionMission";
import ProfessionalTeam from "./Pages/landing/ProfessionalTeam";
import ExpertisePage from "./Pages/expertise/ExpertisePage";
import Placeholder from "./components/placeholder/Placeholder";
import OurApproach from "./Pages/landing/OurApproach";
import OurProjects from "./Pages/ourprojects/OurProjects";
import ContactPage from "./components/Contact/ContactPage";
import CareersWithUs from "./components/carrers/CareersPage"; // Corrected path and filename

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16 bg-light-gray">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* About Us Routes */}
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/team" element={<ProfessionalTeam />} />
          <Route
            path="/about/values"
            element={<HistoryPage/>}
          />
          <Route
            path="/about/leadership"
            element={<VisionMission />}
          />
          <Route
            path="/about/awards"
            element={<ProfessionalTeam />}
          />

          {/* Expertise Routes */}
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/expertise/construction" element={<ExpertisePage />} />
          <Route path="/expertise/highways" element={<ExpertisePage />} />
          <Route path="/expertise/utilities" element={<ExpertisePage />} />
          <Route path="/expertise/rail" element={<ExpertisePage />} />
          <Route path="/expertise/property" element={<ExpertisePage />} />
          <Route path="/expertise/infrastructure" element={<ExpertisePage />} />
          <Route path="/expertise/horticulture" element={<ExpertisePage />} />
          <Route path="/expertise/facilities" element={<ExpertisePage />} />
          <Route path="/expertise/environmental" element={<ExpertisePage />} />
          <Route
            path="/expertise/sustainable-design"
            element={<ExpertisePage />}
          />
          <Route path="/expertise/housing" element={<ExpertisePage />} />
          <Route path="/expertise/consulting" element={<ExpertisePage />} />

          {/* Other Main Routes */}
          <Route path="/approach" element={<OurApproach />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Main Careers Route - New unified page */}
          <Route path="/careers" element={<CareersWithUs />} />

          {/* Fallback Route */}
          <Route
            path="*"
            element={<Placeholder title="404 - Page Not Found" />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
