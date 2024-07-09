import ShareViewLayout from "@/components/layouts/ShareViewLayout";
import ShareTable from "@/components/main/ShareTable";
import React from "react";

type Props = {};

const Alphabetical = (props: Props) => {
  return (
    <ShareViewLayout>
      <ShareTable />
    </ShareViewLayout>
  );
};

export default Alphabetical;
