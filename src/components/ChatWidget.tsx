"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{text: string, type: 'visitor' | 'lofi', time: string}>>([])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages(prev => [...prev, {
      text: message,
      type: "visitor",
      time: new Date().toLocaleTimeString()
    }])
    setMessage("")
  }

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs ml-2 text-purple-200">Chat</span>
        </button>
      )}

      {isOpen && (
        <div className="w-96 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
          {/* Header */}
          <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-purple-500" />
              <div>
                <span className="text-white font-semibold">Tech Support</span>
                <span className="text-xs text-zinc-400 ml-2">Messaging with Lofi</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-80">
            {messages.length === 0 && (
              <div className="text-center text-zinc-500 py-8">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                <p className="text-sm">Start a conversation</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "visitor" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === "visitor" ? (
                  <div className="max-w-[80%] bg-purple-600 text-white rounded-2xl rounded-tr-2xl px-4 py-2 shadow-lg">
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-purple-200 mt-1">{msg.time}</p>
                  </div>
                ) : (
                  <div className="max-w-[80%] bg-zinc-800 text-white rounded-2xl rounded-tl-2xl px-4 py-2 shadow-lg border border-zinc-700">
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-zinc-500 mt-1">Lofi • {msg.time}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Type your message to Lofi..."
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
