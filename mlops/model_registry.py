import pandas as pd

from datetime import datetime

def register_model(

 version,

 accuracy,

 precision,

 recall,

 f1

):

 file_path = "artifacts/model_metrics.csv"

 try:

  df = pd.read_csv(file_path)

 except:

  df = pd.DataFrame()

 new_record = pd.DataFrame({

  "version":[version],

  "accuracy":[accuracy],

  "precision":[precision],

  "recall":[recall],

  "f1_score":[f1],

  "date":[datetime.now()]

 })

 df = pd.concat(

  [df,new_record],

  ignore_index=True

 )

 df.to_csv(

  file_path,

  index=False

 )

 return {

  "status":"registered"

 }