"use client"

import Navbar from '@/components/Navbar';
import React from 'react';
import { useRouter } from 'next/navigation';

const InClinicConsultation = () => {
  const router = useRouter();

  // Function to handle navigation to DoctorDisplayPage with department as parameter
  const navigateToDoctorDisplay = (department: string) => {
    router.push(`/Appointment/${department}`);
  };

  return (
    <>   
      <Navbar />
      <div className="container min-h-screen mx-auto bg-white py-8 px-4 md:px-8">
        <h1 className="text-2xl text-blue-900 font-semibold text-center mb-6">
          In-Clinic Consultation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dentist Card */}
          <div
            onClick={() => navigateToDoctorDisplay('Dentist')}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
          >
            <img src="/dentist.jpg" alt="Dentist" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Dentist</h2>
            <p className="text-gray-600">
              Our dental specialists provide top-notch dental care and treatment for all ages.
            </p>
          </div>

          {/* Gynecologist Card */}
          <div
            onClick={() => navigateToDoctorDisplay('Gynecologist')}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
          >
            <img src="/gyne.jpg" alt="Gynecologist" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Gynecologist</h2>
            <p className="text-gray-600">
              Experienced gynecologists offer consultations and care for women's health needs.
            </p>
          </div>

          {/* Physician Card */}
          <div
            onClick={() => navigateToDoctorDisplay('Physician')}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
          >
            <img src="/physician.jpg" alt="Physician" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Physician</h2>
            <p className="text-gray-600">
              Get expert consultations for general health issues and preventive healthcare.
            </p>
          </div>

          {/* Orthopedist Card */}
          <div
            onClick={() => navigateToDoctorDisplay('Orthopedist')}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer"
          >
            <img src="/ortho.jpg" alt="Orthopedist" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Orthopedist</h2>
            <p className="text-gray-600">
              Specialized care for bone, joint, and muscular issues from top orthopedists.
            </p>
          </div>

          {/* Add more specialty cards as needed */}
        </div>
      </div>
    </>
  );
};

export default InClinicConsultation;
