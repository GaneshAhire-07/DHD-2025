// src/components/routes/MainRoutes.jsx
import { Route } from "react-router-dom";
import LandingPage from "../../Pages/LandingPage";
import OurApproach from "../../Pages/landing/OurApproach";
import OurProjects from "../../Pages/ourprojects/OurProjects";
import ContactPage from "../../components/Contact/ContactPage";
import CareersWithUs from "../../components/carrers/CareersPage";
import PageLoaderWrapper from "../../components/loader/PageLoaderWrapper";
export function MainRoutes() {
  return (
    <>
      <Route
        path="/"
        element={
          <PageLoaderWrapper>
            <LandingPage />
          </PageLoaderWrapper>
        }
      />
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
    </>
  );
}
