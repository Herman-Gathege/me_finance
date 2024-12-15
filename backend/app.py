from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/save-budget', methods=['POST'])
def save_budget():
    try:
        # Parse incoming JSON data
        budget_data = request.get_json()

        # Define the path to the file where the data will be saved
        file_path = 'budget_log.txt'

        # Prepare the entry data as a string to append to the file
        entry = f"{budget_data['date']} - Salary: {budget_data['salary']}, Personal Needs: {budget_data['personalNeeds']}, Savings: {budget_data['savings']}, Debts: {budget_data['debtRepayment']}, Investments: {budget_data['investments']}, Risky Investments: {budget_data['riskyInvestments']}\n"

        # Save to the file
        with open(file_path, 'a') as file:
            file.write(entry)

        return jsonify({'message': 'Budget saved successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
