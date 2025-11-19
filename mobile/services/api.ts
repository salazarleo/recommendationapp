const API_BASE_URL = "http://192.168.2.153:8000";

export async function apiGet(path: string) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  return response.json();
}

export async function apiPost(path: string, data: any) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
