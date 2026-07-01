import pandas as pd

from mlops.drift_detection import detect_drift

train = pd.read_csv(

    "data/train.csv"

)

new = pd.read_csv(

    "data/new_customers.csv"

)

results = detect_drift(

    train,

    new

)

print(results)