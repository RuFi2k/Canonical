export default function Loader() {
  const Component = document.createElement("div");
  Component.classList.add("u-align--center");

  const logo = document.createElement("i");
  logo.classList.add("p-icon--spinner", "u-animation--spin");

  Component.append(logo, "Loading...");
  return Component;
}
