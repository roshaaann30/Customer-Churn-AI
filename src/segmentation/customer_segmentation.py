import os
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.cluster import KMeans
from sklearn.cluster import DBSCAN

# Load dataset

df = pd.read_csv(
    "data/processed/engineered_dataset.csv"
)

# Features for segmentation

features = [

    "engagement_score",

    "customer_value_score",

    "inactivity_score",

    "purchase_frequency"

]

X = df[features]

# ---------------- KMEANS ----------------

kmeans = KMeans(

    n_clusters=5,

    random_state=42,

    n_init=10

)

df["kmeans_cluster"] = kmeans.fit_predict(X)

# ---------------- DBSCAN ----------------

dbscan = DBSCAN(

    eps=0.5,

    min_samples=10

)

df["dbscan_cluster"] = dbscan.fit_predict(X)

# ---------------- LABEL CLUSTERS ----------------

segment_names = {

    0: "Loyal Customers",

    1: "High Value Customers",

    2: "Price Sensitive Customers",

    3: "At Risk Customers",

    4: "Inactive Customers"

}

df["segment"] = df[

    "kmeans_cluster"

].map(

    segment_names

)

# ---------------- SAVE ----------------

os.makedirs(

    "artifacts",

    exist_ok=True

)

df.to_csv(

    "artifacts/customer_segments.csv",

    index=False

)

# ---------------- VISUALIZE ----------------

plt.figure(

    figsize=(10,6)

)

plt.scatter(

    df["engagement_score"],

    df["customer_value_score"],

    c=df["kmeans_cluster"]

)

plt.xlabel(

    "Engagement Score"

)

plt.ylabel(

    "Customer Value Score"

)

plt.title(

    "Customer Segmentation"

)

plt.savefig(

    "artifacts/customer_segments.png"

)

plt.close()

print(

    "Customer segmentation completed"

)