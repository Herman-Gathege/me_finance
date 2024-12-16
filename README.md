Salary Budget Tracker
This project is a simple budgeting tool that allows users to track their salary allocations, including personal expenses, savings, debt repayments, investments, and risky investments. It calculates and stores these allocations based on user input and provides an annual summary of savings. The application consists of a frontend built with React.js and a backend using Python Flask. The project includes functionality for data persistence, user interaction, and the generation of financial summaries.

Features
Salary Allocation: Automatically calculates the allocation for various categories (Personal Needs, Savings, Debts, Investments, Risky Investments) based on the user’s salary.
CRUD Functionality: Allows the user to create, read, update, and delete budget entries.
Data Persistence: Saves the budget data to a backend database, ensuring the data persists between sessions.
Annual Summary: Generates a summary showing the total savings for a given year to encourage users to track and stay motivated toward their savings goals.
User-Friendly Interface: The frontend is simple and easy to use, built with React.js, and the backend is built with Flask.
Currency Support: The app uses Kenyan Shillings (KES) as the default currency, with the possibility to expand currency options in the future.
Technical Stack
Frontend: React.js
Backend: Python Flask
Data Storage: PostgreSQL (for the backend)
Deployment:
Frontend: Netlify/Vercel
Backend: Render/Heroku
Setup and Installation
1. Clone the repository
First, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/budget-tracker.git
cd budget-tracker
2. Set up the frontend
The frontend is built using React. To set it up, follow these steps:

Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the required dependencies:

bash
Copy code
npm install
To start the React development server, run:

bash
Copy code
npm start
This will start the React app on http://localhost:3000.

3. Set up the backend
The backend is built using Flask. To set it up, follow these steps:

Navigate to the backend directory:

bash
Copy code
cd backend
Set up a virtual environment:

bash
Copy code
python -m venv venv
Activate the virtual environment:

On Windows:
bash
Copy code
venv\Scripts\activate
On macOS/Linux:
bash
Copy code
source venv/bin/activate
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Set up the database (PostgreSQL is used in this case):

Ensure PostgreSQL is installed and running on your machine.
Create a new database and update the config.py file with your database credentials.
Run the migration to set up the database schema:
bash
Copy code
flask db upgrade
To start the Flask server, run:

bash
Copy code
flask run
This will start the backend server on http://127.0.0.1:5000.

4. Testing the API
Once both the frontend and backend are set up, you can test the app by interacting with the budget form on the frontend. When you submit the form, the data is sent to the Flask backend, where it is stored in the database.

Use tools like Postman or curl to manually test the backend endpoints if necessary:

POST /save-budget - to save a new budget entry.
GET /get-budget - to retrieve all saved budget entries.
DELETE /delete-budget/{id} - to delete a budget entry by its ID.
5. Deployment
Frontend Deployment
The React app can be deployed to services like Netlify or Vercel.

Push your code to a GitHub repository.
Sign up for Netlify or Vercel and connect your GitHub account.
Select your project repository and deploy it.
Backend Deployment
The Flask backend can be deployed to services like Render or Heroku.

For Render:

Create an account and log in to Render.
Create a new web service for the backend.
Link your GitHub repository and deploy.
For Heroku:

Install the Heroku CLI.
Push your backend project to a GitHub repository.
Create a new app in Heroku, link your repository, and deploy it.
API Endpoints
1. POST /save-budget
Description: Saves the budget entry to the backend.
Request Body:
json
Copy code
{
  "salary": 20000,
  "personal_needs": 10000,
  "savings": 4000,
  "debts": 4000,
  "investing": 1000,
  "risky_investments": 1000
}
2. GET /get-budget
Description: Fetches all the saved budget entries.
Response:
json
Copy code
[
  {
    "id": 1,
    "salary": 20000,
    "personal_needs": 10000,
    "savings": 4000,
    "debts": 4000,
    "investing": 1000,
    "risky_investments": 1000,
    "date": "12/12/2024"
  }
]
3. DELETE /delete-budget/{id}
Description: Deletes a budget entry by its ID.
Parameters:
id: The ID of the budget entry to delete.
Contribution
We welcome contributions! If you would like to contribute, feel free to fork the repository and create a pull request. Please make sure your code follows the existing style and is well-documented.

Future Improvements
Implement custom percentage allocations for categories.
Add support for different currencies.
Create a mobile-friendly version or a mobile app.
Improve error handling and input validation.
Implement more advanced data visualization features (e.g., charts, graphs).
