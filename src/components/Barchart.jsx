import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { API } from "../api/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Barchart = () => {
  const [babies, setBabies] = useState(
    JSON.parse(window.sessionStorage.getItem("top100"))
  );

  const [boyData, setBoyData] = useState({
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
  });
  const [girlData, setGirlData] = useState({
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
  });

  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (babies === null) {
      API.getUniqueTop100Name({ setBabies });
      return;
    }
    setBoyData((preData) => ({
      ...preData,
      labels: babies
        .filter((baby) => baby.year === 2020 && baby.sex === "MALE")
        .map((baby) => baby.name),
    }));
    setBoyData((preData) => ({
      ...preData,
      datasets: [
        {
          label: "Top 4 Baby Names",
          data: babies
            .filter((baby) => baby.year === 2020 && baby.sex === "MALE")
            .map((baby) => baby.count),
          backgroundColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
          borderColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
          borderWidth: 1,
        },
      ],
    }));
    setGirlData((preData) => ({
      ...preData,
      labels: babies
        .filter((baby) => baby.year === 2020 && baby.sex === "FEMALE")
        .map((baby) => baby.name),
    }));
    setGirlData((preData) => ({
      ...preData,
      datasets: [
        {
          label: "Top 4 Baby Names",
          data: babies
            .filter((baby) => baby.year === 2020 && baby.sex === "FEMALE")
            .map((baby) => baby.count),
          backgroundColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
          borderColor: ["#9A1663", "#FF8787", "#BCEAD5", "#8D72E1"],
          borderWidth: 1,
        },
      ],
    }));
  }, [query, babies]);

  return (
    <div className="flex place-items-center flex-row w-[1000px]">
      <div className="flex place-items-center flex-col flex-1">
        <Pie data={boyData} />
        <p>Boy Names 2020</p>
      </div>
      <div className="flex place-items-center flex-col flex-1">
        <Pie data={girlData} />
        <p>Girl Names 2020</p>
      </div>
    </div>
  );
};
