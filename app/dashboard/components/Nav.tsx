import NavLink from "./../../../utils/NavLink";
import { P } from "@/utils/typography";
import Link from "next/link";

export default function DashBoardNav({ section }: DashBoardNavProps) {
  const navLinks: { href: string; text: string }[] = [
    { href: "events", text: "events" },
    { href: "ranks", text: "ranks" },
    { href: "record", text: "record" },
    { href: "wallet", text: "wallet" },
  ];

  return (
    <>
      <div className="flex items-center justify-around h-10 px-4">
        {navLinks.map(({ href, text }) => (
          <div
            key={href}
            className="px-3 py-1 rounded-full text-brand-purple border-2 border-brand-purple"
          >
            <Link href={`/dashboard/${href}`}>{text}</Link>
          </div>
        ))}
      </div>
      </>
  );
}

//{()=><P>{text}</P>}
