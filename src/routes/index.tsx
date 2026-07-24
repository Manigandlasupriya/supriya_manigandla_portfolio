import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Preloader } from "@/components/portfolio/Preloader";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { property: "og:url", content: "/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Supriya Manigandla",
        jobTitle: "Python Full Stack Developer",
        email: "mailto:rupasupriya27183@gmail.com",
        telephone: "+91 8008232140",
        address: { "@type": "PostalAddress", addressLocality: "Machilipatnam", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
        knowsAbout: ["Python", "FastAPI", "React.js", "AWS", "Artificial Intelligence", "Machine Learning"],
        alumniOf: "Sri Vasavi Institute of Engineering & Technology",
      }),
    }],
  }),
});

function Portfolio() {
  return (
    <>
      <Preloader />
      <BackgroundFX />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
