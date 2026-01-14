'use client';

import { useState, useEffect } from 'react';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">User Profile</h1>
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg font-semibold text-gray-700">Name: {user.displayName}</p>
          <p className="text-lg font-semibold text-gray-700">Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Please log in to view your profile.</p>
      )}
    </div>
  );
}
