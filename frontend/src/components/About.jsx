import { motion } from "framer-motion";
import { FiTarget, FiUser } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-[10%] pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        About <span className="text-cyan-500">Me</span>
      </motion.h2>

      <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-cyan-500/10 p-2">
              <FiUser className="text-cyan-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold">Profile Summary</h3>
          </div>
          <p className="leading-relaxed text-white/60">
            Computer Science graduate with practical experience in software development,
            web applications, database management, and system support. Proficient in
            developing scalable solutions, troubleshooting technical issues, and supporting
            business operations through technology. Strong analytical and problem-solving
            abilities, with a passion for innovation and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-cyan-500/10 p-2">
              <FiTarget className="text-cyan-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold">Career Objective</h3>
          </div>
          <p className="leading-relaxed text-white/60">
            To gain practical experience as a Software Developer while continuously improving
            my technical skills and contributing to the development of innovative software
            solutions. My long-term goal is to become a highly skilled Software Developer
            capable of building impactful and scalable applications.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto mt-5 w-full max-w-5xl"
      >
        <div className="card">
          <h3 className="mb-4 text-lg font-semibold">Areas of Interest</h3>
          <div className="flex flex-wrap gap-3">
            {["Software Development", "Web Development", "Database Management", "Artificial Intelligence", "Cybersecurity"].map(
              (interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
