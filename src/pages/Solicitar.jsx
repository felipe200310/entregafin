import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "../estilos.css";

function Solicitar() {
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    correo: "",
    monto: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // 🟢 Capturar los datos a medida que el usuario escribe
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Enviar datos a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje("");

    try {
      await addDoc(collection(db, "solicitudes"), formData);
      setMensaje("✅ Solicitud enviada correctamente. Pronto te contactaremos.");
      setFormData({
        nombre: "",
        documento: "",
        correo: "",
        monto: "",
      });
    } catch (error) {
      console.error("❌ Error al enviar solicitud:", error);
      setMensaje("❌ Ocurrió un error al enviar tu solicitud. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="form-container">
      <div className="form-card">
        <h2>💳 Solicita tu Crédito</h2>
        <p className="form-subtitle">
          Completa tus datos y te contactaremos para ofrecerte la mejor opción.
        </p>

        <form className="credito-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Cristian Felipe Silva"
              required
            />
          </div>

          <div className="form-group">
            <label>Número de documento</label>
            <input
              type="number"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Ej: 1034567890"
              required
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ej: ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Monto solicitado</label>
            <input
              type="number"
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              placeholder="Ej: 5000000"
              required
            />
          </div>

          <button type="submit" className="btn-enviar" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>

        {mensaje && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{mensaje}</p>}
      </div>
    </section>
  );
}

export default Solicitar;

