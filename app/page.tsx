import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integracoes from "@/components/Integracoes";
import Plataforma from "@/components/Plataforma";
import FaixaNumeros from "@/components/FaixaNumeros";
import Diferenca from "@/components/Diferenca";
import Cases from "@/components/Cases";
import Metodo from "@/components/Metodo";
import Socios from "@/components/Socios";
import Engenharia from "@/components/Engenharia";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import BarraMobile from "@/components/BarraMobile";

// Redesenho de 08/10/2026. O topo é a peça ousada (o palco que troca de
// sistema conforme o negócio); o resto alterna papel branco e névoa, com o
// azul chapado só nos dois campos que pedem ação: o palco e o contato.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Integracoes />
        <Plataforma />
        <FaixaNumeros />
        <Diferenca />
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
