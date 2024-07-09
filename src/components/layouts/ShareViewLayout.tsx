import React from "react";

type Props = {
  children: React.ReactNode;
};

const ShareViewLayout = ({ children }: Props) => {
  return (
    <main className="w-full flex justify-center ">
      <div className="bg-slate-950 " style={{ width: "min(750px, 100vw)" }}>
        {children}
      </div>
    </main>
  );
};

export default ShareViewLayout;
