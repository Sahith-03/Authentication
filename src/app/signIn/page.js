'use client';

import '../../../styles/global.css';
import React, { useState, useMemo } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['500']
});

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { googleSignIn, signUp } = UserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push('/welcome');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await signUp(email, password);
      router.push('/welcome');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const stars = useMemo(() => {
      return Array.from({ length: 50 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`
      }));
    }, []);
  
    const sparkles = useMemo(() => {
      return Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`
      }));
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center overflow-hidden relative text-white">
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute top-20 right-10 w-60 h-60 bg-pink-600 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600 rounded-full opacity-25 animate-blob"></div>

      {/* Star Particles */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute"
            style={{
              top: star.top,
              left: star.left,
              animation: `pulse 3s infinite ease-in-out ${star.delay}`
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 animate-pulse-slow">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full opacity-50 absolute"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animation: `pulse 4s infinite ease-in-out ${sparkle.delay}`
            }}
          />
        ))}
      </div>

      {/* Sign Up Form */}
      <div className={`${poppins.className} relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md space-y-6`}>
        <h1 className="text-4xl font-bold text-center mb-4 tracking-wide">Create Account</h1>
        
        <form onSubmit={handleSignUp} className="flex flex-col gap-5">
          
          {/* Name */}
<div className="relative">
  <input
    type="text"
    placeholder=" "
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full 
               focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 hover:bg-white/30"
    required
  />
  <label className="absolute left-4 top-4 text-white/50 transition-all duration-300
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50
                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400
                    peer-valid:top-1 peer-valid:text-sm peer-valid:text-pink-400">
    Full Name
  </label>
</div>

{/* Email */}
<div className="relative">
  <input
    type="email"
    placeholder=" "
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full 
               focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 hover:bg-white/30"
    required
  />
  <label className="absolute left-4 top-4 text-white/50 transition-all duration-300
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50
                    peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400
                    peer-valid:top-1 peer-valid:text-sm peer-valid:text-pink-400">
    Email
  </label>
</div>

          {/* Password */}
  <div className="relative">
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder=" "
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full pr-12 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
      required
    />
    <label className="absolute left-4 top-4 text-white/50 transition-all duration-300
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50
                      peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400
                      peer-valid:top-1 peer-valid:text-sm peer-valid:text-indigo-400">
      Password
    </label>
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  </div>

  {/* Confirm Password */}
  <div className="relative">
    <input
      type={showConfirmPassword ? 'text' : 'password'}
      placeholder=" "
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full pr-12 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
      required
    />
    <label className="absolute left-4 top-4 text-white/50 transition-all duration-300
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50
                      peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400
                      peer-valid:top-1 peer-valid:text-sm peer-valid:text-indigo-400">
      Confirm Password
    </label>
    <button
      type="button"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
    >
      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="relative group overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 py-3 rounded-lg 
               font-semibold shadow-lg hover:shadow-indigo-500/50 transition-transform duration-300 hover:scale-105"
  >
    <span className="absolute inset-0 bg-white/10 blur-md group-hover:opacity-30 transition-opacity duration-300"></span>
    Sign Up
  </button>
</form>

        <div className="flex items-center gap-3 justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors py-3 px-6 rounded-lg w-full justify-center border border-white/30 hover:scale-105 transform duration-300"
          >
            <img src="/google.png" alt="Google" className="w-6 h-6" />
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="text-center text-white/60 text-sm mt-4">
        Already have an account?{' '}
        <Link href="/" className="text-purple-400 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
