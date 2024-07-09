import React from "react";

type Props = {
  children: React.ReactNode;
};

const ShareViewLayout = ({ children }: Props) => {
  return <main className="w-full flex justify-center">{children}</main>;
};

export default ShareViewLayout;
