import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";

import ChurnAnalytics from "./pages/ChurnAnalytics";

import CustomerExplorer from "./pages/CustomerExplorer";

import RecommendationCenter from "./pages/RecommendationCenter";

import ExecutiveDashboard from "./pages/ExecutiveDashboard";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/analytics" element={<ChurnAnalytics />} />

        <Route path="/customers" element={<CustomerExplorer />} />

        <Route path="/recommendations" element={<RecommendationCenter />} />

        <Route path="/executive" element={<ExecutiveDashboard />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
