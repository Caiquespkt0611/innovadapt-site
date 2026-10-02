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

// Fundo de cada seção, em ordem: branco, cinza-azulado, branco, azul da
// marca, branco, cinza, branco, cinza, branco, cinza, azul, marinho. É a
// alternância que deixa a página longa legível sem virar um bloco só.
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
        <Socios />
        <Engenharia />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <BarraMobile />
    </>
  );
}
