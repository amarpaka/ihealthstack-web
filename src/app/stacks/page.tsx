'use client';

import Image from 'next/image';
import { stacks } from '@/data/stacks';
import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, arrayUnion, getDoc } from 'firebase/firestore';

export default function Stacks() {
  const [user, setUser] = useState<any>(null);
  const [savedStacks, setSavedStacks] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            setSavedStacks(docSnap.data().savedStacks || []);
          }
        });
      } else {
        setSavedStacks([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSaveStack = async (stackId: string) => {
    if (!user) {
      alert('Please log in to save stacks.');
      return;
    }
    const userDocRef = doc(db, 'users', user.uid);
    try {
      await setDoc(userDocRef, {
        savedStacks: arrayUnion(stackId)
      }, { merge: true });
      setSavedStacks([...savedStacks, stackId]);
      alert('Stack saved successfully!');
    } catch (error) {
      console.error('Error saving stack: ', error);
      alert('Failed to save stack.');
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            Curated Health Stacks
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Discover personalized health stacks to optimize your well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack) => (
            <div key={stack.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image src={stack.imageUrl} alt={stack.name} width={400} height={224} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{stack.name}</h2>
                <p className="text-gray-600 mb-4">{stack.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Components:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {stack.components.map((component, index) => (
                      <li key={index}>{component.name} - {component.dosage}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                    <a href={stack.purchaseUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                      Buy Now
                    </a>
                    {user && (
                        <button
                          onClick={() => handleSaveStack(stack.id.toString())}
                          disabled={savedStacks.includes(stack.id.toString())}
                          className={`inline-block font-bold py-2 px-4 rounded-full transition duration-300 ${
                            savedStacks.includes(stack.id.toString())
                              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}>
                          {savedStacks.includes(stack.id.toString()) ? 'Saved' : 'Save Stack'}
                        </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
