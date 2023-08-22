import { H1, H3, P } from "@/utils/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Checkout",
  description: "...",
};

import React from "react";

export default function CheckOut() {
  return (
    <section>
      <div>
        <div className="bg-white w-full h-[48px] shadow-[0px_2px_5px_0px_rgba(0, 0, 0, 0.25]"></div>

        <div>
          <p
            className={`text-base mt-[34px] text-right mr-5 font-extrabold font-aeonik text-[#8C8C8C] leading-[13.5px] tracking-[0.213px]`}
          >
            close
          </p>
        </div>

        <div>
          <H3
            className={`text-[18.36px] mt-[34px] text-left mr-5 font-extrabold font-aeonik text-[#7A71FE] ml-3`}
          >
            Ticket Plans
          </H3>
        </div>

        <div className="bg-[#7A71FE]/20"></div>
      </div>
    </section>
  );
}
