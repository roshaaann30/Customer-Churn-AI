import React from "react";

import { Box } from "@mui/material";

import Monitoring from "../components/Monitoring";

import DataDrift from "../components/DataDrift";

import PredictionHistory from "../components/PredictionHistory";

import RetrainModel from "../components/RetrainModel";

export default function MonitoringDashboard() {

  return (


      <Box

 sx={{

  p:{

   xs:2,

   md:3

  }

 }}

>

      <Monitoring />

      <DataDrift />

      <PredictionHistory />

      <RetrainModel />

    </Box>

  );

}