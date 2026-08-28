// Fonte única de verdade do conteúdo do site.
// Todo número aqui sai do CEREBRO da empresa. Se mudar lá, muda aqui.

export const contato = {
  email: "contato@innovadapt.com.br",
  // Assim que houver um número comercial da InnovAdapt, preencha só os dígitos
  // com DDI (ex: "5511999999999"). Vazio = os CTAs caem para e-mail.
  whatsapp: "",
  cnpj: "57.411.230/0001-60",
  razaoSocial: "Sampaio Consultoria LTDA",
};

export const linkWhatsapp = (mensagem: string) =>
  contato.whatsapp
    ? `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`
    : `mailto:${contato.email}?subject=${encodeURIComponent(
        "Diagnóstico InnovAdapt",
      )}&body=${encodeURIComponent(mensagem)}`;

export const MSG_PADRAO =
  "Olá! Vim pelo site da InnovAdapt e quero agendar um diagnóstico da minha operação.";

export const navegacao = [
  { label: "Diferença", href: "#diferenca" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Projetos", href: "#projetos" },
  { label: "Método", href: "#metodo" },
  { label: "Engenharia", href: "#engenharia" },
];

export const provas = [
  { valor: "3", unidade: "sistemas", label: "no ar em produção hoje" },
  { valor: "41", unidade: "models", label: "no maior sistema em produção" },
  { valor: "28", unidade: "módulos", label: "de backend no mesmo sistema" },
  { valor: "24", unidade: "horas", label: "do repositório à 1ª conversa real" },
];

export const capacidades = [
  {
    id: "crm",
    numero: "01",
    titulo: "CRM com agente de IA no WhatsApp",
    resumo:
      "Não é chatbot de menu. É um agente que conversa, entende o contexto, lembra do lead e passa o bastão para o vendedor certo.",
    itens: [
      "Inbox unificado: WebMotors, iCarros, redes e agência num lugar só",
      "Funil kanban com distribuição automática por vendedor",
      "Copiloto do vendedor e gerente de vendas por IA",
      "Catálogo e preço de loja carregados do PDF da montadora",
      "Relatório do dia e cobrança automática de follow-up",
      "Triagem em modelo barato, conversa em modelo bom, custo de IA sob controle",
    ],
  },
  {
    id: "portal",
    numero: "02",
    titulo: "Portal de operações e fiscal",
    resumo:
      "Pedido, compra, estoque e imposto no mesmo lugar. A regra tributária vira cadastro, não código.",
    itens: [
      "Pedidos e compras com status, histórico e permissão por papel",
      "Regra tributária por fornecedor, com exceção por NCM",
      "Alíquota editável: CBS e IBS entram sem deploy",
      "Painel financeiro de repasses, royalties e comissão",
      "Simuladores de pedido e de financiamento",
      "KPIs por unidade e por concessionária",
    ],
  },
  {
    id: "rentabilidade",
    numero: "03",
    titulo: "Rentabilidade e DRE gerencial",
    resumo:
      "A planilha que hoje decide o mês da concessionária vira sistema, com a matemática conferida contra a origem, linha a linha.",
    itens: [
      "DRE próprio por departamento: VN, VU, Peças, Acessórios, F&I, SG, SC, AT",
      "De-para configurável entre o plano de contas do cliente e o padrão",
      "Rateio administrativo, encargos, impostos por natureza, custo de capital de giro",
      "Conciliação automática contra a base de origem",
      "PDCA em que a ação nasce do desvio, já com impacto em R$",
      "Matriz, filial e coligada consolidadas",
    ],
  },
  {
    id: "rede",
    numero: "04",
    titulo: "Consolidação e BI de rede",
    resumo:
      "Duas fontes, uma matemática só: banco de dados ou planilha passam pelo mesmo motor de consolidação.",
    itens: [
      "Receita, peças e ticket médio por dealer",
      "Lucro Bruto = Receita − Royalties − Comissão de Vendas",
      "Split de fornecedor: o pedido separado por fábrica",
      "Relatório de importação por arquivo, com o erro na cara e não escondido",
      "Benchmark entre unidades da mesma rede",
      "Exportação pronta para a reunião de resultado",
    ],
  },
  {
    id: "integracao",
    numero: "05",
    titulo: "Integração e importação de dados",
    resumo:
      "O dado da operação raramente está só no DMS. Está no XML, na planilha do gerente e na cabeça de quem fecha o mês.",
    itens: [
      "Integração com DMS e ERP por API quando existe API",
      "Importação resiliente de planilha: muda o formato, não quebra",
      "XML de NF-e e leitura fiscal",
      "Upsert por identificador, com diff do que entrou e do que mudou",
      "Automações e disparos de rotina",
      "Migração assistida do legado, sem parar a operação",
    ],
  },
  {
    id: "medida",
    numero: "06",
    titulo: "Software sob medida",
    resumo:
      "Quando o seu processo é o ativo, adaptar o processo ao produto de prateleira é jogar o ativo fora.",
    itens: [
      "Multi-tenant com isolamento por cliente e por unidade",
      "Papel e permissão modelados sobre o organograma real",
      "Next.js · NestJS · PostgreSQL · Claude API",
      "Revisão de segurança obrigatória antes de todo go-live",
      "Entrega em fases, com versão no ar cedo",
      "Contrato com cláusula de propriedade intelectual explícita",
    ],
  },
];

export const comparativo = {
  colunas: ["Plataforma de BI de prateleira", "InnovAdapt"],
  linhas: [
    {
      criterio: "O que chega na sua mão",
      deles: "Painel, benchmark e relatório",
      nosso: "Sistema que executa a operação, e o painel junto",
    },
    {
      criterio: "Papel da IA",
      deles: "Resume o dashboard em texto",
      nosso: "Atende o lead, qualifica, distribui e cobra o follow-up",
    },
    {
      criterio: "Escopo",
      deles: "Módulos fechados: você escolhe da lista",
      nosso: "Modelado sobre o seu processo, fase a fase",
    },
    {
      criterio: "Origem do dado",
      deles: "O que o DMS expõe",
      nosso: "DMS, XML, API e a planilha que só existe na sua empresa",
    },
    {
      criterio: "Quem atende",
      deles: "Chamado, fila e nível 1",
      nosso: "O sócio que escreveu o código",
    },
    {
      criterio: "Segurança",
      deles: "Consta na página",
      nosso: "Revisão obrigatória antes de cada go-live, testada no ar",
    },
    {
      criterio: "Quem se adapta",
      deles: "Você se adapta ao produto",
      nosso: "O produto se adapta a você",
    },
  ],
};

export const cases = [
  {
    codigo: "PROJETO 01",
    projeto: "CRM com agente de IA no WhatsApp",
    setor: "Concessionária de motos 0 km e seminovos · 2 unidades",
    prazo: "Do repositório vazio à conversa real em 24 horas",
    problema:
      "Lead chegando por WebMotors, iCarros, redes sociais e agência, cada um num lugar. Cada vendedor no celular próprio: vendedor saía, histórico ia junto. E ninguém sabia qual canal convertia.",
    entrega:
      "Plataforma única de atendimento, funil e agendamento para duas operações com funis, personas e fichas diferentes. Moto 0 km não é carro usado.",
    marcos: [
      { data: "14/08", texto: "Repositório e monorepo de pé, builds verdes" },
      { data: "15/08", texto: "Produção no ar e primeira conversa real, número pareado" },
      { data: "16/08", texto: "IA respondendo em produção e catálogo lido do PDF" },
      { data: "19/08", texto: "8 telas e 12 recursos entregues" },
    ],
    numeros: [
      { valor: "24 h", label: "do repositório à conversa real" },
      { valor: "12", label: "recursos no ar em 5 dias" },
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Claude API", "WhatsApp"],
  },
  {
    codigo: "PROJETO 02",
    projeto: "Portal de operações, fiscal e consolidação de rede",
    setor: "Distribuição e licenciamento de marcas · rede de dealers",
    prazo: "Entregue por fases, de maio a agosto de 2026",
    problema:
      "Operação de rede rodando em planilha e e-mail: pedido sem status, imposto recalculado na mão a cada mudança de regra, e rentabilidade por dealer que ninguém conseguia fechar. Cada casa mandava a própria planilha, em formato próprio, e o número mudava dependendo de quem consolidava.",
    entrega:
      "Sistema de gestão em monorepo, entregue por fases, mais o motor de consolidação da rede. A regra tributária virou cadastro: alíquota nova entra pelo painel, sem deploy, e a exceção por NCM convive com a regra geral do fornecedor. O motor roda em funções puras sobre uma lista achatada de itens, o que permite duas fontes e uma matemática só: banco de dados ou planilha entram pelo mesmo cálculo.",
    marcos: [
      { data: "Mai", texto: "Consolidação da rede no ar: receita, peças e ticket médio por dealer" },
      { data: "Jun", texto: "F1 concluída: infraestrutura, autenticação, papéis e design system" },
      { data: "Jul", texto: "Motor de consolidação absorvido pelo sistema, rodando sobre pedido real" },
      { data: "28/07", texto: "Split de Fornecedor: pedido separado por fábrica" },
      { data: "18/08", texto: "Regra tributária vira cadastro: CBS e IBS entram sem deploy" },
    ],
    numeros: [
      { valor: "41", label: "models no schema" },
      { valor: "28", label: "módulos de backend" },
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "shadcn/ui", "Recharts"],
  },
];

export const metodo = [
  {
    numero: "01",
    titulo: "Engenharia reversa do que já existe",
    texto:
      "Antes de qualquer preço, abrimos o que sustenta a decisão hoje. Numa proposta de plataforma de rentabilidade, isso significou dimensionar 38 abas, 12 DREs departamentais, cerca de 1.837 linhas de plano de contas e uns 350 indicadores. Tudo isso antes de o primeiro número sair.",
    marcador: "Ninguém orça o que não abriu.",
  },
  {
    numero: "02",
    titulo: "Escopo e preço a partir do custo base",
    texto:
      "Nenhum projeto é orçado do zero. Começa no custo base de sistema (infraestrutura, banco, IA, manutenção) e só depois soma o driver de consumo do seu caso. É por isso que a conta fecha no mês 12, e não só na assinatura.",
    marcador: "Preço com origem, não com chute.",
  },
  {
    numero: "03",
    titulo: "Construção em fases, com versão no ar cedo",
    texto:
      "Cada fase entrega algo utilizável. Você valida contra a operação de verdade em vez de aprovar tela em PDF. Foi assim que um CRM saiu de repositório vazio para conversa real de cliente em 24 horas.",
    marcador: "Software no ar vale mais que apresentação.",
  },
  {
    numero: "04",
    titulo: "Revisão de segurança antes de todo go-live",
    texto:
      "Cinco frentes conferidas antes de publicar: isolamento entre clientes, papel validado no servidor e não no front, acesso indevido por identificador, segredo exposto e entrada sem tratamento. E conferidas no ar. Um controle que parece ligado no código e não conta nada atrás do proxy é um controle que não existe.",
    marcador: "Controle se testa em produção.",
  },
];

export const engenharia = {
  stack: [
    { camada: "Frontend", valor: "Next.js (App Router) · TypeScript · Tailwind" },
    { camada: "Backend", valor: "NestJS · Prisma ORM" },
    { camada: "Banco", valor: "PostgreSQL · Redis" },
    { camada: "IA", valor: "Claude API, com o modelo escolhido por tarefa" },
    { camada: "Mensageria", valor: "WhatsApp · e-mail · disparos de rotina" },
    { camada: "Infra", valor: "Deploy que confirma a publicação, não que torce" },
  ],
  principios: [
    {
      titulo: "Multi-tenant desde o primeiro cliente",
      texto:
        "O núcleo serve concessionária, clínica e distribuidora. Se um vertical não usaria, não entra no núcleo: vira módulo. É o que faz o segundo cliente custar uma fração do primeiro.",
    },
    {
      titulo: "Custo de IA é decisão de arquitetura",
      texto:
        "Triagem em modelo barato, conversa em modelo bom, cache no que se repete. A diferença entre fazer certo e fazer no automático é a mensalidade do cliente dobrar ou não.",
    },
    {
      titulo: "O dado sujo é o padrão, não a exceção",
      texto:
        "Identificador que perde zero à esquerda, planilha que muda de formato, nome de perfil que não é o nome de quem escreve. Cada um desses já quebrou algo aqui, e virou regra escrita para não quebrar de novo.",
    },
    {
      titulo: "Publicar é um comando só",
      texto:
        "O mesmo comando em todos os projetos: sobe o backend, espera o healthcheck e só então sobe o frontend. Se o backend não voltar, o frontend não sobe.",
    },
  ],
};

export const socios = [
  {
    nome: "Caique Oliveira",
    papel: "Sócio · Tecnologia e Produto",
    texto:
      "Escreve o código e desenha o produto. Arquitetura multi-tenant, integração de dados e uso de IA com custo controlado.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Claude API"],
  },
  {
    nome: "Roger Sampaio",
    papel: "Sócio · Comercial e Clientes",
    texto:
      "Conduz a relação com o cliente do primeiro diagnóstico à operação rodando. Testa, aponta e aprova cada entrega antes de você ver.",
    tags: ["Diagnóstico", "Escopo", "Relacionamento", "Acompanhamento"],
  },
];

export const faq = [
  {
    p: "Vocês integram com o meu DMS?",
    r: "Quando o DMS expõe API, sim. Quando não expõe, e boa parte não expõe, trabalhamos com o que existe: exportação, XML de nota e importação resiliente de planilha. Antes de prometer integração, perguntamos ao fornecedor se a API existe. Prometer integração que não existe é o jeito mais rápido de estourar prazo.",
  },
  {
    p: "Quanto tempo até eu ver algo funcionando?",
    r: "A primeira fase entrega software utilizável, não maquete. O prazo depende do escopo, mas o compromisso é o mesmo em todo projeto: você valida contra a sua operação, não contra um PDF.",
  },
  {
    p: "Como vocês cobram?",
    r: "Projeto em fases mais mensalidade de operação. O preço parte de um custo base de sistema e soma o driver de consumo do seu caso: volume de usuários, de conversas, de unidades. Você recebe a conta aberta, não um valor redondo sem origem.",
  },
  {
    p: "O código é meu?",
    r: "A plataforma é da InnovAdapt, e é isso que permite evoluir o produto para todos os clientes. O que é seu continua seu: sua regra de negócio, seu dado, sua base, com cláusula de propriedade intelectual escrita no contrato, incluindo o que acontece se a gente sair de campo.",
  },
  {
    p: "E se eu já tiver um BI?",
    r: "Ótimo, continue com ele. BI responde o que aconteceu. O que construímos é o sistema que faz acontecer: o atendimento, o pedido, o cálculo e a cobrança. Os dois convivem, e o nosso costuma virar a fonte do seu BI.",
  },
  {
    p: "Vocês só atendem o setor automotivo?",
    r: "É onde temos mais quilometragem: concessionária, distribuição, rede de dealers e rentabilidade de operação. O núcleo é horizontal e já está sendo levado para outros verticais.",
  },
];
