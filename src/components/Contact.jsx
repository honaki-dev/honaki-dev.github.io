import { useState } from "react";

const socials = [
    { label: "GitHub", icon: "⌥", href: "https://github.com/honaki-dev" },
    { label: "Email", icon: "✉", href: "mailto:me@honaki.site" },
];

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section
            id="contact"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-6 py-24"
        >
            <div className="mx-auto w-full max-w-md">
                <p className="mb-2 text-center text-xs tracking-widest text-white/25 uppercase">
                    Get in touch
                </p>
                <h2 className="mb-10 text-center text-3xl font-medium tracking-tight text-white">
                    Contact
                </h2>

                <div className="mb-6 flex justify-center gap-2">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-full border border-white/9 bg-white/5 px-4 py-2 text-sm text-white/55 transition-colors hover:border-white/18 hover:text-white"
                        >
                            <span className="text-xs">{s.icon}</span>
                            {s.label}
                        </a>
                    ))}
                </div>

                <div className="mb-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/7" />
                    <span className="text-xs text-white/20">
                        or send a message
                    </span>
                    <div className="h-px flex-1 bg-white/7" />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/9 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-white/20"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/9 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-white/20"
                    />
                    <textarea
                        placeholder="What's on your mind?"
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        className="w-full resize-none rounded-xl border border-white/9 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-white/20"
                    />
                    <button
                        type="submit"
                        className="mt-1 w-full rounded-full bg-white py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
