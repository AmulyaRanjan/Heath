"use client"

import React, { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

const DoctorDisplayPage = () => {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();
  const { id: department } = router.query; // Get department from URL as 'id'

  useEffect(() => {
    if (!department) return;

    const fetchDoctors = async () => {
      try {
        const doctorsRef = collection(db, 'doctors');
        const q = query(doctorsRef, where("department", "==", department));
        const querySnapshot = await getDocs(q);
        const doctorsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctors();
  }, [department]);

  return (
    <>
      <Navbar />
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Doctors in {department}</h1>
        <div>
          {doctors.map(doctor => (
            <div key={doctor.id} className="flex flex-row justify-between p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
              <div className="flex items-center gap-6">
                <img
                  src={doctor.photoURL}
                  alt={`${doctor.name}'s photo`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.degree}</p>
                  <p className="text-gray-500">Experience: {doctor.experience} years</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-32">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 mb-2">
                  Fees
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorDisplayPage;
