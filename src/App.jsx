import QRCode from "react-qr-code";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 150,
          width: "100%",
        }}
      >
        <QRCode
          size={665}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
  );
}

export default App;
