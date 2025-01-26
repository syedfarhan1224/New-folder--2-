// "use client"
// import React, { useState } from 'react';

// const LandingPage = () => {
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [deposit, setDeposit] = useState('');
//   const [loanPeriod, setLoanPeriod] = useState('');
//   const [estimatedLoan, setEstimatedLoan] = useState(null);

//   const loanCategories = {
//     'Wedding Loans': ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
//     'Home Construction Loans': ['Structure', 'Finishing', 'Loan'],
//     'Business Startup Loans': ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
//     'Education Loans': ['University Fees', 'Child Fees Loan'],
//   };

//   const handleCalculate = () => {
//     if (category && subcategory && deposit && loanPeriod) {
//       const loanAmount = calculateLoanAmount();
//       setEstimatedLoan(loanAmount);
//     }
//   };

//   const calculateLoanAmount = () => {
//     let maxLoan = 0;
//     if (category === 'Wedding Loans') maxLoan = 500000;
//     else if (category === 'Home Construction Loans' || category === 'Business Startup Loans') maxLoan = 1000000;
//     else if (category === 'Education Loans') maxLoan = 2000000;

//     const loanPerYear = maxLoan / loanPeriod;
//     return loanPerYear * loanPeriod;
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8">Loan Application Portal</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Loan Categories</h2>
//           <div className="space-y-4">
//             {Object.keys(loanCategories).map((cat) => (
//               <div key={cat}>
//                 <h3 className="font-medium text-xl">{cat}</h3>
//                 <ul className="list-disc pl-6">
//                   {loanCategories[cat].map((sub) => (
//                     <li key={sub} className="text-sm">{sub}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block">Select Category</label>
//               <select
//                 className="w-full p-2 border rounded"
//                 onChange={(e) => setCategory(e.target.value)}
//                 value={category}
//               >
//                 <option value="">Select a category</option>
//                 {Object.keys(loanCategories).map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block">Select Subcategory</label>
//               <select
//                 className="w-full p-2 border rounded"
//                 onChange={(e) => setSubcategory(e.target.value)}
//                 value={subcategory}
//                 disabled={!category}
//               >
//                 <option value="">Select a subcategory</option>
//                 {category && loanCategories[category].map((sub) => (
//                   <option key={sub} value={sub}>
//                     {sub}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block">Initial Deposit (PKR)</label>
//               <input
//                 type="number"
//                 className="w-full p-2 border rounded"
//                 onChange={(e) => setDeposit(e.target.value)}
//                 value={deposit}
//               />
//             </div>

//             <div>
//               <label className="block">Loan Period (Years)</label>
//               <input
//                 type="number"
//                 className="w-full p-2 border rounded"
//                 onChange={(e) => setLoanPeriod(e.target.value)}
//                 value={loanPeriod}
//               />
//             </div>

//             <button
//               type="button"
//               onClick={handleCalculate}
//               className="w-full p-3 bg-blue-500 text-white rounded"
//             >
//               Calculate Loan
//             </button>
//           </form>

//           {estimatedLoan !== null && (
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold">Estimated Loan Amount: PKR {estimatedLoan}</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section 1 */}
      <section className="bg-blue-600 text-white py-16 px-6"
  style={{
      backgroundImage: "url('https://www.thenews.com.pk/assets/uploads/akhbar/2024-04-16/1178716_9712355_BeFunky-collage_akhbar.jpg')",
    }}
    >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-500">Welcome to Our Platform</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-500">
            {/* Discover a world of possibilities with our loans tailored to your needs. */}
          </p>
          <Link
            href="/login"
            className="bg-blue-500  font-semibold py-3 px-6 rounded-md hover:bg-gray-200 hover:text-white-600 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide personalized loan solutions with flexible terms, low interest rates, and an easy application process. Your dreams are just a step away.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Easy online application</li>
              <li>Quick approval process</li>
              <li>No hidden fees</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Financial Growth"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Achieve Your Financial Goals
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you want to start a business, buy a home, or manage your expenses, we have the right loan options for you.
            </p>
            <Link
              href="/services"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section 4 */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See why people trust us for their financial needs. Your satisfaction is our priority.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-gray-800">"Amazing service!"</p>
              <p className="text-gray-600">- Sarah, Business Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-gray-800">"Highly recommend!"</p>
              <p className="text-gray-600">- Ahmed, Freelancer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-gray-800">"Great experience!"</p>
              <p className="text-gray-600">- Fatima, Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to empowering individuals and businesses by providing tailored financial solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Finance Street, Karachi, Pakistan</p>
            <p className="text-gray-400">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +92 300 1234567</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
