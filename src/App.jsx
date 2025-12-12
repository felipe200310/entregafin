import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Simular from "./pages/Simular";
import Solicitar from "./pages/Solicitar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/simular" element={<Simular />} />
        <Route path="/solicitar" element={<Solicitar />} />
      </Routes>
    </Layout>
  );
}

export default App;







