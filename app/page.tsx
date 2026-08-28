import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fluxo from "@/components/Fluxo";
import Diferenca from "@/components/Diferenca";
import Plataforma from "@/components/Plataforma";
import Cases from "@/components/Cases";
import Metodo from "@/components/Metodo";
import Engenharia from "@/components/Engenharia";
import Socios from "@/components/Socios";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import BarraMobile from "@/components/BarraMobile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fluxo />
        <Diferenca />
        <Plataforma />
        <Cases />
        <Metodo />
        <Engenharia />
        <Socios />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <BarraMobile />
    </>
  );
}
