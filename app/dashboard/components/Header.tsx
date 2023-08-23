import { BellAlertIcon } from "@heroicons/react/20/solid";
import React from "react";
import { H1 } from "./../../../utils/typography";

export default function Header() {
  return (
    <header className="h-16 border-b-2 flex items-center w-screen relative px-4">
      <h1 className="capitalize flex-1 text-center sm:text-left h-fitsm:text-4xl text-3xl font-extrabold ">
        Dashboard
      </h1>
      <BellAlertIcon
        width={35}
        height={35}
        className="absolute right-3 sm:right-6 self-center ml-auto fill-brand-purple active:scale-95"
      />
    </header>
  );
}
