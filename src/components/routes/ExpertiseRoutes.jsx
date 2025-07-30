// src/components/routes/ExpertiseRoutes.jsx
import { Route } from "react-router-dom";
import PageLoaderWrapper from "../../components/loader/PageLoaderWrapper";
import ExpertisePage from "../../Pages/expertise/ExpertisePage";
import Rail from "../../Pages/OurExpertisePages/Rail";
import InfrastructurePage from "../../Pages/expertise/InfrastructurePage";
import HousingMaintenance from "../../Pages/OurExpertisePages/HousingMaintenance";
import Property from "../../Pages/OurExpertisePages/Property";
import FacilitiesManagementPage from "../../Pages/OurExpertisePages/FacilitiesManagementPage";
import EnvironmentalTargetsPage from "../../Pages/OurExpertisePages/EnvironmentalTargets";
import Sustainability from "../../Pages/OurExpertisePages/Sustainability";
import UtilitiesPage from "../../Pages/OurExpertisePages/Utilities";

export function ExpertiseRoutes() {
  const extraRoutes = [
    "construction",
    "highways",
    "utilities",
    "property",
    "infrastructure",
    "horticulture",
    "facilities",
    "environmental",
    "sustainable-design",
    "housing",
    "consulting",
  ];

  return (
    <>
      <Route
        path="/expertise"
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
            <Rail />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/infrastructure"
        element={
          <PageLoaderWrapper>
            <InfrastructurePage />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/housing-maintenance"
        element={
          <PageLoaderWrapper>
            <HousingMaintenance />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="//expertise/property"
        element={
          <PageLoaderWrapper>
            <Property />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/facilities-management"
        element={
          <PageLoaderWrapper>
            <FacilitiesManagementPage />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/sustainability-design"
        element={
          <PageLoaderWrapper>
            <Sustainability />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/environmental-targets"
        element={
          <PageLoaderWrapper>
            <EnvironmentalTargetsPage />
          </PageLoaderWrapper>
        }
      />
      <Route
        path="/expertise/utilities"
        element={
          <PageLoaderWrapper>
            <UtilitiesPage />
          </PageLoaderWrapper>
        }
      />

      {extraRoutes.map((path) => (
        <Route
          key={path}
          path={`/expertise/${path}`}
          element={
            <PageLoaderWrapper>
              <ExpertisePage />
            </PageLoaderWrapper>
          }
        />
      ))}
    </>
  );
}
