// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="my-16 text-center pb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/pranjal-tamta-872809259/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/PranjalTamta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRttgJNvqPJlLFCqMkQlSwKRmJbzxFNJFsLXtDcCrgFhnphFVQtlLnNDWgWMqWpMwTVNfqb"
          className="text-purple-700 hover:text-purple-800 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
