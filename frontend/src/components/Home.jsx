import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useCallback } from "react";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/chinyukwi.linda", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/linda-chinyukwi-9883ba229/", label: "LinkedIn" },
];

export default function Home() {
  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Linda_Chinyukwi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex min-h-screen items-center px-[10%] pt-24">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] text-center lg:text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl font-light sm:text-3xl"
          >
            Hello, It's Me
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-5xl font-bold leading-tight sm:text-6xl"
          >
            Linda Chinyukwi
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="my-3 text-2xl font-semibold sm:text-3xl"
          >
            And I'm a <span className="text-cyan-500">Software / Web Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-6 leading-8 text-gray-400"
          >
            Computer Science graduate passionate about building modern web applications,
            mobile apps and backend systems using React, ASP.NET Core, Django and Flutter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-500 text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-[#1b1f2a] hover:shadow-[0_0_20px_#00e5ff]"
                aria-label={s.label}
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <button
              onClick={downloadCV}
              className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-semibold text-[#1b1f2a] shadow-[0_0_25px_#00e5ff] transition-all duration-300 hover:-translate-y-1"
            >
              <FiDownload className="mr-2 inline" size={18} />
              Download CV
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="hexagon">
            <img src="/profile.jpg" alt="Linda Chinyukwi" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
