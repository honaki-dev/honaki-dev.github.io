import contact from "../data/contacts";

function Hero() {
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
                        <a
                            key={ct.name}
                            href={ct.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 border rounded-full text-2xl hover:bg-gray-100 transition"
                        >
                            <i
                                className={`${ct.isBrand ? "fa-brands" : "fa-solid"} ${ct.icon}`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
