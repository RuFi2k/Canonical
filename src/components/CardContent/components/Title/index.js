export default function Title(title, link) {
  const Component = document.createElement("a");
  Component.classList.add("p-heading--3", "token", "bold");
  Component.href = link;
  Component.innerText = title;

  return Component;
}
