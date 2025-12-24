import { useState, useRef, useEffect } from 'react'

export default function AIChat({ messages, onClose }) {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      // Simulate AI response
      setTimeout(() => {
        // Add AI response here
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col z-50">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
            <i className="fas fa-robot text-white"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">AI Travel Assistant</h3>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <i className="fas fa-robot text-white text-sm"></i>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p className="text-sm">Hi! I'm your AI assistant. Ask me about hotels, PNR status, or travel tips!</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..." 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button onClick={sendMessage} className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-all">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
