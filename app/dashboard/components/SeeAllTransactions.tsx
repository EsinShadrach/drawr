"use client"

import { TextButton } from '@/utils/buttons';
import React from 'react'

export default function SeeAllTransactions() {
  return (
    <div className="flex justify-between w-full py-6">
      <p className="font-bold">Transaction history</p>
      <TextButton
        onClick={() => {}}
        className="relative text-brand-purple h-fit after:absolute after:w-full after:bg-brand-purple after:h-[2px] after:rounded-full after:inset-0 after:top-[90%]"
      >
        See all
      </TextButton>
    </div>
  );
}