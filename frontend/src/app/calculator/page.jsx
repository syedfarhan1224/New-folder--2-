"use client";
import { useState } from "react";

const LoanCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [calculatedLoan, setCalculatedLoan] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const loanCategories = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000, // PKR 5 Lakh
      loanPeriod: 36, // 3 years
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 60, // 5 years
    },
    "Business Startup Loans": {
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000, // PKR 10 Lakh
      loanPeriod: 60, // 5 years
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: 48, // 4 years
    },
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
    setCalculatedLoan(null);
    setErrorMessage("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
    setCalculatedLoan(null);
    setErrorMessage("");
  };

  const handleDepositChange = (e) => {
    setInitialDeposit(e.target.value);
  };

  const handleLoanPeriodChange = (e) => {
    setLoanPeriod(e.target.value);
  };

  const calculateLoan = () => {
    if (!selectedCategory || !selectedSubcategory || initialDeposit === "" || loanPeriod === "") {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const category = loanCategories[selectedCategory];
    const maxLoan = category.maxLoan;
    const deposit = parseFloat(initialDeposit);
    const period = parseInt(loanPeriod, 10);

    if (isNaN(deposit) || isNaN(period)) {
      setErrorMessage("Please enter valid numbers for deposit and loan period.");
      return;
    }

    if (deposit > maxLoan) {
      setErrorMessage(`Initial deposit cannot exceed the maximum loan amount of PKR ${maxLoan}.`);
      return;
    }

    const loanAmount = maxLoan - deposit;
    const monthlyPayment = loanAmount / period;

    setCalculatedLoan({
      loanAmount,
      monthlyPayment,
      totalPayment: loanAmount + monthlyPayment * period,
    });
    setErrorMessage("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Loan Calculator</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
              Loan Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {Object.keys(loanCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="subcategory">
                Purpose (Subcategory)
              </label>
              <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a subcategory</option>
                {loanCategories[selectedCategory].subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="deposit">
              Initial Deposit (PKR)
            </label>
            <input
              type="number"
              id="deposit"
              value={initialDeposit}
              onChange={handleDepositChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your initial deposit"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="loanPeriod">
              Loan Period (Months)
            </label>
            <input
              type="number"
              id="loanPeriod"
              value={loanPeriod}
              onChange={handleLoanPeriodChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan period in months"
              required
            />
          </div>

          <button
            type="button"
            onClick={calculateLoan}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Calculate Loan
          </button>

          {errorMessage && (
            <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
          )}

          {calculatedLoan && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Loan Breakdown</h3>
              <p>Loan Amount: PKR {calculatedLoan.loanAmount}</p>
              <p>Monthly Payment: PKR {calculatedLoan.monthlyPayment.toFixed(2)}</p>
              <p>Total Payment (including interest): PKR {calculatedLoan.totalPayment.toFixed(2)}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoanCalculator;
