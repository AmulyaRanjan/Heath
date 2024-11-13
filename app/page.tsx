"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="relative min-h-screen bg-white bg-fixed"
     style={{
          backgroundImage: "url('/bacl-img.jpg')",
        }}>
      <Navbar />

      <div
        className="relative mt-32 bg-opacity-90"
       
      >
        {/* Search Section */}
        <div className="min-h-[300px] flex p-20 justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 px-4 md:px-8 w-full">
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
        <div className="bg-white py-8 px-4 w-full">
          <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
            In-Clinic Consultation
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card for each specialty */}
            {[
              { name: "Dentist", img: "/dentist.jpg", description: "Our dental specialists provide top-notch dental care and treatment for all ages." },
              { name: "Gynecologist", img: "/gyne.jpg", description: "Experienced gynecologists offer consultations and care for women's health needs." },
              { name: "Physician", img: "/physician.jpg", description: "Get expert consultations for general health issues and preventive healthcare." },
              { name: "Orthopedist", img: "/ortho.jpg", description: "Specialized care for bone, joint, and muscular issues from top orthopedists." },
            ].map((specialty, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src={specialty.img}
                  alt={specialty.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{specialty.name}</h2>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-8 px-4 w-full">
          <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
            Frequently Asked Questions
          </h1>
          {[{
            id: 2,
            question: "How do I get my medicines delivered?",
            answer: "After booking your consultation, your prescribed medicines will be delivered to your address through our partnered pharmacy."
          }, {
            id: 3,
            question: "Are there any fees for using the platform to book an appointment?",
            answer: "There are no fees for using our platform to book an appointment. You only pay for the consultation."
          }, {
            id: 4,
            question: "How do I know which doctor is right for me?",
            answer: "You can filter doctors based on specialty, experience, and patient reviews to find the best match for your needs."
          }].map(({ id, question, answer }) => (
            <div key={id} className="p-4 bg-white shadow-md rounded-md mb-4">
              <button
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
                onClick={() => toggleFAQ(id)}
              >
                <span>{question}</span>
                <svg
                  className={`w-6 h-6 transition-transform transform ${openFAQ === id ? 'rotate-180' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === id && (
                <p className="text-gray-600 mt-2">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
