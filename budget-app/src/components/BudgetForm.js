// import React, { useState } from 'react';

// function BudgetForm({ addEntry }) {
//   const [salary, setSalary] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!salary || isNaN(salary)) {
//       alert('Please enter a valid salary amount');
//       return;
//     }

//     // Calculate the allocations 

//     const personalNeeds = salary * 0.50; // 50% for Personal Needs
//     const savings = salary * 0.20; // 20% for Savings
//     const debtRepayment = salary * 0.20; // 20% for Debts
//     const investments = salary * 0.05; // 5% for Investing
//     const riskyInvestments = salary * 0.05; // 5% for Risky Investments

//     const newEntry = {
//       date: new Date().toLocaleDateString(),
//       salary,
//       personalNeeds,
//       savings,
//       debtRepayment,
//       investments,
//       riskyInvestments,
//     };

//     // Pass the entry to the parent component
//     addEntry(newEntry);
//     setSalary('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Salary</label>
//       <input 
//         type="number" 
//         value={salary} 
//         onChange={(e) => setSalary(e.target.value)} 
//         required 
//       />
//       {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
//       <input type="submit" value="Add Entry" />
//     </form>
//   );
// }

// export default BudgetForm;


import React, { useState } from 'react';

// Function to send the budget data to the Flask backend
const saveBudgetToBackend = async (budgetData) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/save-budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(budgetData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Budget saved successfully!');
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error saving budget:', error);
    alert('An error occurred while saving the budget.');
  }
};

function BudgetForm({ addEntry }) {
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!salary || isNaN(salary)) {
      alert('Please enter a valid salary amount');
      return;
    }

    // Calculate the allocations 
    const personalNeeds = salary * 0.50; // 50% for Personal Needs
    const savings = salary * 0.20; // 20% for Savings
    const debtRepayment = salary * 0.20; // 20% for Debts
    const investments = salary * 0.05; // 5% for Investing
    const riskyInvestments = salary * 0.05; // 5% for Risky Investments

    const newEntry = {
      date: new Date().toLocaleDateString(),
      salary,
      personalNeeds,
      savings,
      debtRepayment,
      investments,
      riskyInvestments,
    };

    // Add the entry to the parent component's state
    addEntry(newEntry);

    // Save the entry to the backend
    saveBudgetToBackend(newEntry);

    // Reset the form
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Salary</label>
      <input 
        type="number" 
        value={salary} 
        onChange={(e) => setSalary(e.target.value)} 
        required 
      />
      <input type="submit" value="Add Entry" />
    </form>
  );
}

export default BudgetForm;
