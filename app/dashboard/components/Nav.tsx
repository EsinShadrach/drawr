"use client"
import NavLink from "@/utils/NavLink";

export default function DashBoardNav({ section }: DashBoardNavProps) {
  const navLinks: { href: string; text: string }[] = [
    { href: "record", text: "record" },
    { href: "events", text: "events" },
    { href: "ranks", text: "ranks" },
    { href: "wallet", text: "wallet" },
  ];

  return (
    <div className="flex items-center justify-around h-10 px-4">
      {navLinks.map(({ href, text }) => (
        <div key={href}>
          <NavLink href={`/dashboard/${href}`}>
            {({ isActive }) => (
              <div
                className={`px-3 py-[2px] rounded-full ${
                  isActive ? "bg-brand-purple text-white" : ""
                } text-brand-purple  border-2 border-brand-purple`}
              >
                {text}
              </div>
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
}


//{()=><P>{text}</P>}
