export default function Image(src) {
  const Component = document.createElement("img");
  Component.classList.add("p-card__image");
  Component.src = src;

  return Component;
}
