import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCharacters() {
    return apiClient.get("/characters");
  },
  getSpells() {
    return apiClient.get("/spells");
  },
};
