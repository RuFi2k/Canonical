export function formatDate(stamp) {
  const date = new Date(stamp);
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function transformCard(card) {
  return {
    category: card.ping_status,
    img: card.featured_media,
    title: card.title.rendered,
    link: card.link,
    author: {
      name: card._embedded.author[0].name,
      url: card._embedded.author[0].url,
    },
    date: card.date,
    type: card.type,
  }
}
