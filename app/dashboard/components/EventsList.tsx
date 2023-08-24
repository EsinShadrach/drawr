import { EventCard } from ".";


let cards: string[] = [];

for (let i = 0; i <= 4; i++) {
  cards.push(`card-${i + 1}`);
}


export default function EventsList() {
  return (
    <div className="px-3 space-y-[1rem] sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-2 pb-4">
      {
        // Change key Later
        cards.map((card) => (
          <EventCard key={card} />
        ))
      }
    </div>
  );
}
