import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Loader2 } from "lucide-react";
import { PROFILE } from "./data";
import { Section, SectionHeader } from "./Section";
import { externalClickHandler } from "@/lib/open-external";

const SERVICE_ID = "service_xq23pxw";
const TEMPLATE_ID = "template_x5i2bss";
const PUBLIC_KEY = "JmLB7Sjb9jDbtEB-K";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending"); setMsg("");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("ok"); setMsg("Message sent — I'll reply within 24 hours.");
      formRef.current.reset();
    } catch {
      setStatus("err"); setMsg("Something went wrong. Please email me directly.");
    }
  };

  const contacts = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: PROFILE.location },
  ];

  return (
    <Section id="contact" className="relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.19 255 / 0.25), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.22 305 / 0.25), transparent 40%)" }}
      />
      <div className="relative">
        <SectionHeader
          eyebrow="Let's connect"
          title="Get in touch"
          description="Open to full-stack, Python, and AI engineering roles — and interesting collaborations."
        />
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2 space-y-4"
          >
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30, filter: "blur(6px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0)", transition: { duration: 0.55 } },
                  }}
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/60 transition-colors shine"
                  data-cursor="card"
                >
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255 / 0.3), oklch(0.68 0.22 305 / 0.3))" }}
                  ><Icon size={18} className="text-primary" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-medium mt-0.5 break-all">{value}</div>
                  </div>
                </motion.div>
              );
              return href ? <a key={label} href={href}>{inner}</a> : <div key={label}>{inner}</div>;
            })}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a href={PROFILE.linkedin} onClick={externalClickHandler(PROFILE.linkedin)} target="_blank" rel="noreferrer" data-cursor="magnet" className="glass grid h-11 w-11 place-items-center rounded-full hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={PROFILE.github} onClick={externalClickHandler(PROFILE.github)} target="_blank" rel="noreferrer" data-cursor="magnet" className="glass grid h-11 w-11 place-items-center rounded-full hover:text-primary transition-colors" aria-label="GitHub"><Github size={18} /></a>
              <a href={PROFILE.resume} download data-cursor="cta" className="shine inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground glow-electric" style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}>
                <Download size={16} /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            ref={formRef} onSubmit={submit}
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4 gradient-border"
          >
            <input type="hidden" name="to_email" value={PROFILE.email} />
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input required name="user_name" type="text" maxLength={100}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 outline-none focus:border-primary/70 transition-colors" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input required name="user_email" type="email" maxLength={255}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 outline-none focus:border-primary/70 transition-colors" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea required name="message" rows={6} maxLength={2000}
                className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 outline-none focus:border-primary/70 transition-colors resize-none" />
            </label>
            <button type="submit" disabled={status === "sending"} data-cursor="cta"
              className="shine w-full inline-flex items-center justify-center gap-2 rounded-full py-3 font-medium text-primary-foreground disabled:opacity-70 glow-electric"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
            >
              {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send Message</>}
            </button>
            {msg && (
              <p className={`text-sm text-center ${status === "ok" ? "text-emerald-400" : status === "err" ? "text-red-400" : "text-muted-foreground"}`}>{msg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
