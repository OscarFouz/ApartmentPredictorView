// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoleProvider } from "./context/RoleContext";

// Layout
import Layout from "./layout/Layout";

// Páginas principales
import PropertiesPage from "./pages/PropertiesPage";
import OwnersPage from "./pages/OwnersPage";
import DuplexPage from "./pages/DuplexPage";
import HousePage from "./pages/HousePage";
import TownHousePage from "./pages/TownHousePage";
import ReviewPage from "./pages/ReviewPage";
import SchoolPage from "./pages/SchoolPage";
import ContractPage from "./pages/ContractPage";

// Relaciones
import PropertyOwnerRelationsPage from "./pages/relations/PropertyOwnerRelationsPage";
import PropertySchoolRelationsPage from "./pages/relations/PropertySchoolRelationsPage";
import PropertyReviewRelationsPage from "./pages/relations/PropertyReviewRelationsPage";
import PropertyContractRelationsPage from "./pages/relations/PropertyContractRelationsPage";

export default function App() {
  return (
    <RoleProvider>
      <Router>
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
      </Router>
    </RoleProvider>
  );
}
