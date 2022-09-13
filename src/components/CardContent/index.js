import { Image, Title, Author } from "./components";

export default function CardContent(img, title, link, name, url, date) {
  const Component = document.createElement("div");
  Component.classList.add("p-card__inner");

  Component.append(
    Image(img),
    Title(title, link),
    Author(name, url, date)
  );

  return Component;
}
