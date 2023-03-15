import axios from "axios";

const baseURL = "https://pixabay.com/api/";

export const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
