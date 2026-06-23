import os
import pandas as pd

# Load risk data

df = pd.read_csv(
    "artifacts/customer_risk_scores.csv"
)

# ---------- RECOMMENDATION ENGINE ----------

def generate_recommendations(row):

    score = row["risk_score"]

    recommendations = []

    retention_increase = 0

    if score > 85:

        recommendations = [

            "Premium support",

            "20% discount",

            "Premium trial",

            "Personalized email",

            "Loyalty rewards"

        ]

        retention_increase = 28

    elif score > 70:

        recommendations = [

            "15% discount",

            "Priority support",

            "Personalized email"

        ]

        retention_increase = 18

    elif score > 50:

        recommendations = [

            "Loyalty rewards",

            "Personalized email"

        ]

        retention_increase = 10

    else:

        recommendations = [

            "Regular engagement"

        ]

        retention_increase = 3

    return pd.Series(

        [

            ", ".join(recommendations),

            retention_increase

        ]

    )

# Apply recommendations

df[

    [

        "recommendations",

        "expected_retention_increase"

    ]

] = df.apply(

    generate_recommendations,

    axis=1

)

# Save results

os.makedirs(

    "artifacts",

    exist_ok=True

)

df.to_csv(

    "artifacts/customer_recommendations.csv",

    index=False

)

print(

    df[

        [

            "risk_score",

            "recommendations",

            "expected_retention_increase"

        ]

    ].head()

)

print()

print(

    "Recommendation engine completed"

)