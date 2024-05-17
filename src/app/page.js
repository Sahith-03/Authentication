'use client';

import '../../public/sign-up.css';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['500']
  });

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { googleSignIn, signUp } = UserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push('/welcome');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push('/welcome');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };


  return (
    <div>
      <div className="flex h-screen">
        <img src="image.png" className="w-1/2" id="bgimage" alt="Background" />
        {/* <Image /> */}
        <div id='container' className={`${poppins.className} border w-1/3 h-1/2 rounded-3xl m-auto relative`}>
          <div id='Heading'>
            <label>Sign Up</label>
          </div>
          <div id='Form'>
            <form onSubmit={handleSignUp}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">
                Sign Up
              </button>
            </form>
              <button id='GoogleSign' onClick={handleGoogleSignIn}>
                <div>
                  <img src="/google.png" alt="Google" />
                  <span>Sign up with Google</span>
                </div>
              </button>
          </div>
          <div class='bottomText' >
          <p>
            Already a user? 
          </p>
          <a href="/signIn">
              Sign In
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
