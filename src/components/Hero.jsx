import { useState } from "react";
import contact from "../data/contacts";

function Hero() {
    const [copiedName, setCopiedName] = useState(null);

    const handleCopy = (e, ct) => {
        if (!ct.copyable) return;
        if (copiedName) return;

        e.preventDefault();
        navigator.clipboard
            .writeText(ct.url)
            .then(() => {
                setCopiedName(ct.name);
                setTimeout(() => {
                    setCopiedName(null);
                }, 1500);
            })
            .catch(console.error);
    };

    return (
        <div className="m-auto flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl px-6 py-12 gap-5 md:gap-10">
            {/* left box */}
            <div className="flex-none md:flex-1 flex items-center justify-center md:justify-end w-full">
                <div className="overflow-hidden rounded-2xl md:rounded-[38px] aspect-square md:aspect-auto w-full max-w-xs md:max-w-sm shadow-xl">
                    <img
                        className="block w-full aspect-square md:aspect-auto md:h-auto object-cover object-top"
                        src="/card.webp"
                        alt="Card"
                    />
                </div>
            </div>

            {/* right box */}
            <div className="flex-none md:flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Honaki Tran
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    A fullstack developer~
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    {contact.map((ct) => (
                        <div key={ct.name} className="relative group">
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full hidden group-hover:block bg-gray-800 text-white text-sm px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none select-none z-10">
                                {copiedName
                                    ? "Copied!"
                                    : ct.copyable
                                      ? "Click to copy"
                                      : "Click to open"}
                            </div>

                            <a
                                href={ct.copyable ? undefined : ct.url}
                                target={ct.copyable ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 border rounded-full text-2xl hover:bg-gray-200 transition cursor-pointer"
                                onClick={(e) => handleCopy(e, ct)}
                            >
                                <i
                                    className={`${ct.isBrand ? "fa-brands" : "fa-solid"} ${ct.icon}`}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
