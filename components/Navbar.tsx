import React, { useState } from 'react';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '@/firebase'; // Import Firebase auth and Firestore instance

const specialties = [
  "Cardiology", "Dermatology", "Neurology", "Gynecology", "Dentist",
  "Pulmonologist", "Gastroenterology", "Hematology", "Orthopedist",
  "General Physician", "Opthamology", "Nephrology",
];

const Navbar = () => {
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const toggleSpecialtyDialog = () => {
    setIsSpecialtyOpen(!isSpecialtyOpen);
  };

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignupForm = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsRegistered(true);
      setIsLoginOpen(false); // Close the login dialog
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // After user is created, save additional data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        phoneNumber,
        address,
      });

      setIsRegistered(true);
      setIsLoginOpen(false); // Close the signup dialog
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsRegistered(false);
    }).catch(error => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div>
      <div className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">Healthcare Service</div>
          <div className="flex items-center space-x-6">
            <div className="cursor-pointer">
              <span className="material-icons">search</span>
            </div>
            <div onClick={toggleSpecialtyDialog} className="hover:text-gray-200 cursor-pointer">Speciality</div>
            <div className="hover:text-gray-200 cursor-pointer">Medicine</div>
            <Link href="/Appointment">
              <div className="hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition duration-200">
                Book an Appointment
              </div>
            </Link>

            {isRegistered ? (
              <div className="flex items-center space-x-4">
                <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                <div onClick={handleLogout} className="cursor-pointer text-white hover:text-gray-200">Logout</div>
              </div>
            ) : (
              <div onClick={toggleLoginDialog} className="hover:bg-white hover:text-blue-600 border border-white text-white px-4 py-2 rounded cursor-pointer transition duration-200">
                Login/Signup
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dialog Box for Specialties */}
      {isSpecialtyOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-6 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-black p-4 rounded-md text-center hover:bg-blue-200 cursor-pointer">
                <h3 className="text-lg font-semibold">{specialty}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dialog Box for Login/Signup */}
      {isLoginOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
    <div className="bg-white w-full max-w-lg p-6 shadow-md rounded-md">
      <div className="max-w-lg mx-auto">
        {isSignup ? (
          <div>
            <h2 className="text-2xl text-black font-semibold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full  p-2 text-black border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-black border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-black border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 text-black border border-gray-300 rounded"
              />
              <textarea
                placeholder="Address (Optional)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button type="submit" className="w-full  bg-blue-600 text-black   py-2 rounded">
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-black text-center">
              Already have an account?{" "}
              <span onClick={toggleSignupForm} className="text-blue-600 cursor-pointer">
                Login here
              </span>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-black text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                Login
              </button>
            </form>
            <p className="mt-4 text-black text-center">
              Don't have an account?{" "}
              <span onClick={toggleSignupForm} className="text-blue-600 cursor-pointer">
                Sign up here
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Navbar;
