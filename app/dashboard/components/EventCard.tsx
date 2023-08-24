"use client"

import { P, H3 } from "@/utils/typography";
import Image from "next/image";
import { FilledButton } from "@/utils/buttons";

export default function EventCard() {
  return (
    <div className="bg-brand-purple relative rounded-3xl w-full mx-auto h-56 px-4 py-4 text-white">
      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        <div className="max-w-[10rem]">
          <h2 className="capitalize text-2xl text-white font-blogh font-semibold tracking-[0.46] leading-[34.1px]">
            {"spagfest raffle event"}
          </h2>
          <small className="text-xs">Hosted By {"Olawale Spagfest"}</small>
        </div>
        <div className="flex justify-between items-center ">
          <P className="capitalize">
            Ends In {"2"}
            {"hours"}
          </P>
          <FilledButton
            onClick={() => {}}
            color="black"
            className="capitalize font-bold"
          >
            view
          </FilledButton>{" "}
        </div>
      </div>

      <div className="w-40 h-full absolute bottom-0 right-[15%] z-10">
        <Image
          src="/images/standing-avatar.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
