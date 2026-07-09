import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "STIXMEDIA",
    period: "Jan 2025 - Feb 2026",
    isCurrent: false,
    responsibilities: [
      "Design, develop, and maintain website architectures, subdomains, web applications, and content management systems using modern web frameworks.",
      "Implement responsive web design principles to ensure optimal user experience across desktop, tablet, and mobile devices.",
      "Manage web hosting environments, domain configurations, SSL certificates, and server-side optimizations to maximize website performance, security, and uptime.",
      "Integrate web platforms with external systems, databases, and third-party applications through RESTful APIs and web services to improve functionality and data exchange.",
      "Conduct Search Engine Optimization (SEO), implement Microsoft Clarity and Google Analytics, and monitor website traffic to improve visibility, usability, and user engagement.",
      "Optimize front-end performance through code minification, lazy loading, browser caching, Content Delivery Network (CDN) implementation, and other performance optimization techniques.",
      "Collaborate with clients, business teams, and stakeholders to gather requirements and develop functional, user-friendly web solutions that meet organizational needs.",
      "Develop, maintain, and enhance websites and web applications using ASP.NET Core MVC, C#, WordPress, HTML, CSS, JavaScript, Bootstrap, and SQL Server.",
      "Create and maintain technical documentation for web systems, APIs, deployment procedures, and website configurations.",
      "Troubleshoot website issues, perform system updates, and ensure websites remain secure, reliable, and available.",
      "Participate in software testing, debugging, version control, and deployment of new web features.",
      "Provide technical support and training to customers on website content management and web-related systems.",
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
