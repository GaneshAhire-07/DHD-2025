import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Layout/Footer";
import LandingPage from "./Pages/LandingPage";
import HistoryPage from "./Pages/about/HistoryPage";
import VisionMission from "./Pages/landing/VisionMission";
import ProfessionalTeam from "./Pages/landing/ProfessionalTeam";
import ExpertisePage from "./Pages/expertise/ExpertisePage";
import NotFoundPage from "./components/placeholder/NotFoundPage"; // Assuming this is your 404 component
import OurApproach from "./Pages/landing/OurApproach";
import OurProjects from "./Pages/ourprojects/OurProjects";
import ContactPage from "./components/Contact/ContactPage";
import CareersWithUs from "./components/carrers/CareersPage";
import PageLoaderWrapper from "./components/loader/PageLoaderWrapper";
import CustomerServiceGuide from "./Pages/customerGuide/CustomerServiceGuide";
import NRIPropertyInvestmentGuide from "./Pages/NRIPropertyInvestmentGuide/NRIPropertyInvestmentGuide";
import { InvestorRelations } from "./Pages/InvestorRelations/InvestorRelations"; // FIX: Changed to named import
import PrivacySecurity from "./Pages/PrivacySecurity/PrivacySecurity";
import ResponsibleUsePolicy from "./Pages/ResponsibleUsePolicy/ResponsibleUsePolicy";
import OurSectors from "./Pages/ourSectors/OurSectors";
import OurRiskDepartment from "./Pages/landing/OurRiskDept";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16 bg-light-gray">
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <PageLoaderWrapper>
                <LandingPage />
              </PageLoaderWrapper>
            }
          />

          {/* About Us Routes */}
          <Route
            path="/about/history"
            element={
              <PageLoaderWrapper>
                <HistoryPage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/about/vision-mission"
            element={
              <PageLoaderWrapper>
                <VisionMission />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/about/team"
            element={
              <PageLoaderWrapper>
                <ProfessionalTeam />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/about/investor"
            element={
              <PageLoaderWrapper>
                <InvestorRelations />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/about/NRI"
            element={
              <PageLoaderWrapper>
                <NRIPropertyInvestmentGuide />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/about/customer"
            element={
              <PageLoaderWrapper>
                <CustomerServiceGuide />
              </PageLoaderWrapper>
            }
          />

          {/* Expertise Routes */}
          <Route
            path="/expertise"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/construction"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/highways"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/utilities"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/rail"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/property"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/infrastructure"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/horticulture"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/facilities"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/environmental"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/sustainable-design"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/housing"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/expertise/consulting"
            element={
              <PageLoaderWrapper>
                <ExpertisePage />
              </PageLoaderWrapper>
            }
          />

          {/* Other Core Routes */}
          <Route
            path="/approach"
            element={
              <PageLoaderWrapper>
                <OurApproach />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageLoaderWrapper>
                <OurProjects />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageLoaderWrapper>
                <ContactPage />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/careers"
            element={
              <PageLoaderWrapper>
                <CareersWithUs />
              </PageLoaderWrapper>
            }
          />

          {/* New Routes for added components */}
          <Route
            path="/customer-guide/complaint-guide"
            element={
              <PageLoaderWrapper>
                <CustomerServiceGuide />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/customer-guide/nri-buyers-guide"
            element={
              <PageLoaderWrapper>
                <NRIPropertyInvestmentGuide />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/investors"
            element={
              <PageLoaderWrapper>
                <InvestorRelations />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/privacy-security"
            element={
              <PageLoaderWrapper>
                <PrivacySecurity />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/responsible-use-policy"
            element={
              <PageLoaderWrapper>
                <ResponsibleUsePolicy />
              </PageLoaderWrapper>
            }
          />
          <Route
            path="/sectors"
            element={
              <PageLoaderWrapper>
                <OurSectors />
              </PageLoaderWrapper>
            }
          />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <PageLoaderWrapper>
                <NotFoundPage />
              </PageLoaderWrapper>
            }
          />
        </Routes>
      </main>
      <Footer />
      <OurRiskDepartment />
    </Router>
  );
}

export default App;
