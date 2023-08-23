import {Metadata} from "next"
import {SemiDoughnut }from "../components"

export const metadata :Metadata ={
    title: "Dashboard | Record",
    description: "...",
}

export default function RecordPage() {
  return (
    <div className="bg-brand-purple relative rounded-3xl w-full mx-auto h-60 px-4 py-4 text-white">
      <div className="flex-[1]">

<p>Top engagement on games</p>

<div><small className="capitalize">Total</small>
<p>{"2,178"}</p></div>
      </div>
      <div className="doughnut-container">


      <SemiDoughnut />
      </div>
      </div>
  );
}
