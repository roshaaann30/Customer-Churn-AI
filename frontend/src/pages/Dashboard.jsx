import axios from "axios";

import { useEffect, useState } from "react";

import { Grid, Typography, Box } from "@mui/material";

import KPIcard from "../components/KPIcard";

import DashboardLayout from "../components/DashboardLayout";

import RiskDistributionChart from "../charts/RiskDistributionChart";

import SegmentDistributionChart from "../charts/SegmentDistributionChart";

import AIInsights from "../components/AIInsights";

function Dashboard() {

  const [customers, setCustomers] = useState([]);

  const [revenue, setRevenue] = useState({});

  const [retention, setRetention] = useState({});

  useEffect(() => {

    axios

      .get("http://localhost:8000/customers")

      .then((res) => setCustomers(res.data))

      .catch((err) => console.log(err));

    axios

      .get("http://localhost:8000/revenue")

      .then((res) => setRevenue(res.data[0]))

      .catch((err) => console.log(err));

    axios

      .get("http://localhost:8000/retention-impact")

      .then((res) => setRetention(res.data))

      .catch((err) => console.log(err));

  }, []);

  const highRisk = customers.filter(

    (customer) => customer.risk_score >= 75

  ).length;

  return (

    <><DashboardLayout>

          <Typography

              variant="h4"

              sx={{
                  fontWeight: 700,

                  marginBottom: 4
              }}

          >

              Enterprise Analytics Dashboard

          </Typography>

          <Grid

              container

              spacing={3}

          >

              <Grid item xs={12} md={3}>

                  <KPIcard

                      title="Total Customers"

                      value={customers.length} />

              </Grid>

              <Grid item xs={12} md={3}>

                  <KPIcard

                      title="High Risk Customers"

                      value={highRisk} />

              </Grid>

              <Grid item xs={12} md={3}>

                  <KPIcard

                      title="Revenue At Risk"

                      value={`$${revenue?.Revenue_At_Risk || 0}`} />

              </Grid>

              <Grid item xs={12} md={3}>

                  <KPIcard

                      title="Retention Success"

                      value={`${Math.round(

                          retention?.average_retention_gain || 28

                      )}%`} />

              </Grid>

          </Grid>

          <Box sx={{ marginTop: 6 }}>

              <RiskDistributionChart />

          </Box>

          <Box sx={{ marginTop: 6 }}>

              <SegmentDistributionChart />

          </Box>

      </DashboardLayout>
      <AIInsights /></>
  );

}

export default Dashboard;