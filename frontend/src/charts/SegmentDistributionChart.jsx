import axios from "axios";

import { useEffect,useState } from "react";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

import { Paper } from "@mui/material";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend

);

function SegmentDistributionChart(){

const [data,setData]=useState({})

useEffect(()=>{

axios

.get(

"http://localhost:8000/segments-distribution"

)

.then(

res=>setData(res.data)

)

},[])

const chartData={

labels:Object.keys(data),

datasets:[{

label:"Customers",

data:Object.values(data)

}]

}

return(

<Paper

sx={{

padding:3,

marginTop:4,

borderRadius:4

}}

>

<h2>Customer Segments</h2>

<Bar

key="segment-bar"

data={chartData}

/>

</Paper>

)

}

export default SegmentDistributionChart