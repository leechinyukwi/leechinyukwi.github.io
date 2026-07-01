import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python", "C#", "JavaScript"],
  },
  {
    category: "Frontend Development",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend Development",
    items: ["ASP.NET Core (C#)", "Django", "PHP"],
  },
  {
    category: "Mobile Development",
    items: ["Flutter"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "Visual Studio", "Visual Studio Code"],
  },
];

export default function Skills() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-[10%] pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        My <span className="text-cyan-500">Skills</span>
      </motion.h2>

      <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
