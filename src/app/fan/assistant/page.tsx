"use client";

import { useState } from "react";
import { Send, Bot, Mic, Globe, Volume2 } from "lucide-react";

const LANGUAGES = ["English", "Español", "Português", "Français", "العربية", "中文", "日本語"];

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm StadiumFanFlow AI, your smart stadium concierge. Ask me about seating, food queues, transit schedules, or request assistance in any language. 🌍" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const sendMessage = async () => {
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
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." }]);
    }
    
    setLoading(false);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setInput("Where can I find halal food near my seat?");
        setIsRecording(false);
      }, 2500);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)] bg-gradient-to-r from-blue-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:to-emerald-950/20 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-md">
            <Bot size={20} />
          </div>
          <div>
            <h2 className="font-bold text-base leading-tight">StadiumFanFlow AI</h2>
            <p className="text-[10px] text-emerald-500 font-bold">● Live • Multilingual</p>
          </div>
        </div>
        
        {/* Language Picker */}
        <div className="relative">
          <button 
            onClick={() => setShowLangPicker(!showLangPicker)}
            className="btn bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs py-1.5 px-3 gap-1.5"
          >
            <Globe size={14} /> {selectedLang}
          </button>
          {showLangPicker && (
            <div className="absolute right-0 mt-2 w-36 glass-panel bg-white dark:bg-zinc-900 p-2 space-y-1 z-50 animate-fade-in">
              {LANGUAGES.map((lang) => (
                <button 
                  key={lang}
                  onClick={() => { setSelectedLang(lang); setShowLangPicker(false); }}
                  className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedLang === lang 
                      ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300" 
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              m.role === "user" 
                ? "bg-blue-600 text-white rounded-br-sm" 
                : "bg-white/70 dark:bg-zinc-800/70 border border-[var(--border)] rounded-bl-sm shadow-sm"
            }`}>
              <p className="text-sm leading-relaxed">{m.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/70 dark:bg-zinc-800/70 border border-[var(--border)] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Voice Recording Indicator */}
      {isRecording && (
        <div className="px-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 border-t border-[var(--border)] flex items-center gap-3">
          <Volume2 className="text-blue-500 animate-pulse" size={16} />
          <span className="text-[10px] text-blue-600 dark:text-blue-400 animate-pulse font-medium">Listening to voice...</span>
          <div className="flex items-center gap-1 ml-auto">
            <div className="h-3 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="h-4 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.15s" }}></div>
            <div className="h-2 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.3s" }}></div>
            <div className="h-5 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.45s" }}></div>
            <div className="h-3 w-0.5 bg-blue-500 animate-bounce" style={{ animationDelay: "0.6s" }}></div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white/50 dark:bg-zinc-900/50 border-t border-[var(--border)]">
        <div className="relative flex items-center gap-2">
          <button 
            onClick={toggleRecording}
            className={`p-2.5 rounded-full transition-colors flex-shrink-0 ${
              isRecording 
                ? "bg-red-500 text-white animate-pulse" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
          >
            <Mic size={18} />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder={`Ask StadiumFanFlow AI in ${selectedLang}...`}
            className="flex-1 pl-4 pr-12 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="absolute right-1 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
