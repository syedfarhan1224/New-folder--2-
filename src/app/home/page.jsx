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
