'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Search, MoreVertical, Mic, Smile, Send } from 'lucide-react';
import clsx from 'clsx';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Gm Gm, Satoshi. I have been following your teachings and it's been really helpful to me. I do have a thing to suggest regarding one of your programs",
      sender: 'user',
      timestamp: '12:43 AM',
    },
    {
      id: '2',
      text: "Oh that's awesome. I'm glad my resources have been helpful and I'm open to helpful suggestions.",
      sender: 'bot',
      timestamp: '12:45 AM',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Autoscroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');

    // Simulate bot response (would be replaced with actual API call)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I've received your message and will get back to you soon.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Blurred dark overlay with 0.5 opacity */}
      <div className="fixed inset-0 bg-[#101110]   bg-opacity-50 backdrop-blur-md z-40"></div>

      {/* Modal container with new dimensions */}
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div className="bg-[#101110] h-[85%] w-[700px] border border-gray-800 flex flex-col rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center">
              <button onClick={onClose} className="mr-3 gap-2 flex items-center text-gray-400 hover:text-gray-300">
                <ArrowLeft size={20} /> Back
              </button>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
                <span className="font-medium text-white">Skillnet Chatbot</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-300">
                <Search size={20} />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#101110]">
            <div className="space-y-4 flex flex-col justify-end min-h-full">
              <div className="mt-auto"></div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(
                    "max-w-[90%] rounded-lg",
                    message.sender === 'user'
                      ? "bg-[#202120] ml-auto p-4"
                      : "bg-[#161716] mr-auto p-4"
                  )}
                >
                  <div className="text-gray-200">{message.text}</div>
                  <div className="text-xs text-gray-500 mt-1 text-right flex items-center justify-end">
                    {message.timestamp}
                    {message.sender === 'user' && (
                      <>  <svg className="ml-1 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="p-4 bg-[#101110]">
            <div className="flex items-center rounded-[8px] bg-[#40403E] px-4 py-2 border border-gray-500">
              <button className="text-gray-400 mr-2">
                <Mic size={20} />
              </button>
              <button className="text-gray-400 ml-2 mr-4">
                <Smile size={20} />
              </button>
              <input
                type="text"
                placeholder="Type a message"
                className="bg-transparent text-white flex-1 outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />

              <button
                onClick={handleSendMessage}
                className="bg-[#A8C789] hover:bg-[#6d9b35] w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Send size={16} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotModal;