import React from "react";

import ExecutiveSummary

from "../components/ExecutiveSummary";

import { Box }

from "@mui/material";

export default function ExecutiveSummaryDashboard(){

 return(

  <Box

 sx={{

  p:{

   xs:2,

   md:3

  }

 }}

>

   <ExecutiveSummary />

  </Box>

 );

}