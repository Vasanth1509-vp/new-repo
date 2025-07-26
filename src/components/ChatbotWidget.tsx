import React, { useState, useEffect } from 'react';
import '../styles/ChatbotWidget.css';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dev281875.service-now.com/scripts/sn_va_web_client_app.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!iframeLoaded) {
      setIframeLoaded(true);
    }
  };

  return (
    <div className={`chatbot-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="chat-toggle"
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>
      
      {isOpen && iframeLoaded && (
        <div className="chat-container">
          <iframe
            title="ServiceNow Virtual Agent"
            src="https://dev281875.service-now.com/va_web_client_app.do"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget; 