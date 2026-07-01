from mlops.drift_detection import detect_drift

from mlops.retraining import retrain_model

def trigger_retraining(

 drift_results

):

 for _,value in drift_results.items():

  if value["drift"]:

   return retrain_model()

 return "No retraining needed"