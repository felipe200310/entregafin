import React from "react";

const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const CreditoCard = ({
  icono,
  nombre,
  descripcion,
  tasaMensual,
  montoMin,
  montoMax,
  plazoMaxMeses,
}) => {
  return (
    <article className="credit-card">
      <div className="card-header">
        <span className="icono">{icono}</span>
        <h4>{nombre}</h4>
      </div>
      <p>{descripcion}</p>
      <div className="detalles">
        <p>
          <span className="label">Tasa:</span>{" "}
          <span className="highligh">{tasaMensual}% mensual</span>
        </p>
        <p>
          <span className="label">Monto:</span>{" "}
          {formatoCOP.format(montoMin)} – {formatoCOP.format(montoMax)}
        </p>
        <p>
          <span className="label">Plazo máximo:</span> {plazoMaxMeses} meses
        </p>
      </div>
      <button className="btn-primary">Solicitar ahora</button>
    </article>
  );
};

export default CreditoCard;
