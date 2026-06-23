import pandas as pd
from sklearn.preprocessing import LabelEncoder, MinMaxScaler

def transform_data(df):

    # Remove duplicates
    df = df.drop_duplicates()

    # Fill null values
    for col in df.columns:

        if pd.api.types.is_numeric_dtype(df[col]):

            df[col] = df[col].fillna(df[col].median())

        else:

            df[col] = df[col].fillna("Unknown")

    # Create engineered features

    if "tenure" in df.columns:

        df["customer_lifetime_value"] = (
            df["tenure"] * 50
        )

    if "MonthlyCharges" in df.columns:

        df["engagement_score"] = (
            df["MonthlyCharges"] / 100
        )

    if "customerID" in df.columns:

        df["ticket_frequency"] = 0

        df["days_since_last_login"] = 30

    # Encode categoricals

    encoder = LabelEncoder()

    categorical_cols = df.select_dtypes(
        include=["object", "string"]
    ).columns

    for col in categorical_cols:

        df[col] = encoder.fit_transform(
            df[col].astype(str)
        )

    # Normalize numericals

    numerical_cols = df.select_dtypes(
        include=["int64", "float64"]
    ).columns

    scaler = MinMaxScaler()

    df[numerical_cols] = scaler.fit_transform(
        df[numerical_cols]
    )

    return df