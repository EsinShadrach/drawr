import { EventCard } from ".";


let cards: string[] = [];

for (let i = 0; i <= 4; i++) {
  cards.push(`card-${i + 1}`);
}


export default function EventsList() {
  return (
    <div className="px-3 space-y-[1rem] sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
      {
        // Change key Later
        cards.map((card) => (
          <EventCard key={card} />
        ))
      }
    </div>
  );
}
