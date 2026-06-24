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

function GeographicChurnChart() {

  const data = {

    labels: [

      "California",

      "Texas",

      "New York",

      "Florida"

    ],

    datasets: [

      {

        label: "Churn",

        data: [

          320,

          280,

          210,

          180

        ]

      }

    ]

  };

  return (

    <div>

      <h2>Geographic Churn</h2>

      <Bar data={data} />

    </div>

  );

}

export default GeographicChurnChart;