import { Loader, Card } from "./components";
import { getPosts } from "./services";
import "./style.css";

window.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");
  root.append(Loader());

  const cards = await getPosts();

  root.replaceChildren(...cards.map(Card));
}, { once: true });
