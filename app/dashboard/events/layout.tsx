import {  EventsNav } from "../components";



export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="mt-6">
        {/* <div className="flex items-center gap-4 justify-around w-full text-center mx-auto mb-6 whitespace-nowrap">
          <p className="capitalize flex-[1]">completed</p>
        </div> */}
        <EventsNav/>
        {children}
      </div>
    );
}