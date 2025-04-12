import { useState } from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 pt-20 text-gray-800 scroll-smooth">
      <Navbar onChatClick={openChat} />
      <Chatbot />

      <section id="home">
        <Introduction />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <Resume />

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
