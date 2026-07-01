import React from "react";

import { Box } from "@mui/material";

import {

 Pie

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

export default function SegmentDistributionChart(){

 const data={

  labels:[

   "High Value",

   "Medium Value",

   "Low Value"

  ],

  datasets:[

   {

    data:[

     35,

     40,

     25

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

   <Pie

    data={data}

   />

  </Box>

 );

}