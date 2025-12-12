import { useState } from "react";
import "../estilos.css";

function Simular() {
  const [monto, setMonto] = useState("");
  const [cuotas, setCuotas] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularCredito = (e) => {
    e.preventDefault();
    if (!monto || !cuotas || cuotas <= 0) {
      alert("Por favor ingresa valores válidos.");
      return;
    }

    const interesMensual = 0.018; // 1.8% mensual
    const valorCuota =
      (monto * interesMensual * Math.pow(1 + interesMensual, cuotas)) /
      (Math.pow(1 + interesMensual, cuotas) - 1);

    setResultado({
      valorCuota: valorCuota.toFixed(2),
      totalPagar: (valorCuota * cuotas).toFixed(2),
    });
  };

  return (
    <section className="form-container">
      <div className="form-card">
        <h2>💰 Simula tu Crédito</h2>
        <p className="form-subtitle">
          Calcula el valor estimado de tus cuotas según el monto y plazo que elijas.
        </p>

        <form className="credito-form" onSubmit={calcularCredito}>
          <div className="form-group">
            <label>Monto solicitado (COP)</label>
            <input
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="Ej: 5000000"
              required
            />
          </div>

          <div className="form-group">
            <label>Número de cuotas</label>
            <input
              type="number"
              value={cuotas}
              onChange={(e) => setCuotas(e.target.value)}
              placeholder="Ej: 12"
              required
            />
          </div>

          <button type="submit" className="btn-enviar">
            Calcular
          </button>
        </form>

        {resultado && (
          <div className="resultado-credito">
            <h3>💡 Resultado de tu simulación:</h3>
            <p>
              <strong>Valor de la cuota mensual:</strong> ${resultado.valorCuota}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${resultado.totalPagar}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Simular;
