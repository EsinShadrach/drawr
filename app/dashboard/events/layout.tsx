import {  EventsNav } from "../components";

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <EventsNav/>
        {children}
        </>
    );
}