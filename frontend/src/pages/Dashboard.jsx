import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import KPIcard from "../components/KPIcard";

import RevenueTrendChart from "../charts/RevenueTrendChart";

import RiskDistributionChart from "../charts/RiskDistributionChart";

import SegmentDistributionChart from "../charts/SegmentDistributionChart";

import AIInsights from "../components/AIInsights";

export default function Dashboard() {

  return (

    <Box

      sx={{

        p: {

          xs: 2,

          md: 3

        }

      }}

    >

      <Typography

        variant="h4"

        gutterBottom

      >

        Customer Churn Dashboard

      </Typography>

      {/* KPI Section */}

      <Grid

        container

        spacing={3}

      >

        <Grid item xs={12} sm={6} md={3}>

          <KPIcard />

        </Grid>

        <Grid item xs={12} sm={6} md={3}>

          <KPIcard />

        </Grid>

        <Grid item xs={12} sm={6} md={3}>

          <KPIcard />

        </Grid>

        <Grid item xs={12} sm={6} md={3}>

          <KPIcard />

        </Grid>

      </Grid>

      <Box sx={{ mt: 4 }} />

      {/* Revenue + Risk */}

      <Grid

        container

        spacing={3}

      >

        <Grid item xs={12} lg={8}>

          <RevenueTrendChart />

        </Grid>

        <Grid item xs={12} lg={4}>

          <RiskDistributionChart />

        </Grid>

      </Grid>

      <Box sx={{ mt: 4 }} />

      {/* Segments */}

      <Grid

        container

        spacing={3}

      >

        <Grid item xs={12}>

          <SegmentDistributionChart />

        </Grid>

      </Grid>

      <Box sx={{ mt: 4 }} />

      {/* AI Insights */}

      <AIInsights />

    </Box>

  );

}