import React, { useState } from "react";

export default function Input() {
  const [inputDegeri, setInputDegeri] = useState("");

  const inputuDegistir = (evt) => {
    const { value } = evt.target;
    setInputDegeri(value);
  };

  const reset = () => {
    setInputDegeri("");
  };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: inputDegeri.length > 10 ? "crimson" : "royalblue",
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div id="output" style={stil}>
        {inputDegeri.toUpperCase()}
      </div>
      <div>
        <input
          id="input"
          type="text"
          onChange={inputuDegistir}
          value={inputDegeri}
        />
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
