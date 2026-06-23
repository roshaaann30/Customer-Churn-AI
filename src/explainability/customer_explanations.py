import pandas as pd

df = pd.read_csv(

    "artifacts/customer_risk_scores.csv"

)

def explain_customer(row):

    reasons = []

    if row.get(

        "engagement_score",

        1

    ) < 0.3:

        reasons.append(

            "Low engagement"

        )

    if row.get(

        "complaint_ratio",

        0

    ) > 0.7:

        reasons.append(

            "High complaints"

        )

    if row.get(

        "inactivity_score",

        0

    ) > 0.7:

        reasons.append(

            "Low satisfaction"

        )

    if row.get(

        "customer_value_score",

        1

    ) < 0.3:

        reasons.append(

            "Price increase"

        )

    if len(reasons) == 0:

        reasons.append(

            "No major risk factors"

        )

    return ", ".join(reasons)

df["explanation"] = df.apply(

    explain_customer,

    axis=1

)

df.to_csv(

    "artifacts/customer_explanations.csv",

    index=False

)

print(

    "Customer explanations created"

)