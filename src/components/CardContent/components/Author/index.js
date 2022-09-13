import { formatDate } from "../../../../utils";

export default function Author(name, url, date) {
  const Component = document.createElement("p");
  Component.classList.add("token", "italic");
  Component.innerHTML = `By <a href="${url}">${name}</a> on ${formatDate(date)}`;

  return Component;
}
