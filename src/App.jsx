// src/App.jsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Providers globales
import { AppProviders } from "./context/AppProviders";

// Layout
import Layout from "./layout/Layout";

// Páginas principales
const PropertiesPage = lazy(() => import("./pages/PropertiesPage"));
const OwnersPage = lazy(() => import("./pages/OwnersPage"));
const DuplexPage = lazy(() => import("./pages/DuplexPage"));
const HousePage = lazy(() => import("./pages/HousePage"));
const TownHousePage = lazy(() => import("./pages/TownHousePage"));
const ReviewPage = lazy(() => import("./pages/ReviewPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const ContractPage = lazy(() => import("./pages/ContractPage"));

// Páginas de relaciones
const PropertyOwnerRelationsPage = lazy(() => import("./pages/relations/PropertyOwnerRelationsPage"));
const PropertySchoolRelationsPage = lazy(() => import("./pages/relations/PropertySchoolRelationsPage"));
const PropertyReviewRelationsPage = lazy(() => import("./pages/relations/PropertyReviewRelationsPage"));
const PropertyContractRelationsPage = lazy(() => import("./pages/relations/PropertyContractRelationsPage"));

export default function App() {
  return (
    <AppProviders>
      <Router>
        <Suspense fallback={<div>Cargando...</div>}>
          <Layout>
            <Routes>
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/owners" element={<OwnersPage />} />
              <Route path="/duplex" element={<DuplexPage />} />
              <Route path="/houses" element={<HousePage />} />
              <Route path="/townhouses" element={<TownHousePage />} />
              <Route path="/reviews" element={<ReviewPage />} />
              <Route path="/schools" element={<SchoolPage />} />
              <Route path="/contracts" element={<ContractPage />} />

              <Route path="/relations/property-owner" element={<PropertyOwnerRelationsPage />} />
              <Route path="/relations/property-school" element={<PropertySchoolRelationsPage />} />
              <Route path="/relations/property-review" element={<PropertyReviewRelationsPage />} />
              <Route path="/relations/property-contract" element={<PropertyContractRelationsPage />} />

              <Route path="*" element={<PropertiesPage />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </AppProviders>
  );
}
