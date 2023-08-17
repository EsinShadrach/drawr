import React from "react";
import { FireIcon, GamePad, PurpleFireIcon } from "./icons";
import { H3 } from "@/utils/typography";
import game_placeholder from "./gameplace.png";
import Image from "next/image";

export function Gaming() {
  return (
    <section className="mx-auto mt-[200px] flex justify-center">
      <div
        className={`relative bg-[#000000] rounded-[25px] w-[1344px] h-[1038px]`}
      >
        <div
          className={`bg-[#7A71FE] border-solid border-black border-[4px] rounded-[25px] w-[1344px] h-[1038px] absolute top-4 right-3`}
        >
          <div
            className={`relative mt-[100px] ml-[40px] bg-black rounded-lg w-[250px] h-[70px]`}
          >
            <div
              className={`absolute bottom-3 right-3 bg-[#FD881B] border-solid border-[3px] border-black rounded-lg w-full h-full `}
            >
              <H3
                className={`flex items-center gap-[7px] text-center py-[18px] px-[13px] text-white -tracking-[1.587px] text-[32px] leading-[26px] font-bold `}
              >
                Most Popular
                <span>
                  <FireIcon />
                </span>
              </H3>
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="pt-[300px]">
                <div className="relative bg-white rounded-[12px] h-[547px] w-[405px] p-2">
                  <Image
                    src={game_placeholder}
                    alt="create account illustration"
                    placeholder="blur"
                    fetchPriority="high"
                    priority
                    // height={100}
                    className="rounded-lg mx-auto block pt-[22px]"
                    draggable="false"
                  />
                  <div className={`absolute z-20 right-2 top-[230px]`}>
                    <GamePad />
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`font-blogh mt-3  text-[40px] text-[#7A71FE] font-normal leading-[32px] -tracking-[0.801px]`}
                    >
                      Call Of Duty
                    </h3>
                    <p className="mt-[21px] text-sm leading-[26px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      {"'"}s standard dummy text ever since the 1500s
                    </p>
                  </div>

                  <div className="ml-4 mt-[28px] flex items-center gap-4 mt-[16px]">
                    <PurpleFireIcon />
                    <p className="font-semibold text-[13.7px] text-[#000000CC] ">
                      +40,321 people are playing this game
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-[300px]">
                <div className="relative bg-white rounded-[12px] h-[547px] w-[405px] p-2">
                  <Image
                    src={game_placeholder}
                    alt="create account illustration"
                    placeholder="blur"
                    fetchPriority="high"
                    priority
                    // height={100}
                    className="rounded-lg mx-auto block pt-[22px]"
                    draggable="false"
                  />
                  <div className={`absolute z-20 right-2 top-[230px]`}>
                    <GamePad />
                  </div>
                  <div className="ml-4 divide-y-2">
                    <h3
                      className={`font-blogh mt-3  text-[40px] text-[#7A71FE] font-normal leading-[32px] -tracking-[0.801px]`}
                    >
                      GTA VI:
                    </h3>
                    <p className="mt-[21px] text-sm leading-[26px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      {"'"}s standard dummy text ever since the 1500s
                    </p>
                  </div>

                  <div className="ml-4 mt-[28px] flex items-center gap-4 mt-[16px]">
                    <PurpleFireIcon />
                    <p className="font-semibold text-[13.7px] text-[#000000CC] ">
                      +40,321 people are playing this game
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-[300px]">
                <div className="relative bg-white rounded-[12px] h-[547px] w-[405px] p-2">
                  <Image
                    src={game_placeholder}
                    alt="create account illustration"
                    placeholder="blur"
                    fetchPriority="high"
                    priority
                    // height={100}
                    className="rounded-lg mx-auto block pt-[22px]"
                    draggable="false"
                  />
                  <div className={`absolute z-20 right-2 top-[230px]`}>
                    <GamePad />
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`font-blogh mt-3  text-[40px] text-[#7A71FE] font-normal leading-[32px] -tracking-[0.801px]`}
                    >
                      PUBG Mobile
                    </h3>
                    <p className="mt-[21px] text-sm leading-[26px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      {"'"}s standard dummy text ever since the 1500s
                    </p>
                  </div>

                  <div className="ml-4 mt-[28px] flex items-center gap-4 mt-[16px]">
                    <PurpleFireIcon />
                    <p className="font-semibold text-[13.7px] text-[#000000CC] ">
                      +40,321 people are playing this game
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
