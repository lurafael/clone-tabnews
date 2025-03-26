import { useState, useEffect } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Remove scroll indesejado no body/html
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
  }, []);

  const btnStyle = {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: hover ? "#ffcc00" : "transparent",
    border: "2px solid #ffcc00",
    color: hover ? "#1a1a1a" : "#ffcc00",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#f1f1f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "60px",
          maxWidth: "500px",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(255, 204, 0, 0.25)",
        }}
      >
        <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🚧</div>
        <h1
          style={{
            fontSize: "2rem",
            color: "#ffcc00",
            marginBottom: "15px",
          }}
        >
          Página em construção
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#ccc",
            lineHeight: "1.6",
          }}
        >
          Estamos construindo algo incrível para você!
          <br />
          A tecnologia está trabalhando nos bastidores 🚀
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        Techleaf 2024 © Todos os direitos reservados
      </div>
    </div>
  );
}
