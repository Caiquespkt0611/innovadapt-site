import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import About from "@/components/About";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Cases />
        <About />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
