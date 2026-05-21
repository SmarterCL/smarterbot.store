"use client";
import React, { useState } from 'react';
import DemoLandingHero from '@/components/DemoLandingHero';
import ChatWidget from '@/components/ChatWidget';

export default function DemoPage() {
  const [showChat, setShowChat] = useState(false);

  const handleReserveDemo = () => {
    setShowChat(true);
  };

  return (
    <>
      <DemoLandingHero onPrimaryClick={handleReserveDemo} />
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-4 bg-white rounded-3xl shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowChat(false)}
            >
              ✕
            </button>
            <ChatWidget isOpen={true} />
          </div>
        </div>
      )}
    </>
  );
}
