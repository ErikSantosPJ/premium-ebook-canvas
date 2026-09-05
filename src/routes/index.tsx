import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Microscope,
  Layers,
  Compass,
  Activity,
  FlaskConical,
  BookOpen,
  Library,
  BookMarked,
  Package,
  Star,
  Lock,
  Clock,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-regeneration.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import authorPhoto from "@/assets/autor.png";
import molecular from "@/assets/texture-molecular.jpg";


export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CHECKOUT_URL = "https://hotm.io/jMbG8b8j";
const COMBO_URL = "https://pay.hotmart.com/N105770857X?off=4wihtw2s&checkoutMode=10&bid=1788213100496";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBar />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Method4A />
      <InlineCta
        text="O Método 4A completo está no e-book base."
        label="Ver a oferta"
        href="#comprar"
      />
      <Ecosystem />
      <InlineCta
        text="Prefere começar com os três materiais juntos?"
        label="Ver o combo dos 3"
        href="#combo"
      />
      <Chapters />
      <ForWhom />
      <Author />
      <Pricing />
      <Bundle />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- Top Bar ---------- */
function TopBar() {
  return (
    <div className="border-b border-gold/10 bg-background/60 backdrop-blur-xl sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <DnaMark />
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">
            Método 4A · Erik dos Santos
          </div>
        </div>
        <a
          href="#comprar"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold/20 transition"
        >
          Garantir acesso <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function DnaMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent">
        <span className="text-gold font-display text-lg leading-none">4A</span>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3 w-3" /> E-book base — Produto 1 do ecossistema
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Cosmetologia
            <br />
            <span className="italic text-gold-gradient">Regenerativa</span>
            <br />
            Aplicada.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Do raciocínio clínico à prática magistral. O <span className="text-foreground">Método 4A</span>{" "}
            é a estrutura de pensamento que transforma sua cosmetologia em algo previsível, reprodutível e
            fundamentado em processos biológicos reais.
          </p>

          <blockquote className="mt-8 border-l-2 border-gold/60 pl-5 font-display italic text-xl text-foreground/90">
            "Não é sobre o ativo. É sobre o raciocínio."
          </blockquote>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#comprar"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold-gradient px-6 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:w-auto sm:px-8 sm:text-xs sm:tracking-widest"
            >
              <span className="whitespace-nowrap">Quero o e-book por R$ 187</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5 shrink-0 text-gold" />
              <span>Compra 100% segura · Acesso imediato</span>
            </div>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-gold/10 pt-6">
            <Stat n="8" label="Capítulos" />
            <Stat n="4A" label="O método" />
            <Stat n="∞" label="Aplicações clínicas" />
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-none lg:mx-0">
          <div className="pointer-events-none absolute inset-x-6 bottom-4 h-20 rounded-full bg-gold/25 blur-3xl sm:inset-x-10 sm:h-24" />
          <img
            src={ebookMockup}
            alt="Capa do e-book Cosmetologia Regenerativa - Método 4A"
            width={1000}
            height={1400}
            className="relative h-auto w-full max-w-[280px] animate-float object-contain drop-shadow-[0_35px_50px_rgba(80,55,40,0.3)] sm:max-w-[360px] lg:max-w-[440px] xl:max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold">{n}</div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [
    "Modulação Inflamatória",
    "Barreira Cutânea",
    "Microbioma",
    "Estresse Oxidativo",
    "Sinalização Celular",
    "Regeneração Tecidual",
    "Raciocínio Clínico",
  ];
  return (
    <div className="border-y border-gold/15 bg-surface/50 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((i, idx) => (
          <span
            key={idx}
            className="font-display italic text-lg text-muted-foreground/80 flex items-center gap-12 pr-12 whitespace-nowrap"
          >
            {i} <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const pains = [
    "Você pesquisa um ativo promissor, inclui na fórmula, espera resultado... e nada.",
    "Trocou o ativo, testou outro, entrou num ciclo de tentativa e erro sem fim.",
    "O paciente cede pelo preço, porque ninguém consegue mostrar diferença real.",
    "O modelo tradicional reduz problemas complexos a soluções simplistas.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="mb-14 max-w-3xl">
        <Eyebrow>O diagnóstico</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Não é você. É o <span className="italic text-gold-gradient">modelo</span> que te ensinaram.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Melasma → ácido tranexâmico. Acne → salicílico. Envelhecimento → retinol. Esse modelo é perigoso
          porque ignora o que está acontecendo por baixo da queixa visível: inflamação crônica, barreira
          comprometida, microbioma desregulado, estresse oxidativo acumulado.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pains.map((p) => (
          <div
            key={p}
            className="group flex gap-4 rounded-xl border border-border bg-surface/40 p-6 backdrop-blur transition hover:border-gold/40"
          >
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive/70 shadow-[0_0_16px] shadow-destructive/50" />
            <p className="text-foreground/90 leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </div>
  );
}

/* ---------- Solution ---------- */
function Solution() {
  const rows = [
    ["Objetivo", "Hidratar e suavizar", "Reparar e regenerar"],
    ["Efeito", "Temporário, superficial", "Ação em nível celular"],
    ["Produtos", "Prateleira padronizada", "Fórmulas personalizadas"],
    ["Foco", "Ativo isolado para queixa", "Processo biológico + estratégia"],
    ["Resultado", "Melhora transitória", "Restauração estrutural duradoura"],
    ["Decisão", "Tendência e hábito", "Raciocínio clínico"],
  ];
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={molecular}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>A quebra de paradigma</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A diferença não está nos produtos.
            <br />
            <span className="italic text-gold-gradient">Está na lógica de pensamento.</span>
          </h2>
        </div>

        {/* Mobile: cards empilhados */}
        <div className="space-y-3 md:hidden">
          {rows.map(([a, b, c]) => (
            <div key={a} className="rounded-2xl border border-gold/20 bg-surface/60 p-5 backdrop-blur">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">{a}</div>
              <div className="mt-3 space-y-3">
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Estética Tradicional
                  </div>
                  <div className="mt-1 text-sm leading-snug text-muted-foreground line-through decoration-destructive/50 decoration-1">
                    {b}
                  </div>
                </div>
                <div className="h-px w-full bg-gold/10" />
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                    Cosmetologia Regenerativa
                  </div>
                  <div className="mt-1 text-sm leading-snug text-foreground">{c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet / Desktop: tabela */}
        <div className="hidden overflow-hidden rounded-2xl border border-gold/20 bg-surface/60 backdrop-blur md:block">
          <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-gold/20 bg-surface-elevated/70 text-[0.6rem] uppercase tracking-[0.18em] lg:text-[0.7rem] lg:tracking-[0.25em]">
            <div className="p-4 text-muted-foreground lg:p-5">Aspecto</div>
            <div className="border-l border-gold/10 p-4 text-muted-foreground lg:p-5">Estética Tradicional</div>
            <div className="border-l border-gold/10 p-4 text-gold lg:p-5">Cosmetologia Regenerativa</div>
          </div>
          {rows.map(([a, b, c], i) => (
            <div
              key={a}
              className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] text-sm lg:text-base ${
                i !== rows.length - 1 ? "border-b border-gold/10" : ""
              }`}
            >
              <div className="p-4 font-display text-foreground lg:p-5">{a}</div>
              <div className="border-l border-gold/10 p-4 leading-snug text-muted-foreground line-through decoration-destructive/50 decoration-1 lg:p-5">
                {b}
              </div>
              <div className="border-l border-gold/10 p-4 leading-snug text-foreground lg:p-5">{c}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Method 4A ---------- */
function Method4A() {
  const steps = [
    {
      letter: "A1",
      title: "Alinhar a Base",
      icon: Layers,
      description:
        "Antes de qualquer ativo estrela, você alinha inflamação, barreira cutânea e microbioma. Sem base alinhada, qualquer ativo é paliativo.",
      pills: ["Inflamação", "Barreira", "Microbioma"],
    },
    {
      letter: "A2",
      title: "Aprender os Ativos",
      icon: FlaskConical,
      description:
        "Não decore ativos — compreenda-os por 4 perguntas fundamentais. Pense por categoria funcional, não por moda.",
      pills: ["4 perguntas", "Categorias", "Compreensão"],
    },
    {
      letter: "A3",
      title: "Avaliar o Caso",
      icon: Microscope,
      description:
        "Roteiro clínico com pensamento em camadas. Da queixa ao processo alterado, do processo à estratégia.",
      pills: ["Roteiro", "3 camadas", "Estratégia"],
    },
    {
      letter: "A4",
      title: "Acompanhar",
      icon: Activity,
      description:
        "Observar, reavaliar, ajustar (não trocar), documentar e comunicar. Sem acompanhamento, você só espera que tenha dado certo.",
      pills: ["Observar", "Ajustar", "Documentar"],
    },
  ];
  return (
    <section id="metodo" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="mb-16 max-w-3xl">
        <Eyebrow>O coração do livro</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          O <span className="italic text-gold-gradient">Método 4A</span>: uma sequência lógica que funciona
          em qualquer cenário clínico.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <div
            key={s.letter}
            className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-8 backdrop-blur transition hover:border-gold/40"
          >
            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/15" />
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Etapa {i + 1} de 4
                </div>
                <div className="mt-3 flex items-baseline gap-4">
                  <span className="font-display text-6xl text-gold-gradient">{s.letter}</span>
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                </div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/5">
                <s.icon className="h-5 w-5 text-gold" />
              </div>
            </div>
            <p className="relative mt-6 text-muted-foreground leading-relaxed">{s.description}</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {s.pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold/90"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Ecosystem ---------- */
function Ecosystem() {
  const books = [
    {
      n: "01",
      title: "Método 4A",
      subtitle: "E-book base",
      icon: Compass,
      description:
        "A fundação do ecossistema. A estrutura de raciocínio clínico que transforma prescrição em processo: Alinhar, Aprender, Avaliar e Acompanhar.",
      highlight: "Raciocínio clínico",
    },
    {
      n: "02",
      title: "Banco de Ativos",
      subtitle: "Produto 2",
      icon: Library,
      description:
        "Domínio técnico dos ativos que fazem sentido na regeneração: PDRN, BioPDRN, exossomos vegetais, K Somes, microbioma e muito mais — com ciência por trás de cada um.",
      highlight: "Domínio técnico",
    },
    {
      n: "03",
      title: "Banco de Fórmulas",
      subtitle: "Produto 3",
      icon: BookMarked,
      description:
        "150 fórmulas magistrais comentadas por queixa. A ponte entre o raciocínio e a prática real, com o raciocínio por trás de cada combinação.",
      highlight: "Prática magistral",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <Eyebrow>Trilogia completa</Eyebrow>
        </div>
        <h2 className="mx-auto mb-6 max-w-3xl text-center font-display text-4xl leading-tight sm:text-5xl">
          3 e-books que formam o ecossistema da{" "}
          <span className="italic text-gold-gradient">Cosmetologia Regenerativa</span>.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed">
          O Método 4A é a base. O Banco de Ativos te dá o domínio técnico. O Banco de Fórmulas te entrega a
          aplicação prática. Juntos, cobrem do raciocínio clínico à prescrição real.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {books.map((b) => (
            <div
              key={b.n}
              className="group relative flex flex-col rounded-2xl border border-gold/15 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-8 backdrop-blur transition hover:border-gold/40"
            >
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition group-hover:bg-gold/15" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="font-display text-5xl text-gold/40">{b.n}</div>
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/5">
                    <b.icon className="h-5 w-5 text-gold" />
                  </div>
                </div>
                <div className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-gold">{b.subtitle}</div>
                <h3 className="mt-2 font-display text-2xl text-foreground">{b.title}</h3>
                <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">{b.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold/90">
                  <Star className="h-3 w-3" /> {b.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gold/20 bg-surface/40 p-8 text-center md:p-10">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/90">
            <span className="font-semibold text-gold">Por que os 3 juntos?</span> Porque prescrever sem
            raciocínio é tentativa e erro. Conhecer ativos sem estratégia é acumulação de informação. E ter
            fórmulas sem entender o raciocínio por trás delas é copiar sem critério. Os 3 materiais se
            conversam — e é nessa conversa que sua prescrição ganha previsibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Chapters ---------- */
function Chapters() {
  const chapters = [
    { n: "01", t: "O Que É Cosmetologia Regenerativa", d: "Definição, filosofia e os 5 pilares da regeneração cutânea." },
    { n: "02", t: "O Erro da Estética Tradicional", d: "Do pensamento por ativo à mudança para processo." },
    { n: "03", t: "Raciocínio por Processos Biológicos", d: "A pele como ecossistema e os 12 marcadores do envelhecimento." },
    { n: "04", t: "O Método 4A", d: "Alinhar, Aprender, Avaliar, Acompanhar — com exemplos práticos." },
    { n: "05", t: "Como Montar uma Estratégia", d: "Do processo alterado à fórmula, em 6 passos." },
    { n: "06", t: "Como Associar Ativos", d: "Complementaridade, sinergia, base e permeabilidade." },
    { n: "07", t: "Os 7 Erros Mais Comuns", d: "E como o Método 4A te protege de cada um deles." },
    { n: "08", t: "Como Sair da Tentativa e Erro", d: "Os ciclos a quebrar e as 3 mudanças de mentalidade." },
  ];
  return (
    <section className="border-y border-gold/10 bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>O que você vai ler</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              8 capítulos que reorganizam <span className="italic text-gold-gradient">tudo</span> o que
              você sabe sobre estética.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 text-gold" /> +34 páginas · leitura estratégica
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((c) => (
            <div
              key={c.n}
              className="group flex gap-6 rounded-xl border border-border bg-surface/40 p-6 transition hover:border-gold/40 hover:bg-surface-elevated/60"
            >
              <div className="font-display text-4xl text-gold/60 group-hover:text-gold transition min-w-[3rem]">
                {c.n}
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- For Whom ---------- */
function ForWhom() {
  const yes = [
    "Esteticista que quer prescrever com raciocínio, não com moda.",
    "Cosmetóloga cansada da tentativa e erro nas fórmulas magistrais.",
    "Profissional que atende casos complexos: melasma recidivante, acne, envelhecimento.",
    "Quem quer se diferenciar num mercado de profissionais uniformes.",
    "Quem entende que estética de verdade é regeneração, reparo e transformação celular.",
  ];
  const no = [
    "Quem quer decorar ativos da moda.",
    "Quem procura fórmulas prontas para copiar.",
    "Quem acredita em 'sérum das fadas' e 'botox natural'.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="mb-14 max-w-3xl">
        <Eyebrow>Para quem é</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Este material foi feito para pensar como <span className="italic text-gold-gradient">clínica</span>.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20">
              <Check className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-display text-2xl text-gold">Você se reconhece se...</h3>
          </div>
          <ul className="mt-6 space-y-4">
            {yes.map((y) => (
              <li key={y} className="flex gap-3 text-foreground/90 leading-relaxed">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                {y}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface/40 p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-muted">
              <span className="text-muted-foreground">×</span>
            </div>
            <h3 className="font-display text-2xl text-muted-foreground">Não é para...</h3>
          </div>
          <ul className="mt-6 space-y-4">
            {no.map((n) => (
              <li key={n} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="mt-1 text-destructive/70">×</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Author ---------- */
function Author() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 opacity-30">
        <img src={molecular} alt="" aria-hidden className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Eyebrow>O autor</Eyebrow>
        <div className="relative mx-auto mt-8 w-[180px] sm:w-[220px]">
          <div className="absolute inset-0 rounded-full bg-gold/25 blur-2xl" aria-hidden />
          <img
            src={authorPhoto}
            alt="Erik dos Santos, autor do e-book Cosmetologia Regenerativa Aplicada"
            className="relative w-full rounded-full border border-gold/30 bg-surface/60 object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
        <h2 className="mt-8 font-display text-4xl sm:text-5xl">Erik dos Santos</h2>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gold">Cosmetologia Regenerativa</p>
        <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Erik une ciência, raciocínio clínico e prática magistral em um método próprio que tira a
          cosmetologia do lugar de tentativa e erro. O e-book é o produto base do ecossistema — a fundação
          para uma estética que trata processo, não sintoma.
        </p>

        <blockquote className="mt-10 mx-auto max-w-3xl border-t border-b border-gold/20 py-8 font-display italic text-2xl sm:text-3xl text-foreground/90">
          "Nome bonito não regenera célula. Ciência sim."
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- Testimonials (placeholder — reais em breve) ---------- */
function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-gold/20 bg-surface/50 p-10 text-center lg:p-14">
        <Eyebrow>Ecos da prática</Eyebrow>
        <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
          Depoimentos de profissionais que aplicaram o{" "}
          <span className="italic text-gold-gradient">Método 4A</span> em breve.
        </h2>
        <p className="mt-5 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          Estamos organizando os relatos recebidos de cosmetólogas, esteticistas e farmacêuticas
          magistrais que já aplicam o método no consultório e na manipulação. Este espaço será atualizado
          em breve com falas reais — nada de frases inventadas.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold/60" />
          Atualização em curso
          <span className="h-px w-8 bg-gold/60" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const bullets = [
    "E-book completo — 8 capítulos, +34 páginas",
    "Método 4A completo com exemplos clínicos",
    "Roteiro de avaliação e pensamento em camadas",
    "Guia de associação de ativos com 4 princípios",
    "7 erros mais comuns e como se proteger deles",
    "Acesso imediato · leitura vitalícia",
  ];
  return (
    <section id="comprar" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Eyebrow>Sua entrada no ecossistema</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Do raciocínio clínico à <span className="italic text-gold-gradient">prática magistral</span>.
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-surface-elevated/90 to-surface/50 shadow-[var(--shadow-elegant)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                <Zap className="h-3 w-3" /> Oferta de lançamento
              </div>
              <h3 className="mt-5 font-display text-3xl">
                E-book Cosmetologia Regenerativa
                <br />
                <span className="text-gold-gradient italic">Método 4A</span>
              </h3>

              <ul className="mt-7 space-y-3.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground/90">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15">
                      <Check className="h-3 w-3 text-gold" />
                    </div>
                    <span className="text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative border-t border-gold/20 bg-background/50 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">De</div>
              <div className="mt-1 font-display text-2xl text-muted-foreground line-through decoration-destructive/60 sm:text-3xl">
                R$ 247,00
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">Por apenas</div>
              <div className="mt-2 flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-display text-5xl leading-none text-gold-gradient sm:text-6xl">R$ 187</span>
                <span className="font-display text-xl text-gold/70 sm:text-2xl">,00</span>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                ou <span className="font-medium text-foreground">10x de R$ 22,03</span> no cartão
              </div>

              <a
                href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gold-gradient px-4 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:px-6 sm:text-sm sm:tracking-widest"
              >
                <span className="whitespace-nowrap">Quero começar agora</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <div className="mt-5 flex flex-col gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold" /> Garantia incondicional de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-gold" /> Acesso liberado em minutos
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-gold" /> Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Bundle ---------- */
function Bundle() {
  const items = [
    { name: "E-book Cosmetologia Regenerativa — Método 4A", original: 247, combo: 187 },
    { name: "Banco de Ativos da Cosmetologia Regenerativa", original: 97, combo: 47 },
    { name: "Banco de Fórmulas Magistrais", original: 87, combo: 37 },
  ];
  const totalOriginal = items.reduce((s, i) => s + i.original, 0);
  const totalCombo = items.reduce((s, i) => s + i.combo, 0);
  const economia = totalOriginal - totalCombo;

  return (
    <section id="combo" className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={molecular}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 text-center">
          <Eyebrow>Oferta de ecossistema</Eyebrow>
        </div>
        <h2 className="mx-auto mb-6 max-w-3xl text-center font-display text-4xl leading-tight sm:text-5xl">
          Leve os <span className="italic text-gold-gradient">3 e-books</span> juntos e complete sua
          formação.
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed">
          Quem parte pela base e quer ir além leva o ecossistema completo. Você economiza e ainda recebe os
          três materiais com a mesma qualidade e acesso imediato.
        </p>

        <div className="overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-surface-elevated/90 to-surface/50 shadow-[var(--shadow-elegant)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                <Package className="h-3 w-3" /> Combo dos 3 e-books
              </div>
              <h3 className="mt-5 font-display text-2xl lg:text-3xl">
                Ecossistema Cosmetologia Regenerativa Aplicada
              </h3>

              <ul className="mt-7 space-y-3.5">
                {items.map((it) => (
                  <li key={it.name} className="flex items-start justify-between gap-4 text-foreground/90">
                    <span className="text-sm leading-snug sm:text-base">{it.name}</span>
                    <div className="shrink-0 text-right">
                      <span className="block text-xs text-muted-foreground line-through decoration-destructive/60">
                        R$ {it.original},00
                      </span>
                      <span className="block text-sm font-medium text-gold">R$ {it.combo},00</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-sm text-emerald">
                <Sparkles className="h-3.5 w-3.5" /> Economia de R$ {economia},00
              </div>
            </div>

            <div className="relative border-t border-gold/20 bg-background/50 p-8 lg:border-l lg:border-t-0 lg:p-12">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Valor total de</div>
              <div className="mt-1 font-display text-2xl text-muted-foreground line-through decoration-destructive/60 sm:text-3xl">
                R$ {totalOriginal},00
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">No combo por apenas</div>
              <div className="mt-2 flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-display text-5xl leading-none text-gold-gradient sm:text-6xl">
                  R$ {totalCombo}
                </span>
                <span className="font-display text-xl text-gold/70 sm:text-2xl">,00</span>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                ou em até <span className="font-medium text-foreground">10x no cartão</span>
              </div>

              <a
                href={COMBO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gold-gradient px-4 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:px-6 sm:text-sm sm:tracking-widest"
              >
                <span className="whitespace-nowrap">Quero os 3 e-books</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <div className="mt-5 flex flex-col gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold" /> Garantia incondicional de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-gold" /> Acesso liberado em minutos
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-gold" /> Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Guarantee ---------- */
function Guarantee() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 rounded-3xl border border-gold/20 bg-surface/40 p-10 md:grid-cols-[auto_1fr] md:items-center lg:p-14">
        <div className="grid h-32 w-32 place-items-center rounded-full border-2 border-gold/40 bg-gradient-to-br from-gold/20 to-transparent">
          <div className="text-center">
            <div className="font-display text-4xl text-gold-gradient">7</div>
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">Dias</div>
          </div>
        </div>
        <div>
          <Eyebrow>Garantia incondicional</Eyebrow>
          <h3 className="mt-3 font-display text-3xl">
            Leia. Aplique. Se não fizer sentido, devolvo cada centavo.
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Você tem 7 dias para mergulhar no Método 4A. Se em qualquer momento sentir que o material não
            entrega o que promete, é só mandar um e-mail — reembolso integral, sem perguntas, sem
            burocracia. O risco é 100% meu.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Preciso de formação prévia?",
      a: "O e-book é escrito para esteticistas, cosmetólogas e farmacêuticos magistrais. Mas qualquer profissional que trabalhe com pele e queira raciocinar clinicamente vai extrair valor.",
    },
    {
      q: "Vem com fórmulas prontas?",
      a: "Não. E esse é o ponto. Fórmulas prontas mantêm você presa à tentativa e erro. O Método 4A te dá algo maior: a estrutura de pensamento para construir suas próprias estratégias.",
    },
    {
      q: "Como recebo o acesso?",
      a: "Assim que o pagamento é aprovado, você recebe o acesso digital no e-mail. Leitura vitalícia — pode voltar quantas vezes quiser.",
    },
    {
      q: "Tem suporte e continuação?",
      a: "Este é o produto base do ecossistema Método 4A. Novos materiais e aprofundamentos estão em construção — quem entra pela base tem prioridade.",
    },
    {
      q: "E se eu não gostar?",
      a: "Garantia incondicional de 7 dias. Você pede o reembolso e recebe 100% do valor de volta, sem burocracia e sem perguntas.",
    },
    {
      q: "Quais formas de pagamento?",
      a: "Cartão de crédito em até 10x de R$ 22,03, Pix ou boleto. No Pix e no cartão à vista o acesso é liberado na hora: R$ 187,00.",
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim. A compra é processada pela Hotmart, plataforma líder em produtos digitais no Brasil. Nós não temos acesso aos dados do seu cartão.",
    },
    {
      q: "Em que formato recebo?",
      a: "PDF em alta resolução, otimizado para leitura no celular, tablet, computador ou impresso. Download imediato e ilimitado.",
    },
    {
      q: "Quanto tempo leva pra ler?",
      a: "É uma leitura densa mas objetiva: dá para concluir em poucas horas. A ideia, porém, é usar como material de consulta no dia a dia do atendimento.",
    },
    {
      q: "Serve para quem já atende?",
      a: "Especialmente. Se você já atende e sente que os resultados oscilam sem explicação, o Método 4A organiza o seu raciocínio e traz previsibilidade aos protocolos.",
    },
    {
      q: "Posso emitir nota fiscal?",
      a: "Sim. A Hotmart disponibiliza o comprovante de compra e a nota fiscal, o que permite lançar o valor como investimento profissional.",
    },
    {
      q: "Preciso comprar produtos?",
      a: "Não. O conteúdo é independente de marca. Você aprende a avaliar ativos e escolher o que faz sentido para cada pele — com o que já tem disponível.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-6 sm:py-24">
      <div className="mb-10 text-center sm:mb-12">
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl">Ainda tem dúvidas?</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-surface/40 px-4 transition data-[state=open]:border-gold/40 data-[state=open]:bg-surface-elevated/60 sm:px-6"
          >
            <AccordionTrigger className="gap-4 py-5 text-left font-display text-base leading-snug text-foreground hover:no-underline sm:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}


/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <Compass className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
          O próximo passo <br className="hidden sm:block" />
          <span className="italic text-gold-gradient">começa agora.</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Você já entendeu que o problema não é o ativo — é o raciocínio. O Método 4A te dá a estrutura
          para nunca mais prescrever no escuro.
        </p>
        <a
          href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
          className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-gold-gradient px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:w-auto sm:px-10 sm:py-5 sm:text-sm sm:tracking-widest"
        >
          <span className="whitespace-nowrap">Quero o e-book por R$ 187</span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </a>
        <p className="mt-5 text-xs text-muted-foreground">
          ou 10x de R$ 22,03 · garantia de 7 dias · acesso imediato
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <DnaMark />
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Método 4A © {new Date().getFullYear()} · Erik dos Santos
          </div>
        </div>
        <div className="text-xs text-muted-foreground">Cosmetologia Regenerativa Aplicada</div>
      </div>
    </footer>
  );
}
