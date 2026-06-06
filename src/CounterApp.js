import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  const reset = () => setCount(0);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Counter Application</h2>

      <div style={styles.display}>{count}</div>

      {count === 0 && (
        <p style={styles.message}>⚠ Minimum limit reached</p>
      )}

      <div style={styles.btnRow}>
        <button style={{ ...styles.btn, ...styles.btnSecondary }} onClick={decrement}>
          − Decrement
        </button>
        <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={increment}>
          + Increment
        </button>
        <button style={{ ...styles.btn, ...styles.btnReset }} onClick={reset}>
          ↺ Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    backgroundColor: "#f5f5f5",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1a1a1a",
    margin: 0,
  },
  display: {
    fontSize: "96px",
    fontWeight: "300",
    color: "#1a1a1a",
    lineHeight: 1,
    minWidth: "160px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    padding: "24px 48px",
  },
  message: {
    fontSize: "14px",
    color: "#e53935",
    margin: 0,
    letterSpacing: "0.04em",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "12px 28px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "500",
    transition: "opacity 0.15s",
  },
  btnPrimary: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  },
  btnSecondary: {
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    border: "1px solid #d0d0d0",
  },
  btnReset: {
    backgroundColor: "#fff3e0",
    color: "#e65100",
    border: "1px solid #ffcc80",
  },
};