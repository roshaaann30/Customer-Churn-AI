from scipy.stats import ks_2samp

import pandas as pd

def detect_drift(train_df, new_df):

    drift_results = {}

    numerical_columns = train_df.select_dtypes(
        include=["int64", "float64"]
    ).columns

    for column in numerical_columns:

        statistic, p_value = ks_2samp(

            train_df[column],

            new_df[column]

        )

        drift_results[column] = {

            "p_value": round(p_value, 4),

            "drift": p_value < 0.05

        }

    return drift_results