function App() {
  // For now we use fixed (fake) values
  const soilMoisture = 38;   // in %
  const pumpStatus = "OFF";  // or "ON"

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        background: "#e8f5e9",
      }}
    >
      <h1>Agro-Bot Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Soil Moisture Card */}
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "180px",
          }}
        >
          <h2>Soil Moisture</h2>
          <p style={{ fontSize: "24px", margin: 0 }}>{soilMoisture}%</p>
        </div>

        {/* Pump Status Card */}
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "180px",
          }}
        >
          <h2>Pump Status</h2>
          <p style={{ fontSize: "24px", margin: 0, fontWeight: "bold" }}>
            {pumpStatus}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
