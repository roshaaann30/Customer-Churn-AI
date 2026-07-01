import React, {

 useEffect,

 useState

} from "react";

import axios from "axios";

import {

 Grid,

 Card,

 CardContent,

 Typography

} from "@mui/material";

export default function AIInsights(){

 const [

  data,

  setData

 ] = useState(null);

 useEffect(()=>{

  axios

  .get(

   "http://localhost:8000/insights"

  )

  .then(

   res=>setData(

    res.data

   )

  );

 },[]);

 if(!data)

  return <div>Loading...</div>;

 const cards=[

 {

  title:"Revenue At Risk",

  value:data.revenue_at_risk

 },

 {

  title:"Highest Risk Segment",

  value:data.highest_risk_segment

 },

 {

  title:"Best Retention Action",

  value:data.best_retention_action

 },

 {

  title:"Predicted Churn",

  value:data.predicted_churn

 }

 ];

 return(

  <Grid container spacing={3}>

   {

    cards.map(card=>(

     <Grid

      item

      xs={12}

      md={6}

      key={card.title}

     >

      <Card>

       <CardContent>

        <Typography variant="h6">

         {card.title}

        </Typography>

        <Typography variant="h4">

         {card.value}

        </Typography>

       </CardContent>

      </Card>

     </Grid>

    ))

   }

  </Grid>

 );

}