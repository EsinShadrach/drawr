import { EventsNav } from "../components";

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="mt-6 md:pb-3">
        <EventsNav />
        {children}
      </div>
    );
}
