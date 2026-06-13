const projects = [
    {
        emoji: "📖",
        title: "TaskManager",
        description: "A Discord bot for managing scanlation groups.",
        stack: ["Discord.js", "SQLite"],
        status: "Live",
        github: null,
    },
    {
        emoji: "⛏️",
        title: "Minecraft AFK Tool",
        description:
            "A bot that keeps your Minecraft character online and active on servers.",
        stack: ["Mineflayer", "Node.js"],
        status: "Private",
        github: null,
    },
    {
        emoji: "🌐",
        title: "Portfolio",
        description: "This site. Built from scratch with React and Tailwind.",
        stack: ["React", "Tailwind CSS", "Vite"],
        status: "Live",
        github: "https://honaki.site",
    },
];
function Projects() {
    return (
        <section
            id="projects"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-6 py-24"
        >
            <div className="mx-auto w-full max-w-2xl">
                <p className="mb-2 text-center text-xs tracking-widest text-white/25 uppercase">
                    What I've built
                </p>
                <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-white">
                    Projects
                </h2>

                <div className="flex flex-col gap-3">
                    {projects.map((proj) => (
                        <div
                            key={proj.title}
                            className="flex gap-4 rounded-2xl border border-white/8 bg-white/4 p-4 transition-colors hover:border-white/15"
                        >
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/7 text-3xl">
                                {proj.emoji}
                            </div>

                            <div className="flex flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium text-white">
                                        {proj.title}
                                    </p>
                                    <span className="ml-auto text-[11px] text-white/25 whitespace-nowrap">
                                        {proj.status}
                                    </span>
                                </div>
                                <p className="text-[13px] leading-relaxed text-white/40">
                                    {proj.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {proj.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/7 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/35"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
