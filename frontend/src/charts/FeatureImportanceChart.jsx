import React from "react";

import { Box } from "@mui/material";

import {

 Bar

} from "react-chartjs-2";

import {

 Chart as ChartJS,

 CategoryScale,

 LinearScale,

 BarElement,

 Tooltip,

 Legend

} from "chart.js";

ChartJS.register(

 CategoryScale,

 LinearScale,

 BarElement,

 Tooltip,

 Legend

);

export default function FeatureImportanceChart(){

 const data={

  labels:[

   "Tenure",

   "MonthlyCharges",

   "Contract",

   "Support",

   "Engagement"

  ],

  datasets:[

   {

    label:"Importance",

    data:[

     0.85,

     0.76,

     0.63,

     0.42,

     0.31

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

   <Bar

    data={data}

   />

  </Box>

 );

}