'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <main>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Your Personal Health Stack, Simplified.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover and build your personalized health stack with the power of AI.
          </p>
          <a
            href="#chatbot"
            className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Meet iHealthStack AI
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <div className="flex flex-col h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 space-y-4">
             {messages.map((msg, index) => (
                <div key={index} className={`flex items-start ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'ai' && <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">Concierge</div>}
                  <div className={`bg-gray-100 rounded-lg p-4 ${msg.role === 'user' ? 'bg-blue-100' : ''}`}>
                    <p>{msg.content}</p>
                  </div>
                   {msg.role === 'user' && <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center font-bold ml-4 flex-shrink-0">You</div>}
                </div>
              ))}
               {loading && <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">Concierge</div><div className="bg-gray-100 rounded-lg p-4">...</div></div>}
            </div>
            <div className="mt-8">
              <div className="flex">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Tell me your health goals..."
                  className="flex-grow border border-gray-300 rounded-l-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-r-lg transition duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Stay Connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              {/* SVG Icon for Twitter */}
              <svg className="w-16 h-16 mx-auto mb-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.94 9.94 0 01-3.125 1.192A4.965 4.965 0 0016.63.5a4.963 4.963 0 00-4.96 4.96c0 .357.04.707.118 1.05A14.06 14.06 0 011.62 1.31a4.963 4.963 0 001.524 6.62c-.75-.025-1.45-.23-2.05-.57v.06c0 2.308 1.64 4.232 3.824 4.674a4.966 4.966 0 01-2.223.084 4.963 4.963 0 004.63 3.442A9.96 9.96 0 010 19.53a14.026 14.026 0 007.548 2.21c9.058 0 14.01-7.503 14.01-14.01s-.032-1.28-.094-1.923a10.02 10.02 0 002.488-2.56z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Twitter</h3>
              <p className="text-gray-600">Follow us for the latest updates and news.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
               {/* SVG Icon for Instagram */}
              <svg className="w-16 h-16 mx-auto mb-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919.27-.013.54-.02.81-.02zm0 1.62c-3.12 0-3.48.01-4.69.07-2.61.12-3.86 1.37-3.98 3.98-.06 1.21-.07 1.57-.07 4.69s.01 3.48.07 4.69c.12 2.61 1.37 3.86 3.98 3.98 1.21.06 1.57.07 4.69.07s3.48-.01 4.69-.07c2.61-.12 3.86-1.37 3.98-3.98.06-1.21.07-1.57.07-4.69s-.01-3.48-.07-4.69c-.12-2.61-1.37-3.86-3.98-3.98-1.21-.06-1.57-.07-4.69-.07zm0 6.16c-1.98 0-3.59 1.61-3.59 3.59s1.61 3.59 3.59 3.59 3.59-1.61 3.59-3.59-1.61-3.59-3.59-3.59zm0 5.81c-1.23 0-2.22-.99-2.22-2.22s.99-2.22 2.22-2.22 2.22.99 2.22 2.22-.99 2.22-2.22 2.22zm4.4-5.81c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600">Follow us for daily inspiration and health tips.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
               {/* SVG Icon for Facebook */}
               <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Facebook</h3>
              <p className="text-gray-600">Join our community for discussions and support.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
