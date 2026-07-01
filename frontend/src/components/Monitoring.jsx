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

export default function Monitoring() {

  const [

    metrics,

    setMetrics

  ] = useState(null);

  useEffect(() => {

    axios

      .get(

        "http://localhost:8000/metrics"

      )

      .then(

        res => setMetrics(

          res.data

        )

      );

  }, []);

  if (!metrics)

    return <div>Loading...</div>;

  const cards = [

    {

      title: "API Health",

      value: metrics.api_health

    },

    {

      title: "Model Accuracy",

      value: metrics.model_accuracy

    },

    {

      title: "Response Time",

      value: metrics.response_time

    },

    {

      title: "Prediction Volume",

      value: metrics.prediction_volume

    },

    {

      title: "Model Version",

      value: metrics.model_version

    },

    {

      title: "System Status",

      value: metrics.system_status

    }

  ];

  return (

    <Grid container spacing={3}>

      {

        cards.map((card) => (

          <Grid

            item

            xs={12}

            md={4}

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