import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 🔧 REEMPLAZA ESTOS DOS VALORES CON LOS DE TU PROYECTO EN SUPABASE
const SUPABASE_URL = "https://tmgaxgupcjzeapeejxhb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_j5fQhrVw6v7IzIXHAq_mRA_gsNTppnf";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const phases = [
  {
    number: "01", title: "Auditoría de Datos y Fundamentos", duration: "Semanas 1–3",
    color: "#C8A96E", icon: "◈",
    summary: "Mapea cada fuente de datos en tu negocio antes de construir cualquier cosa.",
    goal: "Entender qué datos existen, dónde viven y qué falta.",
    activities: [
      "Inventariar todos los sistemas activos (POS, e-commerce, ERP, CRM, hojas de cálculo)",
      "Identificar los responsables de cada dato y los niveles de acceso",
      "Evaluar la calidad de los datos — completitud, consistencia, actualidad",
      "Documentar las preguntas de negocio clave que necesitan respuesta",
      "Priorizar las fuentes de datos de mayor valor para la Fase 2",
    ],
    deliverable: "Mapa de Fuentes de Datos + Informe de Brechas",
    insight: "La mayoría de los negocios descubren que tienen más datos de lo que creían — solo que están en silos y sin estructura.",
  },
  {
    number: "02", title: "Dashboard de Victorias Rápidas", duration: "Semanas 4–6",
    color: "#7EB8A4", icon: "◉",
    summary: "Conecta tu fuente de datos más accesible y construye un dashboard en vivo en días.",
    goal: "Entregar valor inmediato y visible para generar apoyo interno.",
    activities: [
      "Conectar la fuente de datos prioritaria (e-commerce, POS o ERP)",
      "Construir dashboard de KPIs principales: ingresos, volumen, productos top, tendencias",
      "Identificar las 5 preguntas clave del negocio y responder cada una con una visual",
      "Capacitar a los stakeholders clave en el uso del dashboard",
      "Establecer una cadencia semanal de actualización de datos",
    ],
    deliverable: "Dashboard de KPIs en Vivo (Power BI / Looker / Tableau)",
    insight: "Un solo dashboard que responde 5 preguntas que nadie podía responder antes vale más que un sistema complejo que nadie usa.",
  },
  {
    number: "03", title: "Integración Multi-Canal", duration: "Mes 2",
    color: "#9B8EC4", icon: "◎",
    summary: "Rompe los silos. Conecta todas tus unidades de negocio en una sola vista unificada.",
    goal: "Eliminar los puntos ciegos causados por sistemas desconectados.",
    activities: [
      "Integrar fuentes de datos secundarias (ej. tiendas físicas + canal online)",
      "Construir una vista unificada del cliente a través de todos los puntos de contacto",
      "Crear reportes de comparación por ubicación y canal",
      "Automatizar los flujos de datos para reducir el trabajo manual",
      "Definir una única fuente de verdad para las métricas clave",
    ],
    deliverable: "Modelo de Datos Unificado Multi-Fuente + Pipelines Automatizados",
    insight: "Las empresas con datos integrados toman decisiones 5 veces más rápido que las que trabajan con hojas de cálculo separadas.",
  },
  {
    number: "04", title: "Analítica Avanzada", duration: "Mes 2–3",
    color: "#D4847A", icon: "◆",
    summary: "Pasa de lo descriptivo ('qué pasó') a lo predictivo ('qué va a pasar').",
    goal: "Descubrir insights que impulsen directamente los ingresos y reduzcan el desperdicio.",
    activities: [
      "Segmentación de clientes (RFM: Recencia, Frecuencia, Valor Monetario)",
      "Matriz de rendimiento de productos/servicios (rentabilidad × popularidad)",
      "Pronóstico de demanda para optimizar inventario y personal",
      "Detección de anomalías — alertas automáticas ante caídas o picos inusuales",
      "Puntuación de riesgo de abandono para clientes de alto valor",
    ],
    deliverable: "Modelos Analíticos + Reportes de Insights por Área de Negocio",
    insight: "El objetivo no son más gráficos — son menos decisiones, pero más certeras y tomadas con confianza.",
  },
  {
    number: "05", title: "Operacionalización", duration: "Mes 3+",
    color: "#6FA8D0", icon: "◇",
    summary: "Convierte la analítica en un hábito permanente, no en un proyecto puntual.",
    goal: "Incorporar la toma de decisiones basada en datos en la cultura de la organización.",
    activities: [
      "Definir responsables: quién revisa qué y cuándo",
      "Configurar alertas automáticas para umbrales de KPIs",
      "Plantilla de revisión mensual del negocio impulsada por datos en vivo",
      "Ampliar el acceso a los dashboards a todos los equipos",
      "Ciclo de mejora continua: nuevas preguntas → nuevos modelos",
    ],
    deliverable: "Marco de Gobernanza de BI + Soporte Continuo (Retainer)",
    insight: "La analítica solo crea valor cuando cambia decisiones. La última fase es conductual, no técnica.",
  },
];

