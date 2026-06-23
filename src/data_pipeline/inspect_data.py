import pandas as pd

ibm = pd.read_csv("data/raw/WA_Fn-UseC_-Telco-Customer-Churn.csv")

telecom = pd.read_excel("data/raw/Telco_customer_churn.xlsx")

bank = pd.read_csv("data/raw/Bank Customer Churn Prediction.csv")

marketing = pd.read_csv("data/raw/marketing_campaign.csv")

datasets = {
    "IBM": ibm,
    "Telecom": telecom,
    "Bank": bank,
    "Marketing": marketing
}

for name, df in datasets.items():
    print(f"\n{name}")
    print("-" * 40)

    print("Shape:", df.shape)

    print("\nColumns:")

    for col in df.columns:
        print(col)