import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Home() {
  const [creditos, setCreditos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCreditos = async () => {
      try {
        // Comprobamos conexión a Internet
        if (!navigator.onLine) {
          throw new Error("Sin conexión a Internet. Verifica tu red.");
        }

        const querySnapshot = await getDocs(collection(db, "creditos"));
        if (querySnapshot.empty) {
          throw new Error("No se encontraron créditos en la base de datos.");
        }

        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCreditos(docs);
      } catch (error) {
        console.error("❌ Error al obtener créditos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerCreditos();
  }, []);

  // Mensaje mientras carga
  if (loading) {
    return (
      <section className="seccion-de-creditos">
        <h2 className="titulo-seccion">Cargando créditos...</h2>
        <p>Conectando con Firebase Firestore ⏳</p>
      </section>
    );
  }

  // Mensaje de error
  if (error) {
    return (
      <section className="seccion-de-creditos">
        <h2 className="titulo-seccion">⚠️ Error al cargar datos</h2>
        <p style={{ color: "red" }}>{error}</p>
        <button
          className="btn-enviar"
          onClick={() => window.location.reload()}
          style={{ marginTop: "15px" }}
        >
          Reintentar
        </button>
      </section>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section id="hero" className="text-center">
        <div className="hero-content">
          <h1>¡Tu crédito inteligente te espera! 💰</h1>
          <p>
            Solicita, simula y conoce todos nuestros productos en un solo lugar.
            CrediSmart te acompaña en cada paso.
          </p>
          <button onClick={() => navigate("/solicitar")} className="btn-hero">
            Solicitar crédito ahora
          </button>
        </div>
      </section>

      {/* SECCIÓN DE CRÉDITOS */}
      <section className="seccion-de-creditos">
        <h2 className="titulo-seccion">Nuestros Productos Financieros</h2>
        <p className="descripcion-seccion">
          Datos obtenidos en tiempo real desde Firebase Firestore.
        </p>

        <div className="nuestros-creditos">
          {creditos.map((c) => (
            <div key={c.id} className="credit-card">
              <div className="card-header">
                <span className="icono">{c.icono}</span>
                <h4>{c.nombre}</h4>
              </div>
              <p>{c.descripcion}</p>
              <div className="detalles">
                <p>
                  <strong>Tasa:</strong> {c.tasaMensual}% mensual
                </p>
                <p>
                  <strong>Monto:</strong> ${c.montoMin} – ${c.montoMax}
                </p>
                <p>
                  <strong>Plazo máximo:</strong> {c.plazoMaxMeses} meses
                </p>
              </div>
              <button
                className="btn-primary"
                onClick={() => navigate("/solicitar")}
              >
                Solicitar crédito
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

