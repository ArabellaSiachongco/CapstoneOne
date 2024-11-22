import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles' 
import { fadeIn, textVariant } from '../../utility/motion'; 
import { SectionWrapper } from '../../wrapper';

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", type: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Append user message
    setMessages([...messages, { text: input, type: "user" }]);

    // Clear input
    setInput("");

    // Mock bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! Let me assist you.", type: "bot" },
      ]);
    }, 1000); // Simulate bot response delay
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Chat Header */}
      <div className="w-full max-w-2xl bg-gray-800 p-4 text-center text-lg font-semibold">
        AI Chat Assistant
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-2xl flex flex-col h-[80vh] bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 p-4 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="border-2 border-orange-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ChatUI);
