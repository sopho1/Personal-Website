// This is a Next.js page component that renders a simple welcome message.
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
   <>
    <Toaster position="top-right" reverseOrder={false}/>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
   </>
  );
}
