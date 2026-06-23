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

marketing = pd.read_csv(
    "data/raw/marketing_campaign.csv",
    sep="\t"
)

# Enterprise schema

master_columns = [

    "Customer_ID",

    "Age",

    "Gender",

    "Location",

    "Subscription_Type",

    "Tenure",

    "Monthly_Spend",

    "Contract_Type",

    "Payment_Method",

    "Support_Tickets",

    "Complaint_Count",

    "Session_Duration",

    "Login_Frequency",

    "Last_Login",

    "Satisfaction_Score",

    "Referral_Count",

    "Device_Type",

    "Internet_Service",

    "CLTV",

    "Products_Used",

    "Engagement_Score",

    "Usage_Hours",

    "Purchase_Frequency",

    "Marketing_Response",

    "Churn"

]

master_df = pd.DataFrame(columns=master_columns)

print(master_df.columns)

print("\nTotal columns:", len(master_df.columns))