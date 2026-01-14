'use client';

import { useState } from 'react';
import Link from 'next/link';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    setUser(user as any);
  });

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          iHealthStack
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">Home</Link>
          <Link href="/stacks" className="text-gray-600 hover:text-blue-500 transition duration-300">Stacks</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</Link>
          {user && (
            <Link href="/profile" className="text-gray-600 hover:text-blue-500 transition duration-300">Profile</Link>
          )}
        </nav>
        <div>
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Log Out
            </button>
          ) : (
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
