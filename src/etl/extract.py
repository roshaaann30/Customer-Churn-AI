import pandas as pd

def extract_data():

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

    return ibm, telecom, bank, marketing


if __name__ == "__main__":

    datasets = extract_data()

    for dataset in datasets:

        print(dataset.shape)