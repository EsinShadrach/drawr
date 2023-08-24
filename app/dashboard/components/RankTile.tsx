import { UserIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function RankTile({rank, name}:{rank:number,name:string}) {
  return (
    <div className="bg-brand-purple p-3 flex items-center gap-2 text-white rounded-lg rank-tile-shadow">
        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
        {/* A user image should be used, but for now, we'll use an Icon */}
            <UserIcon className='w-8 h-8 fill-brand-purple'/>
        </div>
        <p className="font-extrabold">#{rank}</p>
        <p className="font-bold">{name}</p>
    </div>
  )
}
