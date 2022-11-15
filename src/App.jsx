import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./api/api";
import { Barchart } from "./components/Barchart";

function App() {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("top100"))
  );
  const [d, setD] = useState("");

  const getUniqueTop100Name = () => {
    API.getUniqueTop100Name({ setData });
    console.log("hi");
  };

  useEffect(() => {
    if (!data) {
      getUniqueTop100Name();
      console.log("yes run api");
    }
  }, [data]);

  return (
    <div className="App">
      <Barchart />
    </div>
  );
}

export default App;
