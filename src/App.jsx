import axios from "axios";
import { useEffect, useState } from "react";

import { Barchart } from "./components/Barchart";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {}, []);

  console.log(data);

  return (
    <div className="App">
      <Barchart />
    </div>
  );
}

export default App;
