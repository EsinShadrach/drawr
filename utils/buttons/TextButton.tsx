"use client"

import getBtnColor from "./getBtnColor";

export default function TextButton({children, className, onClick}:ButtonProps) {
 
  // use !(important) flag when overriding already set classes with custom ones 
  return <button onClick={()=>onClick()} className={`text-black rounded-lg !bg-transparent ${className}`}>{children}</button>;

}
