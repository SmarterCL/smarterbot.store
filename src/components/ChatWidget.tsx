'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Paperclip, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente de Smarter. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const CLAW_API_URL = process.env.NEXT_PUBLIC_CLAW_API_URL || 'https://n8n.smarterbot.store';
  const BOT_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || 'SmarterChat_bot';

  useEffect(() => {
    scrollToBottom();
    const session = localStorage.getItem('smarterbot_session');
    if (session) setIsLoggedIn(true);

    (window as any).onTelegramAuth = (user: any) => {
      localStorage.setItem('smarterbot_session', JSON.stringify(user));
      setIsLoggedIn(true);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `¡Bienvenido ${user.first_name}! Ya puedes chatear conmigo.`,
        sender: 'bot',
        timestamp: new Date()
      }]);
    };
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // API call to Claw/n8n
      const response = await fetch(`${CLAW_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputValue,
          userId: localStorage.getItem('smarterbot_session') 
            ? JSON.parse(localStorage.getItem('smarterbot_session')!).id 
            : 'guest'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || 'He recibido tu mensaje. Estoy procesando la información.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('API Error');
      }
    } catch (error) {
      // Fallback response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Lo siento, estoy teniendo problemas para conectar con mi cerebro central. ¿Puedes intentar de nuevo?',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-emerald-500/20 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '600px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={`fixed bottom-24 right-6 z-50 w-full max-w-[400px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 ${isMinimized ? 'h-20' : 'h-[600px]'}`}
          >
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-tight leading-none mb-1">SMARTER ASSISTANT</div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                        msg.sender === 'user' 
                        ? 'bg-black text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl border border-slate-100 rounded-tl-none">
                        <Loader2 size={18} className="animate-spin text-emerald-500" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Footer / Input */}
                <div className="p-4 bg-white border-t border-slate-100">
                  {!isLoggedIn && (
                    <div className="mb-4 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col items-center gap-2">
                      <div className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Inicia sesión para funciones avanzadas</div>
                      <Script
                        src="https://telegram.org/js/telegram-widget.js?22"
                        strategy="afterInteractive"
                        data-telegram-login={BOT_USERNAME}
                        data-size="medium"
                        data-radius="8"
                        data-onauth="onTelegramAuth(user)"
                        data-request-access="write"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <Paperclip size={20} />
                    </button>
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 placeholder:text-slate-400"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
