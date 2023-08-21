import getBtnColor from "./getBtnColor";

export default function IconButton({
  children,
  className,
  color,
  onClick,
}: ButtonProps) {
 
  return (
    <button onClick={()=>onClick()} className={`${getBtnColor(color)} text-white p-1 ${className}`}>
      {children}
    </button>
  );
}
