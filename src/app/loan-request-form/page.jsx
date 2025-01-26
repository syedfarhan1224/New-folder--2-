"use client";
import { useState } from "react";

const LoanRequestForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const loanCategories = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: "PKR 5 Lakh",
      loanPeriod: "3 years",
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    "Business Startup Loans": {
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: "4 years",
    },
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-2 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Loan Request Form</h1>
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

          {selectedCategory && (
            <div className="mb-4">
              <p className="text-gray-700 font-medium">
                Maximum Loan: <span className="font-bold">{loanCategories[selectedCategory].maxLoan}</span>
              </p>
              <p className="text-gray-700 font-medium">
                Loan Period: <span className="font-bold">{loanCategories[selectedCategory].loanPeriod}</span>
              </p>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="amount">
              Requested Loan Amount (PKR)
            </label>
            <input
              type="number"
              id="amount"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="cnic">
              CNIC Number
            </label>
            <input
              type="text"
              id="cnic"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your CNIC number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequestForm;
