"use client";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const googleSignIn = document.getElementById("googleSignIn");
    if (googleSignIn) {
      googleSignIn.addEventListener("click", () => {
        alert("Google Sign-In clicked! Implement authentication here.");
      });
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 via-purple-900 via-blue-900 to-slate-950 relative">
      <div className="absolute left-10 top-1/3">
        <img src="wicys8.png" alt="WiCyS Shield" className="w-96" />
        <h1 className="text-white font-bold text-4xl mt-4">WOMEN IN CYBERSECURITY</h1>
      </div>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 text-center relative z-10">
        <img src="wicyslogo.png" alt="WiCyS Logo" className="w-40 mx-auto mb-4" />
        <input type="text" placeholder="Username" className="w-full p-3 mb-3 bg-white bg-opacity-20 rounded text-white placeholder-gray-300 focus:outline-none" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-3 bg-white bg-opacity-20 rounded text-white placeholder-gray-300 focus:outline-none" />
        <button className="w-full bg-pink-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition">Login</button>
        <button id="googleSignIn" className="w-full bg-pink-500 text-white p-3 rounded-lg text-lg font-semibold mt-3 hover:bg-pink-600 transition">Sign in with Google</button>
        <a href="#" className="block mt-3 text-white text-sm hover:underline">Forgot Password?</a>
      </div>
      <div className="absolute right-0 bottom-0">
        <img src="woman.webp" alt="Girl" className="w-96" />
      </div>
    </div>
  );
};

export default Login;