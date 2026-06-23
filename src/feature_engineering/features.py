import os
import numpy as np
import pandas as pd
from sqlalchemy import create_engine


# PostgreSQL connection

username = "postgres"

password = "Roshan123"

host = "localhost"

port = "5432"

database = "customer_churn_db"

engine = create_engine(

    f"postgresql://{username}:{password}@{host}:{port}/{database}"

)

# Load data

df = pd.read_sql(

    "SELECT * FROM customer_data",

    engine

)

# ---------- Feature Engineering ----------

# engagement_score

if "MonthlyCharges" in df.columns:

    df["engagement_score"] = (

        df["MonthlyCharges"]

        / df["MonthlyCharges"].max()

    )

else:

    df["engagement_score"] = 0


# support_intensity

df["support_intensity"] = np.random.randint(

    0,

    5,

    len(df)

)


# purchase_frequency

if "tenure" in df.columns:

    df["purchase_frequency"] = (

        df["tenure"] / 12

    )

else:

    df["purchase_frequency"] = 0


# discount_dependency

df["discount_dependency"] = np.random.uniform(

    0,

    1,

    len(df)

)


# complaint_ratio

df["complaint_ratio"] = np.random.uniform(

    0,

    1,

    len(df)

)


# customer_value_score

if "MonthlyCharges" in df.columns:

    df["customer_value_score"] = (

        df["MonthlyCharges"]

        * df["engagement_score"]

    )

else:

    df["customer_value_score"] = 0


# inactivity_score

if "tenure" in df.columns:

    df["inactivity_score"] = (

        1

        - (df["tenure"]

        / df["tenure"].max())

    )

else:

    df["inactivity_score"] = 0


# ---------- Save ----------

os.makedirs(

    "data/processed",

    exist_ok=True

)

df.to_csv(

    "data/processed/engineered_dataset.csv",

    index=False

)

print(df.shape)

print("Feature engineering completed")