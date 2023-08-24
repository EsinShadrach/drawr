import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function TransactionTile() {
  return (
    <div className="flex items-center">
      <div className='w-12 h-12 rounded-full text-brand-purple bg-brand-purple/20 flex items-center justify-center'>
        <ArrowDownIcon className='w-6 h-6' />
      </div>
      <div className="ml-3">
        <p className="font-bold capitalize">{"credit"}</p>
        <small className="block capitalize text-xs text-gray-500">
          {"spagfest raffle event"}
        </small>
      </div>
      <div className="ml-auto text-end">
        <p className="font-bold text-sm text-red-600 capitalize">
          {"-"}N{"423.43"}
        </p>
        <small className="block capitalize text-xs text-gray-500">
          {/* use date formatter  */}
          {"10 Oct 21"}, {"5:30am"}
        </small>
      </div>
    </div>
  );
}
