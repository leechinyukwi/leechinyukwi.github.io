import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ currentPage, setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-darkbg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <button onClick={() => setPage("Home")} className="text-2xl font-bold tracking-tight">
          Portfolio<span className="text-cyan-500">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((label) => (
            <button
              key={label}
              onClick={() => { setPage(label); setOpen(false); }}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                currentPage === label
                  ? "text-cyan-500"
                  : "text-white/70 hover:text-cyan-500"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-white/70 transition-colors hover:text-cyan-500"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-darkbg px-4 pb-4"
          >
            {navLinks.map((label) => (
              <button
                key={label}
                onClick={() => { setPage(label); setOpen(false); }}
                className={`block w-full py-2 text-left text-sm font-medium transition-colors ${
                  currentPage === label
                    ? "text-cyan-500"
                    : "text-white/70 hover:text-cyan-500"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
