"use client"
import React, { useState } from 'react';

const LandingPage = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const loanCategories = {
    'Wedding Loans': ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    'Home Construction Loans': ['Structure', 'Finishing', 'Loan'],
    'Business Startup Loans': ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
    'Education Loans': ['University Fees', 'Child Fees Loan'],
  };

  const handleCalculate = () => {
    if (category && subcategory && deposit && loanPeriod) {
      const loanAmount = calculateLoanAmount();
      setEstimatedLoan(loanAmount);
    }
  };

  const calculateLoanAmount = () => {
    let maxLoan = 0;
    if (category === 'Wedding Loans') maxLoan = 500000;
    else if (category === 'Home Construction Loans' || category === 'Business Startup Loans') maxLoan = 1000000;
    else if (category === 'Education Loans') maxLoan = 2000000;

    const loanPerYear = maxLoan / loanPeriod;
    return loanPerYear * loanPeriod;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Loan Application Portal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Loan Categories</h2>
          <div className="space-y-4">
            {Object.keys(loanCategories).map((cat) => (
              <div key={cat}>
                <h3 className="font-medium text-xl">{cat}</h3>
                <ul className="list-disc pl-6">
                  {loanCategories[cat].map((sub) => (
                    <li key={sub} className="text-sm">{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
          <form className="space-y-4">
            <div>
              <label className="block">Select Category</label>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Select a category</option>
                {Object.keys(loanCategories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block">Select Subcategory</label>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => setSubcategory(e.target.value)}
                value={subcategory}
                disabled={!category}
              >
                <option value="">Select a subcategory</option>
                {category && loanCategories[category].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block">Initial Deposit (PKR)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                onChange={(e) => setDeposit(e.target.value)}
                value={deposit}
              />
            </div>

            <div>
              <label className="block">Loan Period (Years)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                onChange={(e) => setLoanPeriod(e.target.value)}
                value={loanPeriod}
              />
            </div>

            <button
              type="button"
              onClick={handleCalculate}
              className="w-full p-3 bg-blue-500 text-white rounded"
            >
              Calculate Loan
            </button>
          </form>

          {estimatedLoan !== null && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Estimated Loan Amount: PKR {estimatedLoan}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;