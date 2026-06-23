import os
import joblib
import pandas as pd

# Load dataset

df = pd.read_csv(
    "data/processed/engineered_dataset.csv"
)

# Load best model

model = joblib.load(
    "artifacts/best_model.pkl"
)

# Find target column

target_col = None

for col in ["Churn", "churn"]:

    if col in df.columns:

        target_col = col

        break

if target_col is None:

    raise Exception(
        "Churn column not found"
    )

# Remove target

X = df.drop(
    columns=[target_col]
)

# Predict probabilities

probabilities = model.predict_proba(
    X
)[:,1]

# Risk score

df["risk_score"] = (

    probabilities * 100

).round().astype(int)

# Risk category

def risk_category(score):

    if score <= 25:

        return "Safe"

    elif score <= 50:

        return "Medium"

    elif score <= 75:

        return "High"

    else:

        return "Critical"

df["risk_level"] = df["risk_score"].apply(
    risk_category
)

# Save output

os.makedirs(
    "artifacts",
    exist_ok=True
)

df.to_csv(
    "artifacts/customer_risk_scores.csv",
    index=False
)

print(

    df[

        [

            "risk_score",

            "risk_level"

        ]

    ].head()

)

print()

print("Risk engine completed")