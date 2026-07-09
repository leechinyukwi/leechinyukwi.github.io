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
            Computer Science graduate passionate about building modern web applications,
            mobile apps, and backend systems. Proficient in React, ASP.NET Core MVC,
            Django, Flutter, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Python, PHP,
            WordPress, RESTful APIs, Git, SQL Server, MySQL, PostgreSQL, and Docker.
            Strong analytical and problem-solving abilities with a passion for innovation
            and continuous learning.
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
            To secure a role as a Web/Software Developer where I can apply my skills in
            modern web technologies to build impactful and scalable applications. My goal
            is to continuously grow as a developer and contribute to innovative solutions
            that solve real-world problems.
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
