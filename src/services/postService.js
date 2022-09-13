import { API_URL, transformCard } from "../utils";

export async function getPosts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data.map(transformCard);
}
