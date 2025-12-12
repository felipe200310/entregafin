import { db } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";

const creditos = [
  {
    icono: "💸",
    nombre: "Crédito de libre inversión",
    descripcion:
      "Tú decides en qué invertir. Control total de tu dinero con cuotas fijas.",
    tasaMensual: 1.8,
    montoMin: 1000000,
    montoMax: 50000000,
    plazoMaxMeses: 60,
  },
  {
    icono: "🚗",
    nombre: "Crédito para vehículo",
    descripcion:
      "Financia tu carro nuevo o usado con tasas preferenciales y plazos cómodos.",
    tasaMensual: 1.6,
    montoMin: 5000000,
    montoMax: 300000000,
    plazoMaxMeses: 72,
  },
  {
    icono: "🏠",
    nombre: "Crédito de vivienda",
    descripcion:
      "Haz realidad el sueño de casa propia con tasas competitivas a largo plazo.",
    tasaMensual: 1.2,
    montoMin: 100000000,
    montoMax: 500000000,
    plazoMaxMeses: 180,
  },
  {
    icono: "🎓",
    nombre: "Crédito educativo",
    descripcion:
      "Financia estudios técnicos, universitarios o de posgrado para ti o tu familia.",
    tasaMensual: 1.5,
    montoMin: 1000000,
    montoMax: 50000000,
    plazoMaxMeses: 48,
  },
  {
    icono: "💼",
    nombre: "Crédito empresarial",
    descripcion:
      "Impulsa tu negocio con capital de trabajo, inversión o expansión.",
    tasaMensual: 1.4,
    montoMin: 10000000,
    montoMax: 500000000,
    plazoMaxMeses: 120,
  },
  {
    icono: "💳",
    nombre: "Tarjeta de crédito CrediSmart",
    descripcion:
      "Compra lo que necesites cuando lo necesites con cupo rotativo.",
    tasaMensual: 2.0,
    montoMin: 1000000,
    montoMax: 30000000,
    plazoMaxMeses: 36,
  },
];

const seedFirestore = async () => {
  try {
    console.log("Iniciando carga de datos a Firestore...");

    for (const credito of creditos) {
      const docRef = await addDoc(collection(db, "creditos"), credito);
      console.log(`${credito.nombre} agregado con ID: ${docRef.id}`);
    }

    console.log("✅ Todos los créditos fueron agregados exitosamente.");
    console.log("ℹ️ Ahora puedes comentar la línea import './seedFirestore.js' en main.jsx");
  } catch (error) {
    console.error("❌ Error al cargar los datos:", error);
  }
};

seedFirestore();

