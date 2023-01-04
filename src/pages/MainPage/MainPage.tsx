import React, { useState } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <AddShare isOpen={true} onClose={() => {}} />
    </div>
  );
};

export default MainPage;
