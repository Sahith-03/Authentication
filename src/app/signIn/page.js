'use client'

import React, { useEffect, useState } from 'react';
import {UserAuth} from '../../context/AuthContext';
import {useRouter} from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['500']
  });

export default function Home() {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signIn, signInWithGoogle } = UserAuth();
  const router = useRouter();


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push('/welcome'); 
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/welcome');  // Redirect to home page or any other page you prefer
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
      <div>
        <div className="flex h-screen">
        <img src="image.png" className="w-1/2" id="bgimage" alt="Background" />
        <div id='container' className={`${poppins.className} border w-1/3 h-1/2 rounded-3xl m-auto relative`}>
          <div id='Heading'>
            <label>Sign In</label>
          </div>
          <div id='Form'>
            <form onSubmit={handleSignIn} className="flex flex-col gap-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-sky-800 w-8/12 m-auto h-10 rounded ps-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-sky-800 w-8/12 m-auto h-10 rounded ps-3"
              />
              <button type="submit" className="bg-sky-500 w-8/12 m-auto h-10 rounded">
                Sign In
              </button>
            </form>
            <button id='GoogleSign' onClick={handleGoogleSignIn}>
                <div>
                  <img src="/google.png" alt="Google" />
                  <span>Sign in with Google</span>
                </div>
              </button>   
          </div>
          <div class='bottomText' >
          <p>
            Don&apos;t have an account? 
          </p>
          <a href="/">
              Sign Up
          </a>
          </div>
        </div>
      </div>
    </div>
    );
}