"use client"

import { FilledButton } from "@/utils/buttons";

export default function WalletCardBtns() {
  return (
    <div className="flex items-center justify-between w-full mt-auto">
      <FilledButton onClick={() => {}} color="black" className="!rounded-full font-bold">
        Top-Up
      </FilledButton>
      <FilledButton onClick={() => {}} color="black" className="!rounded-full font-bold">
        Withdraw
      </FilledButton>
    </div>
  );
}
