import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 20, 147, 0.15), transparent 50%),
                        radial-gradient(ellipse 160% 130% at 10% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
                        radial-gradient(ellipse 160% 130% at 90% 90%, rgba(138, 43, 226, 0.18), transparent 65%),
                        radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
                        #000000
                    `,
                }}
            />
            <div className="relative z-10">
                <Header />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
