from extract import extract_data
from transform import transform_data
from load import load_data

ibm, telecom, bank, marketing = extract_data()

cleaned_ibm = transform_data(ibm)

load_data(cleaned_ibm)

print("Pipeline completed")