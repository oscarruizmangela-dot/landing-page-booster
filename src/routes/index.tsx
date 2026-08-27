import { createFileRoute } from "@tanstack/react-router";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1600&q=80";
const MEETING_IMAGE =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80";
const EMAIL_IMAGE =
  "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=900&q=80";

const MEET_URL = "https://meetcalc.onrender.com/simulador-coste-reuniones.html?lang=es";
const MAIL_URL = "https://meetcalc.onrender.com/simulador-coste-hilos-email.html?lang=es";

const TITLE = "MeetCalc & MailCalc — El tiempo de tu equipo también tiene precio";
const DESCRIPTION =
  "Dos simuladores para poner en euros lo que cuestan las reuniones y los hilos de email. Perfiles, asistentes y minutos convertidos en un número que se entiende en cualquier comité.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
});

const ORGS = [
  { name: "Ajuntament de Montverd", sub: "Administración local" },
  { name: "Diputació de Vallterra", sub: "Administración provincial" },
  { name: "AQUANORD", sub: "Empresa Municipal de Aguas" },
  { name: "Ferrocarrils del Segre", sub: "FdS · Red ferroviaria regional" },
  { name: "Ayuntamiento de Puentealto", sub: "Administración local" },
  { name: "Consorci Metropolità de Serveis", sub: "CMS" },
];

const SIMULATORS = [
  {
    tag: "Reuniones",
    title: "¿Cuánto cuesta esta reunión?",
    body: "Asistentes por perfil, duración, retraso al empezar y modalidad presencial o remota, traducidos en euros al instante.",
    chips: ["Asistentes", "Duración", "Retraso", "Presencial / remota"],
    image: MEETING_IMAGE,
    alt: "Personas reunidas en una sala de reuniones",
    href: MEET_URL,
  },
  {
    tag: "Hilos de email",
    title: "¿Cuánto cuesta este hilo de emails?",
    body: "Participantes en Para y en CC, número de emails y palabras de cada uno, para medir el coste real de una conversación por escrito.",
    chips: ["Para / CC", "Nº de emails", "Palabras por email", "Atención en CC"],
    image: EMAIL_IMAGE,
    alt: "Persona escribiendo un email en el portátil",
    href: MAIL_URL,
  },
];

