import Link from "next/link";
import { MessageSquare, MapPin, Star, ChevronRight, Sparkles, Brain, Globe } from "lucide-react";

export const metadata = {
  title: "Concierge Restaurants | IA para tu negocio gastronómico",
  description: "Potencia tu restaurante con inteligencia artificial. AEO, presencia en Ask Maps, ChatGPT y motores generativos.",
};

const stats = [
  { value: "40%", label: "más tráfico IA local" },
  { value: "10", label: "días de entrega" },
  { value: "3x", label: "más menciones en IA" },
  { value: "500+", label: "negocios optimizados" },
];

const features = [
  {
    icon: Brain,
    title: "AEO — Answer Engine Optimization",
    desc: "Optimizamos tu contenido y datos estructurados para que ChatGPT, Perplexity y Google AI te elijan como la respuesta.",
  },
  {
    icon: MapPin,
    title: "Ask Maps Presence",
    desc: "Tu negocio visible en Google Ask Maps y AI Overviews. Los clientes te encuentran sin buscar — la IA los guía hasta ti.",
  },
  {
    icon: MessageSquare,
    title: "Concierge AI 24/7",
    desc: "Un chatbot inteligente que conoce tu menú, horarios y reservas. Responde al instante en tu web y WhatsApp.",
  },
  {
    icon: Globe,
    title: "JSON-LD & Datos Estructurados",
    desc: "Implementamos el marcado semántico exacto que los motores generativos necesitan para leer y citar tu negocio.",
  },
];

const steps = [
  { n: "01", title: "Auditoría AI", desc: "Medimos cómo te describe la IA hoy y detectamos las brechas de visibilidad." },
  { n: "02", title: "Optimización", desc: "Implementamos JSON-LD, feeds y contenido semántico en 10 días." },
  { n: "03", title: "Activación", desc: "Tu negocio aparece en Ask Maps, ChatGPT y motores generativos." },
  { n: "04", title: "Resultados", desc: "Reportes de visibilidad mensual. Ajustamos y escalamos continuamente." },
];

const testimonials = [
  {
    name: "Andrés Morales",
    role: "Chef & Propietario, La Leña",
    quote: "En 2 semanas empezamos a aparecer cuando alguien le preguntaba a ChatGPT 'mejores asados en Palermo'. Increíble.",
    rating: 5,
  },
  {
    name: "Valentina Cruz",
    role: "Directora, Grupo Gastro BA",
    quote: "Nuestros 4 restaurantes ahora tienen presencia consolidada en todos los motores de IA. El tráfico orgánico subió 38%.",
    rating: 5,
  },
  {
    name: "Marco Pellegrini",
    role: "Gerente, Trattoria Moderna",
    quote: "El concierge AI redujo las llamadas repetitivas un 60%. El equipo se enfoca en lo que importa: la experiencia en mesa.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Concierge AI
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <Link href="/aeo" className="hover:text-gray-900 transition-colors">AEO</Link>
            <Link href="/aeo/demo" className="hover:text-gray-900 transition-colors">Demo</Link>
            <Link href="#como-funciona" className="hover:text-gray-900 transition-colors">Como funciona</Link>
          </div>
          <Link
            href="/aeo"
            className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Auditoria gratis
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            IA para restaurantes
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Tu restaurante en la<br />
            <span className="text-amber-500">mente de la IA</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Google Ask Maps, ChatGPT y Perplexity ya eligen que negocios recomendar.
            Hacemos que el tuyo sea la respuesta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aeo"
              className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              Solicitar auditoria AI <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/aeo/demo"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-gray-400 transition-all flex items-center justify-center gap-2"
            >
              Ver demo en vivo
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Restaurante moderno"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-amber-400 mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas para dominar la IA</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Un stack completo de visibilidad generativa, disenado exclusivamente para negocios gastronomicos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">De invisible a inevitable</h2>
            <p className="text-gray-500 text-lg">Cuatro pasos. Diez dias. Resultados medibles.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="text-5xl font-black text-amber-200 mb-3">{step.n}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visibilidad AI Express</h2>
          <p className="text-gray-500 text-lg mb-12">Sin contratos largos. Sin sorpresas. Resultados en 10 dias.</p>
          <div className="border-2 border-amber-400 rounded-2xl p-10 shadow-xl">
            <div className="text-sm font-semibold text-amber-600 tracking-widest uppercase mb-4">Plan Express</div>
            <div className="text-6xl font-black text-gray-900 mb-2">USD 490</div>
            <div className="text-gray-400 text-sm mb-8">pago unico · entrega en 10 dias habiles</div>
            <ul className="text-left space-y-3 mb-10 max-w-sm mx-auto">
              {[
                "Auditoria AEO en motores generativos",
                "Implementacion JSON-LD completa",
                "Integracion con Google Ask Maps",
                "Feed AI para Concierge",
                "Reporte de visibilidad + proximos pasos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/aeo"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg"
            >
              Contratar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Empieza hoy. Gratis.</h2>
          <p className="text-gray-400 text-lg mb-10">
            Medimos tu presencia conversacional sin costo y te mostramos exactamente donde la IA te ignora.
          </p>
          <Link
            href="/aeo"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg text-lg"
          >
            Solicitar auditoria gratuita <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-gray-600">Concierge AI by Multicomm.ai</span>
        </div>
        <p>2026 Multicomm.ai — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
