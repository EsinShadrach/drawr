import happyGirl from "@/public/images/happy-girl.png";
import { P } from "@/utils/typography";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="bg-brand-purple">
      <section className="mx-auto text-white relative container">
        <div className="flex items-center lg:flex-row flex-col p-2 lg:py-10 pb-0">
          <div className="lg:max-w-2xl relative top-28 lg:top-1/2">
            <h1 className="sm:text-7xl font-aeonik font-medium text-5xl">
              Engaging communities through{" "}
              <span className="uppercase font-blogh relative w-full lg:w-fit max-lg:hidden">
                raffles
                <small className="absolute rounded-full bg-[#D1C9C933] [backdrop-filter:blur(8px)] box-border overflow-hidden [transform:_rotate(-19.95deg)] [transform-origin:0_0] opacity-[0.8] text-left text-[0.98rem] font-poppins border-[2px] border-solid border-white text-[#424242] font-normal py-3 font-aeonik text-xs px-6 lg:-right-[40%] w-fit whitespace-nowrap">
                  Create a raffle event
                </small>
              </span>
              <div className="uppercase font-blogh relative w-full lg:hidden mt-2 md:w-fit">
                <div className="relative">
                  raffles
                  <small className="absolute rounded-full bg-[#D1C9C933] [backdrop-filter:blur(8px)] box-border overflow-hidden [transform:_rotate(-19.95deg)] [transform-origin:0_0] opacity-[0.8] text-left text-[0.98rem] font-poppins border-[2px] border-solid border-white text-[#424242] font-normal py-3 font-aeonik text-xs px-6 lg:-right-[40%] w-fit whitespace-nowrap max-sm:right-10 lowercase">
                    Create a raffle event
                  </small>
                </div>
              </div>
            </h1>
            <P className="lowercase first-letter:uppercase mt-4 max-w-lg">
              RUNNING A RAFFLE EVENT OR AN ONLINE GAMING EVENT SHOULDN&apos;T BE
              A LOGISTICAL NIGHTMARE. WITH DRAWR, WE CAN HELP YOU TAKE CONTROL
              OF YOUR GAMING EVENT FOR COMMUNITY AND CUSTOMERS
            </P>
          </div>
          <div className="translate-y-1/2 lg:translate-y-0">
            <Image
              src={happyGirl}
              alt="Happy Girl Making a self portrait"
              placeholder="blur"
              fetchPriority="high"
              priority
              height={500}
              className="bg-brand-lemon rounded-lg"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
