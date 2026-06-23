from sqlalchemy import create_engine


def load_data(df):

    username = "postgres"

    password = "Roshan123"

    host = "localhost"

    port = "5432"

    database = "customer_churn_db"

    engine = create_engine(

        f"postgresql://{username}:{password}@{host}:{port}/{database}"

    )

    df.to_sql(

        "customer_data",

        engine,

        if_exists="replace",

        index=False

    )

    print("Data loaded into PostgreSQL")