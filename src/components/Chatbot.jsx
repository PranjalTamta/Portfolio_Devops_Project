// src/components/Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import resumePrompt from "../data/resumePrompt";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 320, height: 400 });

  const chatbotRef = useRef(null);
  const resizing = useRef(false);

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      setChat([
        {
          sender: "bot",
          text: "Hi! 👋 How can I help you? You can ask me anything about Pranjal Tamta’s resume.",
        },
      ]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setChat((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    try {
      const response = await fetch(
        "https://api.together.xyz/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
              { role: "system", content: resumePrompt },
              { role: "user", content: userMessage },
            ],
          }),
        }
      );

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong!" },
      ]);
    }
  };

  const startResize = (e) => {
    e.preventDefault();
    resizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (e) => {
    if (!resizing.current) return;
    const newWidth = Math.max(
      280,
      e.clientX - chatbotRef.current.getBoundingClientRect().left
    );
    const newHeight = Math.max(
      300,
      e.clientY - chatbotRef.current.getBoundingClientRect().top
    );
    setDimensions({ width: newWidth, height: newHeight });
  };

  const stopResize = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen ? (
        <div
          ref={chatbotRef}
          style={{ width: dimensions.width, height: dimensions.height }}
          className="bg-white p-4 rounded-xl shadow-xl border border-gray-200 flex flex-col relative"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-center w-full">
              Resume Chatbot
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold absolute top-2 right-2"
              title="Minimize"
            >
              &minus;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 text-sm mb-3 border p-2 rounded">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`text-${msg.sender === "user" ? "right" : "left"}`}
              >
                <p
                  className={`bg-${
                    msg.sender === "user" ? "blue" : "gray"
                  }-100 p-2 rounded`}
                >
                  <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>{" "}
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Ask about resume..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>

          <div
            onMouseDown={startResize}
            className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize"
            style={{ background: "transparent" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
          title="Open Chatbot"
        >
          Ask💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
