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
    <main className="h-screen md:flex md:flex-col">
      <Header />
      <div className="space-y-6 md:flex md:items-center md:px-12 mt-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:w-full">
          <Image
            src="/images/user-2.jpg "
            alt="user"
            height={80}
            width={80}
            priority
            className="object-cover rounded-3xl bg-brand-purple"
          />
          <div className="md:ml-4">
            <h2 className="text-4xl capitalize font-blogh tracking-[0.46] leading-[34.1px]">
              {"spagfest"}
            </h2>
            <P className="text-center md:text-left">@{"spagfest"}</P>
          </div>
        </div>
        <div className="divide-x-[1px] divide-gray-900 md:mb-6 flex w-full md:w-auto mx-auto md:ml-auto">
          <div className="flex-[1]">
            <div className="w-fit px-4 flex flex-col items-center justify-center flex-[1] whitespace-nowrap ml-auto">
              <p className="text-xl font-bold">#{"2"}</p>
              <p>Best rank</p>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="flex flex-col items-center justify-center px-4 w-fit whitespace-nowrap">
              <p className="text-xl font-bold">{"15"}</p>
              <p>Games hosted</p>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <DashBoardNav />
        </div>
      </div>
        {children}
    </main>
  );
}
