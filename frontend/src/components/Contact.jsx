import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    try {
      await emailjs.send("service_7bgo0rm", "template_bpfbcec", {
        from_name: form.name, from_email: form.email, message: form.message,
      }, "sr6x6T58KkOXUgNzX");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Check console for details.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "chinyukwilinda@gmail.com", href: "mailto:chinyukwilinda@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "0783260188", href: "tel:0783260188" },
    { icon: FiGithub, label: "GitHub", value: "github.com/leechinyukwi", href: "https://github.com/leechinyukwi" },
    { icon: FiLinkedin, label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/linda-chinyukwi" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-[10%] pt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Get In <span className="text-cyan-500">Touch</span>
      </motion.h2>

      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
          <div className="space-y-5">
            {contactInfo.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500 transition-colors group-hover:bg-cyan-500/20">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50">{item.label}</p>
                  <p className="font-medium text-white/80">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-6 text-xl font-semibold">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/30 focus:border-cyan-500/50" />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/30 focus:border-cyan-500/50" />
            <textarea name="message" rows={5} placeholder="Your Message" value={form.message} onChange={handleChange} required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/30 focus:border-cyan-500/50" />
            <button type="submit" disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-darkbg transition-all hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60">
              {sending ? "Sending..." : sent ? <><FiCheck /> Sent Successfully</> : <><FiSend /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
