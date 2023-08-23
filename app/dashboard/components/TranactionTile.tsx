import { ArrowUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function TranactionTile() {
  return (
    <div className="flex items-center">
      <div>
        <ArrowUpIcon />
      </div>
      <div>
        <p className="capitalize font-bold">{"debit"}</p>
        <small className="block capitalize">{"spagfest raffle event"}</small>
      </div>
      <div>
        <p className="capitalize font-bold text-red-700">
          {"-"}N{"423.43"}
        </p>
        <small className="block capitalize">
            {/* use date formatter  */}
          {"10 Oct 21"}, {"5:30am"}
        </small>
      </div>
    </div>
  );
}
