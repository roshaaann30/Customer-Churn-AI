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

export default function MonthlyChurnChart(){

 const data={

  labels:[

   "Jan",

   "Feb",

   "Mar",

   "Apr",

   "May",

   "Jun"

  ],

  datasets:[

   {

    label:"Churn",

    data:[

     6,

     8,

     7,

     10,

     9,

     8

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