const industryTags = ["Retail", "Restaurantes", "E-commerce", "Logística", "Salud", "Inmobiliaria", "Finanzas", "Manufactura"];

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.nombre || !form.email) return;
    setStatus("loading");
    const { error } = await supabase.from("contactos").insert([{
      nombre: form.nombre,
      empresa: form.empresa,
      email: form.email,
      mensaje: form.mensaje,
    }]);
    setStatus(error ? "error" : "success");
  };

  const inputStyle = {
    width: "100%", background: "#0D0F14", border: "1px solid #2A2D35",
    borderRadius: "3px", padding: "10px 12px", color: "#E8E2D9",
    fontSize: "13px", fontFamily: "'Georgia', serif", boxSizing: "border-box", outline: "none",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000, padding: "20px", boxSizing: "border-box",
    }}>
      <div style={{
        background: "#12151A", border: "1px solid #2A2D35", borderRadius: "6px",
        padding: "28px 24px", width: "100%", maxWidth: "440px", position: "relative",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "14px", right: "16px",
          background: "none", border: "none", color: "#555", fontSize: "18px", cursor: "pointer",
        }}>✕</button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px", color: "#C8A96E" }}>◈</div>
            <h3 style={{ color: "#C8A96E", fontWeight: "normal", margin: "0 0 8px", fontSize: "20px" }}>
              ¡Mensaje recibido!
            </h3>
            <p style={{ color: "#888", fontSize: "13px", margin: "0 0 20px", lineHeight: 1.6 }}>
              Nos pondremos en contacto contigo pronto para conversar sobre cómo podemos ayudarte.
            </p>
            <button onClick={onClose} style={{
              background: "#C8A96E", color: "#0D0F14", border: "none",
              padding: "10px 24px", borderRadius: "3px", cursor: "pointer",
              fontSize: "11px", fontFamily: "'Courier New', monospace", letterSpacing: "0.1em",
            }}>CERRAR</button>
          </div>
        ) : (
          <>
            <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#C8A96E", textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "6px" }}>
              Conversemos
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "normal", margin: "0 0 4px" }}>Agenda una llamada</h3>
            <p style={{ fontSize: "12px", color: "#666", margin: "0 0 20px", fontFamily: "'Courier New', monospace" }}>
              Sin costo. Sin compromiso. Solo una conversación.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "nombre", label: "Nombre *", placeholder: "Tu nombre completo", type: "text" },
                { name: "empresa", label: "Empresa", placeholder: "Nombre de tu empresa", type: "text" },
                { name: "email", label: "Email *", placeholder: "tu@empresa.com", type: "email" },
              ].map(({ name, label, placeholder, type }) => (
                <div key={name}>
                  <label style={{ fontSize: "9px", color: "#555", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Courier New', monospace", display: "block", marginBottom: "4px" }}>
                    {label}
                  </label>
                  <input name={name} value={form[name]} onChange={handleChange}
                    placeholder={placeholder} type={type} style={inputStyle} />
                </div>
              ))}

              <div>
                <label style={{ fontSize: "9px", color: "#555", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Courier New', monospace", display: "block", marginBottom: "4px" }}>
                  ¿En qué podemos ayudarte?
                </label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange}
                  placeholder="Cuéntanos brevemente sobre tu negocio y el reto que tienes..."
                  rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              {status === "error" && (
                <p style={{ fontSize: "12px", color: "#D4847A", margin: 0 }}>
                  Hubo un error. Verifica tu conexión e intenta de nuevo.
                </p>
              )}

              <button onClick={handleSubmit}
                disabled={status === "loading" || !form.nombre || !form.email}
                style={{
                  background: status === "loading" ? "#333" : "#C8A96E",
                  color: "#0D0F14", border: "none", padding: "12px", borderRadius: "3px",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  fontSize: "11px", fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px",
                }}>
                {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAJE →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function BIRoadmap() {
  const [active, setActive] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const phase = phases[active];

  const labelStyle = {
    fontSize: "9px", letterSpacing: "0.2em", color: "#555",
    textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "8px",
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0D0F14", color: "#E8E2D9",
      minHeight: "100vh", overflowX: "hidden", boxSizing: "border-box",
    }}>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      {/* Header */}
      <div style={{ borderBottom: "1px solid #2A2D35", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#C8A96E", textTransform: "uppercase", marginBottom: "6px", fontFamily: "'Courier New', monospace" }}>
          Consultoría de Inteligencia de Negocio
        </div>
        <h1 style={{ fontSize: "clamp(20px, 5vw, 32px)", fontWeight: "normal", margin: "0 0 6px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          De los Datos a las Decisiones<span style={{ color: "#C8A96E" }}>.</span>
        </h1>
        <p style={{ fontSize: "12px", color: "#8A8A8A", margin: "0 0 12px", fontFamily: "'Courier New', monospace" }}>
          Una hoja de ruta para cualquier negocio, cualquier industria.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
          {industryTags.map(tag => (
            <span key={tag} style={{ fontSize: "9px", padding: "2px 7px", border: "1px solid #2A2D35", borderRadius: "2px", color: "#555", letterSpacing: "0.06em" }}>{tag}</span>
          ))}
        </div>
        <button onClick={() => setShowContact(true)} style={{
          background: "#C8A96E", color: "#0D0F14", border: "none",
          padding: "10px 20px", borderRadius: "3px", cursor: "pointer",
          fontSize: "11px", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em", textTransform: "uppercase",
        }}>AGENDA UNA LLAMADA →</button>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #2A2D35", overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
        {phases.map((p, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            flexShrink: 0, padding: "12px 14px", background: active === i ? "#16191F" : "transparent",
            border: "none", borderRight: "1px solid #2A2D35",
            borderBottom: active === i ? `2px solid ${p.color}` : "2px solid transparent",
            cursor: "pointer", textAlign: "left", minWidth: "90px",
          }}>
            <div style={{ fontSize: "9px", color: active === i ? p.color : "#555", fontFamily: "'Courier New', monospace", marginBottom: "3px" }}>Fase {p.number}</div>
            <div style={{ fontSize: "10px", color: active === i ? "#E8E2D9" : "#777", fontWeight: active === i ? "bold" : "normal", lineHeight: 1.3 }}>{p.title}</div>
            <div style={{ fontSize: "9px", color: "#444", marginTop: "2px", fontFamily: "'Courier New', monospace" }}>{p.duration}</div>
          </button>
        ))}
      </div>

      {/* Main */}
      <div style={{ padding: "20px" }}>

        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontSize: "26px", color: phase.color }}>{phase.icon}</span>
            <div>
              <div style={{ fontSize: "9px", color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "2px" }}>Fase {phase.number} · {phase.duration}</div>
              <h2 style={{ fontSize: "clamp(15px, 4vw, 22px)", margin: 0, fontWeight: "normal", letterSpacing: "-0.02em" }}>{phase.title}</h2>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#B0AA9F", margin: "0 0 10px", lineHeight: 1.6 }}>{phase.summary}</p>
          <p style={{ fontSize: "12px", color: phase.color, margin: 0, fontFamily: "'Courier New', monospace", borderLeft: `2px solid ${phase.color}`, paddingLeft: "10px", lineHeight: 1.5 }}>
            Objetivo: {phase.goal}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={labelStyle}>Entregable</div>
          <div style={{ padding: "12px 14px", background: "#12151A", border: `1px solid ${phase.color}55`, borderRadius: "3px", fontSize: "13px", color: phase.color, lineHeight: 1.5 }}>
            {phase.deliverable}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={labelStyle}>Actividades Clave</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {phase.activities.map((activity, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "11px 13px", background: "#12151A", border: "1px solid #1E2128", borderRadius: "3px" }}>
                <span style={{ fontSize: "9px", color: phase.color, fontFamily: "'Courier New', monospace", minWidth: "16px", marginTop: "3px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: "13px", color: "#C8C2B8", lineHeight: 1.5 }}>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: `${phase.color}0F`, border: `1px solid ${phase.color}33`, borderRadius: "3px", padding: "16px", marginBottom: "20px" }}>
          <div style={{ ...labelStyle, color: phase.color }}>Insight Clave</div>
          <p style={{ fontSize: "13px", color: "#D0C8BC", margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>"{phase.insight}"</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={labelStyle}>Línea de Tiempo</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {phases.map((p, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "9px 11px",
                cursor: "pointer", borderRadius: "3px",
                background: active === i ? "#16191F" : "transparent",
                border: active === i ? `1px solid ${p.color}33` : "1px solid transparent",
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: active === i ? p.color : "#333", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px", color: active === i ? "#E8E2D9" : "#666", fontWeight: active === i ? "bold" : "normal" }}>{p.title}</div>
                  <div style={{ fontSize: "10px", color: "#444", fontFamily: "'Courier New', monospace" }}>{p.duration}</div>
                </div>
                {active === i && <span style={{ fontSize: "10px", color: p.color }}>◀</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={labelStyle}>Lo que Necesitamos de Ti</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {["Acceso a los sistemas de datos existentes", "Un punto de contacto interno", "Reunión semanal de 30 minutos", "Disposición a cambiar cómo se toman las decisiones"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#888" }}>
                <span style={{ color: "#444" }}>—</span>{item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ background: "#12151A", border: "1px solid #2A2D35", borderRadius: "4px", padding: "24px 20px", textAlign: "center" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#C8A96E", textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
            ¿Listo para empezar?
          </div>
          <h3 style={{ fontSize: "18px", fontWeight: "normal", margin: "0 0 8px" }}>Cuéntanos sobre tu negocio</h3>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 16px", fontFamily: "'Courier New', monospace" }}>
            Primera consulta sin costo. Respondemos en menos de 24h.
          </p>
          <button onClick={() => setShowContact(true)} style={{
            background: "#C8A96E", color: "#0D0F14", border: "none",
            padding: "12px 28px", borderRadius: "3px", cursor: "pointer",
            fontSize: "11px", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>AGENDA UNA LLAMADA →</button>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #2A2D35", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "10px", color: "#444", fontFamily: "'Courier New', monospace" }}>FASE {phase.number} DE {String(phases.length).padStart(2, "0")}</span>
        <div style={{ display: "flex", gap: "5px" }}>
          {phases.map((p, i) => (
            <div key={i} onClick={() => setActive(i)} style={{ width: active === i ? "18px" : "5px", height: "3px", background: active === i ? p.color : "#2A2D35", borderRadius: "2px", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
        <span style={{ fontSize: "10px", color: "#444", fontFamily: "'Courier New', monospace" }}>~3 meses</span>
      </div>
    </div>
  );
}