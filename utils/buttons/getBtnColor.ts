export default function getBtnColor(color: ButtonProps["color"]): string {
  switch (color) {
    case "purple":
      return "bg-brand-purple";
    case "lemon":
      return "bg-brand-lemon";
    case "black":
      return "bg-black";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-brand-purple";
  }
}
