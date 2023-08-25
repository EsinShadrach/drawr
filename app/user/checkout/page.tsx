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
      <div className="bg-white w-full h-[48px] shadow-[0px_2px_5px_0px_rgba(0, 0, 0, 0.25]">
        <div className="h-[430px] p-3 w-full bg-[#7A71FE]/50 bg-[url(https://res.cloudinary.com/dkoe20rzl/image/upload/v1692923852/Image_1_tax86k.png)] bg-cover bg-[50%_50%] bg-blend-normal bg-no-repeat ">
          <div>
            <p
              className={`text-base mt-[34px] text-right mr-5 font-abold font-aeonik text-[#fff] leading-[13.5px] tracking-[0.213px]`}
            >
              close
            </p>
          </div>

          <div className="">
            <H3
              className={`text-[35.9px] mt-[170px] font-bold text-left font-aeonik text-[#7A71FE] ml-3`}
            >
              Ticket Plans
            </H3>
          </div>
        </div>

        <div className="bg-[#7A71FE]/20"></div>
      </div>

      <div>
        <div>
          <h2 className="font-aeonik font-bold leading-[17.09px] capitalize tracking-[0.269px] text-black ">
            Spagfest Raffle Event
          </h2>
        </div>
      </div>
    </section>
  );
}
