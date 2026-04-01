"use client";

const footerLinks = {
  Soluciones: [
    { label: "Control de Acceso", href: "#soluciones" },
    { label: "Códigos QR", href: "#soluciones" },
    { label: "Invitaciones Digitales", href: "#soluciones" },
    { label: "Dashboard", href: "#soluciones" },
    { label: "Reportes", href: "#soluciones" },
  ],
  Eventos: [
    { label: "Bodas", href: "#" },
    { label: "XV Años", href: "#" },
    { label: "Fiestas Corporativas", href: "#" },
    { label: "Galas", href: "#" },
    { label: "Bautizos", href: "#" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Contacto", href: "#contacto" },
    { label: "Blog", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Soporte", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licencias", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 0 40px",
        background: "var(--sage-50)",
        borderTop: "1px solid rgba(200, 217, 111, 0.3)",
      }}
    >
      <div className="container-main">
        {/* Top: Logo + Links */}
        <div className="grid-footer" style={{ marginBottom: 60 }}>

          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text-dark)",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--forest-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                🛡️
              </span>
              Anti-Colados
            </a>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-light)",
                maxWidth: 260,
                lineHeight: 1.6,
              }}
            >
              El sistema de control de invitados más confiable para tus eventos
              sociales. Sin colados, sin estrés.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "var(--text-dark)",
                  marginBottom: 20,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 10 }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-light)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        fontFamily: "var(--font-sans)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-dark)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-light)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(200, 217, 111, 0.3)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-light)",
              fontFamily: "var(--font-sans)",
            }}
          >
            © {new Date().getFullYear()} Anti-Colados. Todos los derechos
            reservados.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a
              href="#"
              style={{
                fontSize: "0.82rem",
                color: "var(--text-light)",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
              }}
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              style={{
                fontSize: "0.82rem",
                color: "var(--text-light)",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
              }}
            >
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
