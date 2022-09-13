export default function CardHeading(title) {
  const Component = document.createElement("div");

  const Text = document.createElement("h5");
  Text.classList.add("p-text--x-small-capitalised", "u-no-padding--top", "u-no-padding--bottom", "p-card__inner");
  Text.innerText = title;
  Component.append(
    Text,
    document.createElement("hr")
  );

  return Component;
}
