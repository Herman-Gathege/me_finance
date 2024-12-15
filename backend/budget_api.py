from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Path for the budget log file
BUDGET_LOG_FILE = 'budget_log.txt'

# Ensure the file exists
if not os.path.exists(BUDGET_LOG_FILE):
    with open(BUDGET_LOG_FILE, 'w') as f:
        f.write("Budget Log\n----------------\n")  # Optional header for the file

@app.route('/save-budget', methods=['POST'])
def save_budget():
    try:
        # Get the data from the frontend
        data = request.json
        
        # Extract budget details from the request data
        salary = data.get('salary')
        personal_needs = data.get('personal_needs')
        savings = data.get('savings')
        debts = data.get('debts')
        investing = data.get('investing')
        risky_investments = data.get('risky_investments')

        # Create a new entry to save in the text file
        entry = f"Salary: {salary}, Personal Needs: {personal_needs}, Savings: {savings}, Debts: {debts}, Investing: {investing}, Risky Investments: {risky_investments}\n"

        # Write the entry to the text file
        with open(BUDGET_LOG_FILE, 'a') as file:
            file.write(entry)

        # Return a success message
        return jsonify({'message': 'Budget saved successfully!'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
