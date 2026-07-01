import React from "react";

import { Box } from "@mui/material";


import {

 Line

} from "react-chartjs-2";

import {

 Chart as ChartJS,

 CategoryScale,

 LinearScale,

 PointElement,

 LineElement,

 Tooltip,

 Legend

} from "chart.js";

ChartJS.register(

 CategoryScale,

 LinearScale,

 PointElement,

 LineElement,

 Tooltip,

 Legend

);

export default function RevenueTrendChart(){

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

    label:"Revenue",

    data:[

     200,

     240,

     280,

     260,

     320,

     380

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

   <Line

    data={data}

    options={{

     responsive:true,

     maintainAspectRatio:false

    }}

   />

  </Box>

 );

}