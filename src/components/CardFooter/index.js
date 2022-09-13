export default function CardFooter(text) {
  const Component = document.createElement("div");
  Component.classList.add("u-align--bottom");
  
  const Text = document.createElement("p");
  Text.classList.add("p-card__inner", "u-no-padding--top", "u-no-padding--bottom", "u-no-margin--bottom", "card-type");
  Text.innerText = text;

  Component.append(
    document.createElement("hr"),
    Text
  );

  return Component;
}
