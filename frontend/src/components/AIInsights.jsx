import axios from "axios";

import {useEffect,useState} from "react";

import {Paper,Typography} from "@mui/material";

function AIInsights(){

const [insights,setInsights]=useState([])

useEffect(()=>{

axios

.get(

"http://localhost:8000/ai-insights"

)

.then(

res=>setInsights(res.data)

)

},[])

return(

<Paper

sx={{

padding:3,

marginTop:4,

borderRadius:4

}}

>

<Typography variant="h5">

AI Insights

</Typography>

{

insights.map(

(item,index)=>(

<Typography key={index}>

• {item.insight}

</Typography>

)

)

}

</Paper>

)

}

export default AIInsights