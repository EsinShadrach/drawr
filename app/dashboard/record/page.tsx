import {Metadata} from "next"
import {RecordMiniCard, SemiDoughnut }from "../components"

export const metadata :Metadata ={
    title: "Dashboard | Record",
    description: "...",
}

export default function RecordPage() {
  return (
    <div className="px-3 space-y-4 md:flex">
      <div className="relative flex flex-col w-full px-4 pt-8 mx-auto text-white bg-brand-purple rounded-3xl h-80">
        <div className="flex-[1]">
          <p className="font-bold text-lg">Top engagement on games</p>
          <div className="w-fit mx-auto mt-9 relative">
            <small className="capitalize -ml-7 absolute -top-2">Total</small>
            <p className="text-3xl font-bold">{"2,178"}</p>
          </div>
        </div>
        <div className="relative flex flex-[1] justify-center">
          <SemiDoughnut percentage={50} />
        </div>
      </div>
      <div className="flex md:flex-col gap-3 justify-center items-center">
        <RecordMiniCard />
        <RecordMiniCard />
      </div>
    </div>
  );
}
