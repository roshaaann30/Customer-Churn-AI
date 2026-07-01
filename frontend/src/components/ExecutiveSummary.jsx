import React, {

 useEffect,

 useState

} from "react";

import axios from "axios";

import {

 Card,

 CardContent,

 Typography

} from "@mui/material";

export default function ExecutiveSummary(){

 const [

  summary,

  setSummary

 ]=useState(null);

 useEffect(()=>{

  axios

  .get(

   "http://localhost:8000/executive-summary"

  )

  .then(

   res=>setSummary(

    res.data

   )

  );

 },[]);

 if(!summary)

  return <div>Loading...</div>;

 return(

  <Card>

   <CardContent>

    <Typography variant="h4">

     Weekly Executive Summary

    </Typography>

    <Typography>

     High Risk Customers:

     {" "}

     {summary.high_risk_customers}

    </Typography>

    <Typography>

     Revenue At Risk:

     {" "}

     {summary.revenue_at_risk}

    </Typography>

    <Typography>

     Highest Risk Segment:

     {" "}

     {summary.highest_risk_segment}

    </Typography>

    <Typography>

     Top Churn Reason:

     {" "}

     {summary.top_churn_reason}

    </Typography>

    <Typography>

     Recommended Action:

     {" "}

     {summary.recommended_action}

    </Typography>

    <Typography>

     Expected Improvement:

     {" "}

     {summary.expected_retention_improvement}

    </Typography>

   </CardContent>

  </Card>

 );

}