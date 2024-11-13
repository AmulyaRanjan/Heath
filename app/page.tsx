"use client"

import React, { useState } from "react";
import Navbar from "../components/Navbar";



export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id: number | React.SetStateAction<null>) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/bacl-img.jpg')",
      }}
    >
      <Navbar />

      <div className="relative z-10 mt-32 bg-opacity-90">
        {/* Search Section */}
        <div className="min-h-[300px] flex justify-center items-center">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 px-4 md:px-8">
            <input
              type="text"
              placeholder="Search for Doctors, Hospitals..."
              className="w-full text-black md:w-2/3 px-4 py-2 rounded-md outline-none shadow-md bg-white"
            />
            <select
              className="w-full text-black md:w-1/3 px-4 py-2 rounded-md outline-none shadow-md bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* In-Clinic Consultation Section */}
        <div className="container mx-auto bg-white py-8 px-4 md:px-8">
          <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
            In-Clinic Consultation
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card for each specialty */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/dentist.jpg"
                alt="Dentist"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Dentist</h2>
              <p className="text-gray-600">
                Our dental specialists provide top-notch dental care and treatment
                for all ages.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/gyne.jpg"
                alt="Gynecologist"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Gynecologist
              </h2>
              <p className="text-gray-600">
                Experienced gynecologists offer consultations and care for women's
                health needs.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/physician.jpg"
                alt="Physician"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Physician
              </h2>
              <p className="text-gray-600">
                Get expert consultations for general health issues and preventive
                healthcare.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/ortho.jpg"
                alt="Orthopedist"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Orthopedist
              </h2>
              <p className="text-gray-600">
                Specialized care for bone, joint, and muscular issues from top
                orthopedists.
              </p>
            </div>
            {/* Add more specialty cards as needed */}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto py-8 px-4 md:px-8 bg-white">
          <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
            Frequently Asked Questions
          </h1>

          {/* FAQ Item 2 */}
          <div className="p-4 bg-white shadow-md rounded-md mb-4">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              onClick={() => toggleFAQ(2)}
            >
              <span>How do I get my medicines delivered?</span>
              <svg
                className={`w-6 h-6 transition-transform transform ${openFAQ === 2 ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 2 && (
              <p className="text-gray-600 mt-2">
                After booking your consultation, your prescribed medicines will be delivered to your address through our partnered pharmacy.
              </p>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="p-4 bg-white shadow-md rounded-md mb-4">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              onClick={() => toggleFAQ(3)}
            >
              <span>Are there any fees for using the platform to book an appointment?</span>
              <svg
                className={`w-6 h-6 transition-transform transform ${openFAQ === 3 ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 3 && (
              <p className="text-gray-600 mt-2">
                There are no fees for using our platform to book an appointment. You only pay for the consultation.
              </p>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="p-4 bg-white shadow-md rounded-md mb-4">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              onClick={() => toggleFAQ(4)}
            >
              <span>How do I know which doctor is right for me?</span>
              <svg
                className={`w-6 h-6 transition-transform transform ${openFAQ === 4 ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 4 && (
              <p className="text-gray-600 mt-2">
                You can filter doctors based on specialty, experience, and patient reviews to find the best match for your needs.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
