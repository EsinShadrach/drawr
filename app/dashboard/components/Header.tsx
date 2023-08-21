import { BellAlertIcon } from "@heroicons/react/20/solid";
import React from "react";
import { H1 } from "./../../../utils/typography";

export default function Header() {
  return (
    <header className="h-16 border-b-2 flex items-center w-screen relative">
      
      <H1 className="capitalize flex-1 text-center h-fit mb-0">Dashboard</H1>
      <BellAlertIcon width={35} height={35} className="absolute right-3 self-center ml-auto fill-brand-purple active:scale-95" />
    </header>
  );
}
