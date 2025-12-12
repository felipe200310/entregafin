function Nosotros() {
  const valores = [
    {
      icono: "💡",
      titulo: "Misión",
      texto:
        "Brindar soluciones financieras ágiles, accesibles y seguras, que impulsen los sueños y metas de nuestros clientes en todo el país.",
      color: "#4facfe",
    },
    {
      icono: "🎯",
      titulo: "Visión",
      texto:
        "Ser la plataforma líder en créditos inteligentes, reconocida por su innovación tecnológica y compromiso con la confianza del cliente.",
      color: "#43e97b",
    },
    {
      icono: "🤝",
      titulo: "Valores",
      texto:
        "Transparencia, responsabilidad, innovación y cercanía. En CrediSmart trabajamos contigo, no para ti.",
      color: "#fa709a",
    },
  ];

  return (
    <section className="seccion-de-creditos">
      <h2 className="titulo-seccion">Sobre Nosotros</h2>
      <p className="descripcion-seccion">
        Conoce lo que nos mueve a construir un futuro financiero más humano.
      </p>

      <div className="nuestros-creditos">
        {valores.map((v, i) => (
          <div
            key={i}
            className="credit-card"
            style={{
              borderTop: `5px solid ${v.color}`,
            }}
          >
            <div className="card-header">
              <span className="icono">{v.icono}</span>
              <h4>{v.titulo}</h4>
            </div>
            <p>{v.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Nosotros;
