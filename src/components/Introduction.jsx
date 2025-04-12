import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import profileImage from "../assets/image-Photoroom.png";

const Introduction = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-25"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={profileImage}
        alt="Pranjal Tamta"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover mb-6 shadow-md"
      />
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
        {isMobile ? (
          <span className="text-blue-600">Hi, I'm Pranjal 👋</span> // or a simpler version
        ) : (
          <span className="typewriter-effect text-blue-600">
            Hi, I'm Pranjal Tamta 👋
          </span>
        )}
      </h1>

      <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-700">
        A software developer who enjoys solving problems and improving skills.
        I’m looking for a role where I can take on challenges and contribute
        effectively.
      </p>
    </motion.section>
  );
};

export default Introduction;
