"use client"

import getBtnColor from "./getBtnColor";

export default function FilledButton({children, className, color, onClick}:ButtonProps) {
 
  // use !(important) flag when overriding already set classes with custom ones 
  return <button onClick={()=>onClick()} className={`${getBtnColor(color) } text-white px-4 py-1 rounded-lg hover:scale-110 active:scale-90 transition-all duration-200 ${className}`}>{children}</button>;

}
