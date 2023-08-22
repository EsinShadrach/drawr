import { H1 } from "@/utils/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | User",
  description: "...",
};

export default function User() {
  return (
    <section>
      <div className="overflow-hidden bg-white flex flex-col gap-3 w-full items-start">
        <div className="self-stretch relative flex flex-col mb-20 pb-[306px]">
          <div className="h-[177px] overflow-hidden bg-[#7a71fe] w-full absolute top-3 left-0" />
          <div className="flex flex-col items-center justify-center">
            <div className="w-[394px] h-64 overflow-hidden bg-black absolute top-[120px] l pt-[109px] pb-32 px-5 rounded-[36px]">
              <div className="w-[298px] h-64 bg-[url(https://file.rendit.io/n/iQC7prgj2tZflsblDO5j.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-24 flex flex-col justify-end items-end pr-10 py-8">
                <div className="bg-[#7a71fe] flex flex-col w-24 h-8 shrink-0 items-center py-2 rounded-lg">
                  <div className="text-base font-aeonik font-bold tracking-[0.21] leading-[13.2px] capitalize text-white">
                    Join Now
                  </div>
                </div>
              </div>
              <div className="text-4xl font-blogh tracking-[0.46] leading-[34.1px] capitalize text-white absolute top-10 left-5 h-16 w-3/5">
                Spagfest Raffle event
              </div>
              <div className="text-xs tracking-[0.14] leading-[10.1px] capitalize text-white relative">
                Hosted by Olawale Spagfest
              </div>
            </div>
          </div>
          <div className="shadow-[0px_2px_5px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white relative flex flex-col gap-6 pb-2 px-4">
            <div className="flex flex-row gap-20 items-start ml-3 mr-2">
              <div className="flex flex-row mb-1 gap-8 w-64 items-start"></div>
            </div>
            <div className="flex flex-col ml-5 gap-3">
              <div className="flex flex-row justify-between ml-[107px] items-start">
                <div className="text-2xl font-aeonik font-bold tracking-[0.36] leading-[23.1px] capitalize">
                  Dashboard
                </div>
                <img
                  src="https://file.rendit.io/n/kpfvFiyGEA60pdLO68Kn.svg"
                  className="w-6 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-3/5 items-center mb-3 ml-10">
          <img
            src="https://file.rendit.io/n/DUoEvSAyZTAToLTVA0kK.svg"
            className="self-start w-6 shrink-0"
          />
          <div className="text-base font-aeonik font-bold">
            Thursday, August 24, 2023
          </div>
        </div>
        <div className="flex flex-row gap-6 w-1/2 items-start mb-12 ml-10">
          <img
            src="https://file.rendit.io/n/tuahOEmEOwF2cq5L4KDw.svg"
            className="mb-0 w-5 shrink-0"
          />
          <div className="text-base font-aeonik font-bold mt-px">
            10:00 AM
            {"  "}-{"  "}
            12:30 PM
          </div>
        </div>
        <div className="text-lg font-aeonik font-bold text-[#7a71fe] ml-4">
          About
        </div>
        <div className="self-stretch relative flex flex-col justify-end pt-32">
          <div className="text-sm font-medium leading-[27.1px] absolute top-0 left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="text-sm font-medium leading-[27.1px] absolute top-[148px] left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="text-sm font-medium leading-[27.1px] absolute top-20 left-4 h-[108px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="shadow-[4px_0px_9px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white relative flex flex-col justify-center h-32 shrink-0 items-center">
            <div className="bg-[#7a71fe] flex flex-col justify-center w-2/5 h-12 shrink-0 items-center rounded-lg">
              <div className="text-2xl font-aeonik font-bold tracking-[0.35] leading-[22.2px] capitalize text-white">
                Buy Tickets
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
