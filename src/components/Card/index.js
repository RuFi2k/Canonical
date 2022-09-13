import { CardHeading, CardFooter, CardContent } from "..";

export default function Card(props) {
  const {
    category,
    img,
    title,
    link,
    author: {
      name,
      url,
    },
    date,
    type
  } = props;

  const Column = document.createElement("div");
  Column.classList.add("col-4", "u-equal-height");

  const Card = document.createElement("div");
  Card.classList.add("p-card--highlighted", "p-heading-highlight--top");

  const Heading = CardHeading(category);
  const InnerContent = CardContent(img, title, link, name, url, date);
  const Footer = CardFooter(type);

  Card.append(
    Heading,
    InnerContent,
    Footer
  );

  Column.append(Card);

  return Column;
}