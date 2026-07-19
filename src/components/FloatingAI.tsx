"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Mic, Volume2 } from "lucide-react";

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am StadiumFanFlow AI, your stadium concierge. Ask me about seating, food queues, transit schedules, or request assistance in any language." }
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting right now. Please try again." }]);
    }
    
    setLoading(false);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice transcription
      setTimeout(() => {
        setInput("Where is the nearest wheelchair ramp?");
        setIsRecording(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 animate-bounce"
        >
          <MessageSquare size={26} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-[360px] h-[500px] glass-panel bg-white/90 dark:bg-black/90 flex flex-col overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="p-4 border-b border-[var(--border)] bg-gradient-to-r from-blue-50/50 to-emerald-50/50 dark:from-blue-950/20 dark:to-emerald-950/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <h3 className="font-bold text-sm leading-tight text-slate-800 dark:text-slate-100">StadiumFanFlow AI</h3>
                <p className="text-[10px] text-slate-500 font-medium">Multilingual Support Active</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                  m.role === "user" 
                    ? "bg-blue-600 text-white rounded-br-sm" 
                    : "bg-slate-100 dark:bg-slate-800 border border-[var(--border)] text-slate-800 dark:text-slate-200 rounded-bl-sm"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-sm px-3.5 py-2 flex items-center gap-1.5 border border-[var(--border)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Voice active animation */}
          {isRecording && (
            <div className="px-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 border-t border-[var(--border)] flex items-center gap-3">
              <Volume2 className="text-blue-500 animate-pulse" size={16} />
              <span className="text-[10px] text-blue-600 dark:text-blue-400 animate-pulse font-medium">Listening to voice...</span>
              <div className="flex items-center gap-1 ml-auto">
                <div className="h-3 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="h-4 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-2 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-[var(--border)] bg-slate-50/50 dark:bg-slate-900/50 flex gap-2 items-center">
            <button 
              onClick={toggleRecording}
              className={`p-2 rounded-full transition-colors ${
                isRecording 
                  ? "bg-red-500 text-white animate-pulse" 
                  : "bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700"
              }`}
            >
              <Mic size={16} />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask StadiumFanFlow AI..." 
              className="flex-1 px-3 py-2 rounded-full border border-[var(--border)] bg-white dark:bg-zinc-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="p-2 bg-blue-600 text-white rounded-full transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send size={14} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
