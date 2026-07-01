import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier

# Load dataset

df = pd.read_csv("data/processed/engineered_dataset.csv")

# Drop customer ID if present

if "customerID" in df.columns:

    df = df.drop(columns=["customerID"])

# Encode categorical columns

for col in df.select_dtypes(include="object").columns:

    le = LabelEncoder()

    df[col] = le.fit_transform(df[col].astype(str))

# Target column

target = "Churn"

X = df.drop(columns=[target])

y = df[target]

# Split

X_train, X_test, y_train, y_test = train_test_split(

    X,

    y,

    test_size=0.2,

    random_state=42

)

# Train

model = RandomForestClassifier(

    random_state=42

)

model.fit(

    X_train,

    y_train

)

# Save model

joblib.dump(

    model,

    "artifacts/best_model.pkl"

)

print("Model saved successfully.")