"use client"

import { FilledButton, IconButton } from "@/utils/buttons";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

type Props = {}

export default function RecordMiniCard() {
  return (
    <div className="flex-1 flex flex-col justify-between w-full h-44 md:h-full p-6 text-white bg-black rounded-3xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">tickets sold</p>
          <small className="text-[0.6rem] whitespace-nowrap">
            {"oct 16/21"} - {"Nov 16/21"}
          </small>
        </div>
        <IconButton onClick={() => {}} color="black" className="">
          <EllipsisHorizontalIcon className="w-8 fill-brand-purple" />
        </IconButton>
      </div>
      <p className="text-lg font-extrabold">{"2,456"}</p>
      <FilledButton onClick={()=>{}} color="lemon" className="self-end !px-4 !py-2 !rounded-full text-xs !text-brand-purple">
        {"+15.9%"}
      </FilledButton>
    </div>
  );
}