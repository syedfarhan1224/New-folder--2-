"use client";
import { useState } from "react";

// Dummy data for applications (replace with real API data)
const applicationsData = [
  {
    id: 1,
    name: "John Doe",
    category: "Wedding Loans",
    subcategory: "Valima",
    amount: 200000,
    status: "Pending",
    email: "johndoe@example.com",
    cnic: "12345-6789012-3",
  },
  {
    id: 2,
    name: "Jane Smith",
    category: "Business Startup Loans",
    subcategory: "Shop Assets",
    amount: 500000,
    status: "Approved",
    email: "janesmith@example.com",
    cnic: "23456-7890123-4",
  },
];

const AdminDashboard = () => {
  const [applications, setApplications] = useState(applicationsData);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleAppointmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleAppointmentTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleAppointmentSchedule = () => {
    if (selectedApplication && appointmentDate && appointmentTime) {
      // You would typically send this data to the backend
      alert(`Appointment scheduled for ${selectedApplication.name} on ${appointmentDate} at ${appointmentTime}`);
      setSelectedApplication(null);
      setAppointmentDate("");
      setAppointmentTime("");
    } else {
      alert("Please select an application and fill in the appointment details.");
    }
  };

  const handleApplicationSelect = (application) => {
    setSelectedApplication(application);
  };

  const filteredApplications = applications.filter((application) => {
    const categoryMatch = filterCategory ? application.category === filterCategory : true;
    const statusMatch = filterStatus ? application.status === filterStatus : true;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        {/* Filters */}
        <div className="flex justify-between mb-6">
          <div className="flex space-x-4">
            <select
              value={filterCategory}
              onChange={handleCategoryFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Filter by Category</option>
              <option value="Wedding Loans">Wedding Loans</option>
              <option value="Home Construction Loans">Home Construction Loans</option>
              <option value="Business Startup Loans">Business Startup Loans</option>
              <option value="Education Loans">Education Loans</option>
            </select>
            <select
              value={filterStatus}
              onChange={handleStatusFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Filter by Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Applications Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Amount</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{application.name}</td>
                <td className="px-4 py-2 border-b">{application.category}</td>
                <td className="px-4 py-2 border-b">{application.amount}</td>
                <td className="px-4 py-2 border-b">{application.status}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleApplicationSelect(application)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Appointment Section */}
        {selectedApplication && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Schedule Appointment</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Application Name: {selectedApplication.name}</label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Appointment Date</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={handleAppointmentDateChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Appointment Time</label>
              <input
                type="time"
                value={appointmentTime}
                onChange={handleAppointmentTimeChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button
              onClick={handleAppointmentSchedule}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Schedule Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
