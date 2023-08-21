import Header from "./components/Header";
import Image from "next/image";
import { H2, P } from "@/utils/typography";
import { DashBoardNav } from "./components";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main>
      <Header />
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/images/person.png"
            alt="person"
            height={80}
            width={80}
            className="rounded-md object-cover"
          />
          <H2 className="capitalize mb-0 font-blogh text-4xl">{"spagfest"}</H2>
          <P className="mb-0">@{"spagfest"}</P>
        </div>
        <div className="divide-x-[1px] divide-gray-900 flex w-full mx-auto">
          <div className="flex-[1]">
            <div className="w-fit px-4 flex flex-col items-center justify-center flex-[1] whitespace-nowrap ml-auto">
              <p className="font-bold text-xl">#{"2"}</p>
              <p>Best rank</p>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="w-fit px-4 flex flex-col items-center justify-center whitespace-nowrap">
              <p className="font-bold text-xl">{"15"}</p>
              <p>Games hosted</p>
            </div>
          </div>
        </div>
        <DashBoardNav />
      </div>
      {children}
    </main>
  );
}
