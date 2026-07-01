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

export default function DataDrift() {

  const [

    data,

    setData

  ] = useState(null);

  useEffect(() => {

    axios

      .get(

        "http://localhost:8000/data-drift"

      )

      .then(

        res => setData(

          res.data

        )

      );

  }, []);

  if (!data)

    return <div>Loading...</div>;

  return (

    <Card>

      <CardContent>

        <Typography variant="h5">

          Data Drift

        </Typography>

        {

          Object.entries(data)

          .map(([key,value])=>(

            <Typography key={key}>

              {key}

              {" : "}

              {value}

            </Typography>

          ))

        }

      </CardContent>

    </Card>

  );

}