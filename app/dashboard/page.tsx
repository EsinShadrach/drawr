import {Metadata} from "next"
import { redirect } from "next/navigation"


export default function DashboardPage() {
  redirect("dashboard/events/ongoing")
}
