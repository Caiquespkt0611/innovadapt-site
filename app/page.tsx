import Header from "@/components/Header";
import Topo from "@/components/luz/Topo";
import Esteira from "@/components/luz/Esteira";
import Solucoes from "@/components/luz/Solucoes";
import Diferenca from "@/components/luz/Diferenca";
import Projetos from "@/components/luz/Projetos";
import Metodo from "@/components/luz/Metodo";
import Equipe from "@/components/luz/Equipe";
import Perguntas from "@/components/luz/Perguntas";
import Contato from "@/components/luz/Contato";
import Footer from "@/components/Footer";
import BarraMobile from "@/components/BarraMobile";

// Redesenho "luz" (29/10/2026). As seções alternam branco e o céu claro
// (#f7f9fc); a luz de cor aparece no topo, na diferença e no contato.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Topo />
        <Esteira />
        <Solucoes />
        <Diferenca />
        <Projetos />
        <Metodo />
        <Equipe />
        <Perguntas />
        <Contato />
      </main>
      <Footer />
      <BarraMobile />
    </>
  );
}
