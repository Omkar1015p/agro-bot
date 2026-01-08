import { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, set, onValue } from "firebase/database";


function App() {
const [soilMoisture, setSoilMoisture] = useState(0);
const [pumpStatus, setPumpStatus] = useState("OFF");
const [seederStatus, setSeederStatus] = useState("OFF");

const pumpRef = ref(db, "/AgroBot/pump");
const seederRef = ref(db, "/AgroBot/seeder");
const moistureRef = ref(db, "/AgroBot/moisture");

  useEffect(() => {
  onValue(moistureRef, (snapshot) => {
    if (snapshot.exists()) {
      setSoilMoisture(snapshot.val());
    }
  });

  onValue(pumpRef, (snapshot) => {
    if (snapshot.exists()) {
      setPumpStatus(snapshot.val());
    }
  });

  onValue(seederRef, (snapshot) => {
    if (snapshot.exists()) {
      setSeederStatus(snapshot.val());
    }
  });
}, []);


  return (
    <div
      style={{
        // minHeight: "100vh",
        height: "100vh",
        width : "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "firacode, monospace",
        background: "#B9FAF8",
      }}
    >
      <h1 style={{ color: "#1D1A05", fontSize: "40px", fontWeight: "700", marginBottom: "10px" }}>Agro-Bot Dashboard</h1>    

      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        {/* Soil Moisture Card */}
        <div
          style={{
            padding: "20px",
            background: "#C7AC92",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "180px",
          }}
        >
          <h2>Soil Moisture</h2>
          <p style={{ fontSize: "35px", margin: 0 }}>{soilMoisture}%</p>
        </div>

        {/* Pump Status Card */}
        <div
          style={{
            padding: "20px",
            background: "#9381FF",
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
          <div style={{ marginTop: "12px", display: "flex", gap: "8px", justifyContent: "center" }}>
            <button
              onClick={() => set(pumpRef, "ON")}
            >
              ON
            </button>

            <button
              onClick={() => set(pumpRef, "OFF")}
            >
              OFF
            </button>
          </div>
        </div>

        {/* Seeder status Card */}
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            background: "#4caf50",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            width: "180px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2>Seeder Status</h2>
          <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
            {seederStatus}
          </p>

          <div style={{ marginTop: "12px", display: "flex", gap: "8px", justifyContent: "center" }}>
            <button
              onClick={() => set(seederRef, "ON")}
            >
              ON
            </button>

            <button
              onClick={() => set(seederRef, "OFF")}
            >
              OFF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
