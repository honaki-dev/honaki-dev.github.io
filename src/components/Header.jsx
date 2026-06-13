import { useState, useRef, useEffect } from "react";

const navItems = [
    { label: "About Me", href: "#about-me", id: "about-me" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
];

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderStyle, setSliderStyle] = useState({});
    const navRef = useRef(null);
    const itemRefs = useRef([]);
    const isClicking = useRef(false);

    useEffect(() => {
        const el = itemRefs.current[activeIndex];
        const nav = navRef.current;
        if (!el || !nav) return;
        const navRect = nav.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setSliderStyle({
            left: elRect.left - navRect.left,
            width: elRect.width,
        });
    }, [activeIndex]);

    useEffect(() => {
        const handleScroll = () => {
            if (isClicking.current) return;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            let current = 0;
            navItems.forEach((item, i) => {
                const el = document.getElementById(item.id);
                if (!el) return;
                if (el.offsetTop <= scrollY + windowHeight * 0.45) {
                    current = i;
                }
            });

            setActiveIndex(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (i) => {
        setActiveIndex(i);
        isClicking.current = true;
        setTimeout(() => {
            isClicking.current = false;
        }, 1000);
    };

    return (
        <header className="fixed top-3 left-0 right-0 z-[999] flex justify-center">
            <nav
                ref={navRef}
                className="relative flex items-center gap-0.5 rounded-full border border-white/15 bg-white/8 px-1.5 py-1.5 backdrop-blur-xl"
            >
                <div
                    className="absolute top-1.5 bottom-1.5 rounded-full border border-white/20 bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={sliderStyle}
                />

                {navItems.map((item, i) => (
                    <a
                        key={item.href}
                        ref={(el) => (itemRefs.current[i] = el)}
                        href={item.href}
                        onClick={() => handleClick(i)}
                        className={`relative z-10 rounded-full px-5 py-2 text-base transition-colors duration-200 ${
                            activeIndex === i
                                ? "font-medium text-white"
                                : "text-white/50 hover:text-white/80"
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;
