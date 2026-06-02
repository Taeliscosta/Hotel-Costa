import { API_URL } from "./config.js";

export async function get(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);
  return response.json();
}

export async function post(endpoint, data) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function del(endpoint) {
  await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE"
  });
}