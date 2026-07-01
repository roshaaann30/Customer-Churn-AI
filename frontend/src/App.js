import React, { useMemo, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box
} from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import ChurnAnalytics from "./pages/ChurnAnalytics";
import CustomerExplorer from "./pages/CustomerExplorer";
import RecommendationCenter from "./pages/RecommendationCenter";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import MonitoringDashboard from "./pages/MonitoringDashboard";
import AIInsightsDashboard from "./pages/AIInsightsDashboard";
import ExecutiveSummaryDashboard from "./pages/ExecutiveSummaryDashboard";

function App() {

  const [mode, setMode] = useState("light");

  const theme = useMemo(

    () =>

      createTheme({

        palette: {

          mode

        }

      }),

    [mode]

  );

  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <BrowserRouter>

        <Navbar

          mode={mode}

          setMode={setMode}

        />

        <Box

          sx={{

            display: "flex",

            minHeight: "100vh"

          }}

        >

          <Sidebar />

          <Box

            component="main"

            sx={{

              flexGrow: 1,

              ml: {

                xs: 0,

                md: "250px"

              },

              mt: "70px",

              p: 3

            }}

          >

            <Routes>

              <Route

                path="/"

                element={<Dashboard />}

              />

              <Route

                path="/analytics"

                element={<ChurnAnalytics />}

              />

              <Route

                path="/customers"

                element={<CustomerExplorer />}

              />

              <Route

                path="/recommendations"

                element={<RecommendationCenter />}

              />

              <Route

                path="/executive"

                element={<ExecutiveDashboard />}

              />

              <Route

                path="/monitoring"

                element={<MonitoringDashboard />}

              />

              <Route

                path="/ai-insights"

                element={<AIInsightsDashboard />}

              />

              <Route

                path="/executive-summary"

                element={<ExecutiveSummaryDashboard />}

              />

            </Routes>

          </Box>

        </Box>

      </BrowserRouter>

    </ThemeProvider>

  );

}

export default App;