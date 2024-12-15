// import React, { useState } from 'react';
// import BudgetForm from './BudgetForm';
// import BudgetLog from './BudgetLog';
// import Summary from './Summary';

// function App() {
//   const [entries, setEntries] = useState([]);
//   const [showSummary, setShowSummary] = useState(false);

//   const addEntry = (entry) => {
//     setEntries([...entries, entry]);
//   };

//   const toggleSummary = () => {
//     setShowSummary(!showSummary);
//   };

//   return (
//     <div className="App">
//       <h1>Budget Management</h1>
//       <BudgetForm addEntry={addEntry} />
//       <button onClick={toggleSummary}>
//         {showSummary ? 'Hide' : 'Show'} Annual Summary
//       </button>
//       {showSummary ? <Summary entries={entries} /> : <BudgetLog entries={entries} />}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import BudgetLog from './BudgetLog';
import Summary from './Summary';
import History from './History'; // Import the new History component

function App() {
  const [entries, setEntries] = useState([]); // Initialize state to hold entries
  const [showSummary, setShowSummary] = useState(false); // State for toggling the summary
  const [showHistory, setShowHistory] = useState(false); // State for toggling the history visibility

  // Function to add a new entry to the state
  const addEntry = (entry) => {
    setEntries([...entries, entry]); // Append the new entry to the existing entries
  };

  // Toggle visibility of the summary section
  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  // Toggle visibility of the history section
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="App">
      <h1>Budget Management</h1>

      {/* Budget Form Component */}
      <BudgetForm addEntry={addEntry} /> {/* Pass addEntry as a prop to BudgetForm */}

      <section>
        {/* Buttons to toggle Summary and History */}
        <button onClick={toggleSummary}>
          {showSummary ? 'Hide' : 'Show'} Annual Summary
        </button>
        <button onClick={toggleHistory}>
          {showHistory ? 'Hide' : 'Show'} Budget History
        </button>
      </section>

      <section>
        {/* Conditionally render Summary or BudgetLog based on showSummary */}
        {showSummary ? <Summary entries={entries} /> : <BudgetLog entries={entries} />}
      </section>

      {/* Render the History component when showHistory is true */}
      {showHistory && <History entries={entries} />}
    </div>
  );
}

export default App;

