// Verified store facts — single source of truth.
export const STORE = {
  name: "Quick Stop",
  street: "323 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  phone: "(973) 677-3699",
  phoneTel: "+19736773699",
  openHour: 6, // 6:00 AM
  closeHour: 21, // 9:00 PM
  mapsQuery: "323+Main+St,+Orange,+NJ+07050",
};

/** Returns live open state + a 12-hour AM/PM clock string. Hours 6 AM to 9 PM daily. */
export function getStatus(now: Date) {
  const h = now.getHours();
  const m = now.getMinutes();
  const open = h >= STORE.openHour && h < STORE.closeHour;
  const hr12 = ((h + 11) % 12) + 1;
  const ampm = h < 12 ? "AM" : "PM";
  const clock = `${hr12}:${String(m).padStart(2, "0")} ${ampm}`;
  return { open, clock };
}

export const NAV_LINKS = [
  { href: "#aisles", label: "The Aisles" },
  { href: "#store", label: "Step Inside" },
  { href: "#daily", label: "Your Day" },
  { href: "#corner", label: "The Corner" },
  { href: "#visit", label: "Visit" },
];
