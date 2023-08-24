import getBtnColor from "./getBtnColor";

export default function IconButton({
  children,
  className,
  color,
  onClick,
}: ButtonProps) {
 
  return (
    <button
      onClick={() => onClick()}
      className={`${getBtnColor(
        color
      )} text-white p-1 rounded-full hover:bg-white/20 hover:scale-110 active:scale-90 active:bg-transparent transition-all duration-100 ${className}`}
    >
      {children}
    </button>
  );
}
