import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  myColor: "green" | "red";
};

export const TransparentBtn = ({ children, myColor }: Props) => {
  return (
    <span
      className={
        (myColor === "green"
          ? "bg-green-300/20 text-green-600"
          : "bg-red-300/20 text-red-600") + " rounded-sm w-full"
      }
      style={{ padding: "1px 6px" }}
    >
      {children}
    </span>
  );
};
