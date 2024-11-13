"use client"


import React from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

const InClinicConsultation = () => {
  const router = useRouter();

  // Function to handle navigation to DoctorDisplayPage with department as parameter
  const navigateToDoctorDisplay = (department: string) => {
    router.push(`/Related_Doctor/${department}`); // Ensure this matches your dynamic route
  };

  return (
    <>   
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-white w-full py-8 px-4">
        <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
          In-Clinic Consultation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {/* Each department card */}
          <div onClick={() => navigateToDoctorDisplay('Gynecologist')} className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer">
            <img src="/dentist.jpg" alt="Dentist" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Gynecologist</h2>
            <p className="text-gray-600">
              Our gynecologists provide top-notch care for women's health.
            </p>
          </div>
          {/* Add other department cards similarly */}
        </div>
      </div>
    </>
  );
};

export default InClinicConsultation;
