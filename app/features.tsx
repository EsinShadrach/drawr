import { H1, H2, P } from "@/utils/typography";
import bluryFace from "./images/bluryface.png";
import createAcc from "./images/account.png";
import raffle from "./images/raffle.png";
import ticket from "./images/ticket.png";
import React from "react";
import Image from "next/image";

export function Features() {
  return (
    <section className="mt-[176px]">
      <div className="relative bg-red-400s">
        <div className="absolute -top-[100px] right-0">
          <Image
            src={bluryFace}
            alt="emoji face"
            width={236}
            height={295}
            priority
          />
        </div>
        <div className="text-[#000] font-aeonik text-center">
          <H1
            className={`max-w-lg mx-auto block font-bold text-[52px] leading-[56px] tracking-[0.71px]`}
          >
            Easy-as-abc steps to create a banger raffle event
          </H1>
          <P
            className={`text-[28px] font-light leading-[49px] tracking-[0.63px]`}
          >
            Easy-as-abc steps to create a banger raffle event
          </P>
        </div>
      </div>
      {/* cards */}
      <div className="mt-[142px] mx-[67px] flex flex-row flex-wrap justify-between space-x-[14px]">
        <div
          className={`flex flex-col items-center bg-black text-white rounded-[20px] py-[80px] px-[37px] `}
        >
          <Image
            src={createAcc}
            alt="create account illustration"
            placeholder="blur"
            fetchPriority="high"
            priority
            // height={100}
            className="rounded-lg"
            draggable="false"
          />
          <H2 className={`text-[26px] text-center font-bold font-aeonik`}>
            {" "}
            Create an account{" "}
          </H2>

          <P className="text-[15px] text-center font-normal max-w-[369px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s,
          </P>
        </div>
        <div
          className={`flex flex-col items-center bg-black text-white rounded-[20px] py-[80px] px-[37px] `}
        >
          <Image
            src={raffle}
            alt="create raffle event"
            placeholder="blur"
            fetchPriority="high"
            priority
            // height={100}
            className="rounded-lg"
            draggable="false"
          />
          <H2 className={`text-[26px] text-center font-bold font-aeonik`}>
            {" "}
            Create an account{" "}
          </H2>

          <P className="text-[15px] text-center font-normal max-w-[369px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s,
          </P>
        </div>
        <div
          className={`flex flex-col items-center bg-black text-white rounded-[20px] py-[80px] px-[37px] `}
        >
          <Image
            src={ticket}
            alt="ticket illustration"
            placeholder="blur"
            fetchPriority="high"
            priority
            // height={500}
            className="rounded-lg"
            draggable="false"
          />
          <H2 className={`text-[26px] text-center font-bold font-aeonik`}>
            {" "}
            Create an account{" "}
          </H2>

          <P className="text-[15px] text-center font-normal max-w-[369px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s,
          </P>
        </div>
      </div>
    </section>
  );
}
