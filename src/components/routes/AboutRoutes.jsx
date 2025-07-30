// src/components/routes/AboutRoutes.jsx
import { Route } from "react-router-dom";
import PageLoaderWrapper from "../../components/loader/PageLoaderWrapper";
import HistoryPage from "../../Pages/about/HistoryPage";
import VisionMission from "../../Pages/landing/VisionMission";
import ProfessionalTeam from "../../Pages/landing/ProfessionalTeam";
import WhoWeArePage from "../../Pages/AboutUsPages/WhoWeArePage";
import WhatWeDoPage from "../../Pages/AboutUsPages/WhatWeDoPage";
import SustainabilityPage from "../../Pages/AboutUsPages/SustainabilityPage";
import SocialImpactPage from "../../Pages/AboutUsPages/SocialImpactPage";
import PhysicalImpactPage from "../../Pages/AboutUsPages/PhysicalImpactPage";
import ModernSlaveryPage from "../../Pages/AboutUsPages/ModernSlaveryPage";
import HumanTraffickingPage from "../../Pages/AboutUsPages/HumanTraffickingPage";
import SupervisorBoardPage from "../../Pages/AboutUsPages/SupervisorBoardPage";
import CovidRiskAssessmentPage from "../../Pages/AboutUsPages/CovidRiskAssessmentPage";
import OurRiskDepartment from "../../Pages/landing/OurRiskDept";
import OurAuditors from "../../Pages/landing/OurAuditors";
import Governance from "../../Pages/landing/Governance";
import InvestorRelations from "../../Pages/InvestorRelations/InvestorRelations";
import NRIPropertyInvestmentGuide from "../../Pages/NRIPropertyInvestmentGuide/NRIPropertyInvestmentGuide";
import CustomerServiceGuide from "../../Pages/customerGuide/CustomerServiceGuide";
import PrivacySecurity from "../../Pages/PrivacySecurity/PrivacySecurity";

export function AboutRoutes() {
  return (
    <>
      <Route path="/about/history" element={<PageLoaderWrapper><HistoryPage /></PageLoaderWrapper>} />
      <Route path="/about/vision-mission" element={<PageLoaderWrapper><VisionMission /></PageLoaderWrapper>} />
      <Route path="/about/team" element={<PageLoaderWrapper><ProfessionalTeam /></PageLoaderWrapper>} />
      <Route path="/about/who-we-are" element={<PageLoaderWrapper><WhoWeArePage /></PageLoaderWrapper>} />
      <Route path="/about/what-we-do" element={<PageLoaderWrapper><WhatWeDoPage /></PageLoaderWrapper>} />
      <Route path="/about/purpose/sustainability" element={<PageLoaderWrapper><SustainabilityPage /></PageLoaderWrapper>} />
      <Route path="/about/purpose/social-impact" element={<PageLoaderWrapper><SocialImpactPage /></PageLoaderWrapper>} />
      <Route path="/about/purpose/physical-impact" element={<PageLoaderWrapper><PhysicalImpactPage /></PageLoaderWrapper>} />
      <Route path="/about/committee/modern-slavery" element={<PageLoaderWrapper><ModernSlaveryPage /></PageLoaderWrapper>} />
      <Route path="/about/committee/human-trafficking" element={<PageLoaderWrapper><HumanTraffickingPage /></PageLoaderWrapper>} />
      <Route path="/about/committee/supervisor-board" element={<PageLoaderWrapper><SupervisorBoardPage /></PageLoaderWrapper>} />
      <Route path="/about/committee/covid-risk-assessment" element={<PageLoaderWrapper><CovidRiskAssessmentPage /></PageLoaderWrapper>} />
      <Route path="/about/committee/risk-department" element={<PageLoaderWrapper><OurRiskDepartment /></PageLoaderWrapper>} />
      <Route path="/about/committee/auditors-department" element={<PageLoaderWrapper><OurAuditors /></PageLoaderWrapper>} />
      <Route path="/about/governance" element={<PageLoaderWrapper><Governance /></PageLoaderWrapper>} />
      <Route path="/about/investor" element={<PageLoaderWrapper><InvestorRelations /></PageLoaderWrapper>} />
      <Route path="/about/NRI" element={<PageLoaderWrapper><NRIPropertyInvestmentGuide /></PageLoaderWrapper>} />
      <Route path="/about/customer" element={<PageLoaderWrapper><CustomerServiceGuide /></PageLoaderWrapper>} />
      <Route path="/about/our-policies" element={<PageLoaderWrapper><PrivacySecurity /></PageLoaderWrapper>} />
    </>
  );
}
