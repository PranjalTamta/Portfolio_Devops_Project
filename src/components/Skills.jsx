import { motion } from "framer-motion";

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "Angular JS",
  "React JS",
  "Node JS",
  "HTML",
  "CSS",
  "jQuery",
  "Bootstrap",
  "MySQL",
  "Git",
];

const Skills = () => {
  return (
    <motion.section
      className="py-16 px-4 sm:px-8 md:px-16 text-center bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        Technical Skills
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        animate={{
          rotateY: [0, 45, 0, -45, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          cursor: "pointer",
        }}
        whileHover={{ rotateY: 0 }}
        whileTap={{ rotateY: 0 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition text-sm sm:text-base md:text-lg font-medium"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            style={{
              transform: "rotateY(0deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
