import os
import pandas as pd

# Load risk scores

df = pd.read_csv(

    "artifacts/customer_risk_scores.csv"

)

# ---------------- CHURN THRESHOLD ----------------

# High + Critical customers

predicted_churners = len(

    df[

        df["risk_score"] >= 75

    ]

)

# ---------------- CUSTOMER VALUE ----------------

if "customer_value_score" in df.columns:

    average_customer_value = (

        df["customer_value_score"].mean()

        * 1000

    )

else:

    average_customer_value = 150

# ---------------- REVENUE AT RISK ----------------

revenue_at_risk = (

    predicted_churners

    * average_customer_value

)

# ---------------- DASHBOARD DATA ----------------

dashboard = pd.DataFrame({

    "Customers":

    [len(df)],

    "Expected_Churn":

    [predicted_churners],

    "Revenue_At_Risk":

    [round(revenue_at_risk,2)]

})

# ---------------- SAVE ----------------

os.makedirs(

    "artifacts",

    exist_ok=True

)

dashboard.to_csv(

    "artifacts/revenue_forecast.csv",

    index=False

)

print()

print(

    dashboard

)

print()

print(

    "Revenue forecasting completed"

)