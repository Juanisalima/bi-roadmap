import { useState } from "react";

const phases = [
  {
    number: "01",
    title: "Auditoría de Datos y Fundamentos",
    duration: "Semanas 1–3",
    color: "#C8A96E",
    icon: "◈",
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
    insight:
      "La mayoría de los negocios descubren que tienen más datos de lo que creían — solo que están en silos y sin estructura.",
  },
  {
    number: "02",
    title: "Dashboard de Victorias Rápidas",
    duration: "Semanas 4–6",
    color: "#7EB8A4",
    icon: "◉",
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
    insight:
      "Un solo dashboard que responde 5 preguntas que nadie podía responder antes vale más que un sistema complejo que nadie usa.",
  },
  {
    number: "03",
    title: "Integración Multi-Canal",
    duration: "Mes 2",
    color: "#9B8EC4",
    icon: "◎",
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
    insight:
      "Las empresas con datos integrados toman decisiones 5 veces más rápido que las que trabajan con hojas de cálculo separadas.",
  },
  {
    number: "04",
    title: "Analítica Avanzada",
    duration: "Mes 2–3",
    color: "#D4847A",
    icon: "◆",
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
    insight:
      "El objetivo no son más gráficos — son menos decisiones, pero más certeras y tomadas con confianza.",
  },
  {
    number: "05",
    title: "Operacionalización",
    duration: "Mes 3+",
    color: "#6FA8D0",
    icon: "◇",
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
    insight:
      "La analítica solo crea valor cuando cambia decisiones. La última fase es conductual, no técnica.",
  },
];

const industryTags = [
  "Retail", "Restaurantes", "E-commerce", "Logística",
  "Salud", "Inmobiliaria", "Finanzas", "Manufactura",
];

