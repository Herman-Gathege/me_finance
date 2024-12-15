// // src/components/History.js
// import React from 'react';

// function History({ entries }) {
//   return (
//     <div>
//       <h2>Budget History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Salary</th>
//             <th>Personal Needs</th>
//             <th>Savings</th>
//             <th>Debt Repayment</th>
//             <th>Investments</th>
//             <th>Risky Investments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.date}</td>
//               <td>{entry.salary}</td>
//               <td>{entry.personalNeeds}</td>
//               <td>{entry.savings}</td>
//               <td>{entry.debtRepayment}</td>
//               <td>{entry.investments}</td>
//               <td>{entry.riskyInvestments}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default History;

// src/components/History.js
import React from 'react';

function History({ entries }) {
  return (
    <div>
      <h2>Budget History</h2>
      <table className="budget-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Salary</th>
            <th>Personal Needs</th>
            <th>Savings</th>
            <th>Debt Repayment</th>
            <th>Investments</th>
            <th>Risky Investments</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.salary}</td>
              <td>{entry.personalNeeds}</td>
              <td>{entry.savings}</td>
              <td>{entry.debtRepayment}</td>
              <td>{entry.investments}</td>
              <td>{entry.riskyInvestments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
