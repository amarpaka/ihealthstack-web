'use client';

import { useState } from 'react';
import Image from 'next/image';
import { stacks } from '@/data/stacks';
import Link from 'next/link';

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'This is not medical or legal advice. Please speak to your healthcare professional about this. As iHealthStack\'s Concierge, how can I help you discover your optimal health stack today?' },
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!prompt) return;

    const newMessages = [...messages, { role: 'user', content: prompt }];
    setMessages(newMessages);
    setPrompt('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...newMessages, { role: 'ai', content: data.text }]);
      } else {
        console.error('Failed to get response from AI');
         setMessages([...newMessages, { role: 'ai', content: 'Sorry, something went wrong.' }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, { role: 'ai', content: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">

      {/* New Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Unlock Your Body's Potential. Backed by Science.
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-up">
            iHealthStack is your personal health intelligence platform, translating cutting-edge research into actionable, personalized supplement stacks.
          </p>
          <Link href="/stacks" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Explore Stacks
            </a>
          </Link>
        </div>
      </section>

      {/* The iHealthStack Difference Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">The iHealthStack Difference</h2>
            <p className="text-lg text-gray-600 mt-4">We synthesize data, not just sell products.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <Image src="/file.svg" width="64" height="64" alt="Research" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Scientific Research</h3>
              <p className="text-gray-600">We dive deep into PubMed and clinical trials to find evidence-based combinations that deliver real results.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                 <Image src="/globe.svg" width="64" height="64" alt="Social" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Social Intelligence</h3>
              <p className="text-gray-600">We analyze social chatter and community discussions to identify emerging trends and real-world efficacy.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <Image src="/window.svg" width="64" height="64" alt="Ecommerce" className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Unified Ecommerce</h3>
              <p className="text-gray-600">One-click access to curated stacks from trusted vendors, taking the guesswork out of purchasing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Spotlight Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Evidence Spotlight</h2>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">The Power of Magnesium</h3>
              <p className="text-gray-600 mb-4 text-lg">
                A crucial mineral for over 300 enzymatic reactions in the body, Magnesium is a powerhouse for health. Clinical studies have shown its effectiveness in improving sleep quality, reducing anxiety, and supporting muscle function.
              </p>
              <p className="text-gray-600 text-lg">
                Our Deep Sleep & Recovery stack leverages Magnesium Glycinate for its high bioavailability, ensuring maximum absorption and benefit.
              </p>
               <a href="https://pubmed.ncbi.nlm.nih.gov/?term=magnesium+sleep" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-6 inline-block">Explore the Research on PubMed &rarr;</a>
            </div>
            <div className="md:w-1/2">
              <Image src="https://images.unsplash.com/photo-1591131143432-3e0b0433e334?q=80&w=2070&auto=format&fit=crop" width={500} height={400} alt="Magnesium" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Stacks Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Explore Our Health Stacks</h2>
            <p className="text-lg text-gray-600 mt-4">Find the perfect stack to meet your health goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stacks.slice(0, 3).map((stack) => (
              <div key={stack.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                 <Image src={stack.imageUrl} alt={stack.name} width={400} height={200} className="w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{stack.name}</h3>
                  <p className="text-gray-600 mb-4">{stack.description}</p>
                  <Link href={"/stacks/"} legacyBehavior>
                    <a className="text-blue-500 hover:underline font-semibold">View Details &rarr;</a>
                   </Link>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link href="/stacks" legacyBehavior>
                <a className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                View All Stacks
                </a>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
