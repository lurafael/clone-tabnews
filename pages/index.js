import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

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
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#f1f1f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "40px 30px",
          maxWidth: "500px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(255, 204, 0, 0.2)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚧</div>
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
          Estamos construindo algo incrível para você!<br />
          Enquanto isso, aproveite um café ☕ e relaxe.<br />
          A tecnologia está trabalhando nos bastidores 🚀
        </p>
        <button
          style={btnStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => alert("Você já está na home!")}
        >
          Voltar para o início
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        Tech Corp © 2025 • Feito com café e código ☕
      </div>
    </div>
  );
}