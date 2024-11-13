"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function AddDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    fees: "",
    location: "",
    department: "",
    degree: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "doctors"), formData);
      alert("Doctor added successfully!");
      setFormData({
        name: "",
        experience: "",
        fees: "",
        location: "",
        department: "",
        degree: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding doctor: ", error);
      alert("Failed to add doctor.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter doctor's name"
          />
        </div>

        {/* Experience Input */}
        <div className="space-y-2">
          <label htmlFor="experience" className="text-lg font-semibold text-gray-700">
            Experience (in years)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter years of experience"
          />
        </div>

        {/* Fees Input */}
        <div className="space-y-2">
          <label htmlFor="fees" className="text-lg font-semibold text-gray-700">
            Fees
          </label>
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter consultation fees"
          />
        </div>

        {/* Location Input */}
        <div className="space-y-2">
          <label htmlFor="location" className="text-lg font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter location"
          />
        </div>

        {/* Department Input */}
        <div className="space-y-2">
          <label htmlFor="department" className="text-lg font-semibold text-gray-700">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter department"
          />
        </div>

        {/* Degree Input */}
        <div className="space-y-2">
          <label htmlFor="degree" className="text-lg font-semibold text-gray-700">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Enter medical degree"
          />
        </div>

        {/* Image Input */}
        <div className="space-y-2">
          <label htmlFor="image" className="text-lg font-semibold text-gray-700">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
