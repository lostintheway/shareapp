import React from "react";

type Props = {
  children: React.ReactNode;
};

const ShareViewLayout = ({ children }: Props) => {
  return (
    <main className="w-full flex justify-center mt-[-30px]">
      <div className="bg-slate-950 " style={{ width: "min(750px, 100vw)" }}>
        {children}
      </div>
    </main>
  );
};

export default ShareViewLayout;
