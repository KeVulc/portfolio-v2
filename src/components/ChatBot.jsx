import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What's Kevin's strongest tech skill?",
    "Give me the TLDR on Kevin's thesis.",
    "What does Kevin think about free will?",
    "tell me about kevin vulcano's promotion.",
  ];

  // Revised useEffect for initial message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "Hi! I'm Kevin's AI assistant. Ask me anything about his skills, experience, or projects!",
          isBot: true,
          displayedText: "",
        },
      ]);
    }
  }, [isOpen]);

  // Typing animation effect
  useEffect(() => {
    if (!messages.length) return;

    const lastMessage = messages[messages.length - 1];

    if (
      lastMessage?.isBot &&
      lastMessage.displayedText.length < lastMessage.text.length
    ) {
      const timer = setInterval(() => {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];

          if (lastMsg.displayedText.length < lastMsg.text.length) {
            lastMsg.displayedText = lastMsg.text.slice(
              0,
              lastMsg.displayedText.length + 1
            );
          }

          return newMessages;
        });
      }, 10);

      return () => clearInterval(timer);
    }
  }, [messages]);

  // Scroll to bottom effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    // Define newMessages by including the user's input
    const newMessages = [
      ...messages, // Use the existing state
      {
        text: inputMessage,
        isBot: false,
        displayedText: inputMessage, // Instant display for user
      },
    ];

    // Add user message
    setMessages(newMessages);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Get bot response
      const response = await fetchRagResponse(prepMessages(newMessages));

      // Add bot message with empty displayedText for animation
      setMessages((prev) => [
        ...prev,
        {
          text: response.answer,
          isBot: true,
          displayedText: "",
          error: false,
        },
      ]);
    } catch (error) {
      // Add error message with animation
      setMessages((prev) => [
        ...prev,
        {
          text: "Hmm, I'm having trouble connecting. Please try again later.",
          isBot: true,
          displayedText: "",
          error: true,
        },
      ]);
    }

    setIsTyping(false);
  };

  const prepMessages = (messages) => {
    return messages.map((msg) => ({
      content: msg.text,
      role: msg.isBot ? "assistant" : "user",
    }));
  };

  const fetchRagResponse = async (messages) => {
    try {
      const response = await fetch(
        "https://kv-rag-backend.onrender.com/PortfolioAPI/rag/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: messages,
          }),
        }
      );

      if (!response.ok) throw new Error("API error");
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  // Message display component
  const MessageBubble = ({ msg }) => (
    <div
      className={`max-w-[90%] p-3 rounded-lg relative cursor-pointer ${
        msg.isBot
          ? "bg-gradient-to-l hover:from-gray-700 to-transparent text-white"
          : "bg-gradient-to-r hover:from-gray-700 to-transparent text-white"
      }`}
      onClick={() => {
        navigator.clipboard.writeText(msg.isBot ? msg.displayedText : msg.text);
        toast.success("Copied to clipboard!");
      }}
    >
      {msg.isBot ? (
        <>
          <ReactMarkdown>{msg.displayedText}</ReactMarkdown>
        </>
      ) : (
        msg.text
      )}
    </div>
  );

  return (
    <div className='fixed bottom-8 right-8 z-50'>
      {/* Chat container and toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className='cursor-pointer bg-gradient-to-br from-sky-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group absolute bottom-0 right-0 hover:animate-bounce hover:scale-110'
          >
            <FaRobot className='text-2xl group-hover:scale-110' />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className='w-80 sm:w-128 h-[80vh] bg-gray-800 rounded-xl shadow-xl flex flex-col border border-gray-700 absolute bottom-12 -right-4 md:right-12'
        >
          {/* Header */}
          <div className='bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-t-xl flex justify-between items-center'>
            <div className='flex items-center space-x-3 bg-gradient-to-br from-sky-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group'>
              <FaRobot className='text-2xl group-hover:animate-bounce group-hover:scale-110 transition-transform' />
              <h3 className='text-gray-100 font-semibold'>
                Kevin's AI Assistant
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-300 hover:text-gray-100 transition-colors cursor-pointer'
            >
              <FaTimes className='h-8 w-8 inset-0' />
            </button>
          </div>

          {/* Messages container */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4 relative scrollbar-hide'>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <MessageBubble msg={msg} />
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='flex justify-start'
              >
                <div className='max-w-[85%] p-3 rounded-lg bg-transparent text-gray-100 flex space-x-2 items-center'>
                  <div className='flex space-x-1'>
                    <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce' />
                    <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100' />
                    <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200' />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className='p-4 border-t border-gray-700 space-y-3'>
            <div className='grid grid-cols-2 gap-2'>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInputMessage(q)}
                  className='text-xs text-left p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-gray-300 hover:text-white cursor-pointer'
                >
                  {q}
                </button>
              ))}
            </div>

            <div className='flex space-x-2'>
              <input
                type='text'
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder='Ask me anything...'
                className='flex-1 bg-gray-900 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm'
              />
              <button
                onClick={handleSend}
                className='bg-gradient-to-br from-sky-400 to-purple-500 text-white p-3 rounded-lg hover:opacity-90 transition-opacity group cursor-pointer'
              >
                <FaPaperPlane className='text-lg group-hover:animate-bounce group-hover:scale-110 transition-transform' />
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <Toaster position='bottom-right'>
        {(t) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='relative flex items-center justify-center text-center px-4 py-2 rounded-lg shadow-lg border border-blue-500 bg-gray-800 cursor-pointer'
            onClick={() => toast.remove()}
          >
            <div className='flex items-center w-full justify-center'>
              <svg
                className='h-4 absolute text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500'>
                {t.message}
              </span>
            </div>
          </motion.div>
        )}
      </Toaster>
    </div>
  );
};

export default ChatBot;
