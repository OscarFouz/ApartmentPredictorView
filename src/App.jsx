// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

// Pages
import PropertiesPage from "./pages/PropertiesPage";
import OwnersPage from "./pages/OwnersPage";
import ReviewersPage from "./pages/ReviewersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<PropertiesPage />} />
          <Route path="/properties" element={<PropertiesPage />} />

          <Route path="/owners" element={<OwnersPage />} />

          <Route path="/reviewers" element={<ReviewersPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
