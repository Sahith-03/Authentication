'use client';

import '../../styles/global.css';
import React, { useState, useMemo } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500']
});

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, signIn } = UserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push('/welcome');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push('/welcome');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  // Stable random star and sparkle positions/delays
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

      {/* Login Form */}
      <div className={`${poppins.className} relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md space-y-6`}>
        <h1 className="text-4xl font-bold text-center mb-4 tracking-wide">Welcome Back</h1>
        
        <form onSubmit={handleSignIn} className="flex flex-col gap-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 hover:bg-white/30"
              required
            />
            <label
              className={`absolute left-4 text-white/50 transition-all duration-300
                ${email ? 'top-1 text-sm text-pink-400' : 'top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400'}`}
            >
              Email
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer bg-white/20 placeholder-transparent border border-white/30 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
              required
            />
            <label
              className={`absolute left-4 text-white/50 transition-all duration-300
                ${password ? 'top-1 text-sm text-indigo-400' : 'top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400'}`}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-white/50 hover:text-white"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative group overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 py-3 rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/10 blur-md group-hover:opacity-30 transition-opacity duration-300"></span>
            Sign In
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="flex items-center gap-3 justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors py-3 px-6 rounded-lg w-full justify-center border border-white/30 hover:scale-105 transform duration-300"
          >
            <img src="/google.png" alt="Google" className="w-6 h-6" />
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-white/60 text-sm mt-4">
          New here?{' '}
          <Link href="/signIn" className="text-purple-400 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
