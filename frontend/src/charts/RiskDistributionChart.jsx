import axios from "axios";

import { useEffect, useState } from "react";

import {

Chart as ChartJS,

ArcElement,

Tooltip,

Legend

} from "chart.js";

import { Pie } from "react-chartjs-2";

import { Paper } from "@mui/material";

ChartJS.register(

ArcElement,

Tooltip,

Legend

);

function RiskDistributionChart(){

const [data,setData]=useState({})

useEffect(()=>{

axios

.get(

"http://localhost:8000/risk-distribution"

)

.then(

res=>setData(res.data)

)

},[])

const chartData={

labels:Object.keys(data),

datasets:[{

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

<h2>Risk Distribution</h2>

<Pie

key="risk-pie"

data={chartData}

/>

</Paper>

)

}

export default RiskDistributionChart