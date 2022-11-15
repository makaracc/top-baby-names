import axios from "axios";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    apikey: import.meta.env.VITE_REACT_API,
  },
};

axiosConfig.params = {
  // name: "olivia",
};

const BASE_URL =
  "https://wovg-community.gateway.prod.api.vic.gov.au/bdm/names/v1.0/popular-baby-names";

export const API = {
  async getUniqueTop100Name({ setData }) {
    try {
      axios(BASE_URL, axiosConfig).then((r) => {
        r.data;
        window.localStorage.setItem(
          "top100",
          JSON.stringify(r.data.popular_baby_names)
        );
        console.log(r.data.popular_baby_names);
      });
    } catch (e) {
      console.log(e);
    }
  },
};
