const skills = [
    {
        category: "Backend & APIs",
        icon: "⚙️",
        items: ["Node.js", "TypeScript", "Python", "REST API"],
    },
    {
        category: "Database",
        icon: "🗄️",
        items: ["MySQL", "SQLite", "MongoDB"],
    },
    {
        category: "Bots & Automation",
        icon: "🤖",
        items: ["Discord.js", "Telegram Bot API", "Mineflayer"],
    },
    {
        category: "Frontend",
        icon: "🌐",
        items: ["React", "Tailwind CSS", "Vite"],
    },
    {
        category: "Tools",
        icon: "🛠️",
        items: ["Git", "GitHub"],
    },
];
function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center px-6"
        >
            <div className="mx-auto max-w-4xl">
                <p className="mb-2 text-center text-xs tracking-widest text-white/25 uppercase">
                    What I work with
                </p>
                <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-white">
                    Skills
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skills.map((group) => (
                        <div
                            key={group.category}
                            className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/4 p-5 transition-colors hover:border-white/15"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/6 text-sm">
                                    {group.icon}
                                </div>
                                <span className="text-sm font-medium text-white">
                                    {group.category}
                                </span>
                            </div>

                            <div className="h-px bg-white/6" />

                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-white/45"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
