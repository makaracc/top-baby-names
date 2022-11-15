import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { API } from "../api/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "Top 4 Baby Names",
      data: [12, 19, 3, 5],
      backgroundColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
      borderColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
      borderWidth: 1,
    },
  ],
};

export const Barchart = () => {
  const [babies, setBabies] = useState(
    JSON.parse(window.sessionStorage.getItem("top100"))
  );

  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (babies === null) {
      API.getUniqueTop100Name({ setBabies });
      return;
    }
    console.log(
      "babies",
      babies
        .filter((baby) => baby.year === 2020 && baby.sex === "MALE")
        .map((baby) => baby.name)
    );
    data.datasets[0].data = babies
      .filter((baby) => baby.year === 2020 && baby.sex === "MALE")
      .map((baby) => baby.count);
    data.labels = babies
      .filter((baby) => baby.year === 2020 && baby.sex === "MALE")
      .map((baby) => baby.name);
  }, [query, babies]);

  return <Pie data={data} />;
};
