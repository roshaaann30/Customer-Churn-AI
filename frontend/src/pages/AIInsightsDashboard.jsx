import React from "react";

import AIInsights from "../components/AIInsights";

import { Box } from "@mui/material";

export default function AIInsightsDashboard(){

 return(

  <Box

 sx={{

  p:{

   xs:2,

   md:3

  }

 }}

>

   <AIInsights />

  </Box>

 );

}