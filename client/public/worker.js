/* eslint-disable no-restricted-globals */
const BASE_URL = "http://localhost:4000";

self.importScripts("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");

self.addEventListener("message", (event) => {
  const { data } = event;
  postMessage(data);
  let endpoint = "events";
  if (data.event === "userData") {
    endpoint = "users";
  } else if (data.type === "navigate" || data.type === "adSlot") {
    endpoint = `events/${data.type}`;
  }

  try {
    self.axios.post(`${BASE_URL}/${endpoint}`, data);
  } catch (error) {}
});
