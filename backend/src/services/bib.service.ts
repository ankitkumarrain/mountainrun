export function createBibNumber(eventSlug: string) {
  const eventCode = eventSlug
    .split("-")
    .map((part) => part[0])
    .join("")
    .slice(0, 4)
    .toUpperCase()
    .padEnd(3, "R");
  const random = Math.floor(100000 + Math.random() * 900000);

  return `${eventCode}-${random}`;
}