export default function BIRoadmap() {
  const [active, setActive] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const phase = phases[active];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0D0F14",
      color: "#E8E2D9",
      minHeight: "100vh",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Encabezado */}
      <div style={{
        borderBottom: "1px solid #2A2D35",
        padding: "32px 48px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#C8A96E",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontFamily: "'Courier New', monospace",
          }}>
            Consultoría de Inteligencia de Negocio
          </div>
          <h1 style={{
            fontSize: "clamp(22px, 3vw, 34px)",
            fontWeight: "normal",
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            De los Datos a las Decisiones
            <span style={{ color: "#C8A96E" }}>.</span>
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#8A8A8A",
            margin: "8px 0 0",
            fontFamily: "'Courier New', monospace",
          }}>
            Una hoja de ruta estructurada para cualquier negocio, cualquier industria.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}>Industrias</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "flex-end", maxWidth: "320px" }}>
            {industryTags.map(tag => (
              <span key={tag} style={{
                fontSize: "10px",
                padding: "3px 8px",
                border: "1px solid #2A2D35",
                borderRadius: "2px",
                color: "#666",
                letterSpacing: "0.08em",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Navegador de Fases */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #2A2D35",
        overflowX: "auto",
      }}>
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setHoveredPhase(i)}
            onMouseLeave={() => setHoveredPhase(null)}
            style={{
              flex: "1",
              minWidth: "120px",
              padding: "20px 16px",
              background: active === i ? "#16191F" : "transparent",
              border: "none",
              borderRight: "1px solid #2A2D35",
              borderBottom: active === i ? `2px solid ${p.color}` : "2px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              opacity: hoveredPhase !== null && hoveredPhase !== i && active !== i ? 0.4 : 1,
            }}
          >
            <div style={{
              fontSize: "11px",
              color: active === i ? p.color : "#555",
              fontFamily: "'Courier New', monospace",
              marginBottom: "6px",
              transition: "color 0.2s",
            }}>
              Fase {p.number}
            </div>
            <div style={{
              fontSize: "12px",
              color: active === i ? "#E8E2D9" : "#888",
              fontWeight: active === i ? "bold" : "normal",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
            }}>
              {p.title}
            </div>
            <div style={{
              fontSize: "10px",
              color: "#444",
              marginTop: "5px",
              fontFamily: "'Courier New', monospace",
            }}>
              {p.duration}
            </div>
          </button>
        ))}
      </div>

      {/* Contenido Principal */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "0",
        minHeight: "calc(100vh - 200px)",
      }}>
        {/* Panel Izquierdo */}
        <div style={{
          padding: "40px 48px",
          borderRight: "1px solid #2A2D35",
        }}>
          <div style={{ marginBottom: "36px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}>
              <span style={{
                fontSize: "32px",
                color: phase.color,
                lineHeight: 1,
              }}>{phase.icon}</span>
              <div>
                <div style={{
                  fontSize: "10px",
                  color: "#555",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "'Courier New', monospace",
                  marginBottom: "4px",
                }}>Fase {phase.number} · {phase.duration}</div>
                <h2 style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  margin: 0,
                  fontWeight: "normal",
                  letterSpacing: "-0.02em",
                }}>
                  {phase.title}
                </h2>
              </div>
            </div>
            <p style={{
              fontSize: "16px",
              color: "#B0AA9F",
              margin: "0 0 8px",
              lineHeight: 1.6,
            }}>
              {phase.summary}
            </p>
            <p style={{
              fontSize: "13px",
              color: phase.color,
              margin: 0,
              fontFamily: "'Courier New', monospace",
              borderLeft: `2px solid ${phase.color}`,
              paddingLeft: "12px",
            }}>
              Objetivo: {phase.goal}
            </p>
          </div>

          {/* Actividades */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "'Courier New', monospace",
            }}>Actividades Clave</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {phase.activities.map((activity, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "14px 16px",
                  background: "#12151A",
                  border: "1px solid #1E2128",
                  borderRadius: "3px",
                }}>
                  <span style={{
                    fontSize: "10px",
                    color: phase.color,
                    fontFamily: "'Courier New', monospace",
                    minWidth: "20px",
                    marginTop: "2px",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: "13px",
                    color: "#C8C2B8",
                    lineHeight: 1.5,
                  }}>
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Insight */}
          <div style={{
            background: `${phase.color}0F`,
            border: `1px solid ${phase.color}33`,
            borderRadius: "3px",
            padding: "20px 24px",
          }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: phase.color,
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              marginBottom: "10px",
            }}>Insight Clave</div>
            <p style={{
              fontSize: "14px",
              color: "#D0C8BC",
              margin: 0,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}>
              "{phase.insight}"
            </p>
          </div>
        </div>

        {/* Panel Derecho */}
        <div style={{ padding: "40px 32px" }}>
          {/* Entregable */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              marginBottom: "12px",
            }}>Entregable</div>
            <div style={{
              padding: "16px",
              background: "#12151A",
              border: `1px solid ${phase.color}55`,
              borderRadius: "3px",
            }}>
              <span style={{
                fontSize: "13px",
                color: phase.color,
                lineHeight: 1.5,
              }}>
                {phase.deliverable}
              </span>
            </div>
          </div>

          {/* Línea de Tiempo */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              marginBottom: "16px",
            }}>Línea de Tiempo Completa</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {phases.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    cursor: "pointer",
                    borderRadius: "3px",
                    background: active === i ? "#16191F" : "transparent",
                    transition: "background 0.15s",
                  }}
                >
                  <div style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: active === i ? p.color : "#333",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: "11px",
                      color: active === i ? "#E8E2D9" : "#666",
                      fontWeight: active === i ? "bold" : "normal",
                    }}>
                      {p.title}
                    </div>
                    <div style={{
                      fontSize: "10px",
                      color: "#444",
                      fontFamily: "'Courier New', monospace",
                    }}>
                      {p.duration}
                    </div>
                  </div>
                  {active === i && (
                    <span style={{ fontSize: "10px", color: p.color }}>◀</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lo que necesitamos */}
          <div>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              marginBottom: "12px",
            }}>Lo que Necesitamos de Ti</div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}>
              {[
                "Acceso a los sistemas de datos existentes",
                "Un punto de contacto interno",
                "Reunión semanal de 30 minutos",
                "Disposición a cambiar cómo se toman las decisiones",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "12px",
                  color: "#888",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "#444", marginTop: "2px" }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div style={{
        borderTop: "1px solid #2A2D35",
        padding: "20px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontSize: "11px",
          color: "#444",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.1em",
        }}>
          FASE {phase.number} DE {String(phases.length).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          {phases.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "24px" : "8px",
                height: "3px",
                background: active === i ? p.color : "#2A2D35",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
        <span style={{
          fontSize: "11px",
          color: "#444",
          fontFamily: "'Courier New', monospace",
        }}>
          ~3 meses · de principio a fin
        </span>
      </div>
    </div>
  );
}