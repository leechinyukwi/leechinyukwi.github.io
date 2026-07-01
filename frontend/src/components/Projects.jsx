import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Help Desk & Ticketing System",
    tech: "ASP.NET Core, SQL Server, React",
    features: ["User authentication", "Ticket creation and tracking", "Admin dashboard", "Reporting"],
    github: "https://github.com/leechinyukwi/ZeguTicketingSystem",
  },
  {
    title: "Student Management System",
    tech: "Django, MySQL",
    features: ["Student registration", "Course management", "Results management"],
    github: "https://github.com/leechinyukwi/student-management",
  },
  {
    title: "Inventory Management System",
    tech: "ASP.NET Core, SQL Server",
    features: ["Product tracking", "Stock monitoring", "Reports generation"],
    github: "https://github.com/leechinyukwi/inventory-system",
  },
  {
    title: "Personal Finance Tracker",
    tech: "React, Tailwind CSS",
    features: ["Expense tracking", "Budget planning", "Dashboard analytics"],
    github: "https://github.com/leechinyukwi/finance-tracker",
  },
  {
    title: "Flutter Mobile App",
    tech: "Flutter, Firebase",
    features: ["User login", "Data synchronization", "Responsive mobile interface"],
    github: "https://github.com/leechinyukwi/flutter-app",
  },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-[10%] pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        My <span className="text-cyan-500">Projects</span>
      </motion.h2>

      <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card group flex flex-col"
          >
            <div className="mb-3 flex items-start justify-between">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {project.tech.split(",")[0].trim()}
              </span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-cyan-500"
              >
                <FiGithub size={18} />
              </a>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm text-white/50">{project.tech}</p>
            <ul className="mb-4 flex-1 space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              View on GitHub <FiExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
