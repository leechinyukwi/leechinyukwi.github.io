import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darkbg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} Linda Chinyukwi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:chinyukwilinda@gmail.com"
            className="text-white/50 transition-colors hover:text-cyan-500"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="https://github.com/leechinyukwi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition-colors hover:text-cyan-500"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/linda-chinyukwi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition-colors hover:text-cyan-500"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
