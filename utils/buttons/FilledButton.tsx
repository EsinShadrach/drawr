import getBtnColor from "./getBtnColor";


export default function FilledButton({children, className, color, onClick}:ButtonProps) {
 

  return <button className={`${getBtnColor(color) } text-white px-4 py-1 rounded-md ${className}`}>{children}</button>;

}
