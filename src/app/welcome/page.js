'use client'

import { UserAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import DinosaurGame from '../../../public/DinosaurGame'; 
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['500']
  });



const WelcomePage = () => {
  const { user, loading,  signOut } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if(!loading && !user) {
      router.push('/');
    }
  }, [user,loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <button onClick={signOut} className={`${poppins.className} absolute right-8 top-5 border-2 p-2 rounded-md`}>Sign Out</button>
      <h1 className={`${poppins.className} text-7xl text-center mt-20`} >Hello, <span>{ user.displayName || user.email.split('@')[0] }</span> </h1>
      {/* <DinosaurGame /> */}
    </div>
  );
};

export default WelcomePage;
