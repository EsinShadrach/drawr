import {Metadata} from "next"
import { redirect } from "next/navigation"

export const metadata :Metadata ={
    title: "Dashboard | Events",
    description: "...",
}

export default function Eventspage() {
  redirect("events/ongoing")
}
