import os
import joblib
import shap
import pandas as pd
import matplotlib.pyplot as plt

# Create output folder

os.makedirs(
    "artifacts/explanations",
    exist_ok=True
)

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

# Separate features

X = df.drop(
    columns=[target_col]
)

# Limit rows for faster SHAP

X_sample = X.sample(
    min(500, len(X)),
    random_state=42
)

# Create explainer

explainer = shap.Explainer(
    model,
    X_sample
)

shap_values = explainer(
    X_sample
)

# Global feature importance

plt.figure()

shap.plots.bar(
    shap_values,
    show=False
)

plt.savefig(

    "artifacts/explanations/global_feature_importance.png",

    bbox_inches="tight"

)

plt.close()

# Waterfall chart

plt.figure()

shap.plots.waterfall(

    shap_values[0],

    show=False

)

plt.savefig(

    "artifacts/explanations/waterfall_chart.png",

    bbox_inches="tight"

)

plt.close()

print(
    "SHAP analysis completed"
)