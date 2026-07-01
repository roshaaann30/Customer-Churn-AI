import React from "react";

import { Box } from "@mui/material";

import {

 Doughnut

} from "react-chartjs-2";

import {

 Chart as ChartJS,

 ArcElement,

 Tooltip,

 Legend

} from "chart.js";

ChartJS.register(

 ArcElement,

 Tooltip,

 Legend

);

export default function RiskDistributionChart(){

 const data={

  labels:[

   "High",

   "Medium",

   "Low"

  ],

  datasets:[

   {

    data:[

     25,

     45,

     30

    ]

   }

  ]

 };

 return(

  <Box

   sx={{

    width:"100%",

    height:400

   }}

  >

   <Doughnut

    data={data}

   />

  </Box>

 );

}