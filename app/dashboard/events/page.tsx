import {EventCard} from "../components"
import {Metadata} from "next"

let cards :string[] = []

for(let i=0; i<=4; i++){
cards.push(`card-${i+1}`)}



export const metadata :Metadata ={
    title: "Dashboard | Events",
    description: "...",
}

export default function Eventspage() {
  return (
    <div className="mt-6">
        <div className="flex items-center gap-4 justify-around w-full text-center mx-auto mb-6 whitespace-nowrap" >
            <p className="capitalize flex-[1]">ongoing events</p>
            <p className="capitalize flex-[1]">completed</p>
        </div>
        <div className="px-3 space-y-[1rem]">

        {
            // Change key Later
            cards.map(card=> <EventCard key={card}/>)
        }
        </div>
    </div>
  )
}
