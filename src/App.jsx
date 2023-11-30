import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          write here
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

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
    </div>
  );
}

export default App;
