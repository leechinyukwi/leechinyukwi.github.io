import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    title: "Graduate Trainee – Software Developer",
    company: "Zimbabwe Ezekiel Guti University",
    period: "Jul 2025 - Present",
    isCurrent: true,
    responsibilities: [
      "Develop C#, Python, and Java applications with backend integration and database connectivity using Microsoft SQL Server (SSMS).",
      "Write, execute, and optimize SQL queries to manage data, correct anomalies, and support system reporting.",
      "Design and implement RESTful APIs for seamless communication between frontend and backend services.",
      "Perform database administration tasks including data validation, troubleshooting, and ensuring data integrity.",
      "Support system integration between application modules and backend database services.",
      "Handle student and staff system-related issues, providing technical support and resolving application errors.",
      "Monitor, maintain, and troubleshoot system performance and data-related issues in production environments.",
      "Assist in deployment, maintenance, and continuous improvement of enterprise applications.",
      "Collaborate with cross-functional teams to gather requirements and deliver software solutions on time.",
      "Write and maintain technical documentation for system architecture, APIs, and deployment processes.",
      "Participate in code reviews to ensure code quality, best practices, and adherence to standards.",
      "Implement unit and integration tests to ensure software reliability and reduce production defects.",
    ],
  },
  {
    title: "ICT Support Intern",
    company: "Masvingo City Council",
    period: "Aug 2022 - Aug 2023",
    isCurrent: false,
    responsibilities: [
      "Assisted in software testing and bug reporting.",
      "Supported ERP system administration and maintenance.",
      "Generated reports using system and database data.",
      "Performed SQL-based data validation and updates.",
      "Assisted in system upgrades and enhancements.",
      "Monitored software performance and resolved issues.",
      "Maintained system documentation and user records.",
      "Supported users on ERP and billing systems.",
      "Assisted with database management and data integrity.",
      "Participated in system implementation and testing.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-[10%] pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        My <span className="text-cyan-500">Experience</span>
      </motion.h2>

      <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="card h-full">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <FiBriefcase size={14} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/50">
                  <FiCalendar size={14} />
                  {exp.period}
                </div>
              </div>

              {exp.isCurrent && (
                <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-medium text-cyan-400">
                  Current
                </span>
              )}

              <ul className="space-y-1.5">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
