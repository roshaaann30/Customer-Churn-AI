import pandas as pd
import joblib

from sklearn.model_selection import train_test_split

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score
)

from xgboost import XGBClassifier

from mlops.model_registry import register_model


def retrain_model():

    df = pd.read_csv("data/processed_data.csv")

    X = df.drop("Churn", axis=1)

    y = df["Churn"]

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    model = XGBClassifier()

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    precision = precision_score(y_test, predictions)

    recall = recall_score(y_test, predictions)

    f1 = f1_score(y_test, predictions)

    # ⭐ ADD THIS HERE
    register_model(
        version="v1",
        accuracy=accuracy,
        precision=precision,
        recall=recall,
        f1=f1
    )

    joblib.dump(
        model,
        "artifacts/latest_model.pkl"
    )

    return {
        "accuracy": round(accuracy, 4)
    }