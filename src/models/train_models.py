import os
import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LogisticRegression

from sklearn.ensemble import RandomForestClassifier

from xgboost import XGBClassifier

from lightgbm import LGBMClassifier

from catboost import CatBoostClassifier

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score
)

# ---------------- LOAD DATA ----------------

df = pd.read_csv(
    "data/processed/engineered_dataset.csv"
)

# ---------------- TARGET ----------------

target_col = None

possible_targets = [
    "Churn",
    "churn"
]

for col in possible_targets:

    if col in df.columns:

        target_col = col

        break

if target_col is None:

    raise Exception(
        "Churn column not found"
    )

# ---------------- FEATURES ----------------

X = df.drop(
    columns=[target_col]
)

y = df[target_col]

# ---------------- TRAIN TEST SPLIT ----------------

X_train, X_test, y_train, y_test = train_test_split(

    X,

    y,

    test_size=0.2,

    random_state=42

)

# ---------------- MODELS ----------------

models = {

    "Logistic Regression":

        LogisticRegression(
            max_iter=1000
        ),

    "Random Forest":

        RandomForestClassifier(
            random_state=42
        ),

    "XGBoost":

        XGBClassifier(
            eval_metric="logloss"
        ),

    "LightGBM":

        LGBMClassifier(),

    "CatBoost":

        CatBoostClassifier(
            verbose=0
        )
}

results = []

best_model = None

best_auc = 0

best_name = ""

# ---------------- TRAIN ----------------

for name, model in models.items():

    model.fit(
        X_train,
        y_train
    )

    predictions = model.predict(
        X_test
    )

    probabilities = model.predict_proba(
        X_test
    )[:,1]

    accuracy = accuracy_score(
        y_test,
        predictions
    )

    precision = precision_score(
        y_test,
        predictions
    )

    recall = recall_score(
        y_test,
        predictions
    )

    f1 = f1_score(
        y_test,
        predictions
    )

    roc_auc = roc_auc_score(
        y_test,
        probabilities
    )

    results.append({

        "Model": name,

        "Accuracy": accuracy,

        "Precision": precision,

        "Recall": recall,

        "F1": f1,

        "ROC_AUC": roc_auc

    })

    if roc_auc > best_auc:

        best_auc = roc_auc

        best_model = model

        best_name = name

leaderboard = pd.DataFrame(

    results

).sort_values(

    by="ROC_AUC",

    ascending=False

)

print(leaderboard)

# ---------------- SAVE ----------------

os.makedirs(

    "artifacts",

    exist_ok=True

)

leaderboard.to_csv(

    "artifacts/model_leaderboard.csv",

    index=False

)

import joblib

joblib.dump(

    best_model,

    "artifacts/best_model.pkl"

)

print()

print("Best Model:", best_name)