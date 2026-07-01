import React from "react";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function ExecutiveDashboard() {

  const kpis = [

    "Expected Churn",

    "Revenue At Risk",

    "Retention Success",

    "Customer Segments"

  ];

  return (

    <Box

      sx={{

        p: {

          xs: 2,

          md: 3

        }

      }}

    >

      <Typography

        variant="h4"

        gutterBottom

      >

        Executive Dashboard

      </Typography>

      <Grid

        container

        spacing={3}

      >

        {

          kpis.map((item) => (

            <Grid

              item

              xs={12}

              sm={6}

              md={3}

              key={item}

            >

              <Card>

                <CardContent>

                  <Typography

                    variant="h6"

                  >

                    {item}

                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))

        }

      </Grid>

    </Box>

  );

}