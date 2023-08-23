import { IconButton } from "@/utils/buttons";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

type Props = {}

export default function RecordMiniCard() {
  return (
    <div className="text-white bg-black rounded-3xl p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
<p>tickets sold</p>
<small>{"oct 16/21"} - {"Nov 16/21"}</small>
        </div>
        <IconButton onClick={()=>{}} className="fill-brand-purple" >
            <EllipsisHorizontalIcon/>
        </IconButton>
      </div>
      <p className="font-bold text-lg" >{"2,456"}</p>
      <button className="text-brand-purple bg-brand-lemon rounded-full px-4 py-2 self-end">{"+15.9%"}</button>
    </div>
  );
}