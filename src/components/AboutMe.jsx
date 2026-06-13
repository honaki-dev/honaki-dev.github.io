const skills = ["Node.JS", "TypeScript"];

function AboutMe() {
    return (
        <section
            id="about-me"
            className="min-h-screen flex flex-col items-center justify-center px-6"
        >
            <div className="mb-6 rounded-full border border-white/15 p-1">
                <img
                    draggable="false"
                    src="/avatar.webp"
                    alt="Avatar"
                    className="h-40 w-40 rounded-full object-cover"
                />
            </div>

            <span className="mb-6 rounded-full border border-white/10 px-4 py-1 text-xs tracking-widest text-white/40">
                Available for work
            </span>

            <h1 className="mb-2 text-4xl font-medium tracking-tight text-white">
                Honaki Tran
            </h1>

            <p className="mb-3 text-base text-white/40">Backend Developer</p>

            <div className="mb-3 h-px w-8 bg-white/10" />

            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-white/55 text-center">
                I enjoy building things that work behind the scenes - from
                backend systems and bots to dev tools that make life easier.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-white/8 bg-white/6 px-3 py-1 text-xs text-white/45"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="flex gap-3">
                <a
                    href="#projects"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#16171d] transition hover:bg-white/90"
                >
                    My projects
                </a>
                <a
                    href="#contact"
                    className="rounded-full border border-white/12 bg-white/6 px-6 py-2.5 text-sm text-white/70 transition hover:bg-white/10"
                >
                    Contact
                </a>
            </div>
        </section>
    );
}

export default AboutMe;
