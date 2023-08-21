import { P, H3 } from "@/utils/typography";
import Image from "next/image";
import { FilledButton } from "@/utils/buttons";

export default function EventCard() {
  return (
    <div className="bg-brand-purple relative rounded-xl w-full mx-auto h-56 px-4 py-4 flex flex-col justify-between text-white">
      <div className="z-20 w-full h-full">
      <div className="max-w-48">
        <H3 className="capitalize mb-0 text-4xl text-white font-blogh font-semibold ">
          {"spagfest raffle event"}
        </H3>
        <P>Hosted By {"Olawale Spagfest"}</P>
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

      <Image
        src="/images/person.png"
        alt=""
        height={100}
        width={100}
        className="absolute bottom-0 right-[25%] object-contain z-10"
      />
    </div>
  );
}
