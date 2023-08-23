import {EventCard} from "../components"
import {Metadata} from "next"
import { redirect } from "next/navigation"

let cards :string[] = []

for(let i=0; i<=4; i++){
cards.push(`card-${i+1}`)}



export const metadata :Metadata ={
    title: "Dashboard | Events",
    description: "...",
}

export default function Eventspage({children}: { children: React.ReactNode }) {
  redirect("events/ongoing")

 
}
