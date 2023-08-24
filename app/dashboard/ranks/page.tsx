import {Metadata} from "next"
import { RankTile } from "../components"
import Image  from 'next/image';


let ranks: string[] = [];

for (let i = 0; i <= 10; i++) {
  ranks.push(`rank-${i + 1}`);
}




export const metadata :Metadata ={
    title: "Dashboard | Ranks",
    description: "...",
}

export default function RanksPage() {
  return (
    <div className="md:flex md:gap-3 md:items-center px-4 md:pr-1 md:h-full">
      <div className="hidden md:block flex-[1] w-full h-full relative bg-brand-purple overflow-clip rounded-lg">
        <div className="md:w-full md:h-full absolute">
          <Image
            src="/images/leaderboard.jpeg"
            alt="leaderboard"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="md:flex-1 space-y-2 md:h-full md:overflow-y-auto md:pr-3 pb-4">
        {ranks.map((rank, i) => (
          <RankTile key={rank} name="kvngz" rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
