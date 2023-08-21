import getBtnColor from "./getBtnColor";


export default function FilledButton({children, className, color, onClick}:ButtonProps) {
 

  return <button className={`${getBtnColor(color) } text-white px-3 py-2 rounded-md ${className}`}>{children}</button>;

}
