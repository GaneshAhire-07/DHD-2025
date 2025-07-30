// src/components/routes/OtherRoutes.jsx
import { Route } from "react-router-dom";
import PageLoaderWrapper from "../../components/loader/PageLoaderWrapper";
import CustomerServiceGuide from "../../Pages/customerGuide/CustomerServiceGuide";
import NRIPropertyInvestmentGuide from "../../Pages/NRIPropertyInvestmentGuide/NRIPropertyInvestmentGuide";
import InvestorRelations from "../../Pages/InvestorRelations/InvestorRelations";
import PrivacySecurity from "../../Pages/PrivacySecurity/PrivacySecurity";
import ResponsibleUsePolicy from "../../Pages/ResponsibleUsePolicy/ResponsibleUsePolicy";
import OurSectors from "../../Pages/ourSectors/OurSectors";
import NotFoundPage from "../../components/placeholder/NotFoundPage";

export function OtherRoutes() {
  return (
    <>
      <Route path="/customer-guide/complaint-guide" element={<PageLoaderWrapper><CustomerServiceGuide /></PageLoaderWrapper>} />
      <Route path="/customer-guide/nri-buyers-guide" element={<PageLoaderWrapper><NRIPropertyInvestmentGuide /></PageLoaderWrapper>} />
      <Route path="/investors" element={<PageLoaderWrapper><InvestorRelations /></PageLoaderWrapper>} />
      <Route path="/privacy-security" element={<PageLoaderWrapper><PrivacySecurity /></PageLoaderWrapper>} />
      <Route path="/responsible-use-policy" element={<PageLoaderWrapper><ResponsibleUsePolicy /></PageLoaderWrapper>} />
      <Route path="/sectors" element={<PageLoaderWrapper><OurSectors /></PageLoaderWrapper>} />
      <Route path="*" element={<PageLoaderWrapper><NotFoundPage /></PageLoaderWrapper>} />
    </>
  );
}
