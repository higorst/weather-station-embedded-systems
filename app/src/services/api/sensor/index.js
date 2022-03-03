import api from "../index";

export async function getValues() {
  try {
    const response = await api.get("/values");

    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) return false;

    throw error;
  }
}
