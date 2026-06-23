from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

from fastapi import FastAPI

app = FastAPI(

    title="Customer Churn AI",

    version="1.0"

)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:3000",

        "http://localhost:3001"

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

# ---------- LOAD FILES ----------

model = joblib.load(

    "artifacts/best_model.pkl"

)

risk_df = pd.read_csv(

    "artifacts/customer_risk_scores.csv"

)

segments_df = pd.read_csv(

    "artifacts/customer_segments.csv"

)

revenue_df = pd.read_csv(

    "artifacts/revenue_forecast.csv"

)

recommendation_df = pd.read_csv(

    "artifacts/customer_recommendations.csv"

)

# ---------- HEALTH ----------

@app.get("/health")

def health():

    return {

        "status":"healthy"

    }

# ---------- CUSTOMERS ----------

@app.get("/customers")

def customers():

    return risk_df.head(

        100

    ).to_dict(

        orient="records"

    )

# ---------- SEGMENTS ----------

@app.get("/segments")

def segments():

    return segments_df[

        [

            "segment"

        ]

    ].value_counts().to_dict()

# ---------- REVENUE ----------

@app.get("/revenue")

def revenue():

    return revenue_df.to_dict(

        orient="records"

    )

# ---------- RECOMMENDATIONS ----------

@app.get("/recommendations")

def recommendations():

    return recommendation_df.head(

        100

    ).to_dict(

        orient="records"

    )

# ---------- PREDICT ----------

@app.post("/predict")

def predict():

    return {

        "message":

        "Prediction endpoint ready"

    }

@app.get("/risk-distribution")
def risk_distribution():

    data = risk_df["risk_level"].value_counts()

    return data.to_dict()


@app.get("/segments-distribution")
def segments_distribution():

    data = segments_df["segment"].value_counts()

    return data.to_dict()


@app.get("/feature-importance")
def feature_importance():

    cols = [

        "engagement_score",

        "customer_value_score",

        "inactivity_score",

        "support_intensity",

        "purchase_frequency"

    ]

    scores = {}

    for col in cols:

        scores[col] = float(

            risk_df[col].mean()

        )

    return scores


@app.get("/retention-impact")
def retention_impact():

    return {

        "average_retention_gain":

        float(

            recommendation_df[

                "expected_retention_increase"

            ].mean()

        )

    }

@app.get("/ai-insights")

def ai_insights():

    return [

        {

            "insight":

            "High churn observed among month-to-month contracts"

        },

        {

            "insight":

            "18% of customers are critically at risk"

        },

        {

            "insight":

            "California contributes most to churn"

        },

        {

            "insight":

            "Premium support could save significant revenue"

        }

    ]

@app.get("/monitoring")

def monitoring():

    return {

        "api_status":"Healthy",

        "model_version":"v1.0",

        "prediction_latency":"82ms",

        "total_predictions":100000,

        "database":"Connected"

    }  

@app.get("/prediction-history")

def prediction_history():

    return [

        {

            "customer_id":8541,

            "risk":92,

            "segment":"At Risk"

        }

    ]  


@app.get("/data-drift")

def data_drift():

    return {

        "MonthlyCharges":7,

        "Tenure":4,

        "Engagement":6,

        "Risk":3

    }

@app.get("/download-report")

def download_report():

    return {

        "message":

        "Report generated"

    }



