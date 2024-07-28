import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");

  const colorChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="page">
      <div className="bigbox">
        <h1>Color Picker</h1>
        <div className="box" style={{ backgroundColor: value }}>
          <p>color HEX:</p>
          <p>{value}</p>
        </div>
        <input type="color" onChange={(e) => colorChanged(e)} />
      </div>
    </div>
  );
}

export default App;
