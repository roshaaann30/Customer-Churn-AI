import React, {

  useEffect,

  useState

} from "react";

import axios from "axios";

import {

  Card,

  CardContent,

  Typography,

  Table,

  TableBody,

  TableCell,

  TableContainer,

  TableHead,

  TableRow,

  Paper

} from "@mui/material";

export default function PredictionHistory() {

  const [

    history,

    setHistory

  ] = useState([]);

  useEffect(() => {

    axios

      .get(

        "http://localhost:8000/prediction-history"

      )

      .then(

        res => setHistory(

          res.data

        )

      );

  }, []);

  return (

    <Card>

      <CardContent>

        <Typography

          variant="h5"

          gutterBottom

        >

          Prediction History

        </Typography>

        <TableContainer component={Paper}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>

                  Timestamp

                </TableCell>

                <TableCell>

                  Customer ID

                </TableCell>

                <TableCell>

                  Risk Score

                </TableCell>

                <TableCell>

                  Segment

                </TableCell>

                <TableCell>

                  Recommendation

                </TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {

                history.map(

                  (row,index)=>(

                    <TableRow

                      key={index}

                    >

                      <TableCell>

                        {row.timestamp}

                      </TableCell>

                      <TableCell>

                        {row.customer_id}

                      </TableCell>

                      <TableCell>

                        {row.risk_score}

                      </TableCell>

                      <TableCell>

                        {row.segment}

                      </TableCell>

                      <TableCell>

                        {row.recommendation}

                      </TableCell>

                    </TableRow>

                  )

                )

              }

            </TableBody>

          </Table>

        </TableContainer>

      </CardContent>

    </Card>

  );

}