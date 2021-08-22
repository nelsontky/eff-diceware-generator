import React from "react";

import { genPassphrase } from "lib/gen-passphrase.util";

import "./App.css";

function App() {
  const [length, setLength] = React.useState(4);
  const [generatedPassphrase, setGeneratedPassphrase] = React.useState(
    genPassphrase(length)
  );

  React.useEffect(() => {
    setGeneratedPassphrase(genPassphrase(length));
  }, [length]);

  return (
    <div className="app">
      <div className="app__container">
        <div>
          <p>Your generated passphrase:</p>
          <p>
            <code>{generatedPassphrase}</code>
          </p>
          <div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedPassphrase);
              }}
            >
              Copy
            </button>
            <button
              className="app__button--right"
              onClick={() => {
                setGeneratedPassphrase(genPassphrase(length));
              }}
            >
              Re-generate
            </button>
          </div>
          <label>Number of words: </label>
          <input
            type="number"
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
