import Link from "next/link";

export const metadata = {
  title: "AEO y AskMaps | Multicomm.ai",
  description: "Visibilidad AI y reservas inteligentes. AEO (Answer Engine Optimization) para aparecer en Ask Maps, ChatGPT y motores generativos."
};

export default function AeoPage() {
  return (
    <section className="aeo-page" style={{ padding: "4rem 1rem", maxWidth: "960px", margin: "0 auto" }}>
      {/* HERO */}
      <header style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>
          Tu marca en la nueva primera página: <br /> <span style={{ color: "#6C63FF" }}>la mente de la IA</span>
        </h1>
        <p style={{ color: "#666", fontSize: "1.2rem", marginTop: "1rem" }}>
          Google Ask Maps, ChatGPT, Perplexity y Gemini ya eligen respuestas.<br />
          Nosotros hacemos que la tuya sea la próxima.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/contact"
            style={{
              background: "#6C63FF",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: 600
            }}
          >
            Solicitar auditoría de visibilidad AI →
          </Link>
        </div>
      </header>

      {/* EL PROBLEMA */}
      <section style={{ marginBottom: "4rem" }}>
        <h2>El SEO clásico murió. Bienvenido al AEO.</h2>
        <p>
          Los motores ya no muestran diez enlaces: generan la <b>respuesta final</b>.
          Si la IA no menciona tu marca, no existís para el cliente de hoy.
          <b>Answer Engine Optimization (AEO)</b> y <b>Ask Maps Presence</b> son la evolución
          del posicionamiento: optimizamos tu contenido y tus datos para que <b>la IA te elija</b>.
        </p>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{ marginBottom: "4rem" }}>
        <h2>Cómo lo hacemos</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🧭 <b>Analizamos:</b> auditamos cómo te describen los motores de IA.</li>
          <li>⚙️ <b>Optimizamos:</b> implementamos marcado JSON‑LD y entidades semánticas.</li>
          <li>🚀 <b>Activamos:</b> integramos tu negocio en nuestro Concierge AI para consultas naturales.</li>
        </ul>
        <Link href="/aeo/demo" style={{ color: "#6C63FF", fontWeight: 600 }}>
          Ver ejemplo en vivo →
        </Link>
      </section>

      {/* PRODUCT FAST CASH */}
      <section style={{ background: "#F7F7FB", padding: "2rem", borderRadius: "10px", marginBottom: "4rem" }}>
        <h2>Visibilidad AI Express — en solo 10 días</h2>
        <p>
          Un servicio ágil, 100 % remoto, diseñado por <b>Multicomm AI</b> para resultados rápidos.
        </p>
        <ul>
          <li>🔍 Auditoría AEO en motores de IA generativos</li>
          <li>🔧 Implementación de marcado estructurado (JSON‑LD)</li>
          <li>🗺️ Integración con Google Ask Maps y Feeds AI</li>
          <li>📊 Reporte de visibilidad y próximos pasos</li>
        </ul>
        <h3 style={{ fontSize: "1.5rem" }}>Desde USD 490 – entrega en 10 días</h3>
        <Link
          href="/checkout/aeo"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            background: "#6C63FF",
            padding: "0.8rem 2rem",
            color: "white",
            borderRadius: "6px",
            fontWeight: 600
          }}
        >
          Contratar ahora
        </Link>
      </section>

      {/* BENEFICIOS */}
      <section style={{ marginBottom: "4rem" }}>
        <h2>Beneficios de optimizar con Multicomm.ai</h2>
        <ul>
          <li>✅ Aparece en Ask Maps y AI Overviews</li>
          <li>✅ Aumenta tráfico orgánico IA + Local Search hasta 40 %</li>
          <li>✅ Compatible con tu SEO actual — lo potencia</li>
          <li>✅ Listo para vincular con nuestro chatbot concierge</li>
        </ul>
      </section>

      {/* CIERRE */}
      <section style={{ textAlign: "center", background: "#E9E8FF", padding: "3rem", borderRadius: "10px" }}>
        <h2>Te ayudamos a ser la respuesta correcta.</h2>
        <p>
          Comienza con una auditoría gratuita: medimos tu presencia conversacional y te mostramos
          dónde te omite la IA.
        </p>
        <Link
          href="/contact"
          style={{
            background: "#6C63FF",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontWeight: 600
          }}
        >
          Empezar auditoría AI
        </Link>
      </section>
    </section>
  );
}
