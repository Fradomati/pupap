import axios from "axios";

const authConnect = axios.create({
  baseURL: "http://localhost:3000/data",
  withCredentials: true,
});

// [DATA] Add timers

export const addTimer = async (timer) => {
  const response = await authConnect.post("/add", timer);
  console.log("[DATA] Envio estos datos al back", timer);
  return response;
};
