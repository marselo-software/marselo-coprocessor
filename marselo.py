import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, mean_squared_error
import numpy as np

# Function that processes blockchain data passed as input
def process_blockchain_data(blockchain_data):
    # Convert the input data into a DataFrame
    df = pd.DataFrame([blockchain_data["call"]["output"]])

    # Create a new column 'blockTimeDiff' that calculates the time difference between blocks
    df['blockTimeDiff'] = df['blockTime'].diff().fillna(0)

    # Linear Regression model to predict gas price based on features
    X = df[['gasLimit', 'baseFee', 'difficulty']]
    y = df['gasPrice']

    # Train the linear regression model
    gas_model = LinearRegression()
    gas_model.fit(X, y)

    # Predict gas prices using the model
    gas_predictions = gas_model.predict(X)

    # Calculate the Mean Squared Error (MSE) for the gas price predictions
    gas_mse = mean_squared_error(y, gas_predictions)

    # Random Forest model for congestion classification based on gas price
    df['congestion'] = pd.cut(df['gasPrice'], bins=[0, 20, 50, 200], labels=[0, 1, 2])

    # Select features and target for Random Forest model
    X_rf = df[['gasPrice', 'gasLimit', 'baseFee']]
    y_rf = df['congestion']

    # Train the Random Forest classifier
    rf_model = RandomForestClassifier(n_estimators=100)
    rf_model.fit(X_rf, y_rf)

    # Predict congestion categories using the Random Forest model
    rf_predictions = rf_model.predict(X_rf)

    # Calculate the accuracy of the Random Forest model
    rf_accuracy = accuracy_score(y_rf, rf_predictions)

    # Return a dictionary with the MSE for gas price and the accuracy for congestion classification
    return {
        "gas_mse": gas_mse,
        "rf_accuracy": rf_accuracy
    }

# Example of how to call the function with actual blockchain data
# blockchain_data = {
#     "call": {
#         "from": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
#         "to": "OnChainDataFetcher.getAllData(address)",
#         "data": "0x67e...878ef",
#         "execution_cost": "5440 gas",
#         "input": {
#             "address_account": "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef"
#         },
#         "output": {
#             "blockTime": 1739633935,
#             "balance": 0,
#             "gasPrice": 2,
#             "difficulty": 0,
#             "baseFee": 1,
#             "gasLimit": 3000000,
#             "blockHash": "0x2e80d0a115d7ef67f234405512ef5694c0e6bf7a61c7788fc8c7aa0f07c5dd4b",
#             "miner": "0x8945A1288dc78A6D8952a92C77aEe6730B414778",
#             "txOrigin": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
#             "msgSender": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
#         },
#         "logs": [],
#         "raw_logs": []
#     }
# }
