"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content: "Greetings. I am the iHealthStack Concierge, a curated intelligence designed to navigate the intricate world of evidence-based supplementation. Let us begin our inquiry. What health objective are you contemplating?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { role: "user", content: input }];
      setMessages(newMessages);
      setInput("");

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: newMessages }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMessages([...newMessages, { role: "assistant", content: data.content }]);

      } catch (error) {
        console.error("Failed to fetch chat response:", error);
        // Optionally, handle the error in the UI
        setMessages([...newMessages, { role: "assistant", content: "My apologies, but I am encountering an anomaly in my communication matrix. Please try again later." }]);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center bg-gray-50 rounded-t-2xl">
        <Image src="/bot-avatar.svg" width={40} height={40} alt="Concierge" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">iHealthStack Concierge</h3>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start my-4 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <Image src="/bot-avatar.svg" width={32} height={32} alt="Concierge" className="mr-3" />
            )}
            <div
              className={`p-3 rounded-2xl max-w-md ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Begin your inquiry..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="ml-3 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleSend}>
            <Image src="/send-icon.svg" width={24} height={24} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
}
