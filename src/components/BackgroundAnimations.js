import React from 'react';

export default function BackgroundAnimations() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute top-20 right-10 w-60 h-60 bg-pink-600 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600 rounded-full opacity-25 animate-blob"></div>

      {/* Star Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 3s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 animate-pulse-slow">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full opacity-50 absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 4s infinite ease-in-out ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
