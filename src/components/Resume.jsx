import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-8 md:px-16 text-center bg-gray-50"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
        Resume
      </h2>
      <a
        href="https://drive.google.com/file/d/1RelXlf3iNysk76jixoK0TO988DF8SY0B/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-2 px-6 rounded-lg transition duration-300"
        style={{ color: "white" }}
      >
        📄 Download My Resume
      </a>
    </motion.section>
  );
};

export default Resume;
