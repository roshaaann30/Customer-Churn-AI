import pandas as pd

# Load datasets

ibm = pd.read_csv(
    "data/raw/WA_Fn-UseC_-Telco-Customer-Churn.csv"
)

telecom = pd.read_excel(
    "data/raw/Telco_customer_churn.xlsx"
)

bank = pd.read_csv(
    "data/raw/Bank Customer Churn Prediction.csv"
)

# Fix marketing dataset separator

marketing = pd.read_csv(
    "data/raw/marketing_campaign.csv",
    sep="\t"
)

print("Marketing shape:", marketing.shape)

print("\nMarketing columns:")

print(marketing.columns)