import MonthlyChurnChart from "../charts/MonthlyChurnChart";

import GeographicChurnChart from "../charts/GeographicChurnChart";

import FeatureImportanceChart from "../charts/FeatureImportanceChart";

function ChurnAnalytics() {

  return (

    <div style={{ padding:"30px" }}>

      <h1>Churn Analytics</h1>

      <MonthlyChurnChart />

      <GeographicChurnChart />

      <FeatureImportanceChart />

    </div>

  );

}

export default ChurnAnalytics;