const TESTIMONIALS = [
  {
    product: "MeetCalc",
    quote:
      "En el primer trimestre redujimos un 30% las reuniones de más de cinco personas. Ver el coste en euros, en directo, cambió la conversación en los comités de dirección.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Marta Ribas",
    role: "Directora de Organización y Personas · Ajuntament de Montverd",
  },
  {
    product: "MailCalc",
    quote:
      "Empezamos a preguntarnos si un hilo de veinte respuestas con toda la plantilla en copia tenía sentido. MailCalc nos dio el argumento que nos faltaba para cambiarlo.",
    avatar:
      "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?auto=format&fit=crop&w=200&h=200&q=80",
    name: "Jordi Camps",
    role: "Responsable de Transformación Digital · Consorci Metropolità de Serveis",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-navy-50 font-dm text-navy-950 antialiased">
      <nav className="w-full border-b border-navy-950/5">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-sm bg-navy-800">
              <div className="size-2 rounded-full bg-navy-50"></div>
            </div>
            <span className="font-space text-lg font-semibold tracking-tight">
              Meet<span className="text-navy-600">Calc</span>
              <span className="mx-1.5 text-navy-950/20">·</span>
              Mail<span className="text-navy-600">Calc</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#simuladores"
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
            >
              Simuladores
            </a>
            <a
              href="#casos"
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
            >
              Casos de éxito
            </a>
            <span className="text-xs font-semibold uppercase tracking-widest text-navy-800/50">
              ES · CA
            </span>
          </div>
          <a
            href="#simuladores"
            className="rounded-md bg-navy-950 px-4 py-2 text-sm font-medium text-navy-50 ring-1 ring-navy-950 transition-colors hover:bg-navy-800"
          >
            Abrir simulador
          </a>
        </div>
      </nav>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-[52ch]">
            <span className="mb-5 inline-block rounded-sm bg-navy-600/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-navy-600">
              Calculadoras de coste · tiempo de empresa
            </span>
            <h1 className="mb-6 font-space text-4xl font-semibold leading-tight text-balance md:text-6xl">
              El tiempo de tu equipo también tiene precio.
            </h1>
            <p className="mb-8 text-lg text-navy-800/80 text-pretty md:text-xl">
              Dos simuladores para poner en euros lo que de verdad cuestan las
              reuniones y los hilos de email interminables. Perfiles, asistentes y
              minutos convertidos en un número que sí se entiende en cualquier comité.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={MEET_URL}
                className="flex items-center gap-2 rounded-md bg-navy-950 py-2 pl-2 pr-3 text-sm font-medium text-navy-50 ring-1 ring-navy-950 transition-colors hover:bg-navy-800"
              >
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 2v12l10-6-10-6z" />
                </svg>
                Calcular una reunión
              </a>
              <a
                href={MAIL_URL}
                className="rounded-md bg-navy-950/5 px-4 py-2 text-sm font-medium text-navy-950 ring-1 ring-black/5 transition-colors hover:bg-navy-950/10"
              >
                Calcular un hilo de emails
              </a>
            </div>
          </div>

          {/* Hero grid */}
          <div className="grid auto-rows-[240px] grid-cols-12 gap-4">
            <div className="col-span-12 row-span-2 flex flex-col overflow-hidden rounded-xl bg-zinc-50/50 ring-1 ring-black/5 md:col-span-8">
              <div className="flex items-center justify-between border-b border-navy-950/5 bg-zinc-50/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-navy-800/60">
                    Coste real del tiempo de trabajo
                  </span>
                </div>
                <div className="rounded-sm bg-navy-600/10 px-2 py-1 text-xs font-medium text-navy-600">
                  Cálculo en directo
                </div>
              </div>
              <div className="flex-1 overflow-hidden p-4 md:p-6">
                <img
                  src={HERO_IMAGE}
                  alt="Equipo reunido alrededor de una mesa de trabajo"
                  width={1600}
                  height={900}
                  loading="eager"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 flex flex-col justify-between rounded-xl bg-zinc-50/50 p-6 ring-1 ring-black/5 md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-navy-800/60">
                Un único motor de perfiles
              </span>
              <div className="font-space text-5xl font-semibold text-navy-950">€/h</div>
              <p className="text-pretty text-sm text-navy-800/70">
                Bruto/año convertido a coste real por hora. Defínelo una vez y aplícalo
                en los dos simuladores.
              </p>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-4">
              <div className="flex flex-col justify-between rounded-xl bg-zinc-50/50 p-5 ring-1 ring-black/5">
                <span className="font-space text-4xl font-semibold">2</span>
                <p className="text-xs text-navy-800/70">
                  Simuladores: reuniones y correo electrónico
                </p>
              </div>
              <div className="flex flex-col justify-between rounded-xl bg-zinc-50/50 p-5 ring-1 ring-black/5">
                <span className="font-space text-2xl font-semibold">CA·ES</span>
                <p className="text-xs text-navy-800/70">
                  Disponible en catalán y castellano
                </p>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-navy-800/50">
              Descubre quién ya confía en nuestras soluciones
            </p>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-navy-950/5 ring-1 ring-black/5 sm:grid-cols-3 lg:grid-cols-6">
              {ORGS.map((org) => (
                <div key={org.name} className="bg-zinc-50/60 px-4 py-5">
                  <p className="font-space text-sm font-medium leading-snug">{org.name}</p>
                  <p className="mt-1 text-[11px] text-navy-800/60">{org.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="simuladores" className="border-t border-navy-950/5 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-navy-600">
            Elige un simulador
          </span>
          <h2 className="mt-3 font-space text-3xl font-semibold md:text-4xl">
            ¿Qué quieres calcular?
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-navy-800/80">
            Ambos comparten el mismo motor de perfiles (bruto/año → €/h): defínelos una
            vez y aplícalos donde los necesites.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SIMULATORS.map((sim) => (
              <a
                key={sim.tag}
                href={sim.href}
                className="group flex flex-col overflow-hidden rounded-xl bg-zinc-50/60 ring-1 ring-black/5 transition-colors hover:bg-zinc-50"
              >
                <img
                  src={sim.image}
                  alt={sim.alt}
                  width={900}
                  height={500}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-navy-600">
                    {sim.tag}
                  </span>
                  <h3 className="mt-2 font-space text-xl font-medium">{sim.title}</h3>
                  <p className="mt-3 text-pretty text-sm text-navy-800/75">{sim.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {sim.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-sm bg-navy-950/5 px-2 py-1 text-[11px] font-medium text-navy-800/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-950">
                    Abrir simulador
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="border-t border-navy-950/5 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-navy-600">
            Casos de éxito
          </span>
          <h2 className="mt-3 font-space text-3xl font-semibold md:text-4xl">
            Organizaciones que ya han puesto precio a su tiempo
          </h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-navy-800/80">
            Ejemplos ilustrativos de cómo equipos reales podrían usar MeetCalc y
            MailCalc para cambiar sus hábitos.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-xl bg-zinc-50/60 p-6 ring-1 ring-black/5"
              >
                <span className="w-fit rounded-sm bg-navy-600/10 px-2 py-1 text-xs font-medium text-navy-600">
                  {t.product}
                </span>
                <blockquote className="mt-5 text-pretty text-navy-800/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-950/5 pt-5">
                  <img
                    src={t.avatar}
                    alt={`Retrato de ${t.name}`}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-navy-800/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-navy-950/5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-sm bg-navy-800"></div>
            <span className="font-space text-sm font-semibold tracking-tight">
              MeetCalc · MailCalc
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href={MEET_URL}
              className="text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-950"
            >
              Simulador de reuniones
            </a>
            <a
              href={MAIL_URL}
              className="text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-950"
            >
              Simulador de hilos de email
            </a>
          </div>
          <p className="text-xs text-navy-800/40">
            © {new Date().getFullYear()} MeetCalc · MailCalc
          </p>
        </div>
      </footer>
    </div>
  );
}
