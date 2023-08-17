import React from "react";
import { ChampCup } from "./icons";

export function Awards() {
  return (
    <section
      className={`mt-[115px] bg-black relative w-full h-[554px]`}
      style={{ padding: "130px 142px 120px 741px" }}
    >
      <div className="flex justify-between">
        <div className="absolute left-[56px] top-[300px] bg-[#E3F746] w-[600px] h-[366px] rounded-[16px]"></div>
        <div className={`flex flex-col justify-start items-stat gap-2`}>
          <ChampCup />
          <h3 className={`text-[44.44px] font-bold font-aeonik text-white`}>
            Easily Draw & Display Winners
          </h3>
          <p className="text-sm leading-[26.25px ] font-normal text-white max-w-[537px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s
          </p>
          <button
            className={`max-w-[252px] px-[35px] py-[20px] rounded-lg text-base font-bold font-aeonik text-white bg-[#7A71FE]`}
          >
            how to draw winners
          </button>
        </div>
      </div>
    </section>
  );
}
