import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="contenido">{children}</div>
    </div>
  );
}

export default Layout;
