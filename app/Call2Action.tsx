import { H3, P } from "@/utils/typography";
import React from "react";

export function Call2Action() {
  return (
    <section className={`mt-[100px] mx-[156px]`}>
      <div className="bg-[#1C140F] rounded-[15px] px-[56px] py-[40px]">
        <div className="flex items-start justify-between">
          <div>
            <H3
              className={`text-white font-aeonik text-[32px] leading-normal font-bold `}
            >
              Stay in the loop
            </H3>
            <P
              className={`text-white font-normal text-[17px] leading-normal mt-[18px] max-w-[636px]`}
            >
              Subscribe to receive the latest news and updates about Drawr. We
              promise not to spam you!
            </P>
          </div>
          <form>
            <div className="relative">
              <div className="">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="text-[#898989] w-[385px] text-[15px] bg-white rounded-lg font-light font-aeonik px-[23px] py-[16px]"
                  autoComplete="off"
                />
              </div>
              <div className="absolute top-2 bottom-2 right-2">
                <button
                  className={`bg-[#7A71FE]  px-[18px] rounded-lg py-[9px] text-white font-semibold text-[13px] leading-normal`}
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
