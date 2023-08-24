import { BellAlertIcon } from "@heroicons/react/20/solid";
import React from "react";
import { H1 } from "./../../../utils/typography";
import DashBoardNav from './Nav';

export default function Header() {
  return (
    <header className="h-16 border-b-2 flex items-center relative p-4">
      <h1 className="capitalize flex-1 text-center md:text-left h-fit text-3xl font-extrabold ">
        Dashboard
      </h1>
      <div className="hidden md:block flex-1">
        <DashBoardNav/>
      </div>
      <BellAlertIcon
        width={35}
        height={35}
        className="self-center ml-auto fill-brand-purple active:scale-95"
      />
    </header>                   
  );
}
