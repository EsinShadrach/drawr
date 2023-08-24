"use client"

import NavLink from '@/utils/NavLink';
import React from 'react'

type Props = {}

export default function EventsNav({}: Props) {
  return (
    <div className="flex flex-[1]_ flex-auto min-w-0 p-4 items-center gap-4 justify-around w-full_ sm:w-auto text-center mx-auto mb-6 whitespace-nowrap">
      <NavLink href="ongoing" className="">
        {({ isActive }) => (
          <div
            className={`capitalize flex-[1] w-full relative h-5 ${
              isActive
                ? "text-black after:absolute after:w-full after:bg-brand-purple after:h-1 after:rounded-full after:inset-0 after:top-[140%]"
                : "text-gray-600"
            }`}
          >
            ongoing events
          </div>
        )}
      </NavLink>
      <NavLink href="completed">
        {({ isActive }) => (
          <div
            className={`capitalize flex-[1] w-full relative h-5 ${
              isActive
                ? "text-black after:absolute after:w-full after:bg-brand-purple after:h-1 after:rounded-full after:inset-0 after:top-[140%]"
                : "text-gray-600"
            }`}
          >
            completed
          </div>
        )}
      </NavLink>
    </div>
  );
}

/*
  
 */