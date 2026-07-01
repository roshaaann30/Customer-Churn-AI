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

export default function GeographicChurnChart(){

 const data={

  labels:[

   "USA",

   "India",

   "UK",

   "Canada",

   "Germany"

  ],

  datasets:[

   {

    label:"Churn Rate",

    data:[

     9,

     7,

     8,

     6,

     5

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