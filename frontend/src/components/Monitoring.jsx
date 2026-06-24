import axios from "axios";

import {useEffect,useState} from "react";

function Monitoring(){

const [data,setData]=useState({})

useEffect(()=>{

axios

.get(

"http://localhost:8000/monitoring"

)

.then(

res=>setData(res.data)

)

},[])

return(

<div>

<h1>Monitoring</h1>

<p>API: {data.api_status}</p>

<p>Model: {data.model_version}</p>

<p>Latency: {data.prediction_latency}</p>

<p>Predictions: {data.total_predictions}</p>

<p>Database: {data.database}</p>

</div>

)

}

export default Monitoring