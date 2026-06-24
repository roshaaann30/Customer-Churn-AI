import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(

  CategoryScale,

  LinearScale,

  BarElement,

  Tooltip,

  Legend

);

function MonthlyChurnChart() {

  const data = {

    labels: [

      "Jan",

      "Feb",

      "Mar",

      "Apr",

      "May",

      "Jun"

    ],

    datasets: [

      {

        label: "Monthly Churn",

        data: [

          120,

          180,

          150,

          210,

          170,

          230

        ]

      }

    ]

  };

  return (

    <div>

      <h2>Monthly Churn</h2>

      <Bar data={data} />

    </div>

  );

}

export default MonthlyChurnChart;