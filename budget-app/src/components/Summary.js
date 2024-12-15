import React from 'react';

function Summary({ entries }) {
  const totalSavings = entries.reduce((acc, entry) => acc + parseFloat(entry.savings), 0).toFixed(2);
  
  return (
    <div>
      <h2>Annual Summary</h2>
      <p>Total Savings: KES {totalSavings}</p>
    </div>
  );
}

export default Summary;
